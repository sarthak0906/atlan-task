import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import axios from 'axios';

const App = (props) => {
  const [file, setFile] = React.useState(null);
  const [timer, setTimer] = React.useState(0);
  const [top, setTop] = React.useState(0);
  const [fileOut, setFileOut] = React.useState(0);
  const [uint8View, setuint8View] = React.useState(0);
  const [pause, setPause] = React.useState(false);
  const [inputKey, setinputKey] = React.useState(Math.random());
  let reader = new FileReader();

  React.useEffect(() => {
    console.log(file);
    if (!!file){
      reader.readAsArrayBuffer(file);
      reader.onload = function() {
        let a1 = reader.result;
        setFileOut(reader.result);
        setuint8View(new Uint8Array(reader.result));
      }
    }
  }, [file]);


  React.useEffect(() => {
    const interval = setInterval( async () => {
      setTimer(timer + 1);
      let up = -1;
      if (!!!!file){
        up = Math.min(top+900, uint8View.length);
      }
      console.log(up);
      if (top < up && !pause){
        axios.post('/pauseable', {
          name: file.name,
          start : top,
          file: uint8View.subarray(top, up),
        })
        .then(r => {
          console.log(r);
          setTop(up);
        })
        .catch(e => console.log(e));
        console.log({
          name: file.name,
          start : top,
          file: (uint8View.subarray(top, up)),
        });
      }
      else if (top == up){
        alert("file upload complete");
        setFile(null);
        setTop(0);
        setFileOut(null);
        setuint8View(null);
        setinputKey(Math.random())
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [top, timer, file]);

  const fileChange = (event) => {
    setFile(event.target.files[0])
  }

  const PauseClick = () => {
    setPause(!pause);
  }

  const CancelUpload = () => {
    axios.get('/cancel/' + file.name)
    .then(() => {
      alert("file upload canceled");
      setFile(null);
      setTop(0);
      setFileOut(null);
      setuint8View(null);
      setinputKey(Math.random())
    })
    .catch((e) => {
      console.log(e)
    })
  }

  React.useEffect(() => {
    console.log(pause);
  }, [pause]);

  return (
    <div>
      <Hello name={"Atlan"} />
      <p>
        Select a file to see the magic ;)
      </p>
      <input type="file" onChange={fileChange} key={inputKey} />
      {
        (!!file) ? <div>
          <button name="pause"  onClick={PauseClick} > {(pause) ? "Resume" : "Pause"} </button>
          <button onClick={CancelUpload}> Cancel </button>
        </div> : ""
      }
    </div>
  );
}

render(<App />, document.getElementById('root'));
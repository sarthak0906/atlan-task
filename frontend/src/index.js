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
      let up = Math.min(top+900, uint8View.length);
      if (top < up && !pause){
        axios.post('http://localhost:8000/pauseable', {
          name: file.name,
          start : top,
          file: uint8View.subarray(top, up),
        })
        .then(r => {
          console.log(r);
          console.log(uint8View.length)
          setTop(up);
        })
        .catch(e => console.log(e));
        console.log({
          name: file.name,
          start : top,
          file: uint8View.subarray(top, up),
        });
        // fetch('http://localhost:8000/pauseable', {
        //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //   mode: 'no-cors', // no-cors, *cors, same-origin
        //   data: JSON.stringify({
        //     name: file.name,
        //     start : top,
        //     file: uint8View.subarray(top, up),
        //   })
        // })
        // .then(
        //   (result) => {
        //     console.log(result);
        //     setTop(up);
        //   },
        //   // Note: it's important to handle errors here
        //   // instead of a catch() block so that we don't swallow
        //   // exceptions from actual bugs in components.
        //   (error) => {
        //     console.log(error);
        //   }
        // )
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [top, file]);

  const fileChange = (event) => {
    setFile(event.target.files[0])
  }

  return (
    <div>
      <Hello name={"this.state.name"} />
      <p>
        Start editing to see some magic happen :)
      </p>
      <input type="file" onChange={fileChange} />
      {
        (!!file) ? <button value="pause" /> : ""
      }
    </div>
  );
}

render(<App />, document.getElementById('root'));
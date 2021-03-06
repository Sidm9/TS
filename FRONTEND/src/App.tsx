import React, { useEffect, useState } from 'react';
import './App.scss';
import API from './API/API';
import axios from 'axios';

function App() {

  interface PropsTask {
    task: string[],
    timestamp: number
  }



  const [taskInput, setTaskInput] = useState<any>("");
  const [taskList, setTaskList] = useState<PropsTask[]>(
    []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskInput(e.target.value);
  }

  useEffect(() => {

    const getAPI = async () => {
      const obj = new API();
      const y = await obj.getData();
      try {
        const y = await axios.get('http://localhost:3000/');
        console.log(y.data);
      } catch (error) {
        console.log("THIS" ,error);
      }

    }

    getAPI();
  }, []);


  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if ((taskInput.trim().length) !== 0) {
      setTaskList((t: any) =>
        [...t, { "task": taskInput, "timestamp": Date.now() }]);
    }
    setTaskInput("");
    console.log(taskList);
  }

  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <div className="main">
      <div className="circle" />
      <div className="two circle" />
      <div className="triangle" />

      <div className="glass_container">

        <h1>
          Todo List
        </h1>


        <form className="inputs">

          <input onKeyPress={handleKeypress} placeholder="So What's On Your Mind?" value={taskInput} onChange={handleChange}></input>
          <button onClick={handleSubmit}><p>+</p></button>

        </form>

        <h2>{taskList.length}</h2>

        <div className="list_container">
          <p>{taskList.map((i, key) => (
            <div className="list">
              <li key={key}>
                {i.task}
              </li>
              <button>X</button>
            </div>
          ))}
          </p>
        </div>
      </div>

    </div>
  );
}
export default App;
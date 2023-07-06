import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import React from "react";

import { CheckBox } from "./CheckBox/CheckBox";

export const Task: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [task, setTask] = useState('');
  const [manyTasks, setManyTask] = useState<{
    _id: string,
    task: string,
    isComplited: boolean;
  }[]>([]);

  const checkBoxChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setIsChecked(event.target.checked);
    console.log(event.target.checked);
    setTask(manyTasks[index].task);
    console.log(manyTasks[index]._id);
    console.log(index);
  };

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/getall');
    const data = await response.json();
    setManyTask(data);
    console.log(data);
  };

  const handleSubmit = async () => {
    fetch('http://localhost:5000/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ task })
    });
    setTimeout(() => {
      fetchTasks();
    }, 50);
  };

  const handleDelete = async () => {
    fetch('http://localhost:5000/task', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ task })
    });
    setTimeout(() => {
      fetchTasks();
    }, 50);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <input type="text" className="m-3" onChange={handleChange} value={task} />
      <button onClick={handleSubmit}>Отправить</button>
      <button onClick={handleDelete} className="mx-3">Удалить</button>
      <button onClick={fetchTasks}>Получить</button>
      <div className="grid items-centergrid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 text-white w-full m-3 p-4">
        {manyTasks.map((task, index) => (
          <React.Fragment key={task._id}>
            <div className="bg-black p-2 h-20 text-center"><CheckBox onChange={() => checkBoxChange(event, index)}>{task.task} - {index}</CheckBox></div>
          </React.Fragment>
        ))
        }
      </div>
    </>
  );
};
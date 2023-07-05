import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import React from "react";

import { CheckBox } from "./CheckBox/CheckBox";




// const CheckBox = ({ children, className, ...props }: Props) => {
//   return (
//     <input></input>
//   );
// };

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
      <button onClick={handleSubmit} className="mr-3">Отправить</button>
      <button onClick={handleDelete}>Удалить</button>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 text-white text-center w-1/2 m-3 p-4 
    content-between justify-between">
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

// <div>
//   <input value={task} onChange={handleChange} />
//   <button onClick={handleSubmit}>Отправить</button>
//   <button onClick={handleDelete}>Удалить</button>
//   {manyTasks.map((tas, index) => {
//     return (
//       <>
//         <div key={tas._id}>
//           <h1>{tas.task}</h1>
//           <h2 key={index}></h2>
//         </div>
//       </>
//     );
//   })}
// </div>
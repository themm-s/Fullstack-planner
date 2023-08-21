import { motion } from "framer-motion";
import { useRerender } from "hooks/useRerender";
import { ChangeEvent, useEffect, useState } from "react";
import React from "react";

import { CheckBox } from "./CheckBox/CheckBox";


export const Task: React.FC = () => {
  const [task, setTask] = useState('');
  const [id, setId] = useState<string>('');
  const [manyTasks, setManyTask] = useState<{
    _id: string,
    task: string,
    isComplited: boolean;
  }[]>([]);

  const getAllTasks = async () => {
    const response = await fetch('http://localhost:5000/getall');
    const data = await response.json();
    setManyTask(data);
  };

  const submitTask = async () => {
    fetch('http://localhost:5000/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ task })
    });
    setTimeout(() => {
      getAllTasks();
      setTask('');
    }, 50);
  };

  const deleteTask = async () => {
    fetch('http://localhost:5000/deletetask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
    setTimeout(() => {
      getAllTasks();
      setTask('');
    }, 50);
  };

  const changeId = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  useEffect(() => {
    getAllTasks();
  }, [manyTasks.length]);

  return (
    <>
      <div className="grid gap-4 sm:flex justify-center text-white bg-cyan-300 bg-opacity-50 w-full md:w-[75%] rounded-xl mt-5 p-3 mx-auto">
        <input type="text" className="m-3 text-black" onChange={changeInput} value={task} />
        <button onClick={submitTask}>Добавить</button>
        <button onClick={deleteTask} className="">Сделано</button>
        <button onClick={getAllTasks}>Получить список</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 text-white w-full p-4">
        {manyTasks.map((task, index) => (
          <React.Fragment key={task._id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <div className="bg-indigo-800 bg-opacity-50 rounded-xl p-2 h-20 flex items-center justify-center">
                <CheckBox className="mx-1" value={task._id} onChange={changeId} />
                {task.task}
              </div>
            </motion.div>
          </React.Fragment>
        ))
        }
      </div>
    </>
  );
};
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";

export const Task: React.FC = () => {
  const [task, setTask] = useState('');
  const [manyTasks, setManyTask] = useState<{
    _id: string,
    task: string,
    isComplited: boolean;
  }[]>([]);

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
    <div>
      <input value={task} onChange={handleChange} />
      <button onClick={handleSubmit}>Отправить</button>
      <button onClick={handleDelete}>Удалить</button>
      {manyTasks.map((tas, index) => {
        return (
          <>
            <div key={tas._id}>
              <h1>{tas.task}</h1>
              <h2 key={index}></h2>
            </div>
          </>
        );
      })}
    </div>
  );
};
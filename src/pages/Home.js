import React, { useState, useEffect, useRef, useCallback } from 'react';
import Todo from '../components/Todo';
import Add from '../components/Add';

function Home() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('todoList'))
      ? JSON.parse(localStorage.getItem('todoList'))
      : []
  );
  const [id, setId] = useState(0);
  const isMount = useRef(true);

  useEffect(() => {
    if (!isMount.current) {
      localStorage.setItem('todoList', JSON.stringify(todoList));
      localStorage.setItem('id', id);
    }
  }, [todoList, id]);

  useEffect(() => {
    const localTodoList = localStorage.getItem('todoList');
    if (localTodoList) {
      setTodoList(JSON.parse(localTodoList));
    }
    const localId = localStorage.getItem('id');
    if (localId) {
      setId(parseInt(localId, 10));
    }
    isMount.current = false;
  }, []);

  const addTodo = useCallback(
    (todo) => (e) => {
      e.preventDefault();
      if (todo) {
        setTodoList((prevState) => [
          ...prevState,
          { id, todo, isChecked: false },
        ]);
        setId(id + 1);
      }
    },
    [id]
  );

  const updateTodo = useCallback(
    (id, todo, isChecked) => {
      const idx = todoList.findIndex((info) => info.id === id);
      const newTodoList = [...todoList];
      newTodoList.splice(idx, 1, {
        id,
        todo,
        isChecked,
      });
      setTodoList(newTodoList);
    },
    [todoList]
  );

  const deleteTodo = useCallback(
    (id) => () => {
      const newTodoList = todoList.filter((info) => info.id !== id);
      setTodoList(newTodoList);
    },
    [todoList]
  );

  const toggleCheck = useCallback(
    (id) => () => {
      const idx = todoList.findIndex((info) => info.id === id);
      const newTodoList = [...todoList];
      newTodoList[idx].isChecked = !newTodoList[idx].isChecked;
      setTodoList(newTodoList);
    },
    [todoList]
  );

  return (
    <div className='flex flex-col justify-center'>
      <div className='text-center lg:text-left mb-16'>
        <div className='text-5xl font-bold'>오늘 할 일!</div>
      </div>
      <div className='overflow-scroll scrollbar-thin scrollbar-thumb-custom scrollbar-track-custom-light w-[400px] h-[450px]'>
        {todoList.length === 0 ? (
          <div className='items-center text-center lg:text-left mt-36'>
            <p className='py-6 text-2xl text-gray-400'>오늘 할 일이 없어요!</p>
          </div>
        ) : (
          todoList.map((info) => {
            return (
              <Todo
                key={info.id}
                id={info.id}
                todo={info.todo}
                isChecked={info.isChecked}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
                toggleCheck={toggleCheck}
              />
            );
          })
        )}
      </div>
      <Add addTodo={addTodo} />
    </div>
  );
}

export default Home;

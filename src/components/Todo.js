import React, { useState, useRef, useEffect, memo } from 'react';

const Todo = memo(
  ({ id, todo, isChecked, deleteTodo, updateTodo, toggleCheck }) => {
    const [value, setValue] = useState(todo);
    const [isUpdate, setIsUpdate] = useState(false);
    const input = useRef(null);

    useEffect(() => {
      if (isUpdate) {
        input.current.focus();
      }
    }, [isUpdate]);

    useEffect(() => {
      setIsUpdate(false);
    }, [todo]);

    const onClickTodo = () => {
      setIsUpdate(true);
    };

    const onChangeInput = (e) => {
      setValue(e.target.value);
    };

    const onFormSubmit = (e) => {
      e.preventDefault();
      setIsUpdate(false);
      if (!value) {
        setValue(todo);
      } else {
        if (todo !== value) {
          updateTodo(id, value, isChecked);
        }
      }
    };

    const onBlurInput = () => {
      setIsUpdate(false);
    };

    const onKeyUpInput = (e) => {
      if (e.key === 'Escape') {
        setIsUpdate(false);
      }
    };

    return (
      <div className='label cursor-pointer mr-6'>
        <input
          id={id}
          type='checkbox'
          onChange={toggleCheck(id)}
          checked={isChecked}
          className='checkbox-accent checkbox'
        />
        {isUpdate || (
          <span className='ml-4 mr-4' onClick={onClickTodo}>
            {todo}
          </span>
        )}
        {isUpdate && (
          <form className='update-form' onSubmit={onFormSubmit}>
            <input
              ref={input}
              value={value}
              onChange={onChangeInput}
              onBlur={onBlurInput}
              onKeyUp={onKeyUpInput}
              className='input input-bordered input-accent w-full max-w-xs'
            />
          </form>
        )}
        <button className='btn btn-circle btn-outline' onClick={deleteTodo(id)}>
          X
        </button>
      </div>
    );
  }
);

export default Todo;

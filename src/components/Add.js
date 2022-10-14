import React, { useState, useRef, useEffect, memo } from 'react';

const Add = memo(({ addTodo }) => {
  const [value, setValue] = useState('');
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
    setValue('');
  }, [addTodo]);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className='add-form flex flex-col justify-center items-center'>
      <input
        ref={input}
        value={value}
        onChange={onChangeInput}
        className='input input-bordered input-accent w-full max-w-xs mt-10 mb-3'
      />
      <button
        className='btn btn-accent h-10 w-40'
        type='submit'
        onClick={addTodo(value)}
      >
        TODO 추가하기
      </button>
    </form>
  );
});

export default Add;

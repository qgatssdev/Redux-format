import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { themeColor } from '../features/theme';

function Change() {
  const [color, setColor] = useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(themeColor(color));
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default Change;

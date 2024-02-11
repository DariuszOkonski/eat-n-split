import React from 'react';
import Button from './Button';

function FormSplitBill() {
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with XXX</h2>
      <label>💰Bill value</label>
      <input type='number' />

      <label>🕴️Your expense</label>
      <input type='number' />

      <label>🧑‍🤝‍🧑X's expense</label>
      <input type='number' disabled />

      <label>😊Who is paying the bill</label>
      <select>
        <option value='user'>You</option>
        <option value='friend'>Friend</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;

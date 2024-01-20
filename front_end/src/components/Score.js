import React, { useState } from 'react';
import Get from './Connect.js';

function Score() {

  const squad = [1,2,3,4,5,6,7,8];

  // 初始化表單狀態
  const [form, setForm] = useState({
    cash_add: "",
    squad: squad[0]
  });

  const changeSquad = (e) => {
    setForm((state) => ({
      ...state,
      squad: e.target.value
    }));
  };

  const changeCash_add = (e) => {
    setForm((state) => ({
      ...state,
      cash_add: e.target.value
    }));
  };

  const handleButtonClick = () => {
    Get()
  };





  return (
    <>
      <form>
      <label>第幾小隊：</label>

      <select name="age" value={form.squad} onChange={changeSquad}>
        {squad.map((item) => (
          <option key={item.value} value={item}>{item}</option>
        ))}
      </select>

	  <h1>您選擇了: {form.squad}</h1>
    <label htmlFor="name">增加金額：</label>
      <input
        id="cash_add"
        type="text"
		cash_add="cash_add"
        value={form.name}
        onChange={changeCash_add}
      />
    </form>
    <button type="button" onClick={handleButtonClick}>
      Click me
    </button>
    </>
  );
}

export default Score;

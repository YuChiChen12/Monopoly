import React, { useState } from 'react';
import {Get, Post} from './Connect.js';
import RealEstate from './RealEstate';

function Score() {
  const squad = [1, 2, 3, 4, 5, 6, 7, 8];
  const stop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const [dataJson, setDataJson] = useState();

  const [form, setForm] = useState({
    squad: squad[0],
    stop: stop[0],
    cash_add: "",
    chance: ""
  });

  const changeSquad = (e) => {
    setForm((state) => ({
      ...state,
      squad: e.target.value
    }));
  };

  const changeStop = (e) => {
    setForm((state) => ({
      ...state,
      stop: e.target.value
    }));
  };

  const changeCash_add = (e) => {
    setForm((state) => ({
      ...state,
      cash_add: e.target.value
    }));
  };

  const changeChance = (e) => {
    setForm((state) => ({
      ...state,
      chance: e.target.value
    }));
  };


  const handleButtonClick = () => {

    
    // Get()
    //   .then((data) => {
    //     setDataJson(data); // 更改這個檔案中的變數
    //     console.log(data)
    //   })
    //   .catch((error) => {
    //     console.error(`Error in handleButtonClick: ${error}`);
    //   });
  };

  return (
    <>
      <form>
        <label>第幾小隊：</label>
        <select name="squad" value={form.squad} onChange={changeSquad}>
          {squad.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <h1>你是{form.squad}小</h1>

        <label>第幾關：</label>
        <select name="stop" value={form.stop} onChange={changeStop}>
          {stop.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <h1>這是第{form.stop}關</h1>

        <label htmlFor="name">地產擴張獎勵金：</label>
        <input
          id="cash_add"
          type="text"
          cash_add="cash_add"
          value={form.cash_add}
          onChange={changeCash_add}
        />

        <br/>

        <label htmlFor="name">機會/命運：</label>
        <input
          id="chance"
          type="text"
          chance="chance"
          value={form.chance}
          onChange={changeChance}
        />

      </form>
      <button type="button" onClick={handleButtonClick}>
        Click me
      </button>
      {/* Display the result if available */}
      <div className='result'>{dataJson && JSON.stringify(dataJson)}</div>
      {/* dataJson.asset_per_stop[1]) */}
      <RealEstate dataJson={dataJson} />
    </>
  );
}

export default Score;

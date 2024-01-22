import React, { useState } from 'react';
// import {Get, Post} from './Connect.js';
import RealEstate from './RealEstate';

function Score() {
  const squad = [1, 2, 3, 4, 5, 6, 7, 8];
  const stop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const [dataJson, setDataJson] = useState();

  const [form, setForm] = useState({
    squad_num: squad[0],
    stop_num: stop[0],
    game_gain: 0,
    chance: 0,
    add_asset: 0,
    id: 1
  });

  const changeValue = (e) => {
    const name = e.target.name;
  
    setForm((state) => ({
      ...state,
      [name]: e.target.value
    }));
  };


  const handleButtonClick = () => {
    // Update form.id to 1
  setForm((prevForm) => ({
    ...prevForm,
    id: 1
  }));

    const formDataJson = JSON.stringify(form);
    console.log('傳到後端的JSON：', {formDataJson})
    fetch('http://140.113.122.176:5000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formDataJson,
    })
      .then(response => response.json())
      .then((data) => {
        console.log('這是data：', data);
        setDataJson(data); // 更新这个文件中的变量
        
      })
      .catch((error) => {
        console.error(`Error in handleButtonClick: ${error}`);
      });
      
    
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
        <select name="squad_num" value={form.squad_num} onChange={changeValue}>
          {squad.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <h1>你是{form.squad_num}小</h1>

        <label>第幾關：</label>
        <select name="stop_num" value={form.stop_num} onChange={changeValue}>
          {stop.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <h1>這是第{form.stop_num}關</h1>

        <label htmlFor="game_gain">地產擴張獎勵金：</label>
        <input
          id="game_gain"
          type="text"
          name="game_gain"
          value={form.game_gain}
          onChange={changeValue}
        />

        <br/>

        <label htmlFor="chance">機會/命運：</label>
        <input
          id="chance"
          type="text"
          name="chance"
          value={form.chance}
          onChange={changeValue}
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

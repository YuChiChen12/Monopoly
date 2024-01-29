import React, { useState } from 'react';
import {Get, Post} from './Api.js';
import './Score.css'

function Score() {
  const squad = [1, 2, 3, 4, 5, 6, 7, 8];
  const stop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const add_asset = [0, 1, 2, 3]
  const [dataJson, setDataJson] = useState({});
  const id = 1;

  const [form, setForm] = useState({
    squad_num: squad[0],
    stop_num: stop[0],
    game_gain: 0,
    chance: 0,
    add_asset: add_asset[0],
    id: 0
  });

  const changeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    setForm((state) => ({
      ...state,
      [name]: value
    }));
  };

  


  const moneyButtonClick = () => {
  setForm((prevForm) => ({
    ...prevForm
  }))
  form.add_asset = 0;
  form.id = 1;
  const formDataJson = JSON.stringify(form);
  Post(formDataJson)
    .then((data) => {
      console.log('Get data after Post：', data);
      setDataJson(data);
      // 破產通知
      if (data.bankrupt == 1){
          alert("小隊破產囉！！！")
      }
    })
    .catch((error) => {
      console.error(`Error in ButtonClick: ${error}`);
    });
  };

  const assetButtonClick = () => {
  setForm((prevForm) => ({
    ...prevForm,
  }))
  form.game_gain = 0;
  form.chance = 0;
  form.id = 2;
  const formDataJson = JSON.stringify(form);
  Post(formDataJson)
    .then((data) => {
      console.log('Get data after Post：', data);
      setDataJson(data);
      // 破產通知
      if (data.bankrupt == 1){
        alert("小隊破產囉！！！")
      }
    })
    .catch((error) => {
      console.error(`Error in ButtonClick: ${error}`);
    });
  };


    
    // Get()
    //   .then((data) => {
    //     setDataJson(data); // 更改這個檔案中的變數
    //     console.log(data)
    //   })
    //   .catch((error) => {
    //     console.error(`Error in ButtonClick: ${error}`);
    //   });


  return (
    <div className="whole_page">
      <form>
        <label>第幾小隊</label>
        <select name="squad_num" value={form.squad_num} onChange={changeValue}>
          {squad.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {/* <h1>你是{form.squad_num}小</h1> */}

        <label>第幾關</label>
        <select name="stop_num" value={form.stop_num} onChange={changeValue}>
          {stop.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {/* <h1>這是第{form.stop_num}關</h1> */}

        <label htmlFor="game_gain">地產擴張獎勵金 (e.g., 1000, 2000)</label>
        <input
          id="game_gain"
          type="text"
          name="game_gain"
          value={form.game_gain}
          onChange={changeValue}
        />
        <br/>
        <label htmlFor="chance">機會/命運 & 環遊世界 (e.g., 1000, -2000)</label>
        <input
          id="chance"
          type="text"
          name="chance"
          value={form.chance}
          onChange={changeValue}
        />

      </form>
      <button type="button" onClick={moneyButtonClick}>
        結算手上金額
      </button>
      {/* Display the result if available */}
      {dataJson && Object.keys(dataJson).length > 0 && dataJson.cash_per_squad && (
        <div className="result-area">
        <div>第{dataJson && dataJson.squad_num}小隊：</div>
        <div>經過第{dataJson && dataJson.stop_num}關會被收取過路費：{dataJson && dataJson.toll_per_stop[dataJson.stop_num-1][dataJson.squad_num-1]}</div>
        <div>扣過路費後的剩餘金額(可用來置產)：{dataJson && JSON.stringify(dataJson.cash_per_squad[dataJson.squad_num-1])}</div>
        <div>破產次數(累計)：{dataJson && JSON.stringify(dataJson.bankrupt_time_per_squad[dataJson.squad_num-1])}</div>
        <div>目前在第{dataJson && dataJson.stop_num}關擁有的房地產數：{dataJson && JSON.stringify(dataJson.asset_per_stop[dataJson.stop_num-1][dataJson.squad_num-1])}</div>
      </div>
      )}
      <form>
        <label>置產數量 (成本：500×1 / 1300×2 / 2500×3)</label>
        <select name="add_asset" value={form.add_asset} onChange={changeValue}>
          {add_asset.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {/* <h1>你要買{form.add_asset}棟房子</h1> */}
      </form>
      <button type="button" onClick={assetButtonClick}>
        買房
      </button>
    </div>
  );
}

export default Score;

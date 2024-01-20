import React, { useState } from 'react';

function Score() {

  const age = [
    "18歲以下",
    "18歲~29歲",
    "30歲~39歲",
    "40歲~49歲",
    "50歲~59歲",
    "60歲以上"
  ];

  // 初始化表單狀態
  const [form, setForm] = useState({
    age: age[0]
  });

  const changeAge = (e) => {
    setForm((state) => ({
      ...state,
      age: e.target.value
    }));
  };

  return (
    <form>
      <label>請選擇您的年齡區間</label>

      <select name="age" value={form.age} onChange={changeAge}>
        {age.map((item) => (
          <option key={item.value} value={item}>{item}</option>
        ))}
      </select>

	  <h1>您選擇了: {form.age}</h1>
    </form>
  );
}

export default Score;

import React, { useState } from 'react';

function Score() {
  // 使用 useState 创建一个名为 "name" 的状态变量，并设置初始值为空字符串
  const [name, setName] = useState('');
  const [cashPerSquad, setCashPerSquad] = useState(window.cashPerSquad);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // 直接将输入的姓名值替换原本的 cashPerSquad 变量
    window.cashPerSquad = [name];
  
    // 更新组件状态，以便重新渲染
    setCashPerSquad([name]);
    setName('');   // 清空输入框
  };
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>姓名：</label>
        <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="submit" value="送出表單" />
      </form>
      <div>
        {cashPerSquad}
      </div>
    </>
  );
}

export default Score;

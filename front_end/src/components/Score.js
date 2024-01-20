import React, { useState } from 'react';

function Score() {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>第幾小隊：</label><input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
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

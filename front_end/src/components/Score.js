import React, { useState } from 'react';

function Score() {
  return (
    <>
      <form>
                <label>姓名：</label>
                <input id="name" name="name" />
                <br/>
                    <input type="submit" value="送出表單"  />
            </form>
    </>
  );
}

export default Score;

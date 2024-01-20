import React from 'react';

function Get() {
    fetch("http://140.113.122.176:5000")
    .then((response) => {
        return response;
    })
    .then( (response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    })
  }

// function Post() {
//     return (
//       <>

//       </>
//     );
//   }

export default Get;
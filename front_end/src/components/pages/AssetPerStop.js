import React, { useState, useEffect } from 'react';
import '../../App.css';
import '../AssetPerStop.css';
import Get from '../Api.js';

function AssetPerStop() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Get();
        console.log('Data from Get:', result);
        setData(result);
        // Handle the data as needed
      } catch (error) {
        console.error('Error while fetching data:', error);
        // Handle the error
      }
    };

    // Fetch data initially
    fetchData();

    // Set up interval to fetch data every 10 seconds
    const intervalId = setInterval(fetchData, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>小隊</th>
            <th>手中金額</th>
            <th>資產總價值</th>
            <th>破產次數</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </tbody>
      </table>

      <div>AssetPerStop</div>
      {/* Display the data */}
      {data && (
        <div>
          <h2>Data Received:</h2>
          <pre>{JSON.stringify(data, null)}</pre>
        </div>
      )}
    </div>
  );
}

export default AssetPerStop;

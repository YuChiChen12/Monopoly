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
      {data && (
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
              <td>1</td>
              <td>{data.cash_per_squad[0]}</td>
              <td>{data.asset_per_stop[0]}</td>
              <td>{data.bankrupt_time_per_squad[0]}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{data.cash_per_squad[1]}</td>
              <td>{data.asset_per_stop[1]}</td>
              <td>{data.bankrupt_time_per_squad[1]}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>{data.cash_per_squad[2]}</td>
              <td>{data.asset_per_stop[2]}</td>
              <td>{data.bankrupt_time_per_squad[2]}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>{data.cash_per_squad[3]}</td>
              <td>{data.asset_per_stop[3]}</td>
              <td>{data.bankrupt_time_per_squad[3]}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>{data.cash_per_squad[4]}</td>
              <td>{data.asset_per_stop[4]}</td>
              <td>{data.bankrupt_time_per_squad[4]}</td>
            </tr>
            <tr>
              <td>6</td>
              <td>{data.cash_per_squad[5]}</td>
              <td>{data.asset_per_stop[5]}</td>
              <td>{data.bankrupt_time_per_squad[5]}</td>
            </tr>
            <tr>
              <td>7</td>
              <td>{data.cash_per_squad[6]}</td>
              <td>{data.asset_per_stop[6]}</td>
              <td>{data.bankrupt_time_per_squad[6]}</td>
            </tr>
            <tr>
              <td>8</td>
              <td>{data.cash_per_squad[7]}</td>
              <td>{data.asset_per_stop[7]}</td>
              <td>{data.bankrupt_time_per_squad[7]}</td>
            </tr>
          </tbody>
        </table>
      )}

      <div>各關置產情形</div>
      {data && (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>1小</th>
              <th>2小</th>
              <th>3小</th>
              <th>4小</th>
              <th>5小</th>
              <th>6小</th>
              <th>7小</th>
              <th>8小</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. 開羅(非洲)</td>
              
              
              
              
              <td>12. 約翰尼斯堡(非洲)</td>
              <td>13. 阿姆斯特丹(歐洲)</td>
              <td>14. 渥太華(美洲)</td>
              <td>15. 吉隆坡(亞洲)</td>
            </tr>
            <tr>
              <td>2. 倫敦(歐洲)</td>
            </tr>
            <tr>
              <td>3. 洛杉磯(美洲)</td>
            </tr>
            <tr>
              <td>4. 上海(亞洲)</td>
            </tr>
            <tr>
              <td>5. 奧克蘭(大洋洲)</td>
            </tr>
            <tr>
              <td>6. 奈洛比(非洲)</td>
            </tr>
            <tr>
              <td>7. 巴黎(歐洲)</td>
            </tr>
            <tr>
              <td>8. 南極大陸(南極洲)</td>
            </tr>
            <tr>
              <td>9. 波哥大(美洲)</td>
            </tr>
            <tr>
              <td>10. 東京(亞洲)</td>
            </tr>
            <tr>
              <td>11. 墨爾本(大洋洲)</td>
            </tr>
            <tr>
              <td>8. 南極大陸(南極洲)</td>
            </tr>
            <tr>
              <td>8. 南極大陸(南極洲)</td>
            </tr>
            <tr>
              <td>8. 南極大陸(南極洲)</td>
            </tr>
          </tbody>
        </table>
      )}
      Display the data
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

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
      } catch (error) {
        console.error('Error while fetching data:', error);
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
    <div>各小現況</div>
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
              <td>{data.total_value[0]}</td>
              <td>{data.bankrupt_time_per_squad[0]}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{data.cash_per_squad[1]}</td>
              <td>{data.total_value[1]}</td>
              <td>{data.bankrupt_time_per_squad[1]}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>{data.cash_per_squad[2]}</td>
              <td>{data.total_value[2]}</td>
              <td>{data.bankrupt_time_per_squad[2]}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>{data.cash_per_squad[3]}</td>
              <td>{data.total_value[3]}</td>
              <td>{data.bankrupt_time_per_squad[3]}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>{data.cash_per_squad[4]}</td>
              <td>{data.total_value[4]}</td>
              <td>{data.bankrupt_time_per_squad[4]}</td>
            </tr>
            <tr>
              <td>6</td>
              <td>{data.cash_per_squad[5]}</td>
              <td>{data.total_value[5]}</td>
              <td>{data.bankrupt_time_per_squad[5]}</td>
            </tr>
            <tr>
              <td>7</td>
              <td>{data.cash_per_squad[6]}</td>
              <td>{data.total_value[6]}</td>
              <td>{data.bankrupt_time_per_squad[6]}</td>
            </tr>
            <tr>
              <td>8</td>
              <td>{data.cash_per_squad[7]}</td>
              <td>{data.total_value[7]}</td>
              <td>{data.bankrupt_time_per_squad[7]}</td>
            </tr>
          </tbody>
        </table>
      )}
      <br/> 
      <div>各關置產情形(小隊在各關的置產數量)</div>

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
              <td>{data.asset_per_stop[0][0]}</td>
              <td>{data.asset_per_stop[0][1]}</td>
              <td>{data.asset_per_stop[0][2]}</td>
              <td>{data.asset_per_stop[0][3]}</td>
              <td>{data.asset_per_stop[0][4]}</td>
              <td>{data.asset_per_stop[0][5]}</td>
              <td>{data.asset_per_stop[0][6]}</td>
              <td>{data.asset_per_stop[0][7]}</td>
            </tr>
            <tr>
              <td>2. 倫敦(歐洲)</td>
              <td>{data.asset_per_stop[1][0]}</td>
              <td>{data.asset_per_stop[1][1]}</td>
              <td>{data.asset_per_stop[1][2]}</td>
              <td>{data.asset_per_stop[1][3]}</td>
              <td>{data.asset_per_stop[1][4]}</td>
              <td>{data.asset_per_stop[1][5]}</td>
              <td>{data.asset_per_stop[1][6]}</td>
              <td>{data.asset_per_stop[1][7]}</td>
            </tr>
            <tr>
              <td>3. 洛杉磯(美洲)</td>
              <td>{data.asset_per_stop[2][0]}</td>
              <td>{data.asset_per_stop[2][1]}</td>
              <td>{data.asset_per_stop[2][2]}</td>
              <td>{data.asset_per_stop[2][3]}</td>
              <td>{data.asset_per_stop[2][4]}</td>
              <td>{data.asset_per_stop[2][5]}</td>
              <td>{data.asset_per_stop[2][6]}</td>
              <td>{data.asset_per_stop[2][7]}</td>
            </tr>
            <tr>
              <td>4. 上海(亞洲)</td>
              <td>{data.asset_per_stop[3][0]}</td>
              <td>{data.asset_per_stop[3][1]}</td>
              <td>{data.asset_per_stop[3][2]}</td>
              <td>{data.asset_per_stop[3][3]}</td>
              <td>{data.asset_per_stop[3][4]}</td>
              <td>{data.asset_per_stop[3][5]}</td>
              <td>{data.asset_per_stop[3][6]}</td>
              <td>{data.asset_per_stop[3][7]}</td>
            </tr>
            <tr>
              <td>5. 奧克蘭(大洋洲)</td>
              <td>{data.asset_per_stop[4][0]}</td>
              <td>{data.asset_per_stop[4][1]}</td>
              <td>{data.asset_per_stop[4][2]}</td>
              <td>{data.asset_per_stop[4][3]}</td>
              <td>{data.asset_per_stop[4][4]}</td>
              <td>{data.asset_per_stop[4][5]}</td>
              <td>{data.asset_per_stop[4][6]}</td>
              <td>{data.asset_per_stop[4][7]}</td>
            </tr>
            <tr>
              <td>6. 奈洛比(非洲)</td>
              <td>{data.asset_per_stop[5][0]}</td>
              <td>{data.asset_per_stop[5][1]}</td>
              <td>{data.asset_per_stop[5][2]}</td>
              <td>{data.asset_per_stop[5][3]}</td>
              <td>{data.asset_per_stop[5][4]}</td>
              <td>{data.asset_per_stop[5][5]}</td>
              <td>{data.asset_per_stop[5][6]}</td>
              <td>{data.asset_per_stop[5][7]}</td>
            </tr>
            <tr>
              <td>7. 巴黎(歐洲)</td>
              <td>{data.asset_per_stop[6][0]}</td>
              <td>{data.asset_per_stop[6][1]}</td>
              <td>{data.asset_per_stop[6][2]}</td>
              <td>{data.asset_per_stop[6][3]}</td>
              <td>{data.asset_per_stop[6][4]}</td>
              <td>{data.asset_per_stop[6][5]}</td>
              <td>{data.asset_per_stop[6][6]}</td>
              <td>{data.asset_per_stop[6][7]}</td>
            </tr>
            <tr>
              <td>8. 南極大陸(南極洲)</td>
              <td>{data.asset_per_stop[7][0]}</td>
              <td>{data.asset_per_stop[7][1]}</td>
              <td>{data.asset_per_stop[7][2]}</td>
              <td>{data.asset_per_stop[7][3]}</td>
              <td>{data.asset_per_stop[7][4]}</td>
              <td>{data.asset_per_stop[7][5]}</td>
              <td>{data.asset_per_stop[7][6]}</td>
              <td>{data.asset_per_stop[7][7]}</td>
            </tr>
            <tr>
              <td>9. 波哥大(美洲)</td>
              <td>{data.asset_per_stop[8][0]}</td>
              <td>{data.asset_per_stop[8][1]}</td>
              <td>{data.asset_per_stop[8][2]}</td>
              <td>{data.asset_per_stop[8][3]}</td>
              <td>{data.asset_per_stop[8][4]}</td>
              <td>{data.asset_per_stop[8][5]}</td>
              <td>{data.asset_per_stop[8][6]}</td>
              <td>{data.asset_per_stop[8][7]}</td>
            </tr>
            <tr>
              <td>10. 東京(亞洲)</td>
              <td>{data.asset_per_stop[9][0]}</td>
              <td>{data.asset_per_stop[9][1]}</td>
              <td>{data.asset_per_stop[9][2]}</td>
              <td>{data.asset_per_stop[9][3]}</td>
              <td>{data.asset_per_stop[9][4]}</td>
              <td>{data.asset_per_stop[9][5]}</td>
              <td>{data.asset_per_stop[9][6]}</td>
              <td>{data.asset_per_stop[9][7]}</td>
            </tr>
            <tr>
              <td>11. 墨爾本(大洋洲)</td>
              <td>{data.asset_per_stop[10][0]}</td>
              <td>{data.asset_per_stop[10][1]}</td>
              <td>{data.asset_per_stop[10][2]}</td>
              <td>{data.asset_per_stop[10][3]}</td>
              <td>{data.asset_per_stop[10][4]}</td>
              <td>{data.asset_per_stop[10][5]}</td>
              <td>{data.asset_per_stop[10][6]}</td>
              <td>{data.asset_per_stop[10][7]}</td>
            </tr>
            <tr>
              <td>12. 約翰尼斯堡(非洲)</td>
              <td>{data.asset_per_stop[11][0]}</td>
              <td>{data.asset_per_stop[11][1]}</td>
              <td>{data.asset_per_stop[11][2]}</td>
              <td>{data.asset_per_stop[11][3]}</td>
              <td>{data.asset_per_stop[11][4]}</td>
              <td>{data.asset_per_stop[11][5]}</td>
              <td>{data.asset_per_stop[11][6]}</td>
              <td>{data.asset_per_stop[11][7]}</td>
            </tr>
            <tr>
              <td>13. 阿姆斯特丹(歐洲)</td>
              <td>{data.asset_per_stop[12][0]}</td>
              <td>{data.asset_per_stop[12][1]}</td>
              <td>{data.asset_per_stop[12][2]}</td>
              <td>{data.asset_per_stop[12][3]}</td>
              <td>{data.asset_per_stop[12][4]}</td>
              <td>{data.asset_per_stop[12][5]}</td>
              <td>{data.asset_per_stop[12][6]}</td>
              <td>{data.asset_per_stop[12][7]}</td>
            </tr>
            <tr>
              <td>14. 渥太華(美洲)</td>
              <td>{data.asset_per_stop[13][0]}</td>
              <td>{data.asset_per_stop[13][1]}</td>
              <td>{data.asset_per_stop[13][2]}</td>
              <td>{data.asset_per_stop[13][3]}</td>
              <td>{data.asset_per_stop[13][4]}</td>
              <td>{data.asset_per_stop[13][5]}</td>
              <td>{data.asset_per_stop[13][6]}</td>
              <td>{data.asset_per_stop[13][7]}</td>
            </tr>
            <tr>
              <td>15. 吉隆坡(亞洲)</td>
              <td>{data.asset_per_stop[14][0]}</td>
              <td>{data.asset_per_stop[14][1]}</td>
              <td>{data.asset_per_stop[14][2]}</td>
              <td>{data.asset_per_stop[14][3]}</td>
              <td>{data.asset_per_stop[14][4]}</td>
              <td>{data.asset_per_stop[14][5]}</td>
              <td>{data.asset_per_stop[14][6]}</td>
              <td>{data.asset_per_stop[14][7]}</td>
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

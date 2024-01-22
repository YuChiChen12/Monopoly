import React, { useState, useEffect } from 'react';
import '../../App.css';
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

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import mockData from './mock.json'; // Assuming mock.json is in the same directory

const LPL = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Load data from mock.json
    setData(mockData);
  }, []);

  if (!data) return <div>Loading...</div>;

  const { leagueName, teamName, ballStats, playerPerformance, wickets, strikeRates, foursSixes } = data;

  const playerPerformanceData = {
    labels: playerPerformance.map((player) => player.name),
    datasets: [
      {
        label: 'Runs Scored',
        data: playerPerformance.map((player) => player.runs),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const wicketsData = {
    labels: wickets.map((player) => player.name),
    datasets: [
      {
        label: 'Wickets Taken',
        data: wickets.map((player) => player.wickets),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const strikeRateData = {
    labels: strikeRates.map((player) => player.name),
    datasets: [
      {
        label: 'Strike Rate',
        data: strikeRates.map((player) => player.strikeRate),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const foursSixesData = {
    labels: foursSixes.map((player) => player.name),
    datasets: [
      {
        label: 'Fours',
        data: foursSixes.map((player) => player.fours),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'Sixes',
        data: foursSixes.map((player) => player.sixes),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex">
      <div className="bg-white rounded shadow-md p-4 w-3/4">
        <h2 className="text-2xl font-bold mb-4">{`${leagueName} - ${teamName} Ball by Ball Statistics`}</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Over</th>
              <th className="border px-4 py-2">Ball</th>
              <th className="border px-4 py-2">Batsman</th>
              <th className="border px-4 py-2">Runs</th>
              <th className="border px-4 py-2">Extras</th>
              <th className="border px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {ballStats.map((ball, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{`${ball.over}.${ball.ball}`}</td>
                <td className="border px-4 py-2">{ball.ball}</td>
                <td className="border px-4 py-2">{ball.batsman}</td>
                <td className="border px-4 py-2">{ball.runs}</td>
                <td className="border px-4 py-2">{ball.extras}</td>
                <td className="border px-4 py-2">{ball.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col w-1/4 ml-4">
        <div className="bg-white rounded shadow-md p-4 mb-4">
          <h3 className="font-bold mb-2">Runs Scored by Players</h3>
          <Bar data={playerPerformanceData} options={{ responsive: true }} />
        </div>
        <div className="bg-white rounded shadow-md p-4 mb-4">
          <h3 className="font-bold mb-2">Wickets Taken by Players</h3>
          <Bar data={wicketsData} options={{ responsive: true }} />
        </div>
        <div className="bg-white rounded shadow-md p-4 mb-4">
          <h3 className="font-bold mb-2">Strike Rates</h3>
          <Bar data={strikeRateData} options={{ responsive: true }} />
        </div>
        <div className="bg-white rounded shadow-md p-4 mb-4">
          <h3 className="font-bold mb-2">Fours and Sixes</h3>
          <Bar data={foursSixesData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default LPL;

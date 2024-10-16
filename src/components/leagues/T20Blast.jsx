import React from 'react';
import { Bar } from 'react-chartjs-2'; // Using Bar for simplicity
import 'chart.js/auto'; // Import Chart.js

const PSL = () => {
  // Sample ball-by-ball statistics data
  const ballStats = [
    { over: 1, ball: 1, batsman: 'Babar Azam', runs: 4, extras: 0, total: 4 },
    { over: 1, ball: 2, batsman: 'Mohammad Rizwan', runs: 2, extras: 0, total: 6 },
    { over: 1, ball: 3, batsman: 'Sharjeel Khan', runs: 1, extras: 0, total: 7 },
    { over: 1, ball: 4, batsman: 'Babar Azam', runs: 6, extras: 0, total: 13 },
    { over: 1, ball: 5, batsman: 'Mohammad Rizwan', runs: 0, extras: 0, total: 13 },
    { over: 1, ball: 6, batsman: 'Sharjeel Khan', runs: 1, extras: 0, total: 14 },
    { over: 2, ball: 1, batsman: 'Babar Azam', runs: 3, extras: 0, total: 17 },
    { over: 2, ball: 2, batsman: 'Mohammad Rizwan', runs: 2, extras: 0, total: 19 },
    { over: 2, ball: 3, batsman: 'Sharjeel Khan', runs: 1, extras: 0, total: 20 },
    { over: 2, ball: 4, batsman: 'Babar Azam', runs: 4, extras: 0, total: 24 },
    { over: 2, ball: 5, batsman: 'Mohammad Rizwan', runs: 1, extras: 0, total: 25 },
    { over: 2, ball: 6, batsman: 'Sharjeel Khan', runs: 2, extras: 0, total: 27 },
    { over: 3, ball: 1, batsman: 'Babar Azam', runs: 0, extras: 0, total: 27 },
    { over: 3, ball: 2, batsman: 'Mohammad Rizwan', runs: 3, extras: 0, total: 30 },
    { over: 3, ball: 3, batsman: 'Sharjeel Khan', runs: 5, extras: 0, total: 35 },
    { over: 3, ball: 4, batsman: 'Babar Azam', runs: 1, extras: 0, total: 36 },
    { over: 3, ball: 5, batsman: 'Mohammad Rizwan', runs: 4, extras: 0, total: 40 },
    { over: 3, ball: 6, batsman: 'Sharjeel Khan', runs: 2, extras: 0, total: 42 },
    { over: 4, ball: 1, batsman: 'Babar Azam', runs: 6, extras: 0, total: 48 },
    { over: 4, ball: 2, batsman: 'Mohammad Rizwan', runs: 0, extras: 0, total: 48 },
    { over: 4, ball: 3, batsman: 'Sharjeel Khan', runs: 1, extras: 0, total: 49 },
    { over: 4, ball: 4, batsman: 'Babar Azam', runs: 2, extras: 0, total: 51 },
    { over: 4, ball: 5, batsman: 'Mohammad Rizwan', runs: 0, extras: 0, total: 51 },
    { over: 4, ball: 6, batsman: 'Sharjeel Khan', runs: 3, extras: 0, total: 54 },
    { over: 5, ball: 1, batsman: 'Babar Azam', runs: 1, extras: 0, total: 55 },
    { over: 5, ball: 2, batsman: 'Mohammad Rizwan', runs: 5, extras: 0, total: 60 },
    { over: 5, ball: 3, batsman: 'Sharjeel Khan', runs: 0, extras: 0, total: 60 },
    { over: 5, ball: 4, batsman: 'Babar Azam', runs: 4, extras: 0, total: 64 },
    { over: 5, ball: 5, batsman: 'Mohammad Rizwan', runs: 2, extras: 0, total: 66 },
    { over: 5, ball: 6, batsman: 'Sharjeel Khan', runs: 0, extras: 0, total: 66 },
    { over: 6, ball: 1, batsman: 'Babar Azam', runs: 3, extras: 0, total: 69 },
    { over: 6, ball: 2, batsman: 'Mohammad Rizwan', runs: 2, extras: 0, total: 71 },
    { over: 6, ball: 3, batsman: 'Sharjeel Khan', runs: 4, extras: 0, total: 75 },
    { over: 6, ball: 4, batsman: 'Babar Azam', runs: 1, extras: 0, total: 76 },
    { over: 6, ball: 5, batsman: 'Mohammad Rizwan', runs: 3, extras: 0, total: 79 },
    { over: 6, ball: 6, batsman: 'Sharjeel Khan', runs: 2, extras: 0, total: 81 },
  ];

  // Sample data for the graphs
  const playerPerformanceData = {
    labels: ['Babar Azam', 'Mohammad Rizwan', 'Sharjeel Khan', 'Fakhar Zaman', 'Shadab Khan'],
    datasets: [
      {
        label: 'Runs Scored',
        data: [81, 79, 75, 40, 30],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const wicketsData = {
    labels: ['Shaheen Afridi', 'Shadab Khan', 'Hasan Ali', 'Mohammad Amir', 'Usama Mir'],
    datasets: [
      {
        label: 'Wickets Taken',
        data: [2, 1, 3, 2, 4],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const strikeRateData = {
    labels: ['Babar Azam', 'Mohammad Rizwan', 'Sharjeel Khan', 'Fakhar Zaman', 'Shadab Khan'],
    datasets: [
      {
        label: 'Strike Rate',
        data: [145, 132, 138, 125, 130],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const foursSixesData = {
    labels: ['Babar Azam', 'Mohammad Rizwan', 'Sharjeel Khan', 'Fakhar Zaman', 'Shadab Khan'],
    datasets: [
      {
        label: 'Fours',
        data: [9, 6, 7, 4, 3],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'Sixes',
        data: [2, 1, 0, 1, 4],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex">
      <div className="bg-gray-800 rounded shadow-md p-4 w-3/4">
        <h2 className="text-2xl font-bold mb-4">PSL Ball by Ball Statistics</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-700">
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
              <tr key={index} className="border-b border-gray-700">
                <td className="border px-4 py-2">{`${ball.over}.${ball.ball}`}</td>
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
        <div className="bg-gray-800 rounded shadow-md p-4 mb-4">
          <h3 className="font-bold mb-2">Runs Scored by Players</h3>
          <Bar data={playerPerformanceData} options={{ responsive: true }} />
        </div>
        <div className="bg-gray-800 rounded shadow-md p-4 mb-4">
          <h3 className="font-bold mb-2">Wickets Taken by Players</h3>
          <Bar data={wicketsData} options={{ responsive: true }} />
        </div>
        <div className="bg-gray-800 rounded shadow-md p-4 mb-4">
          <h3 className="font-bold mb-2">Strike Rates</h3>
          <Bar data={strikeRateData} options={{ responsive: true }} />
        </div>
        <div className="bg-gray-800 rounded shadow-md p-4 mb-4">
          <h3 className="font-bold mb-2">Fours and Sixes</h3>
          <Bar data={foursSixesData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default PSL;

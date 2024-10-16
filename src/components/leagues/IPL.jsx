import React from 'react';
import { Bar, Pie } from 'react-chartjs-2'; // Import Pie chart as well
import 'chart.js/auto'; // Import Chart.js

const IPL = () => {
  // Sample ball-by-ball statistics data
  const ballStats = [
    { over: 1, ball: 1, batsman: 'Rohit Sharma', runs: 1, extras: 0, total: 1 },
    { over: 1, ball: 2, batsman: 'MS Dhoni', runs: 2, extras: 0, total: 3 },
    { over: 1, ball: 3, batsman: 'Virat Kohli', runs: 0, extras: 0, total: 3 },
    { over: 1, ball: 4, batsman: 'AB de Villiers', runs: 4, extras: 0, total: 7 },
    { over: 1, ball: 5, batsman: 'Jasprit Bumrah', runs: 0, extras: 1, total: 8 },
    { over: 1, ball: 6, batsman: 'Hardik Pandya', runs: 1, extras: 0, total: 9 },
    { over: 2, ball: 1, batsman: 'KL Rahul', runs: 0, extras: 0, total: 9 },
    { over: 2, ball: 2, batsman: 'David Warner', runs: 6, extras: 0, total: 15 },
    { over: 2, ball: 3, batsman: 'Ruturaj Gaikwad', runs: 2, extras: 0, total: 17 },
    { over: 2, ball: 4, batsman: 'Shubman Gill', runs: 1, extras: 0, total: 18 },
    { over: 2, ball: 5, batsman: 'Ishan Kishan', runs: 4, extras: 0, total: 22 },
    { over: 2, ball: 6, batsman: 'Shreyas Iyer', runs: 0, extras: 0, total: 22 },
    { over: 3, ball: 1, batsman: 'Prithvi Shaw', runs: 3, extras: 0, total: 25 },
    { over: 3, ball: 2, batsman: 'Glenn Maxwell', runs: 0, extras: 0, total: 25 },
    { over: 3, ball: 3, batsman: 'Ravindra Jadeja', runs: 1, extras: 0, total: 26 },
    { over: 3, ball: 4, batsman: 'Jofra Archer', runs: 2, extras: 0, total: 28 },
    { over: 3, ball: 5, batsman: 'Ben Stokes', runs: 4, extras: 0, total: 32 },
    { over: 3, ball: 6, batsman: 'Chris Gayle', runs: 1, extras: 0, total: 33 },
    { over: 4, ball: 1, batsman: 'Kane Williamson', runs: 0, extras: 0, total: 33 },
    { over: 4, ball: 2, batsman: 'Jos Buttler', runs: 6, extras: 0, total: 39 },
    { over: 4, ball: 3, batsman: 'Rassie van der Dussen', runs: 3, extras: 0, total: 42 },
    { over: 4, ball: 4, batsman: 'Rinku Singh', runs: 2, extras: 0, total: 44 },
    { over: 4, ball: 5, batsman: 'Tristan Stubbs', runs: 4, extras: 0, total: 48 },
    { over: 4, ball: 6, batsman: 'Marcus Stoinis', runs: 0, extras: 1, total: 49 },
    { over: 5, ball: 1, batsman: 'Mitchell Marsh', runs: 1, extras: 0, total: 50 },
    { over: 5, ball: 2, batsman: 'Dinesh Karthik', runs: 3, extras: 0, total: 53 },
    { over: 5, ball: 3, batsman: 'Jason Holder', runs: 0, extras: 0, total: 53 },
    { over: 5, ball: 4, batsman: 'Deepak Hooda', runs: 4, extras: 0, total: 57 },
    { over: 5, ball: 5, batsman: 'Ambati Rayudu', runs: 2, extras: 0, total: 59 },
    { over: 5, ball: 6, batsman: 'Manish Pandey', runs: 0, extras: 0, total: 59 },
    { over: 6, ball: 1, batsman: 'Bhuvneshwar Kumar', runs: 1, extras: 0, total: 60 },
    { over: 6, ball: 2, batsman: 'Yuzvendra Chahal', runs: 0, extras: 0, total: 60 },
    { over: 6, ball: 3, batsman: 'Rahul Tewatia', runs: 1, extras: 0, total: 61 },
    { over: 6, ball: 4, batsman: 'Shardul Thakur', runs: 0, extras: 0, total: 61 },
    { over: 6, ball: 5, batsman: 'Lockie Ferguson', runs: 0, extras: 0, total: 61 },
    { over: 6, ball: 6, batsman: 'Kagiso Rabada', runs: 0, extras: 1, total: 62 },
  ];

  // Sample data for the graphs
  const playerPerformanceData = {
    labels: ['Rohit Sharma', 'MS Dhoni', 'Virat Kohli', 'AB de Villiers', 'KL Rahul'],
    datasets: [
      {
        label: 'Runs Scored',
        data: [30, 20, 35, 40, 50],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const wicketsData = {
    labels: ['Bumrah', 'Rabada', 'Bowlers', 'Chahal', 'Archer'],
    datasets: [
      {
        label: 'Wickets Taken',
        data: [2, 3, 1, 4, 5],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const strikeRateData = {
    labels: ['Rohit Sharma', 'MS Dhoni', 'Virat Kohli', 'AB de Villiers', 'KL Rahul'],
    datasets: [
      {
        label: 'Strike Rate',
        data: [130, 110, 125, 140, 150],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const foursSixesData = {
    labels: ['Rohit Sharma', 'MS Dhoni', 'Virat Kohli', 'AB de Villiers', 'KL Rahul'],
    datasets: [
      {
        label: 'Fours',
        data: [5, 3, 4, 6, 2],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'Sixes',
        data: [2, 1, 2, 3, 2],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex">
      <div className="bg-white rounded shadow-md p-4 w-3/4">
        <h2 className="text-2xl font-bold mb-4">IPL Ball by Ball Statistics</h2>
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

export default IPL;

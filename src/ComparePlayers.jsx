import React, { useState } from 'react';
import { Line, Radar } from 'react-chartjs-2';

// Hardcoded Players from India and Pakistan
const players = {
  India: [
    {
      name: 'Virat Kohli',
    
      battingStats: [50, 60, 70, 55, 80, 90, 40, 60, 78, 65, 55, 70, 80, 75, 60, 90, 55, 60, 50, 70],
      bowlingStats: [20, 25, 22, 18, 30, 15, 20, 25, 18, 20, 22, 20, 18, 30, 22, 25, 28, 15, 20, 18],
      fieldingStats: [80, 85, 90, 78, 88, 90, 85, 88, 80, 85, 90, 88, 85, 80, 85, 88, 90, 85, 80, 88],
      overallPerformance: [80, 75, 90, 85, 60]
    },
    {
      name: 'Rohit Sharma',
      img: 'https://source.unsplash.com/random/200x200?rohit',
      battingStats: [55, 60, 70, 65, 75, 85, 50, 65, 75, 70, 60, 75, 85, 78, 65, 80, 75, 70, 60, 75],
      bowlingStats: [25, 30, 20, 18, 28, 22, 25, 18, 22, 25, 18, 20, 28, 25, 30, 22, 28, 18, 22, 20],
      fieldingStats: [85, 88, 90, 85, 88, 85, 88, 90, 85, 88, 85, 90, 88, 85, 90, 85, 88, 90, 85, 88],
      overallPerformance: [85, 80, 88, 90, 75]
    }
    // Add more players from India
  ],
  Pakistan: [
    {
      name: 'Babar Azam',
      img: 'https://source.unsplash.com/random/200x200?babar',
      battingStats: [60, 70, 80, 55, 85, 90, 50, 70, 85, 75, 65, 80, 90, 88, 75, 85, 70, 75, 65, 85],
      bowlingStats: [30, 35, 28, 25, 35, 30, 28, 25, 30, 35, 28, 25, 30, 35, 28, 25, 30, 35, 28, 25],
      fieldingStats: [85, 90, 88, 85, 88, 85, 90, 88, 85, 90, 85, 88, 85, 90, 88, 85, 88, 90, 85, 88],
      overallPerformance: [85, 88, 90, 88, 80]
    },
    {
      name: 'Shaheen Afridi',
      img: 'https://source.unsplash.com/random/200x200?shaheen',
      battingStats: [45, 50, 60, 55, 65, 75, 40, 55, 65, 60, 50, 65, 75, 68, 55, 70, 65, 60, 50, 65],
      bowlingStats: [35, 38, 30, 28, 35, 30, 28, 35, 38, 30, 28, 35, 30, 38, 30, 28, 35, 38, 30, 28],
      fieldingStats: [80, 85, 88, 85, 80, 88, 85, 80, 88, 85, 90, 85, 88, 80, 85, 88, 80, 88, 85, 88],
      overallPerformance: [88, 85, 88, 85, 75]
    }
    // Add more players from Pakistan
  ]
};

// Generate Line chart data
const generateLineData = (label, data) => ({
  labels: Array(data.length).fill('Ball').map((_, i) => `Ball ${i + 1}`),
  datasets: [
    {
      label,
      data,
      borderColor: '#3b82f6',
      borderWidth: 2,
      fill: false,
    }
  ]
});

// Radar chart data
const generateRadarData = (player1, player2) => ({
  labels: ['Batting', 'Bowling', 'Fielding', 'Experience', 'Impact'],
  datasets: [
    {
      label: player1.name,
      data: player1.overallPerformance,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2
    },
    {
      label: player2.name,
      data: player2.overallPerformance,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }
  ]
});

const ComparePlayers = () => {
  const [selectedPlayer1, setSelectedPlayer1] = useState(players.India[0]);
  const [selectedPlayer2, setSelectedPlayer2] = useState(players.Pakistan[0]);

  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-xl font-bold mb-6">Compare Players</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Player 1 Card */}
        <div className="bg-gray-800 p-4 rounded shadow-lg">
          <h3 className="font-bold text-lg mb-2">Select Player 1 (India)</h3>
          <select
            className="bg-gray-700 p-2 mb-4 w-full"
            onChange={(e) => setSelectedPlayer1(players.India[e.target.value])}
          >
            {players.India.map((player, index) => (
              <option key={index} value={index}>
                {player.name}
              </option>
            ))}
          </select>
          <img src={selectedPlayer1.img} alt={selectedPlayer1.name} className="mb-4 w-48 h-48 mx-auto" />

          {/* Stats */}
          <div className="mb-4">
            <h4 className="text-sm font-bold">Batting Stats</h4>
            <Line data={generateLineData('Batting', selectedPlayer1.battingStats)} />
          </div>
          <div className="mb-4">
            <h4 className="text-sm font-bold">Bowling Stats</h4>
            <Line data={generateLineData('Bowling', selectedPlayer1.bowlingStats)} />
          </div>
          <div>
            <h4 className="text-sm font-bold">Fielding Stats</h4>
            <Line data={generateLineData('Fielding', selectedPlayer1.fieldingStats)} />
          </div>
        </div>

        {/* Player 2 Card */}
        <div className="bg-gray-800 p-4 rounded shadow-lg">
          <h3 className="font-bold text-lg mb-2">Select Player 2 (Pakistan)</h3>
          <select
            className="bg-gray-700 p-2 mb-4 w-full"
            onChange={(e) => setSelectedPlayer2(players.Pakistan[e.target.value])}
          >
            {players.Pakistan.map((player, index) => (
              <option key={index} value={index}>
                {player.name}
              </option>
            ))}
          </select>
          <img src={selectedPlayer2.img} alt={selectedPlayer2.name} className="mb-4 w-48 h-48 mx-auto" />

          {/* Stats */}
          <div className="mb-4">
            <h4 className="text-sm font-bold">Batting Stats</h4>
            <Line data={generateLineData('Batting', selectedPlayer2.battingStats)} />
          </div>
          <div className="mb-4">
            <h4 className="text-sm font-bold">Bowling Stats</h4>
            <Line data={generateLineData('Bowling', selectedPlayer2.bowlingStats)} />
          </div>
          <div>
            <h4 className="text-sm font-bold">Fielding Stats</h4>
            <Line data={generateLineData('Fielding', selectedPlayer2.fieldingStats)} />
          </div>
        </div>
      </div>

      {/* Radar Chart Comparison */}
      <div className="mt-8">
        <h3 className="font-bold text-lg mb-4">Overall Comparison</h3>
        <Radar data={generateRadarData(selectedPlayer1, selectedPlayer2)} />
      </div>
    </div>
  );
};

export default ComparePlayers;

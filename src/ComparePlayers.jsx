import React, { useEffect, useState } from 'react';
import { Line, Radar } from 'react-chartjs-2';

const ComparePlayers = () => {
  const playerIds = Array.from({ length: 100 }, (_, i) => i + 1);// Fixed player IDs for comparison
  const [selectedPlayer1, setSelectedPlayer1] = useState(1); // Default to player ID 1
  const [selectedPlayer2, setSelectedPlayer2] = useState(2); // Default to player ID 2
  const [playerStats, setPlayerStats] = useState({});
  const [playerNames, setPlayerNames] = useState({}); // Store player names

  // Fetch player stats based on selected player IDs
  const fetchPlayerStats = async (playerId) => {
    try {
      const response = await fetch(`https://jameagle.pythonanywhere.com/stats/performance/${playerId}?format=json`, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
      });
      const data = await response.json();
      
      // Store stats and names
      setPlayerStats((prevStats) => ({ ...prevStats, [playerId]: data }));
      setPlayerNames((prevNames) => ({ ...prevNames, [playerId]: data.player_name })); // Store player names
    } catch (error) {
      console.error(`Error fetching stats for player ${playerId}:`, error);
    }
  };

  // Load player stats when the component mounts or when player selections change
  useEffect(() => {
    fetchPlayerStats(selectedPlayer1);
    fetchPlayerStats(selectedPlayer2);
  }, [selectedPlayer1, selectedPlayer2]);

  // Prepare data for overall performance chart
  const overallData = {
    labels: ['Batting Score', 'Bowling Score', 'Impact Score', 'Player Rating'],
    datasets: [
      {
        label: playerStats[selectedPlayer1]?.player_name,
        data: [
          playerStats[selectedPlayer1]?.batting_score || 0,
          playerStats[selectedPlayer1]?.bowling_score || 0,
          playerStats[selectedPlayer1]?.impact_score || 0,
          playerStats[selectedPlayer1]?.player_rating || 0,
        ],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: playerStats[selectedPlayer2]?.player_name,
        data: [
          playerStats[selectedPlayer2]?.batting_score || 0,
          playerStats[selectedPlayer2]?.bowling_score || 0,
          playerStats[selectedPlayer2]?.impact_score || 0,
          playerStats[selectedPlayer2]?.player_rating || 0,
        ],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  // Generate radar chart data for overall comparison
  const generateRadarData = (player1Id, player2Id) => {
    return {
      labels: ['Batting Score', 'Bowling Score', 'Impact Score', 'Player Rating'],
      datasets: [
        {
          label: playerStats[player1Id]?.player_name,
          data: [
            playerStats[player1Id]?.batting_score || 0,
            playerStats[player1Id]?.bowling_score || 0,
            playerStats[player1Id]?.impact_score || 0,
            playerStats[player1Id]?.player_rating || 0,
          ],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: playerStats[player2Id]?.player_name,
          data: [
            playerStats[player2Id]?.batting_score || 0,
            playerStats[player2Id]?.bowling_score || 0,
            playerStats[player2Id]?.impact_score || 0,
            playerStats[player2Id]?.player_rating || 0,
          ],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-xl font-bold mb-6">Compare Players</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Player 1 Card */}
        <div className="bg-gray-800 p-4 rounded shadow-lg">
          <h3 className="font-bold text-lg mb-2">Select {playerNames[selectedPlayer1]}</h3> {/* Display player name */}
          <select
            className="bg-gray-700 p-2 mb-4 w-full"
            onChange={(e) => setSelectedPlayer1(playerIds[e.target.value])}
            value={playerIds.indexOf(selectedPlayer1)}
          >
            {playerIds.map((id) => (
              <option key={id} value={playerIds.indexOf(id)}>
                {playerNames[id] || `Player ${id}`} {/* Display player name or fallback */}
              </option>
            ))}
          </select>
        </div>

        {/* Player 2 Card */}
        <div className="bg-gray-800 p-4 rounded shadow-lg">
          <h3 className="font-bold text-lg mb-2">Select {playerNames[selectedPlayer2]}</h3> {/* Display player name */}
          <select
            className="bg-gray-700 p-2 mb-4 w-full"
            onChange={(e) => setSelectedPlayer2(playerIds[e.target.value])}
            value={playerIds.indexOf(selectedPlayer2)}
          >
            {playerIds.map((id) => (
              <option key={id} value={playerIds.indexOf(id)}>
                {playerNames[id] || `Player ${id}`} {/* Display player name or fallback */}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Player Stats Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Player 1 Stats */}
        <div className="bg-gray-800 p-4 rounded shadow-lg">
          <h4 className="font-bold mb-2">{playerStats[selectedPlayer1]?.player_name} Ratings</h4>
          <div className="mb-4">
            <h5 className="text-sm font-bold">Batting Score</h5>
            <div className="relative bg-gray-700 rounded h-4 mb-2">
              <div
                className="absolute bg-green-500 h-full rounded"
                style={{ width: `${(playerStats[selectedPlayer1]?.batting_score || 0) / 100 * 100}%` }}
              />
            </div>
          </div>
          <div className="mb-4">
            <h5 className="text-sm font-bold">Bowling Score</h5>
            <div className="relative bg-gray-700 rounded h-4 mb-2">
              <div
                className="absolute bg-green-500 h-full rounded"
                style={{ width: `${(playerStats[selectedPlayer1]?.bowling_score || 0) / 100 * 100}%` }}
              />
            </div>
          </div>
          <div className="mb-4">
            <h5 className="text-sm font-bold">Impact Score</h5>
            <div className="relative bg-gray-700 rounded h-4 mb-2">
              <div
                className="absolute bg-green-500 h-full rounded"
                style={{ width: `${(playerStats[selectedPlayer1]?.impact_score || 0) / 100 * 100}%` }}
              />
            </div>
          </div>
          <div className="mb-4">
            <h5 className="text-sm font-bold">Player Rating</h5>
            <div className="relative bg-gray-700 rounded h-4 mb-2">
              <div
                className="absolute bg-green-500 h-full rounded"
                style={{ width: `${(playerStats[selectedPlayer1]?.player_rating || 0) / 100 * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Player 2 Stats */}
        <div className="bg-gray-800 p-4 rounded shadow-lg">
          <h4 className="font-bold mb-2">{playerStats[selectedPlayer2]?.player_name} Ratings</h4>
          <div className="mb-4">
            <h5 className="text-sm font-bold">Batting Score</h5>
            <div className="relative bg-gray-700 rounded h-4 mb-2">
              <div
                className="absolute bg-green-500 h-full rounded"
                style={{ width: `${(playerStats[selectedPlayer2]?.batting_score || 0) / 100 * 100}%` }}
              />
            </div>
          </div>
          <div className="mb-4">
            <h5 className="text-sm font-bold">Bowling Score</h5>
            <div className="relative bg-gray-700 rounded h-4 mb-2">
              <div
                className="absolute bg-green-500 h-full rounded"
                style={{ width: `${(playerStats[selectedPlayer2]?.bowling_score || 0) / 100 * 100}%` }}
              />
            </div>
          </div>
          <div className="mb-4">
            <h5 className="text-sm font-bold">Impact Score</h5>
            <div className="relative bg-gray-700 rounded h-4 mb-2">
              <div
                className="absolute bg-green-500 h-full rounded"
                style={{ width: `${(playerStats[selectedPlayer2]?.impact_score || 0) / 100 * 100}%` }}
              />
            </div>
          </div>
          <div className="mb-4">
            <h5 className="text-sm font-bold">Player Rating</h5>
            <div className="relative bg-gray-700 rounded h-4 mb-2">
              <div
                className="absolute bg-green-500 h-full rounded"
                style={{ width: `${(playerStats[selectedPlayer2]?.player_rating || 0) / 100 * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Radar Chart Comparison */}
      <div className="mt-8 bg-gray-800 p-4 rounded shadow-lg">
        <h4 className="font-bold mb-4">Overall Comparison</h4>
        <Radar data={generateRadarData(selectedPlayer1, selectedPlayer2)} />
      </div>
      <div className="mt-8">
        <h3 className="font-bold text-lg mb-4">Player Ratings</h3>
        <table className="min-w-full bg-gray-800">
          <thead>
            <tr>
              <th className="py-2">Metric</th>
              <th className="py-2">{playerStats[selectedPlayer1]?.player_name}</th>
              <th className="py-2">{playerStats[selectedPlayer2]?.player_name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">Batting Score</td>
              <td className="py-2">{playerStats[selectedPlayer1]?.batting_score || 0}</td>
              <td className="py-2">{playerStats[selectedPlayer2]?.batting_score || 0}</td>
            </tr>
            <tr>
              <td className="py-2">Bowling Score</td>
              <td className="py-2">{playerStats[selectedPlayer1]?.bowling_score || 0}</td>
              <td className="py-2">{playerStats[selectedPlayer2]?.bowling_score || 0}</td>
            </tr>
            <tr>
              <td className="py-2">Impact Score</td>
              <td className="py-2">{playerStats[selectedPlayer1]?.impact_score || 0}</td>
              <td className="py-2">{playerStats[selectedPlayer2]?.impact_score || 0}</td>
            </tr>
            <tr>
              <td className="py-2">Player Rating</td>
              <td className="py-2">{playerStats[selectedPlayer1]?.player_rating || 0}</td>
              <td className="py-2">{playerStats[selectedPlayer2]?.player_rating || 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
            
    </div>
  );
};

export default ComparePlayers;

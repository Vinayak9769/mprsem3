import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2'; // Importing necessary chart type
import 'chart.js/auto'; // Chart.js auto initialization

const IPL = () => {
  const [matchStats, setMatchStats] = useState([]);
  const [error, setError] = useState(null);

  // Fetch data from the new API URL
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://111f-2402-e280-3d4e-368-d1b2-e86f-c446-935c.ngrok-free.app/stats/matches/team/Chennai%20Super%20Kings/?format=api',
          {
            headers: {
              'ngrok-skip-browser-warning': 'true',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setMatchStats(data); // Assuming the API response is correct
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  // Check if matchStats has any content before rendering the table or charts
  if (!matchStats || matchStats.length === 0) {
    return <p>Loading match data...</p>;
  }

  // Prepare data for the graph (e.g., runs by player)
  const runsData = {
    labels: matchStats.map(match => match.player_name), // Assuming player_name exists
    datasets: [
      {
        label: 'Runs Scored',
        data: matchStats.map(match => match.runs_scored), // Assuming runs_scored exists
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      {/* Table of match statistics */}
      <div className="bg-white rounded shadow-md p-4 w-full">
        <h2 className="text-2xl font-bold mb-4">Chennai Super Kings Match Statistics</h2>

        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Player Name</th>
                <th className="border px-4 py-2">Runs Scored</th>
                <th className="border px-4 py-2">Wickets Taken</th>
                <th className="border px-4 py-2">Strike Rate</th>
              </tr>
            </thead>
            <tbody>
              {matchStats.map((match, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{match.player_name}</td>
                  <td className="border px-4 py-2">{match.runs_scored}</td>
                  <td className="border px-4 py-2">{match.wickets_taken}</td>
                  <td className="border px-4 py-2">{match.strike_rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Chart displaying runs scored */}
      <div className="bg-white rounded shadow-md p-4 w-full mt-4">
        <h3 className="font-bold mb-2">Runs Scored by Players</h3>
        <Bar data={runsData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default IPL;

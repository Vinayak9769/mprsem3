import React, { useState } from 'react';


const matchesData = [
  { id: 1, teams: 'India vs Australia', date: '2024-10-20', type: 'upcoming' },
  { id: 2, teams: 'India vs Pakistan', date: '2024-11-05', type: 'upcoming' },
  { id: 3, teams: 'India vs England', date: '2023-08-10', type: 'past' },
  { id: 4, teams: 'India vs South Africa', date: '2023-07-15', type: 'past' },
  { id: 5, teams: 'Australia vs New Zealand', date: '2024-12-02', type: 'upcoming' },
  { id: 6, teams: 'Pakistan vs England', date: '2023-09-10', type: 'past' },
  { id: 7, teams: 'South Africa vs West Indies', date: '2024-11-22', type: 'upcoming' },
  { id: 8, teams: 'Sri Lanka vs Bangladesh', date: '2024-12-12', type: 'upcoming' },
  { id: 9, teams: 'Afghanistan vs Zimbabwe', date: '2024-10-30', type: 'upcoming' },
  { id: 10, teams: 'New Zealand vs England', date: '2024-10-18', type: 'upcoming' },
  { id: 11, teams: 'India vs Afghanistan', date: '2024-11-05', type: 'upcoming' },
  { id: 12, teams: 'England vs West Indies', date: '2024-12-01', type: 'upcoming' },
  { id: 13, teams: 'Pakistan vs South Africa', date: '2023-08-18', type: 'past' },
  { id: 14, teams: 'Australia vs Sri Lanka', date: '2023-06-22', type: 'past' },
  { id: 15, teams: 'Bangladesh vs Zimbabwe', date: '2024-09-29', type: 'upcoming' },
  { id: 16, teams: 'India vs Sri Lanka', date: '2023-07-11', type: 'past' },
  { id: 17, teams: 'New Zealand vs Pakistan', date: '2024-12-25', type: 'upcoming' },
  { id: 18, teams: 'England vs South Africa', date: '2024-01-15', type: 'upcoming' },
  { id: 19, teams: 'West Indies vs Bangladesh', date: '2024-02-28', type: 'upcoming' },
  { id: 20, teams: 'Afghanistan vs Ireland', date: '2024-03-05', type: 'upcoming' },
  { id: 21, teams: 'Sri Lanka vs Afghanistan', date: '2024-10-05', type: 'upcoming' },
  { id: 22, teams: 'India vs Bangladesh', date: '2024-12-07', type: 'upcoming' },
  { id: 23, teams: 'Australia vs England', date: '2024-10-10', type: 'upcoming' },
  { id: 24, teams: 'Pakistan vs Afghanistan', date: '2024-11-20', type: 'upcoming' },
  { id: 25, teams: 'India vs New Zealand', date: '2023-05-17', type: 'past' },
  { id: 26, teams: 'Bangladesh vs West Indies', date: '2024-09-30', type: 'upcoming' },
  { id: 27, teams: 'Sri Lanka vs England', date: '2023-07-19', type: 'past' },
  { id: 28, teams: 'India vs Australia', date: '2024-11-11', type: 'upcoming' },
  { id: 29, teams: 'Pakistan vs Zimbabwe', date: '2024-12-15', type: 'upcoming' },
  { id: 30, teams: 'South Africa vs New Zealand', date: '2024-10-08', type: 'upcoming' },

  // More unique matches:
  { id: 31, teams: 'India vs Ireland', date: '2024-12-22', type: 'upcoming' },
  { id: 32, teams: 'Australia vs West Indies', date: '2023-06-30', type: 'past' },
  { id: 33, teams: 'Pakistan vs Bangladesh', date: '2024-07-13', type: 'upcoming' },
  { id: 34, teams: 'South Africa vs Sri Lanka', date: '2024-05-11', type: 'past' },
  { id: 35, teams: 'England vs Afghanistan', date: '2024-12-01', type: 'upcoming' },
  { id: 36, teams: 'New Zealand vs Zimbabwe', date: '2024-09-20', type: 'upcoming' },
  { id: 37, teams: 'Bangladesh vs Sri Lanka', date: '2023-11-18', type: 'past' },
  { id: 38, teams: 'West Indies vs India', date: '2024-12-25', type: 'upcoming' },
  { id: 39, teams: 'Afghanistan vs England', date: '2024-09-09', type: 'upcoming' },
  { id: 40, teams: 'Sri Lanka vs Pakistan', date: '2024-06-15', type: 'past' },

  // Continues with unique team matchups (up to 200 matches):
  { id: 41, teams: 'Australia vs Afghanistan', date: '2024-08-22', type: 'upcoming' },
  { id: 42, teams: 'India vs Pakistan', date: '2023-05-30', type: 'past' },
  { id: 43, teams: 'New Zealand vs South Africa', date: '2024-10-16', type: 'upcoming' },
  { id: 44, teams: 'Sri Lanka vs Ireland', date: '2024-12-14', type: 'upcoming' },
  { id: 45, teams: 'Bangladesh vs Afghanistan', date: '2023-09-21', type: 'past' },
  { id: 46, teams: 'India vs West Indies', date: '2024-07-19', type: 'upcoming' },
  { id: 47, teams: 'Australia vs New Zealand', date: '2024-08-18', type: 'upcoming' },
  { id: 48, teams: 'Pakistan vs South Africa', date: '2024-01-12', type: 'upcoming' },
  { id: 49, teams: 'India vs Bangladesh', date: '2024-11-25', type: 'upcoming' },
  { id: 50, teams: 'West Indies vs Afghanistan', date: '2024-12-04', type: 'upcoming' },

  { id: 51, teams: 'South Africa vs Ireland', date: '2023-07-28', type: 'past' },
  { id: 52, teams: 'Sri Lanka vs England', date: '2024-12-03', type: 'upcoming' },
  { id: 53, teams: 'India vs Sri Lanka', date: '2024-12-20', type: 'upcoming' },
  { id: 54, teams: 'Pakistan vs Bangladesh', date: '2024-08-07', type: 'upcoming' },
  { id: 55, teams: 'Afghanistan vs New Zealand', date: '2023-10-20', type: 'past' },
  { id: 56, teams: 'Australia vs South Africa', date: '2024-09-29', type: 'upcoming' },
  { id: 57, teams: 'India vs England', date: '2024-01-25', type: 'upcoming' },
  { id: 58, teams: 'New Zealand vs West Indies', date: '2024-11-19', type: 'upcoming' },
  { id: 59, teams: 'South Africa vs Zimbabwe', date: '2024-09-17', type: 'upcoming' },
  { id: 60, teams: 'India vs Australia', date: '2023-07-30', type: 'past' },

  // Add up to 200 total matches here
  { id: 61, teams: 'Ireland vs West Indies', date: '2024-10-09', type: 'upcoming' },
  { id: 62, teams: 'Bangladesh vs Australia', date: '2024-11-21', type: 'upcoming' },
  { id: 63, teams: 'Pakistan vs New Zealand', date: '2024-06-05', type: 'past' },
  // Continue hardcoding up to 200 matches in the same format
];



const mainTeams = [
  'India', 'Australia', 'Pakistan', 'England', 'South Africa', 'New Zealand',
  'West Indies', 'Sri Lanka', 'Bangladesh', 'Afghanistan', 'Zimbabwe',
];

const Find = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    upcoming: true,
    past: false,
  });
  const [selectedTeams, setSelectedTeams] = useState(
    mainTeams.reduce((acc, team) => ({ ...acc, [team]: true }), {})
  );

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleFilterChange = (e) => {
    setSelectedFilters({
      ...selectedFilters,
      [e.target.name]: e.target.checked,
    });
  };

  const handleTeamFilterChange = (e) => {
    setSelectedTeams({
      ...selectedTeams,
      [e.target.name]: e.target.checked,
    });
  };

  const isAllTeamsUnchecked = !Object.values(selectedTeams).includes(true);

  const filteredMatches = matchesData.filter((match) => {
    const isUpcoming = selectedFilters.upcoming && match.type === 'upcoming';
    const isPast = selectedFilters.past && match.type === 'past';
    const teamFilter = isAllTeamsUnchecked || Object.keys(selectedTeams).some(
      (team) => selectedTeams[team] && match.teams.includes(team)
    );
    const searchMatch = match.teams.toLowerCase().includes(searchTerm.toLowerCase());

    return (isUpcoming || isPast) && teamFilter && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white flex p-4">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 p-4 rounded-md shadow-md">
        <h2 className="font-bold text-lg mb-4">Filters</h2>

        {/* Upcoming/Past Matches */}
        <h3 className="font-bold text-md mb-2">Match Type</h3>
        <div className="space-y-2 mb-4">
          <label className="block">
            <input
              type="checkbox"
              name="upcoming"
              checked={selectedFilters.upcoming}
              onChange={handleFilterChange}
              className="mr-2 bg-gray-700 text-gray-300 border-gray-600 rounded"
            />
            Upcoming
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="past"
              checked={selectedFilters.past}
              onChange={handleFilterChange}
              className="mr-2 bg-gray-700 text-gray-300 border-gray-600 rounded"
            />
            Past
          </label>
        </div>

        {/* Team Filters */}
        <h3 className="font-bold text-md mb-2">Teams</h3>
        <div className="space-y-2">
          {mainTeams.map((team) => (
            <label className="block" key={team}>
              <input
                type="checkbox"
                name={team}
                checked={selectedTeams[team]}
                onChange={handleTeamFilterChange}
                className="mr-2 bg-gray-700 text-gray-300 border-gray-600 rounded"
              />
              {team}
            </label>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-4">
        <h2 className="font-bold text-lg mb-4">Find Matches</h2>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search matches..."
            className="w-full p-2 bg-gray-700 rounded-md text-white"
          />
        </div>

        {/* Matches List */}
        <div className="overflow-auto h-96 bg-gray-800 p-4 rounded-md shadow-md">
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match) => (
              <div key={match.id} className="bg-gray-700 p-4 mb-4 rounded-md">
                <h3 className="font-bold">{match.teams}</h3>
                <p>{match.date}</p>
              </div>
            ))
          ) : (
            <p>No matches found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Find;

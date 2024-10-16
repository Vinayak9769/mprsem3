import React from 'react';
import { NavLink } from 'react-router-dom';
import TypingAnimation from './TypingAnimation';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0c0e2b] text-white">
      {/* Hero Section with Background Image */}
      <div
        className="relative bg-cover bg-center h-screen opacity-80"
        style={{ backgroundImage: 'url(src/yogendra-singh-qpAShp6RR0Y-unsplash.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50" /> {/* Black gradient overlay */}

        {/* Typing Animation */}
        <div className="relative z-20 flex justify-center items-center h-full">
          <TypingAnimation />
        </div>

        {/* Current/Upcoming Matches Section */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 w-11/12 lg:w-3/4 bg-[#1c2038] bg-opacity-90 p-6 rounded-lg shadow-lg">
          <h2 className="font-bold text-xl mb-4">Upcoming Matches</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Example Matches */}
            <div className="bg-[#232743] p-4 rounded-lg shadow-md">
              <span className="text-sm text-gray-400">Nepal vs Namibia</span>
              <span className="block font-bold text-lg mt-2">14th February</span>
            </div>
            <div className="bg-[#232743] p-4 rounded-lg shadow-md">
              <span className="text-sm text-gray-400">India vs UAE</span>
              <span className="block font-bold text-lg mt-2">16th February</span>
            </div>
            <div className="bg-[#232743] p-4 rounded-lg shadow-md">
              <span className="text-sm text-gray-400">Nepal vs India</span>
              <span className="block font-bold text-lg mt-2">18th February</span>
            </div>
            <div className="bg-[#232743] p-4 rounded-lg shadow-md">
              <span className="text-sm text-gray-400">India vs PNG</span>
              <span className="block font-bold text-lg mt-2">20th February</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-6 p-6 bg-[#0c0e2b]">
        {/* Sidebar (Left) */}
        <aside className="w-full md:w-1/4 bg-[#232743] p-6 rounded-lg shadow-lg">
          {/* Key Leagues Section */}
          <h2 className="font-bold text-lg mb-4">Key Leagues</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <img src="ipl-logo.png" alt="IPL" className="w-8 h-8" />
              <NavLink
                to="/ipl"
                className="hover:text-blue-400"
                activeClassName="font-bold"
              >
                Indian Premier League
              </NavLink>
            </li>
            <li className="flex items-center space-x-3">
              <img src="bbl-logo.png" alt="BBL" className="w-8 h-8" />
              <NavLink
                to="/bbl"
                className="hover:text-blue-400"
                activeClassName="font-bold"
              >
                Big Bash League
              </NavLink>
            </li>
            <li className="flex items-center space-x-3">
              <img src="t20blast-logo.png" alt="T20 Blast" className="w-8 h-8" />
              <NavLink
                to="/t20-blast"
                className="hover:text-blue-400"
                activeClassName="font-bold"
              >
                T20 Blast
              </NavLink>
            </li>
            <li className="flex items-center space-x-3">
              <img src="psl-logo.png" alt="PSL" className="w-8 h-8" />
              <NavLink
                to="/psl"
                className="hover:text-blue-400"
                activeClassName="font-bold"
              >
                Pakistan Super League
              </NavLink>
            </li>
            <li className="flex items-center space-x-3">
              <img src="cpl-logo.png" alt="CPL" className="w-8 h-8" />
              <NavLink
                to="/cpl"
                className="hover:text-blue-400"
                activeClassName="font-bold"
              >
                Caribbean Premier League
              </NavLink>
            </li>
            <li className="flex items-center space-x-3">
              <img src="lpl-logo.png" alt="LPL" className="w-8 h-8" />
              <NavLink
                to="/lpl"
                className="hover:text-blue-400"
                activeClassName="font-bold"
              >
                Lanka Premier League
              </NavLink>
            </li>
          </ul>

          {/* Top International Section */}
          <h2 className="font-bold text-lg mt-8 mb-4">Top International</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span role="img" aria-label="trophy">🏆</span>
              <NavLink
                to="/wt20"
                className="hover:text-blue-400"
                activeClassName="font-bold"
              >
                WT20 WC
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ind-vs-aus"
                className="hover:text-blue-400"
                activeClassName="font-bold"
              >
                Ind Vs Aus
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nz-vs-eng"
                className="hover:text-blue-400"
                activeClassName="font-bold"
              >
                NZ Vs Eng
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/uae-vs-nam"
                className="hover:text-blue-400"
                activeClassName="font-bold"
              >
                UAE Vs Nam
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/eng-w-vs-rsa-w"
                className="hover:text-blue-400"
                activeClassName="font-bold"
              >
                Eng W Vs RSA W
              </NavLink>
            </li>
          </ul>
        </aside>

        {/* Main Content (Middle) */}
        <main className="w-full md:w-1/2 bg-[#1c2038] p-6 rounded-lg shadow-lg">
          <h2 className="font-bold text-xl mb-6">Indian Premier League</h2>

          {/* Match 1 */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-lg">Gujarat Titan</span>
              <span className="font-bold text-lg">171/8 (20)</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-lg">Royal Challengers Bangalore</span>
              <span className="font-bold text-lg">160/6 (18.5)</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">RCB needs 12 runs in 7 balls</p>
          </div>

          {/* Match 2 */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-lg">Chennai Super Kings</span>
              <span className="font-bold text-lg">171/8 (20)</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-lg">Kolkata Knight Riders</span>
              <span className="font-bold text-lg">160/6 (20)</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">CSK won by 12 runs</p>
          </div>
        </main>

        {/* Sidebar (Right) */}
        <aside className="w-full md:w-1/4 bg-[#232743] p-6 rounded-lg shadow-lg">
          {/* Top News */}
          <div className="mb-8">
            <h2 className="font-bold text-lg mb-4">Top News</h2>
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/article/ipl-final"
                  className="hover:text-blue-400"
                  activeClassName="font-bold"
                >
                  IPL Final: Gujarat Titan lifts the trophy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/article/pak-beats-afg"
                  className="hover:text-blue-400"
                  activeClassName="font-bold"
                >
                  Pakistan beats Afghanistan in a thrilling contest
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/article/eng-vs-rsa"
                  className="hover:text-blue-400"
                  activeClassName="font-bold"
                >
                  England vs RSA: Semifinal clash set
                </NavLink>
              </li>
            </ul>
          </div>

          
         
        </aside>
        
      </div>
      {/* News Section in a Sporty Grid Format */}
<div className="bg-[#1c2038] p-6 rounded-lg shadow-lg mt-8">
  <h2 className="text-xl font-bold mb-6 text-white">Latest Sports News</h2>

  {/* News Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* News Card 1 */}
    <div className="bg-[#232743] p-4 rounded-lg hover:bg-[#2b305c] transition duration-300 ease-in-out">
      <img
        src="news-img1.jpg"
        alt="News 1"
        className="w-full h-32 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-blue-400 mb-2">
        India Wins the T20 World Cup
      </h3>
      <p className="text-gray-400 text-sm">
        In a thrilling final, India clinched the T20 World Cup, defeating Australia by 7 wickets. The victory marks India's third title win in T20 history.
      </p>
      <a href="/news/india-wins-t20" className="block mt-4 text-blue-300 font-semibold hover:text-blue-400">
        Read More
      </a>
    </div>

    {/* News Card 2 */}
    <div className="bg-[#232743] p-4 rounded-lg hover:bg-[#2b305c] transition duration-300 ease-in-out">
      <img
        src="news-img2.jpg"
        alt="News 2"
        className="w-full h-32 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-blue-400 mb-2">
        Nepal Qualifies for the Cricket World Cup
      </h3>
      <p className="text-gray-400 text-sm">
        Nepal has secured a spot in the upcoming Cricket World Cup after an impressive series of wins in the qualifying rounds.
      </p>
      <a href="/news/nepal-qualifies-wc" className="block mt-4 text-blue-300 font-semibold hover:text-blue-400">
        Read More
      </a>
    </div>

    {/* News Card 3 */}
    <div className="bg-[#232743] p-4 rounded-lg hover:bg-[#2b305c] transition duration-300 ease-in-out">
      <img
        src="src\download5.jpg"
        alt="News 3"
        className="w-full h-32 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-blue-400 mb-2">
        IPL: Mumbai Indians Beat Chennai Super Kings
      </h3>
      <p className="text-gray-400 text-sm">
        Mumbai Indians pulled off a dramatic win against CSK in the last over to keep their playoff hopes alive in the ongoing IPL season.
      </p>
      <a href="https://www.hindustantimes.com/cricket/mumbai-indians-first-team-to-get-knocked-out-of-ipl-2024-playoffs-race-after-srh-crush-lsg-in-historic-win-101715189992900.html" className="block mt-4 text-blue-300 font-semibold hover:text-blue-400">
        Read More
      </a>
    </div>

    {/* News Card 4 */}
    <div className="bg-[#232743] p-4 rounded-lg hover:bg-[#2b305c] transition duration-300 ease-in-out">
      <img
        src="src\download (3).jpg"
        alt="News 4"
        className="w-full h-32 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-blue-400 mb-2">
        Pakistan vs South Africa: Test Series Results
      </h3>
      <p className="text-gray-400 text-sm">
        South Africa triumphed over Pakistan in a tightly contested Test series, winning 2-1 after an intense final match.
      </p>
      <a href="/news/pak-vs-sa" className="block mt-4 text-blue-300 font-semibold hover:text-blue-400">
        Read More
      </a>
    </div>

    {/* News Card 5 */}
    <div className="bg-[#232743] p-4 rounded-lg hover:bg-[#2b305c] transition duration-300 ease-in-out">
      <img
        src="src\download (2).jpg"
        alt="News 5"
        className="w-full h-32 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-blue-400 mb-2">
        England Women's Team Sets New Record
      </h3>
      <p className="text-gray-400 text-sm">
        England's women's cricket team set a new world record with the highest team score in T20 history, dominating their match against New Zealand.
      </p>
      <a href="/news/eng-womens-record" className="block mt-4 text-blue-300 font-semibold hover:text-blue-400">
        Read More
      </a>
    </div>

    {/* News Card 6 */}
    <div className="bg-[#232743] p-4 rounded-lg hover:bg-[#2b305c] transition duration-300 ease-in-out">
      <img
        src="src\download.jpg"
        alt="News 6"
        className="w-full h-32 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-blue-400 mb-2">
        Australia Announces Squad for Ashes 2024
      </h3>
      <p className="text-gray-400 text-sm">
        Australia has unveiled its squad for the 2024 Ashes series, featuring a mix of experienced players and exciting new talent.
      </p>
      <a href="/news/ashes-squad-2024" className="block mt-4 text-blue-300 font-semibold hover:text-blue-400">
        Read More
      </a>
    </div>
  </div>
</div>

      
    </div>
  );
};

export default Home;

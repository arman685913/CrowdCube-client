import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip'; // <-- import react-tooltip
import 'react-tooltip/dist/react-tooltip.css'; // <-- import CSS

const Campaigns = () => {
  const campaigns = useLoaderData();
  const [allCampaigns, setAllCampaigns] = useState(campaigns);
  
  const handleSortAscending = () => {
      const sortData = [...allCampaigns].sort((a,b) => a.amount - b.amount);
      setAllCampaigns(sortData)
      toast.info("Sorted by ascending donation amount");
  }
  const handleSortE = () => {
      setAllCampaigns(campaigns)
      toast.info("Reset to original order");
  }
  const handleSortD = () => {
      const sortData = [...allCampaigns].sort((a,b) => b.amount - a.amount);
      setAllCampaigns(sortData)
      toast.info("Sorted by descending donation amount"); 
  }

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10">
      <div className='mb-4 flex justify-between items-center'>
        <h1 className='font-bold text-xl md:text-2xl lg:text-3xl dark:text-white text-green-700 '>
          <span>
            <Typewriter
              words={['All Campaigns']}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="~"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        {/* Sorting Buttons */}
        <div className='flex gap-2 items-center'>
          <p className='text-red-500 text-sm border px-1'>Sorting</p>

          <button 
            data-tooltip-id="reset-tooltip"
            data-tooltip-content="Reset to original order"
            onClick={handleSortE}  
            className='px-2 cursor-pointer text-green-600 text-xs border rounded-full'
          >↔</button>

          <button 
            data-tooltip-id="asc-tooltip"
            data-tooltip-content="Sort by ascending donation"
            onClick={handleSortAscending} 
            className='px-2 cursor-pointer text-yellow-600 text-xs border rounded-full'
          >↓</button>

          <button 
            data-tooltip-id="desc-tooltip"
            data-tooltip-content="Sort by descending donation"
            onClick={handleSortD}  
            className='px-2 cursor-pointer text-red-600 text-xs border rounded-full'
          >↑</button>

          {/* Tooltips */}
          <Tooltip id="reset-tooltip" place="top" />
          <Tooltip id="asc-tooltip" place="top" />
          <Tooltip id="desc-tooltip" place="top" />
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="table w-full border border-green-300">
          <thead className="bg-green-100 dark:bg-black">
            <tr>
              <th>Active</th>
              <th>Name</th>
              <th>Type</th>
              <th>Deadline</th>
              <th>Donation</th>
              <th>Author</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {allCampaigns.map((campaign, index) => (
              <tr key={index} className="hover:bg-gray-100 dark:hover:bg-black/30">
                <th>
                  <input
                    type="checkbox"
                    readOnly
                    className="checkbox checkbox-success"
                    checked={new Date(campaign.date) >= new Date()}
                  />
                </th>
                <td className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={campaign.photo} alt={campaign.Campaign} />
                    </div>
                  </div>
                  <span className="font-bold">{campaign.Campaign}</span>
                </td>
                <td>{campaign.type}</td>
                <td className="text-sm">{campaign.date}</td>
                <td className='font-medium'>{campaign.amount} Tk</td>
                <td>{campaign.name}</td>
                <td>
                  <Link
                    to={`/campaigns/${campaign._id}`}
                    className="btn btn-sm text-green-600 btn-outline hover:bg-green-600 hover:text-white"
                  >
                    See More
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden grid grid-cols-1 gap-6">
        {allCampaigns.map((campaign, index) => (
          <div key={index} className="bg-white dark:bg-black rounded-lg shadow-md p-4 flex flex-col">
            <div className="relative">
              <img
                src={campaign.photo}
                alt={campaign.Campaign}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="absolute top-2 right-2">
                <input
                  type="checkbox"
                  readOnly
                  className="checkbox checkbox-success"
                  checked={new Date(campaign.date) >= new Date()}
                />
              </div>
            </div>
            <h2 className="mt-2 font-bold text-lg">{campaign.Campaign}</h2>
            <p className="text-sm text-gray-600 dark:text-white/70">Type: {campaign.type}</p>
            <p className="text-sm text-gray-600 dark:text-white/70">Deadline: {campaign.date}</p>
            <p className="text-sm text-gray-600 dark:text-white/70">Min. Donation: {campaign.amount} Tk</p>
            <p className="text-sm text-gray-600 dark:text-white/70">Author: {campaign.name}</p>
            <Link
              to={`/campaigns/${campaign._id}`}
              className="btn btn-xs mt-2 text-green-600 btn-outline hover:bg-green-600 hover:text-white"
            >
              See More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;

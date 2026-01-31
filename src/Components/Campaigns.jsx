import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Campaigns = () => {
  const campaigns = useLoaderData();
  const [allCampaigns, setAllCampaigns] = useState(campaigns);

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10">
      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="table w-full border border-green-300">
          <thead className="bg-green-100">
            <tr>
              <th>Active</th>
              <th>Name</th>
              <th>Type</th>
              <th>Deadline</th>
              <th>Donation</th>
              <th>Author</th>
              <th >Details</th>
            </tr>
          </thead>
          <tbody>
            {allCampaigns.map((campaign, index) => (
              <tr key={index} className="hover:bg-gray-100">
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
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
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
            <p className="text-sm text-gray-600">Type: {campaign.type}</p>
            <p className="text-sm text-gray-600">Deadline: {campaign.date}</p>
            <p className="text-sm text-gray-600">Min. Donation: {campaign.amount} Tk</p>
            <p className="text-sm text-gray-600">Author: {campaign.name}</p>
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

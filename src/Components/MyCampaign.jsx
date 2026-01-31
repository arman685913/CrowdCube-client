import React, { useContext } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';
import { useState } from 'react';


const MyCampaign = () => {

  const campaigns = useLoaderData()

  const [allCampaigns ,setAllCampaigns] = useState(campaigns)

  const {user} = useContext(AuthContext)

  const myCampaigns = allCampaigns.filter(campaign => campaign.email == user.email)

    return (

      <div className="px-4 md:px-10 lg:px-20 py-10">

      {myCampaigns?.length === 0 ?
      
      <div className='flex justify-center items-center border rounded-4xl px-4 md:px-10 lg:px-20 py-10  border-green-300'>
      <p>You have no campaign running yet.</p>

      </div> :
      <div>

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
              <th>Update</th>
              <th >Delete</th>
            </tr>
          </thead>
          <tbody>
            
            {myCampaigns.map((campaign, index) => (
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
                <td>
                  <Link
                    to={`/campaigns/${campaign._id}`}
                    className="btn btn-sm text-green-600 btn-outline hover:bg-green-600 hover:text-white"
                  >
                    Edit
                  </Link></td>
                <td>
                  <Link
                    to={`/campaigns/${campaign._id}`}
                    className="btn btn-sm text-red-600 btn-outline hover:bg-green-600 hover:text-white"
                  >
                    X
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden grid grid-cols-1 gap-6">
        {myCampaigns.map((campaign, index) => (
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
            <div>
            <Link
              to={`/campaigns/${campaign._id}`}
              className="btn btn-xs mt-2 text-green-600 btn-outline hover:bg-green-600 hover:text-white"
              >
              Update
            </Link>
            <Link
              to={`/campaigns/${campaign._id}`}
              className="btn btn-xs mt-2 text-red-600 btn-outline hover:bg-green-600 hover:text-white ml-2"
              >
              Delete
            </Link>
              </div>
          </div>
        ))}
      </div>

    </div>
        }

    </div>
    );
};

export default MyCampaign;
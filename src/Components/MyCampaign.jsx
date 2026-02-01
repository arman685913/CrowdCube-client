import React, { useContext, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const MyCampaign = () => {

  const campaigns = useLoaderData();
  const [allCampaigns, setAllCampaigns] = useState(campaigns);

  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {

      if (!result.isConfirmed) return;

      fetch(`http://localhost:3000/campaigns/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {

          if (data.deletedCount > 0) {

            const remaining = allCampaigns.filter(
              campaign => campaign._id !== id
            );

            setAllCampaigns(remaining);

            Swal.fire({
              title: "Deleted!",
              text: "Your campaign has been deleted.",
              icon: "success"
            });

            toast.success("Campaign deleted successfully");
          }

        })
        .catch(() => {
          toast.error("Failed to delete campaign");
        });

    });

  };


  const myCampaigns = allCampaigns.filter(
    campaign => campaign.email === user?.email
  );

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10">

      {myCampaigns.length === 0 ? (
        <div className="flex justify-center items-center border rounded-4xl px-4 md:px-10 lg:px-20 py-10 border-green-300">
          <p>You have no campaign running yet.</p>
        </div>
      ) : (
        <div>

          {/* Desktop Table */}
          <div className="hidden md:block">
            <table className="table w-full border  border-green-300">
              <thead className="bg-green-100 dark:bg-black">
                <tr>
                  <th>Active</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Deadline</th>
                  <th>Donation</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {myCampaigns.map(campaign => (
                  <tr key={campaign._id} className="hover:bg-gray-100 dark:hover:bg-black/30">
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
                    <td className="text-sm">
                      {new Date(campaign.date).toLocaleDateString()}
                    </td>
                    <td className="font-medium">{campaign.amount} Tk</td>

                    <td>
                      <Link
                        to={`/update/${campaign._id}`}
                        className="btn btn-sm text-green-600 btn-outline hover:bg-green-600 hover:text-white"
                      >
                        Edit
                      </Link>
                    </td>

                    <td>
                      <button
                        onClick={() => handleDelete(campaign._id)}
                        className="btn btn-sm text-red-600 px-5 btn-outline hover:bg-red-600 hover:text-white"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden grid grid-cols-1 gap-6">
            {myCampaigns.map(campaign => (
              <div key={campaign._id} className="bg-white dark:bg-black rounded-lg shadow-md p-4">
                <img
                  src={campaign.photo}
                  alt={campaign.Campaign}
                  className="w-full h-48 object-cover rounded-md"
                />

                <h2 className="mt-2 font-bold text-lg">{campaign.Campaign}</h2>
                <p className="text-sm text-gray-600">Type: {campaign.type}</p>
                <p className="text-sm text-gray-600">Deadline: {new Date(campaign.date).toLocaleDateString()}</p>
                <p className="text-sm text-gray-600">
                  Min. Donation: {campaign.amount} Tk
                </p>

                <div className="mt-2">
                  <Link
                    to={`/update/${campaign._id}`}
                    className="btn btn-xs text-green-600 btn-outline hover:bg-green-600 hover:text-white"
                  >
                    Update
                  </Link>

                  <button
                    onClick={() => handleDelete(campaign._id)}
                    className="btn btn-xs text-red-600 btn-outline hover:bg-red-600 hover:text-white ml-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default MyCampaign;

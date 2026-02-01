import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';
import { toast } from 'react-toastify';

const Details = () => {
    const { user } = useContext(AuthContext);
    const campaign = useLoaderData();
    const [donated, setDonated] = useState(false);

    const isActive = new Date(campaign.date) >= new Date();

    const handleDonate = () => {

        if (!isActive) {
            toast.error("Sorry, the campaign deadline is over. You can't donate.");
            return
        }

        const donationData = {
            campaignId: campaign._id,
            campaignName: campaign.Campaign,
            amount: campaign.amount,
            userEmail: user.email,
            userName: user.displayName,
            donatedAt: new Date().toISOString()
        };

        fetch('https://crowdcube-server.onrender.com/donated', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(donationData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Donation recorded successfully!");
                    setDonated(true);
                }
            })
            .catch(error => toast.error("Something went wrong!"));
    };

    return (
        <div className="max-w-6xl mx-auto p-4 lg:p-10">
            <div className="bg-white shadow-lg rounded-lg dark:bg-black  overflow-hidden md:flex md:flex-row flex-col">

                {/* Campaign Image */}
                <div className="md:w-1/2 w-full h-64 md:h-auto">
                    <img
                        src={campaign.photo}
                        alt={campaign.Campaign}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Campaign Details */}
                <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-green-700">{campaign.Campaign}</h1>
                        <p className="mt-4 text-gray-700 dark:text-white text-sm md:text-base">{campaign.description}</p>

                        <div className="mt-6 space-y-2 text-gray-800 dark:text-white">
                            <p><span className="font-semibold">Type:</span> {campaign.type}</p>
                            <p><span className="font-semibold">Minimum Donation:</span> {campaign.amount} Tk</p>

                            <p><span className="font-semibold">Deadline:</span> {new Date(campaign.date).toLocaleDateString()}</p>

                            <p><span className="font-semibold">Author:</span> {campaign.name}</p>
                            <p><span className="font-semibold">Email:</span> {campaign.email}</p>
                            <p>
                                <span className="font-semibold">Status:</span>
                                {isActive ?
                                    <span className="ml-2 px-2 py-1 text-green-600 border border-green-600 rounded-full text-sm">Active</span> :
                                    <span className="ml-2 px-2 py-1 text-red-600 border border-red-600 rounded-full text-sm">Inactive</span>
                                }
                            </p>
                        </div>
                    </div>

                    {/* Donate Button */}
                    <div className="mt-6 flex justify-end">
                        <Link to='/campaigns' className='btn mr-2'>Back</Link>
                        <button
                            onClick={handleDonate}
                            className={`btn px-6 py-2 rounded-lg text-white font-semibold transition
                            ${isActive && !donated ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'}`}
                        >
                            {donated ? "Thank You!" : "Donate Now!"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;

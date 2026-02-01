import React, { useContext, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';
import { Typewriter } from 'react-simple-typewriter';

const Donation = () => {

    const donations = useLoaderData();
    const [allDonations, setAllDonations] = useState(donations);

    const { user } = useContext(AuthContext);

    const myDonations = allDonations.filter(
        donation => donation.userEmail === user?.email
    );

    return (
        <div className="px-4 md:px-10 lg:px-20 py-10">
            <h1 className='font-bold text-xl  md:text-2xl lg:text-3xl dark:text-white text-green-700 mb-5'>
                <span>
                    <Typewriter
                        words={['My Donation']}
                        loop={0} // 0 = infinite
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>

            </h1>
            {myDonations.length === 0 ? (
                <div className="flex justify-center items-center border rounded-4xl px-4 md:px-10 lg:px-20 py-10 border-green-300 ">
                    <p>You have not donated to any campaign yet.</p>
                </div>
            ) : (
                <div>
                    {/* Desktop Table */}
                    <div className="hidden md:block">
                        <table className="table w-full border  border-green-300">
                            <thead className="bg-green-100 dark:bg-black">
                                <tr>
                                    <th>Campaign Name</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myDonations.map((donation, index) => (
                                    <tr key={index} className="hover:bg-gray-100 dark:hover:bg-black/50">
                                        <td>{donation.campaignName}</td>
                                        <td>{donation.amount} Tk</td>
                                        <td>{new Date(donation.donatedAt).toLocaleDateString()}</td>
                                        <td>
                                            <Link
                                                to={`/campaigns/${donation.campaignId}`}
                                                className="btn btn-xs text-green-600 btn-outline hover:bg-green-600 hover:text-white"
                                            >
                                                View Campaign
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden grid grid-cols-1 gap-6">
                        {myDonations.map((donation, index) => (
                            <div key={index} className="bg-white dark:bg-black  rounded-lg shadow-md p-4">
                                <h2 className="font-bold text-lg">{donation.campaignName}</h2>
                                <p className="text-sm text-gray-600 dark:text-white/70">Amount: {donation.amount} Tk</p>
                                <p className="text-sm dark:text-white/70 text-gray-600">
                                    Donated On: {new Date(donation.donatedAt).toLocaleDateString()}
                                </p>
                                <Link
                                    to={`/campaigns/${donation.campaignId}`}
                                    className="btn btn-xs text-green-600 btn-outline hover:bg-green-600 hover:text-white mt-2"
                                >
                                    View Campaign
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donation;

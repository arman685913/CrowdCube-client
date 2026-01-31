
import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Banner from './Banner'


const Home = () => {
      const campaigns = useLoaderData();

    return (
        <div>
            <Banner />
            <div className="px-4 py-5">


                <h2 className="text-2xl font-bold mb-6 text-green-700">Running Campaigns</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {campaigns.map(c => (
                        <div key={c._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={c.photo} alt={c.Campaign} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-bold text-lg">{c.Campaign}</h3>
                                <p className="text-sm text-gray-600">{c.type}</p>
                                <p className="text-sm text-gray-600">Min Donation: {c.amount} Tk</p>
                                <p className="text-sm text-gray-600">
                                    Deadline: {new Date(c.date).toLocaleDateString()}
                                </p>
                                <Link
                                    to={`/campaigns/${c._id}`}
                                    className="btn btn-sm mt-2 w-full text-green-600 border border-green-600 hover:bg-green-600 hover:text-white"
                                >
                                    See More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;

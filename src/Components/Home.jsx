
import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Banner from './Banner'


const Home = () => {
    const campaigns = useLoaderData();

    return (
        <div>
            <Banner />
            <div className="px-4 py-5">


                <h2 className="text-2xl font-bold mb-6 text-green-700 dark:text-white">Running Campaigns</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {campaigns.map(c => (
                        <div key={c._id} className="bg-white dark:bg-black rounded-lg shadow-md overflow-hidden">
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

            <section className="my-16 p-10 rounded-lg dark:bg-gray-900 bg-green-50">
                <h2 className="text-2xl dark:text-accent font-bold text-center text-green-700 mb-6">Popular Categories</h2>

                <div className="grid grid-cols-2 lg:w-11/12 mx-auto lg:grid-cols-1 gap-4 "  >

                    {/* Startup */}
                    <label htmlFor="modal-startup" className="btn border dark:text-white border-green-600  rounded-full text-green-700 hover:bg-green-600 hover:text-white">
                        Startup
                    </label>
                    <input type="checkbox" id="modal-startup" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="text-lg font-bold text-green-700">Startup</h3>
                            <p className="py-4">
                                A startup is a young company created to solve a problem with a new idea.
                                It usually begins with a small team and limited resources.
                                Startups focus on innovation, growth, and scalability.
                                They often take risks to build unique solutions.
                                Many startups grow into large companies.
                            </p>
                            <div className="modal-action">
                                <label htmlFor="modal-startup" className="btn">Close</label>
                            </div>
                        </div>
                    </div>

                    {/* Personal Issue */}
                    <label htmlFor="modal-personal" className="dark:text-white btn border border-green-600 rounded-full text-green-700 hover:bg-green-600 hover:text-white">
                        Personal Issue
                    </label>
                    <input type="checkbox" id="modal-personal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="text-lg font-bold text-green-700">Personal Issue</h3>
                            <p className="py-4">
                                A personal issue is a problem that affects someone’s private life.
                                It may involve family, relationships, or mental stress.
                                Such issues can affect daily focus and productivity.
                                Talking to trusted people can help.
                                Solutions take time and patience.
                            </p>
                            <div className="modal-action">
                                <label htmlFor="modal-personal" className="btn">Close</label>
                            </div>
                        </div>
                    </div>

                    {/* Business */}
                    <label htmlFor="modal-business" className="btn border border-green-600 rounded-full dark:text-white text-green-700 hover:bg-green-600 hover:text-white">
                        Business
                    </label>
                    <input type="checkbox" id="modal-business" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="text-lg font-bold text-green-700">Business</h3>
                            <p className="py-4">
                                Business focuses on providing products or services for profit.
                                It involves planning, management, and strategy.
                                Successful businesses solve real problems.
                                Growth depends on customer satisfaction.
                                Innovation keeps businesses competitive.
                            </p>
                            <div className="modal-action">
                                <label htmlFor="modal-business" className="btn">Close</label>
                            </div>
                        </div>
                    </div>

                    {/* Creative Idea */}
                    <label htmlFor="modal-creative" className="btn border border-green-600 rounded-full text-green-700 hover:bg-green-600 hover:text-white dark:text-white">
                        Creative Idea
                    </label>
                    <input type="checkbox" id="modal-creative" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="text-lg font-bold text-green-700">Creative Idea</h3>
                            <p className="py-4">
                                A creative idea is a new and original thought.
                                It helps solve problems in unique ways.
                                Creativity drives innovation.
                                Ideas can come from daily life experiences.
                                Great ideas can turn into successful projects.
                            </p>
                            <div className="modal-action">
                                <label htmlFor="modal-creative" className="btn">Close</label>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* How It Works */}
            <section className="my-16 bg-green-50 dark:bg-gray-900 p-10 rounded-lg">
                <h2 className="text-2xl font-bold text-green-700 dark:text-accent mb-6 ">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 dark:bg-accent rounded-lg shadow-md">
                        <h3 className="font-semibold text-lg">Step 1</h3>
                        <p>Create your campaign with all details and share it.</p>
                    </div>
                    <div className="bg-white p-6 dark:bg-accent rounded-lg shadow-md">
                        <h3 className="font-semibold text-lg">Step 2</h3>
                        <p>Donors check your campaign and contribute.</p>
                    </div>
                    <div className="bg-white p-6 dark:bg-accent rounded-lg shadow-md">
                        <h3 className="font-semibold text-lg">Step 3</h3>
                        <p>Track donations and manage your campaign easily.</p>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default Home;

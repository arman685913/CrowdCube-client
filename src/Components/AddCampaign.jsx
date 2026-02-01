import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';
import { toast } from 'react-toastify';
import { Typewriter } from 'react-simple-typewriter';

const AddCampaign = () => {

    const { user } = useContext(AuthContext)

    const handleAddCampaign = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const campaign = Object.fromEntries(formData);

        if (campaign.amount <= 0) {
            return toast.info("Minimum donation must be greater than 0");
        }

        fetch('http://localhost:3000/campaigns', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(campaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Campaign added successfully");
                    form.reset();
                }
            })
            .catch(err => console.error(err));

    }

    return (
        <div className="flex justify-center items-center lg:my-28 my-20 px-4">
            <form onSubmit={handleAddCampaign} className="relative bg-gray-100 border border-green-300 rounded-lg w-full max-w-6xl p-6 md:p-10 shadow-md dark:bg-black">

                <legend className="lg:text-3xl text-2xl font-semibold absolute -top-6 left-6 text-green-600 dark:text-white">
                    <Typewriter
                        words={['Add Campaign']}
                        loop={0} // 0 = infinite
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </legend>

                {/* Form */}
                <div className="flex flex-col md:flex-row gap-6 justify-center">

                    {/* Left */}
                    <div className="flex flex-col gap-4 flex-1">
                        <label className="label text-green-700 font-medium">Campaign Name</label>
                        <input
                            type="text"
                            name="Campaign"
                            className="input input-accent border-0 w-full"
                            placeholder="Campaign Name"
                            required
                        />

                        <label className="label text-green-700 font-medium">Photo URL</label>
                        <input
                            type="text"
                            name="photo"
                            className="input input-accent border-0 w-full"
                            placeholder="Photo URL"
                            required
                        />

                        <label className="label text-green-700 font-medium">Campaign Type</label>
                        <select
                            name="type"
                            required
                            id="issue-type"
                            className='select select-accent w-full focus:ring-2 focus:ring-accent transition-all duration-200'
                        >

                            <option value="" hidden >Select Issue Type</option>

                            <option value="personal">Personal Issue</option>
                            <option value="startup">Startup</option>
                            <option value="business">Business</option>
                            <option value="creative">Creative Ideas</option>
                        </select>

                        <label className="label text-green-700 font-medium">Description</label>
                        <input
                            type="text"
                            name="description"
                            className="input input-accent border-0 w-full"
                            placeholder="Description"
                            required
                        />

                    </div>

                    {/* Right */}
                    <div className="flex flex-col gap-4 flex-1 relative">
                        <label className="label text-green-700 font-medium">Minimum Donation Amount</label>
                        <input
                            type="number"
                            name="amount"
                            className="input input-accent border-0 w-full"
                            placeholder="Minimum Donation Amount"
                            required
                        />
                        <label className="label text-green-700 font-medium">Deadline</label>
                        <input
                            type="date"
                            name="date"
                            required
                            className="input input-accent border-0 w-full"
                        />
                        <label className="label text-green-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input input-accent border-0 w-full"
                            placeholder="Your Email"
                            value={user.email}
                            readOnly
                        />

                        <label className="label text-green-700 font-medium">User Name</label>
                        <input type="text"
                            readOnly
                            name="name"
                            placeholder="ser Name"
                            value={user.displayName}
                            className="input input-accent border-0 w-full"
                        />


                    </div>

                </div>

                {/* Add Button */}
                <button type='submit' className="btn w-full mt-6 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition">
                    Add
                </button>


            </form>
        </div>
    );
};

export default AddCampaign;
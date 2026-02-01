import React, { useContext } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';
import { toast } from 'react-toastify';
import { Typewriter } from 'react-simple-typewriter';

const Update = () => {

  const campaignData = useLoaderData();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleUpdateCampaign = (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedCampaign = {
      Campaign: form.Campaign.value,
      photo: form.photo.value,
      type: form.type.value,
      description: form.description.value,
      amount: Number(form.amount.value),
      date: form.date.value, 
    };

    if (updatedCampaign.amount <= 0) {
      return toast.info("Minimum donation must be greater than 0");
    }

    fetch(`http://localhost:3000/campaigns/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedCampaign)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success("Campaign updated successfully");
          navigate('/myCampaign');
        } else {
          toast.info("No changes were made");
        }
      })
      .catch(() => toast.error("Update failed") );
  };

  return (
    <div className="flex justify-center items-center lg:my-28 my-20 px-4">

      <form
        onSubmit={handleUpdateCampaign}
        className="relative bg-gray-100 border border-green-300 rounded-lg w-full max-w-6xl p-6 md:p-10 shadow-md dark:bg-black"
      >

        <legend className="lg:text-3xl text-2xl font-semibold absolute -top-6 left-6 text-green-600 dark:text-white">
                            <Typewriter
                                words={['Update Campaign']}
                                loop={0} // 0 = infinite
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </legend>

        <div className="flex flex-col md:flex-row gap-6 justify-center ">

          {/* Left */}
          <div className="flex flex-col gap-4 flex-1">

            <label className="label text-green-700 font-medium">
              Campaign Name
            </label>
            <input
              type="text"
              name="Campaign"
              defaultValue={campaignData.Campaign}
              className="input input-accent border-0 w-full"
              required
            />

            <label className="label text-green-700 font-medium">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={campaignData.photo}
              className="input input-accent border-0 w-full"
              required
            />

            <label className="label text-green-700 font-medium">
              Campaign Type
            </label>
            <select
              name="type"
              defaultValue={campaignData.type}
              required
              className="select select-accent w-full"
            >
              <option value="personal">Personal Issue</option>
              <option value="startup">Startup</option>
              <option value="business">Business</option>
              <option value="creative">Creative Ideas</option>
            </select>

            <label className="label text-green-700 font-medium">
              Description
            </label>
            <input
              type="text"
              name="description"
              defaultValue={campaignData.description}
              className="input input-accent border-0 w-full"
              required
            />

          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 flex-1">

            <label className="label text-green-700 font-medium">
              Minimum Donation Amount
            </label>
            <input
              type="number"
              name="amount"
              defaultValue={campaignData.amount}
              className="input input-accent border-0 w-full"
              required
            />

            <label className="label text-green-700 font-medium">
              Deadline
            </label>
            <input
              type="date"
              name="date"
              defaultValue={campaignData.date}
              required
              className="input input-accent border-0 w-full"
            />

            <label className="label text-green-700 font-medium">
              Email
            </label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="input input-accent border-0 w-full"
            />

            <label className="label text-green-700 font-medium">
              User Name
            </label>
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="input input-accent border-0 w-full"
            />

          </div>

        </div>

        <button
          type="submit"
          className="btn w-full mt-6 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition"
        >
          Update
        </button>

      </form>
    </div>
  );
};

export default Update;

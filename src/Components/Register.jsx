import React, { useState, useContext } from 'react';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Firebase/AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const navigate = useNavigate();
  const { setUser, createUser } = useContext(AuthContext);

  const [eye, setEye] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData);
    const { name, email, password, photo } = user;

    // Password Validation
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password must contain 1 uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setErrorMessage("Password must contain 1 lowercase letter");
      return;
    }
    if (!/[0-9]/.test(password)) {
      setErrorMessage("Password must contain 1 number");
      return;
    }

    // Create Firebase User
    createUser(email, password)
      .then(userCredential => {
        const createdUser = userCredential.user;

        // Update Profile
        updateProfile(createdUser, {
          displayName: name,
          photoURL: photo
        })
        .then(() => {
          setUser(createdUser);

          // Success Alert
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Account has been Created Successfully",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            showClass: {
              popup: `animate__animated animate__slideInDown`
            },
            hideClass: {
              popup: `animate__animated animate__slideOutUp`
            }
          });

          // Save to database
          fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, photo })
          })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              navigate('/');
              // console.log("createdUser saved in DB:", createdUser);
            }
          });
        });
      })
      .catch(error => {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          toast.error('This email is already in use with Google or another sign-in method.');
        } else {
          toast.error(error.message);
        }
      });
  };

  return (
    <div className="flex justify-center items-center lg:my-28 my-20 px-4">
      <form onSubmit={handleRegister} className="relative bg-gray-100 border border-green-300 rounded-lg w-full max-w-6xl p-6 md:p-10 shadow-md dark:bg-black">

        <legend className="lg:text-3xl text-2xl font-semibold absolute -top-6 left-6 text-green-600 dark:text-white">
          Create Account
        </legend>

        {/* Form */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">

          {/* Left */}
          <div className="flex flex-col gap-4 flex-1">
            <label className="label text-green-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="input input-accent border-0 w-full"
              placeholder="Your Name"
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
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 flex-1 relative">
            <label className="label text-green-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="input input-accent border-0 w-full"
              placeholder="Your Email"
              required
            />

            <label className="label text-green-700 font-medium">Password</label>
            <input
              type={eye ? "password" : "text"}
              name="password"
              className="input input-accent border-0 w-full"
              placeholder="Password"
              required
            />
            <div className='absolute bottom-2.5 right-4 text-gray-600 cursor-pointer'>
              {eye ? <FaEye onClick={() => setEye(!eye)} /> : <FaRegEyeSlash onClick={() => setEye(!eye)} />}
            </div>
            
          </div>

        </div>
        {/* error msg */}
        <div className='mt-2 text-right'>
        {errorMessage && <p className='text-sm text-red-500 italic'>{errorMessage}</p>}
        </div>
        {/* Register Button */}
        <button type='submit' className="btn w-full mt-3 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition">
          Register
        </button>

        

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? Please-
          <Link to="/login" className="text-green-600 hover:underline font-medium"> Login</Link>
        </p>

      </form>
    </div>
  );
};

export default Register;

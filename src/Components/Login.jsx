import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';


const Login = () => {

    const location = useLocation()

    const navigate = useNavigate();
    const { setUser, signInUser, signInGoogle, signInGit } = useContext(AuthContext);

    const [eye, setEye] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);



    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const user = Object.fromEntries(formData);
        const { email, password } = user;

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

        // SignIN Firebase User
        signInUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                toast.success('Login Successfully')
                if (location.state?.from) {
                    navigate(location.state.from, { replace: true });
                } else {
                    navigate('/', { replace: true });
                }
            })
            .catch((error) => {
                const msg = error.code;
                if (msg === "auth/user-not-found" || msg === "auth/wrong-password") {
                    toast.error("Invalid email or password");
                } else if (error.message == 'Firebase: Error (auth/invalid-credential).') {
                    toast.error("Invalid email or password");
                }
            });


    };

    const handleGoogle = () => {
        signInGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                // Save user to DB if needed
                const isNewUser = result?._tokenResponse?.isNewUser;
                // Save user to DB if needed
                if (isNewUser) {
                    fetch('http://localhost:3000/users', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name: user.displayName, email: user.email, photo: user.photoURL || '' })
                    });
                } else {
                    fetch(`http://localhost:3000/users/${user.email}`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name: user.displayName,
                            photo: user.photoURL
                        })
                    });
                }

                toast.success("Logged in with Google");
                if (location.state?.from) {
                    navigate(location.state.from, { replace: true });
                } else {
                    navigate('/', { replace: true });
                }
            })
            .catch((error) => {
                toast.error(error.message);
                console.log(error);
            });
    };
    const handleGit = () => {
        signInGit()
            .then((result) => {
                const user = result.user;
                setUser(user);

                const isNewUser = result?._tokenResponse?.isNewUser;
                // Save user to DB if needed
                if (isNewUser) {
                    fetch('http://localhost:3000/users', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name: user.displayName, email: user.email, photo: user.photoURL || '' })
                    });
                } else {
                    fetch(`http://localhost:3000/users/${user.email}`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name: user.displayName,
                            photo: user.photoURL
                        })
                    });
                }
                toast.success("Logged in with Github");

                if (location.state?.from) {
                    navigate(location.state.from, { replace: true });
                } else {
                    navigate('/', { replace: true });
                }
            })
            .catch((error) => {
                if (error.code === "auth/account-exists-with-different-credential") {
                    toast.error("This email is already in use with Google or another sign-in method.");
                }

                console.log(error);
            });
    };



    return (
        <div className='lg:my-28 my-20 p-6 md:p-10'>
            <div className="flex justify-center items-center  ">

                <form onSubmit={handleLogin} className="relative bg-gray-100 border border-green-300 rounded-lg  p-4 shadow-md max-w-6xl w-full dark:bg-black ">

                    <legend className="lg:text-3xl text-2xl font-semibold absolute -top-6 left-6 text-green-600 dark:text-white ">
                        Login
                    </legend>

                    {/* Form */}
                    <div className="flex flex-col gap-4 flex-1 relative ">
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
                        {/* error msg */}
                    <div className='mt-2 '>
                        {errorMessage && <p className='text-sm text-red-500 italic'>{errorMessage}</p>}
                    </div>

                    {/* Login Button */}
                    <button type='submit' className="btn w-full mt-4 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition">
                        Login
                    </button>


                    <p className="mt-4 text-center text-sm text-gray-600">
                        New around here? Please -
                        <a href="/register" className="text-green-600 hover:underline font-medium"> Register</a>
                    </p>

                </form>
            </div>
            <div className='flex px-2 max-w-6xl mx-auto justify-center  mt-4 gap-4'>
                {/* GitHub */}
                <button onClick={handleGit} className="btn bg-black text-white border-black w-1/2">
                    <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                    Login with GitHub
                </button>

                {/* Google */}
                <button onClick={handleGoogle} className="btn w-1/2 border-2  bg-white text-black border-[#e5e5e5] dark:bg-white/60">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>

        </div>
    );
};

export default Login;
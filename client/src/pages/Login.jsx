import React from 'react'
import moon from '../assets/moon.jpg'

export default function Login() {
    return (
        <div className='flex'>
            <div className="w-3/6">
                <img src={moon} alt="" className='h-screen rounded-lg' />
            </div>
            <div className="">
                <h1 className="">
                    Welcome back to your Blog
                </h1>
                <div id="signup" class="bg-white lg:w-3/5 flex flex-col items-center ">
			<h2 class="font-extrabold text-gray-800 text-3xl mt-12 text-center mx-auto">Register as a Tutor</h2>
			<div id="form-body" class="mt-24">
				<h1 class="font-bold text-2xl text-gray-700 mx-4">Sign up.</h1>
				<p class="mt-4 font-semibold text-gray-700 mx-4">Let's create your account,</p>

				<form class="mt-4  mx-4">
					<div class="flex flex-col sm:flex-row py-4 gap-8 text-gray-700">
						<div class="sm:w-1/2">
							 <div class="flex flex-col ">
							 	<label for="full-name">Full Name</label>
							 	<input class="mt-2 h-8 border border-gray-700 rounded outline-none p-2 focus:ring-4 ring-green-400" type="text" id="full-name" name="full-name" required />
							 </div>

							 <div class="flex flex-col  mt-4 ">
							 	<label for="phone">Phone Number</label>
							 	<input class="mt-2 h-8 border border-gray-700 rounded outline-none p-2 focus:ring-4 ring-green-400" type="tel" id="phone" name="phone" required />
							 </div>

							 <div class="flex flex-col  mt-4 ">
							 	<label for="mail">Email</label>
							 	<input class="mt-2 h-8 border border-gray-700 rounded outline-none p-2 focus:ring-4 ring-green-400" type="email" id="mail" name="mail" required />
							 </div>
						</div>

						<div class="sm:w-1/2">
							<div class="flex flex-col  ">
							   <label for="gender">Gender</label>
			                   <select class="mt-2 h-8  border border-gray-700 rounded outline-none px-2 focus:ring-4 ring-green-400" id="gender" name="gender">
			                        <option value="Male">Male</option>
			                        <option value="female">Female</option>
			                        <option value="other">Other</option>
			                   </select>
							</div>

							<div class="flex flex-col  mt-4 ">
							 	<label for="pass">Password</label>
							 	<input class="mt-2 h-8  border border-gray-700 rounded outline-none p-2 focus:ring-4 ring-green-400" type="password" id="pass" name="pass" required />
							</div>

							<div class="flex flex-col  mt-4 ">
							 	<label for="pass2">Confirm Password</label>
							 	<input class="mt-2 h-8  border border-gray-700 rounded outline-none p-2 focus:ring-4 ring-green-400" type="password" id="pass2" name="pass2" required />
							</div>
						</div>
					</div>

					<div class="flex flex-col">
						<div class="flex gap-2 items-center mt-2">
						 	<input class="focus:ring-4 ring-green-400" type="checkbox" id="checked" name="checked" required />
						 	<label for="checked">By creating an account i accept to the <a class="underline text-blue-400" href="#">terms of use</a> and our <a class="underline text-blue-400" href="#">privacy policy</a>.</label>
						</div>

						<div class="flex mt-4">
						 	<a class="px-28 h-8 text-gray-100 font-bold text-lg mx-auto bg-green-400 rounded-sm outline-none content-center" href="step-1.html">Submit</a>
						</div>
					</div>	 
				</form>
			</div>

			<div class="my-8">
				<p class="">Already a member? <span class="font-bold"><a class="text-blue-400" href="#">Log in</a></span></p>
			</div>	
            </div>
        </div>
        </div>
    )
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { FSWatcher } from 'vite';

function Login() {
  const [data, setData] = useState({ email: '', password: '' });
  const navigate=useNavigate();
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function openNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
  const ser = async () => {
  const baseUrl = import.meta.env.REACT_APP_URL; 
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(data) 
    });

    // Await the response.json() call
    const responseData = await response.json(); // Corrected line

    // Log or handle the response data
    // console.log(responseData.state);
    if(responseData.state){
      alert(responseData.message);
      
      // setCookie("userToken", 111, 7);
      navigate('/dashboard');

    }else{
      alert(responseData.message)
    }
    
    // You can continue your logic here based on responseData
  } catch (error) {
    console.error('Error:', error);
  }
};



  const handleSubmit = async (e) => {
    e.preventDefault();
    // const baseUrl = import.meta.env.REACT_APP_URL
    // console.log(`${baseUrl}/login`);
    // try {
    //   const response = await ser();
    //   if (response) {
    //     const dat = await response.json();
    //     console.log(dat);
    //   } else {
    //     console.error('Error: No response received');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
    await ser();
  
    setData({ email: "", password: "" });
  };
  






  return (
    <div className='mx-6vh px-14'>
      <form className="max-w-sm mx-auto my-[7vh] border-collapse" onSubmit={handleSubmit}>
        <div className='flex justify-center'><h1 className='font-bold text-slate-900 '>Login</h1></div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="text" id="email" name="email" value={data.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your email address" required />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" id="password" name="password" value={data.password} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter password' required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div> 
  );
}

export default Login;

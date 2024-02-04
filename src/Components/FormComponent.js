import React, { useState } from 'react';
import axios from 'axios';

function FormComponent() {
  const [formData, setFormData] = useState({
    name :'',
    email :'',
    phone : '',
  });
  const inputStyle = 'shadow-xl font-serif text-[#FF8080]  rounded-xl text-center py-2 w-[100%] lg:w-[100%] mb-3 text-black border-none mt-2 px-20 hover:border-none  bg-transparent focus:bg-[#557a30] ease-out duration-600';
  const pstyle = 'font-serif font-bold mt-1'

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit Data",formData);
    try {
        
      await axios.post('http://localhost:3002/mongodb', formData)
      console.log("FormData added to db");
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
<div className=' h-screen justify-center flex items-center bg-gradient-to-br from-[#D0F288] to-[#557C55]'  >
<div className='bg-white/10 backdrop-blur-sm w-[90%] md:w-[80%] h-[90%] lg:w-[40%] justify-center flex items-center flex-col gap-8 rounded-xl shadow-xl'>
    <div className='border-2 border-[#E8D8C4] p-3 rounded-xl cursor-none w-[70%] md:w-[60%] lg:w-[70%] text-center'>
        <p className='text-2xl font-bold font-mono shadow-xl bg-[#E8D8C4] rounded-lg text-[#FF8080] py-1 hover:bg-gradient-to-t from-[#E8D8C4] to-[#FFCF96] ease-out duration-1000'>Registration Form</p>
    </div>
    <div className='flex items-center justify-center'>
        <form onSubmit={handleSubmit}>
            <div>
                <p className={pstyle}>Name :</p>
                <p><input className={inputStyle} type='text' name="name" id="name" required value={formData.name} onChange={handleChange} placeholder="Enter your Name" /></p>
                <p className={pstyle}>Email :</p>
                <input className={inputStyle} type="email" name="email" id="email" required value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />
                <p className={pstyle}>Phone :</p>
                <input className={inputStyle} type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} placeholder="Enter Phone Number" />
                <p className={pstyle}>Date Of Birth:</p>
                <input className={inputStyle} type='date' name="date" required value={formData.date} onChange={handleChange} placeholder='Enter Your date of Birth' />
                <p className={pstyle}>Enter a password:</p>
                <input className={inputStyle} type='password' required name='password' value={formData.password} onChange={handleChange} placeholder='Enter Your Password' />
                <p><input type='checkbox' name='checkbox' value='yes' checked onChange={handleChange} /> Accept terms & conditions</p>
            </div>
            <div className='flex items-center justify-center mt-4 '>
                <button className='bg-[#E8D8C4] text-[#6D2932] p-4 w-[100%] rounded-lg shadow-xl hover:bg-gradient-to-b from-[#E8D8C4] to-[#FFCF96] ease-out duration-600 ' type="submit">Ｓｕｂｍｉｔ</button>
            </div>
        </form>

    </div>

</div>
</div>
  );
}

export default FormComponent;

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default () => {
  useEffect(() => {
    AOS.init({
      duration: 700, 
      offset:250,    
      easing: 'ease-in-out', 
    });
  }, []);
  const [pic, setPic] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/pic').then((res) => {
      setPic(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <div className="bg-gray-800 p-10 md:p-28 lg-48 overflow-y-auto ">
      <div className='w-full justify-center text-white p-10 text-center'>
        <p className='text-3xl text-pretty'>Information of Universities</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {pic.length > 0 ? (
          pic.map((res, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden " data-aos="zoom-in" >
              <img
                src={res.pict}
                alt={res.alt || "University Image"}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-center text-gray-800">{res.title}</h3>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-white">Loading...</p>
        )}
      </div>
    </div>

  )
}

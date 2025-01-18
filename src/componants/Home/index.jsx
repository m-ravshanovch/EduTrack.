import React,{useEffect} from 'react';
import Asl from '../Home/videomp4.mp4';
import AOS from 'aos';

export default () => {
   useEffect(() => {
      AOS.init({
        duration: 700, 
        offset:0,    
        easing: 'ease-in-out', 
      });
    }, []);
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-10">
      <div className="text-center space-y-10" >
        <p className="text-white text-4xl font-serif" >EduTrack</p>
        <p className="text-zinc-400 text-md font-mono">
          This project is a User and University Information Management System built using React for the frontend. It provides a dynamic interface for managing users, universities, and their associated data. The application integrates essential features such as user profiles, university details, and image galleries, enabling effective data visualization and updates.
        </p>
      </div>
      <div className="w-full max-w-4xl border-2 border-gray-500 p-4 bg-gray-800 rounded-md mt-4" data-aos="zoom-in" >
        <video
          src={Asl}
          muted
          type="video/mp4"
          autoPlay
          controls
          className="w-full h-auto rounded-md"
        ></video>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useNavigate } from 'react-router-dom';
export default function Users() {
  const baseUrl = "https://edutrackdata.onrender.com/users"
  const baseUrl2 = "https://edutrackdata.onrender.com/type"
  const [data, setData] = useState([])
  const [main, setMain] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  useEffect(() => {
    axios.get(baseUrl2).then((res) => {
      setMain(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <div className="w-full sm:place-self-center sm:place-items-center sm:overflow-x-auto " >
      <div className="text-white py-5">
        <p className="text-4xl text-center">Users</p>
      </div>
      <div className="w-full flex justify-center sm:justify-end p-2 place-content-center gap-x-4">
        <div className='px-4 border-2 border-solid border-sky-50 rounded-xl'>
          <input className='bg-inherit border-none outline-none text-white' />
        </div>
        <div className='px-4 border-2 border-solid border-sky-50 rounded-xl hover:bg-slate-500'>
          <button className='text-sm text-white'><a href="/Add"><PersonAddAltIcon /></a></button>
        </div>
      </div>
      <table className=" hidden  sm:table w-full place-items-center justify-between ">
        <thead >
          <tr className="">
            {main.length > 0 ? (
              main.map((res,i) => (

                <th key={i} className="text-left text-white md:px-4 ">{res.type}</th>

              ))
            ) : (
              <p>Loading.....</p>
            )}
          </tr>
        </thead>
        <tbody className="flex-row overflow-x-auto place-content-between    ">

          {data.length > 0 ? (
            data.map((res,i) => (
              <tr className="text-left text-slate-300" key={i}>
                <th className="md:px-4 border-t-2 border-r-2 border-zinc-500 text-white">{res.id}</th>
                <th className="md:px-4 border-t-2 border-r-2 border-zinc-500">{res.name}</th>
                <th className="md:px-4 border-t-2 border-r-2 border-zinc-500">{res.Surname}</th>
                <th className="md:px-4 border-t-2 border-r-2 border-zinc-500">{res.university}</th>
                <th className="md:px-4 border-t-2 border-r-2 border-zinc-500">
                  <div className="col-span-2 flex justify-between sm:justify-end">
                    
                    <button className=" px-1 rounded-lg"><Link to={`/Edit/${res.id}`} className='text-white hover:text-blue-700'><EditIcon/></Link></button>
                    <button onClick={e=>delateUser(res.id)} className=" rounded-lg text-red-700 hover:text-red-400"><DeleteOutlineIcon/></button>
                  </div>
                </th>
              </tr>
            ))
          ) : (
            <p>Loading....</p>
          )}

        </tbody>
      </table>
      <div className=" table sm:hidden  w-full ">
        {data.length > 0 ? (
          data.map((res) => (
            <div className="w-full p-8 border-b-2 border-zinc-400 grid grid-cols-2 gap-2 ">
              <div className=" text-center col-span-2 flex m-auto w-[90%]  gap-x-2 justify-center">

                <p className="text-slate-200 uppercase">{res.name}</p>
                <p className="text-slate-200 uppercase">{res.Surname}</p>
              </div>
              <div className="text-left col-span-2 ">
                <p className="text-zinc-400">{res.university}</p>
              </div>
              <div className="col-span-2 w-full flex justify-end">
              <button className=" px-1 rounded-lg"><Link to={`/Edit/${res.id}`} className='text-white hover:text-blue-700'><EditIcon/></Link></button>
              <button onClick={e=>delateUser(res.id)} className=" rounded-lg text-red-700 hover:text-red-400"><DeleteOutlineIcon/></button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </div>

    </div>
  );
  function delateUser(id){
    const conf = window.confirm("Do you want to delate")
    if(conf){
      axios.delete(`http://localhost:5000/users/${id}`).then((res)=>{
        alert('User delated Successfully !')
        navigate('/Users')
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
}

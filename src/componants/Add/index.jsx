import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default () => {
    const navigate=useNavigate()
    const [input, setInput] = useState({ name: '', Surname: '', university: '' })
    const [user ,setUser]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/users').then((res)=>{
            setUser(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    })
    function getInput(event) {
        event.preventDefault();
        const lastId = user.length >0 ? Math.max(...user.map((user)=>user.id)):0;
        const newUser = {
            id:lastId+1,
            ...input
        }
        axios.post('http://localhost:5000/users', newUser).then((res) => {
            alert("User added Successfully");
            setUser([...user,newUser]);
            setInput({ name: '', Surname: '', university: '' })
            navigate('/Users')
        }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <form
                className="sm:w-[20%] grid grid-cols-1 gap-y-5"
                onSubmit={getInput}
            >
                <div className="text-center">
                    <p className="text-white text-3xl">Add</p>
                </div>
                <input
                    className="outline-none bg-inherit border-b-2 text-white"
                    value={input.name}
                    onChange={(e) =>
                        setInput({ ...input, name: e.target.value })
                    }
                    placeholder="Name"
                />
                <input
                    className="outline-none bg-inherit border-b-2 text-white"
                    value={input.surname}
                    onChange={(e) =>
                        setInput({ ...input, Surname: e.target.value })
                    }
                    placeholder="Surname"
                />
                <input
                    className="outline-none bg-inherit border-b-2 text-white"
                    value={input.university}
                    onChange={(e) =>
                        setInput({ ...input, university: e.target.value })
                    }
                    placeholder="University"
                />
                <div className="m-auto">
                    <button
                        type="submit"
                        className="text-green-400 border-2 border-green-400 px-4 rounded-lg"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

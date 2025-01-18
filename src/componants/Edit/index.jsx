import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [update, setUpdate] = useState({
        name: '',
        Surname: '',
        university: '',
    });

    useEffect(() => {
        axios
            .get(`http://localhost:5000/users/${id}`) 
            .then((res) => {
                if (res.data) {
                    setUpdate(res.data);
                }
            })
            .catch((err) => {
                console.log('Error fetching user:', err);
            });
    }, [id]);

    const updateData = (event) => {
        event.preventDefault(); 
        axios
            .put(`http://localhost:5000/users/${id}`, update)
            .then(() => {
                alert('User updated successfully!');
                navigate('/Users'); 
            })
            .catch((err) => {
                console.error('Error updating user:', err);
            });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdate((prevUpdate) => ({
            ...prevUpdate,
            [name]: value, 
        }));
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <form
                className="sm:w-[20%] grid grid-cols-1 gap-y-5"
                onSubmit={updateData}
            >
                <div className="text-center">
                    <p className="text-white text-3xl">Edit</p>
                </div>
                <input
                    className="outline-none bg-inherit border-b-2 text-white"
                    name="name"
                    defaultValue={update.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                />
                <input
                    className="outline-none bg-inherit border-b-2 text-white"
                    name="surname"
                    defaultValue={update.Surname}

                    onChange={handleInputChange}
                    placeholder="Surname"
                />
                <input
                    className="outline-none bg-inherit border-b-2 text-white"
                    name="university"
                    defaultValue={update.university}

                    onChange={handleInputChange} 
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
    );
};

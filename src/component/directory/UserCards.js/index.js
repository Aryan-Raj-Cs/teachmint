import React,{useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";
export default function UserCards({ data }) {
    const navigate = useNavigate()
    const handleRoute = (id) => {
        navigate(`/profile/${id}`,{state:data});
    }
    return (
        <>
            <div className='directory-users' onClick={() => handleRoute(data?.username)}>
                <div>Name: {data?.name}</div>
                <div>Post: {data?.posts?.length}</div>
            </div>
        </>
    )

}
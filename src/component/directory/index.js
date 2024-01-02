import React, { useEffect, useState } from 'react'
import "./index.css"
import UserCards from './UserCards.js'

export default function Directory() {
    const [cardData, setCardData] = useState()
        useEffect(() => {
           async function fetchData(){
           let postDataJson = await fetch('https://jsonplaceholder.typicode.com/posts')
           let postData = await postDataJson.json()
           let userDataJson = await fetch('https://jsonplaceholder.typicode.com/users')
           let userData = await userDataJson.json()
           
           let cardData = userData.map((userData,index)=>{
            let posts = postData.filter((postData)=>postData.userId ===userData.id)
            return {...userData,posts:posts}
           })
           setCardData(cardData)
           }
           fetchData()

    }, [])

console.log("card",cardData)
    const users = [{ name: "Aryan", id: 1, post: 10 }, { name: "Mohan", id: 2, post: 8 }, { name: "Rohan", id: 3, post: 7 }]
    if(!cardData)
    return <h1>loading...</h1>
    return <>
        <div className='directory-container'>
            <div> Directory </div>
            {cardData && cardData.map((data, index) => {
                return (
                    <UserCards key={data?.id} data={data} />
                )
            })}


        </div>
    </>

}
import React ,{useState}from 'react'
import "./index.css"
import { useNavigate ,useLocation} from "react-router-dom";
import Modal from '../PostModal';
import DigitalClock from './DigitalClock';
export default function UserProfile() {
    const [modalData,setModalData] = useState({isOpen:false,postData:{}})
    const {state:userData} = useLocation();
    const navigate = useNavigate()
    const handleRoute = () => {
        navigate("/");
    }
    const handleModal = (post)=>{
        if(post){
            setModalData({postData:post,isOpen:!modalData.isOpen}) 
        }
        else{
            setModalData({...modalData,isOpen:!modalData.isOpen})
        }
        
    }
    return <>
        <div className='user-profile-container'>
            <div className='user-profile-header'>
                <div><button onClick={handleRoute}>Back</button></div>
                <div className="user-profile-header-timer">
                    <DigitalClock/>
                </div>
            </div>
            <div>Profile Page</div>
            <div className='user-profile-details'>
                <div>Name: {userData?.name}
                    <div>User Name: {userData?.username}</div>
                </div>
                <div>Address: {userData?.address?.city}
                    <div>Email: {userData?.email}</div>
                </div>
            </div>
            <div className='user-profile-post'>
                {modalData?.isOpen && <Modal toogleModal={handleModal} data={modalData.postData}/>}
                {userData && userData.posts.map((post)=>{
                    return (
                        <div className='user-profile-post-details' onClick={()=>handleModal(post)}>
                        <div className='post-title'>{post?.title}</div>
                        {post?.body}
                    </div>
                    )
                })}
               
            </div>
        </div>
    </>

}
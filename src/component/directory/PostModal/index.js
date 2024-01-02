import React from 'react'
import "./index.css"
export default function Modal(props) {

    const toogleModal = ()=>{
        props.toogleModal()
    }
console.log("modal",props)
    return <>
        <div id="myModal" className="modal" onClick={toogleModal}>

            <div className="modal-content">
                <div className="modal-header">
                    <span className="close">&times;</span>
                    <h3>{props.data?.title}</h3>
                </div>
                <div className="modal-body">
                    <p>{props.data?.body}</p>
                </div>
            </div>

        </div>
    </>

}
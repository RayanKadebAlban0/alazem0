import React from 'react'
import { Styles } from './styles'
import { FaCheck, FaTimes } from 'react-icons/fa'; // استيراد أيقونات القبول والرفض


const Respons = ({ request }) => {
    return (
        <Styles>

            <div className="card">
                <div className="header">
                    <div className="photoprofile">
                        <img
                            src={request.userImage || 'placeholder.com'}
                            alt={request.userName}
                            className="user-avatar"
                        />
                    </div>
                    <div>
                        <span className="username">{request.userName}</span>
                        <span className="time">{request.time}</span>

                        <p>{request.details}</p>
                    </div>
                </div>
                <div className="actions">
                    <button className="approvebtn">
                        <FaCheck className="icon" />اعتماد</button>
                    <button className="rejectbtn">            <FaTimes className="icon" />
                        رفض</button>
                </div>
            </div>
        </Styles >
    )
}

export default Respons

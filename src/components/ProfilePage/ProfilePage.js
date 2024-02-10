import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import user_profile from '../../assests/images/user_2x.png';
import './ProfilePage.css';
import { ReactComponent as CameraIcon } from '../../assests/icons/camera.svg'; // Import the SVG icon
import SubmitButton from '../common/button/SubmitButton';

function ProfilePage() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const userInfo = localStorage.getItem('loggedInUserData');
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (isLoggedIn && userInfo) {
            setUserData(JSON.parse(userInfo));
        } else {
            navigate('/');
        }
    }, [navigate]);

    const handleLogout = () => {
        logout();
        navigate('/');
    };
    return (
        <div>
            <h3 className="title-heading">account settings</h3>
            <div className="profile-container">
                <div className="photo-name">
                    <div className="user-image">
                        <img src={user_profile} alt="user-profile" />
                        <CameraIcon className="icon" width={21} height={23} />
                    </div>
                    <div className="user-name">
                        <p>{userData.fullName}</p>
                        <p>{userData.email}</p>
                    </div>
                </div>
                <p>
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod
                    Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </p>
            </div>
            <hr />
            <div className="user-all-info">
                {userData && (
                    <>
                        <p>User Name : {userData.fullName}</p>
                        <p>Phone Number : {userData.phoneNumber}</p>
                        <p>Email : {userData.email}</p>
                        <p>Company Name : {userData.companyName}</p>
                    </>
                )}
            </div>
            <p className="p-fill">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod
                Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
            <button type="submit" className="logout" onClick={handleLogout}>
                <SubmitButton btnText="Log Out" bgColor="#6C25FF" fColor="#FFFFFF" />
            </button>
            <hr />
        </div>
    );
}

export default ProfilePage;

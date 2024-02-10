import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import user_profile from '../../assests/images/user_2x.png';
import "./ProfilePage.css"
import { ReactComponent as CameraIcon } from '../../assests/icons/camera.svg'; // Import the SVG icon


function ProfilePage() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div >
        <h3 className='title-heading'>account settings</h3>
      <div className='profile-container'>
       <div className='photo-name'>
        <div className='user-image'>
          <img src={user_profile} alt='user-profile'/>
          <CameraIcon className='icon' width={21} height={23}/>
      </div>
        <div className='user-name'>
          <p>Marry Doe</p>
          <p>Marry@Gmail.com</p>
        </div>
      </div>
      <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
      </div>
      <hr/>
      <hr/>
    </div>
  );
}

export default ProfilePage;

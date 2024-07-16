import React from 'react'
import  { Menu, Avatar } from '@mantine/core'

const ProfileMenu = ({user , logout}) => {

  return (
    
    <Menu>
        <Menu.Target>
            <Avatar src={user?.picture} alt='user profile'  radius="xl"/>
        </Menu.Target>
       
       <Menu.Dropdown>
       <Menu.Item onClick={()=> navigate("./favourites", {replace: true})}>
                Favourites
            </Menu.Item>

            <Menu.Item onClick={()=> navigate("./bookings", {replace: true})}>
                Bookings
            </Menu.Item>

            <Menu.Item onClick={()=>{
                localStorage.clear();
                logout()
            }}>
                Logout
            </Menu.Item>
       </Menu.Dropdown>
    </Menu>
   
  );
};

export default ProfileMenu
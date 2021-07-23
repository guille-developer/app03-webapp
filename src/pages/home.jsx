




import React from 'react'
import Bottonbar from '../components/bottonbar'
import NavBar from '../components/navbar'
import NotificationsItem from '../components/notification'
import NotificationsList from '../components/notificationList'
import SideBar from '../components/sidebar'
function Home() {


    return (
        <div className="bg-gray-100 h-screen p-0 m-0">

            <NavBar />
            <NotificationsList/>




            <Bottonbar pantallaActual="Home" />



        </div>
    )
}

export default Home

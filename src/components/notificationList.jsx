import react, { Component } from "react";
import NotificationsItem from "./notification";

class NotificationsList extends Component {
    state = {  }
    render() { 
        return (<div className=" container pt-28">
            <ul className="m-6 space-y-6">

            {/* TODO: for de notificaciones */}
                <NotificationsItem>

                </NotificationsItem>
                <NotificationsItem>

                </NotificationsItem>
            </ul>
        </div> );
    }
}
 
export default NotificationsList;
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { adminRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await adminRequest.get("user?new=true");
      setNewUsers(res.data);
    } catch {}
  };

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers
          ?.filter(u => !u.isAdmin)
          .map(u => (
            <li className="widgetSmListItem" key={u._id}>
              <img
                src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{u.username}</span>
                <span className="widgetSmUserTitle">{u.email}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

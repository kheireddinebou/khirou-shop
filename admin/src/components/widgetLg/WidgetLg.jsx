import { useState, useEffect } from "react";
import "./widgetLg.css";
import { format } from "timeago.js";
import { adminRequest } from "../../requestMethods";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const res = await adminRequest.get("order");
      setOrders(res.data);
    } catch {}
  };

  useEffect(() => {
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders?.map(o => (
          <tr className="widgetLgTr" key={o._id}>
            <td className="widgetLgUser">
              <img
                src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">{o.userId}</span>
            </td>
            <td className="widgetLgDate">{format(o.createdAt)}</td>
            <td className="widgetLgAmount">${o.amount}</td>
            <td className="widgetLgStatus">
              <Button type={o.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

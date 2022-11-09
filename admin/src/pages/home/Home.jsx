import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useState } from "react";
import { adminRequest } from "../../requestMethods";

export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getUserStats = async () => {
    try {
      const res = await adminRequest.get("user/stats");
      const stats = res.data.map(i => ({
        name: monthNames[i._id - 1],
        "Active User": i.total,
      }));
      setUserStats(stats);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserStats();
  }, []);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

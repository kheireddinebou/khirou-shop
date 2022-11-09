import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { adminRequest } from "../../requestMethods";

export default function FeaturedInfo() {
  const [income, setIncome] = useState(0);
  const [perc, setPerc] = useState(null);

  const getIncome = async () => {
    try {
      const res = await adminRequest.get("order/income");
      const thisMonth = new Date().getMonth() + 1;
      const prevMonth = thisMonth === 1 ? 12 : thisMonth - 1;
      const thisMonthIncome = res.data.filter(i => i._id === thisMonth)[0];
      const prevMonthIncome = res.data.filter(i => i._id === prevMonth)[0];
      setIncome([thisMonthIncome, prevMonthIncome]);
      setPerc((thisMonthIncome.total * 100) / prevMonthIncome.total - 100);
    } catch {}
  };

  useEffect(() => {
    getIncome();
  }, []);
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${income[0]?.total}</span>
          <span className="featuredMoneyRate">
            % {perc?.toFixed()}{" "}
            {perc >= 0 ? (
              <ArrowUpward className="featuredIcon" />
            ) : (
              <ArrowDownward className="featuredIcon negative" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}

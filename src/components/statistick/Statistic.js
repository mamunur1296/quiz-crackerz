import React, { useContext } from "react";
import { TutorialData } from "../../utilities/root/Root";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Statistic = () => {
  const datas = useContext(TutorialData);
  const data = datas.map((uc) => uc.total);

  // const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

  return (
    <div>
      <section className=" md:w-1/2 mx-auto my-28">
        <LineChart
          width={600}
          height={300}
          data={datas}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Tooltip></Tooltip>
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
        </LineChart>
      </section>
    </div>
  );
};

export default Statistic;

import React, { useContext } from "react";
import { TutorialData } from "../../utilities/root/Root";
import {
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const Statistic = () => {
  const datas = useContext(TutorialData);
  const data = datas.map((uc) => uc.total);

  // const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

  return (
    <section className="my-56 sm:w-2/3 mx-auto">
      <div
        style={{ width: "100%", height: "300px" }}
        className="recharts-wrapper last: "
      >
        <ResponsiveContainer>
          <BarChart data={datas}>
            <Bar dataKey="total" fill="#8884d8" />
            <Tooltip></Tooltip>
            <XAxis dataKey="name" />
            <YAxis dataKey="total" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Statistic;

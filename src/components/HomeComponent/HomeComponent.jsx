import React from "react";
import Navbar from "../NavBar/Navbar";
import "./homeComponent.css";
import { BsTags } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { RiMoneyCnyBoxLine } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";
import {
  CartesianAxis,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function HomeComponent() {
  const allData = [
    {
      name: "Total Revenue",
      amount: "$2, 129, 430",
      icon: <RiMoneyCnyBoxLine />,
      class: "revenue",
    },
    {
      name: "Total Transaction",
      amount: "$1, 520",
      icon: <BsTags />,
      class: "transaction",
    },
    {
      name: "Total Likes",
      amount: "9, 721",
      icon: <AiOutlineLike />,
      class: "likes",
    },
    {
      name: "Total Users",
      amount: "892",
      icon: <TbUsers />,
      class: "user",
    },
  ];

  const chartData = [
    { name: "Week1", guest: 342, user: 317 },
    { name: "Week2", guest: 232, user: 487 },
    { name: "Week3", guest: 153, user: 247 },
    { name: "Week4", guest: 491, user: 127 },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="home__component__right">
      <Navbar />
      <div className="home__component__right__top">
        {allData?.map((data) => (
          <div
            className={`sub__home__right__top_${data.class}`}
            key={data.name}
          >
            <div className="sub__home__right__top_div_right" key={data.name}>
              <p>{data.name}</p>
              <p>{data.amount}</p>
            </div>
            <div className="sub__home__right__top_div_left">
              <span className="sub__home__right_icon">{data.icon}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="home__component__right__line-chart">
        <div className="home__component__right__line-chart_top__div">
          <div className="left">
            <span>Activities</span>
            <select name="" id="">
              <option value="">May - June 2021</option>
              <option value="">June - July 2021</option>
              <option value="">July - August 2021</option>
              <option value="">August - September 2021</option>
              <option value="">September - October 2021</option>
            </select>
          </div>
          <div className="right">
            <div className="guest">
              <div className="guest_col"></div>
              <p>Guest</p>
            </div>
            <div className="user">
              <div className="user_col"></div>
              <p>User</p>
            </div>
          </div>
        </div>

        <div className="chart">
          <LineChart width={1048} height={300} data={chartData}>
            <Line
              type="monotone"
              dataKey={"guest"}
              stroke="#e9a0a0"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey={"user"}
              stroke="#9BDD7C"
              strokeWidth={2}
            />
            <CartesianGrid stroke="#ccc" />
            {/* <CartesianAxis stroke="#ccc" /> */}
            <XAxis dataKey={"name"} />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
      </div>

      <div className="home__component__right__pie-chart-schedule">
        <div className="home__component__right__line-chart-schedule_pie-chart">
          <div className="home__component__right__line-chart-schedule_pie-chart_top">
            <span>Top products</span>
            <select name="" id="">
              <option value="">May - June 2021</option>
              <option value="">June - July 2021</option>
              <option value="">July - August 2021</option>
              <option value="">August - September 2021</option>
              <option value="">September - October 2021</option>
            </select>
          </div>
          <div className="home__component__right__line-chart-schedule_pie-chart_btm">
            <ResponsiveContainer width="50%" height="80%" className="res">
              <PieChart width={500} height={500}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div className="left_pie"></div>
          </div>
        </div>

        <div className="home__component__right__line-chart-schedule_schedule"></div>
      </div>
    </div>
  );
}

export default HomeComponent;

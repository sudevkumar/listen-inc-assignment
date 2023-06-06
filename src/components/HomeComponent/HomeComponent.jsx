import React from "react";
import Navbar from "../NavBar/Navbar";
import "./homeComponent.css";
import { BsChevronRight, BsTags } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { RiMoneyCnyBoxLine } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";
import {
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

function HomeComponent({ handleClick, click, setClick }) {
  const allData = [
    {
      name: "Total Revenue",
      amount: "$2,129,430",
      icon: <RiMoneyCnyBoxLine />,
      class: "revenue",
    },
    {
      name: "Total Transaction",
      amount: "$1,520",
      icon: <BsTags />,
      class: "transaction",
    },
    {
      name: "Total Likes",
      amount: "9,721",
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
    { name: "", guest: 342, user: 317 },
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
    { name: "Group B", value: 350 },
    { name: "Group C", value: 250 },
  ];

  console.log(typeof pieData[0].value);

  //   const value1 = pieData[0].value + pieData[1].value + pieData[2].value;

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];


  return (
    <div className="home__component__right">
      <Navbar handleClick={handleClick} click={click} setClick={setClick} />
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
          <ResponsiveContainer
            width={
              window.innerWidth >= 1156
                ? "98%"
                : window.innerWidth <= 768
                ? "96%"
                : "50%"
            }
            height={300}
          >
            <LineChart
              width={10}
              height={300}
              data={chartData}
              className="line__chart"
            >
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
          </ResponsiveContainer>
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

            <div className="left_pie">
              <div className="basic_tees">
                <div className="upper">
                  <div className="color green"></div>
                  <span>Basic Tees</span>
                </div>
                <div className="lower">
                  <span>{(pieData[0]?.value / 1000) * 100} %</span>
                </div>
              </div>
              <div className="custom_short_plants">
                <div className="upper1">
                  <div className="color red"></div>
                  <span>Custom Short Plants</span>
                </div>
                <div className="lower">
                  <span>{(pieData[1]?.value / 1000) * 100} %</span>
                </div>
              </div>
              <div className="super_hoodies">
                <div className="upper2">
                  <div className="color yellow"></div>
                  <span>Supper Hoodies</span>
                </div>
                <div className="lower">
                  <span>{(pieData[2]?.value / 1000) * 100} %</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home__component__right__line-chart-schedule_schedule">
          <div className="home__component__right__line-chart-schedule_schedule_top">
            <span>Today's schedule</span>
            <div className="home__component__right__line-chart-schedule_schedule_top_right">
              See All
              <BsChevronRight className="schedule_icon" />
            </div>
          </div>

          <div className="home__component__right__line-chart-schedule_schedule_btm">
            <div className="home__component__right__line-chart-schedule_schedule_btm_sec greens">
              <span>Meeting with suppliers from Kuta Bali</span>
              <span>14.00-15.00</span>
              <span>at Sunset road, Kuta Bali</span>
            </div>

            <div className="home__component__right__line-chart-schedule_schedule_btm_sec violets">
              <span>Meeting with suppliers from Kuta Bali</span>
              <span>14.00-15.00</span>
              <span>at Sunset road, Kuta Bali</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;

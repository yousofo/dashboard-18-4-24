import React from "react";
import TitleInfo from "../../components/Title-Info/TitleInfo";
import LineChart from "../../components/Charts/LineChart";
import OrderList from "../../components/Orders/OrderList";
import DetailsList from "../../components/Details-Info/DetailsList";
import ComponentWrapper from "../../components/Theme-Wrapper/ComponentWrapper";
import PolarAreaChart from "../../components/Charts/PolarAreaChart";
import Logs from "../../components/Logs/Logs.jsx";
import Tickets from "../../components/Tickets/Tickets";

const Home = () => {
  return (
    <div className="p-3 sm:py-8 sm:px-10 flex-1 flex flex-col gap-8">
      <TitleInfo title="Home" />
      <section className="w-full flex gap-3 sm:gap-6 flex-col xl:flex-row">
        <div className="flex-1 flex flex-col gap-3 sm:gap-6">
          <DetailsList />
          <ComponentWrapper title="sales">
            <LineChart />
          </ComponentWrapper>
        </div>
        <div className="flex-1 h-full overflow-hidden">
          <ComponentWrapper title="order list">
            <OrderList />
          </ComponentWrapper>
        </div>
      </section>
      <section className="flex gap-3 sm:gap-6 flex-col xl:flex-row">
        <ComponentWrapper title="product categories">
          <PolarAreaChart />
        </ComponentWrapper>
        <ComponentWrapper title="logs">
          <Logs />
        </ComponentWrapper>
        <ComponentWrapper title="tickets">
          <Tickets />
        </ComponentWrapper>
      </section>
    </div>
  );
};

export default Home;

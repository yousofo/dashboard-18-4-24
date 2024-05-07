import React from "react";
// import TitleInfo from "../../components/Title-Info/TitleInfo";
import LineChart from "../../components/Charts/LineChart.jsx";
import OrderList from "../../components/Orders/OrderList.jsx";
import DetailsList from "../../components/Details-Info/DetailsList.jsx";
import ComponentWrapper from "../../components/Theme-Wrapper/ComponentWrapper.jsx";
import PolarAreaChart from "../../components/Charts/PolarAreaChart.jsx";
import Logs from "../../components/logs1/Logs.jsx";
import Tickets from "../../components/Tickets/Tickets.jsx";
import PageWrapper from "../PageWrapper.jsx";

const Home = () => {
  return (
    <PageWrapper title="Home">
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
    </PageWrapper>
  );
};

export default Home;

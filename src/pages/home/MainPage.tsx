import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import PopRouteItem from "./PopRouteItem";
import SearchForm from "../../components/form/SearchForm";
import SideBar from "../../components/SideBar";
import { useLayoutEffect } from "react";

export default function MainPage() {
  return (
    <>
      <section className="  bg-search-form bg-center bg-cover text-white  md:pt-20 md:pb-7 lg:pt-28 lg:pb-16">
        <div className="w-5/6 mx-auto md:border-t-4 border-blue-400"></div>
        <SearchForm initialIsMini={false} />
      </section>
      <div className="md:w-200 lg:w-220 xl:w-[1170px] mx-auto lg:flex">
        <div className=" lg:w-3/4">
          <section className=" px-4 sm:px-1 ">
            <h2 className=" mt-7 mb-6 sm:pl-3 text-2xl text-blue-900 font-medium">
              Popular destinations
            </h2>
            <PopRouteItem from="Izhevsk" to="Votkinsk" />
            <PopRouteItem from="Izhevsk" to="Sarapul" />
            <PopRouteItem from="Izhevsk" to="Mozhga" />
            <PopRouteItem from="Izhevsk" to="Glazov" />
            <PopRouteItem from="Izhevsk" to="Kambarka" />
            <PopRouteItem from="Izhevsk" to="Igra" />
          </section>
          <section className=" px-4 ">
            <h2 className=" pt-5 pb-4 text-2xl text-blue-900 font-medium">
              Bus Station
            </h2>
            <p className=" pb-3 text-gray-800">
              We organize the sale of tickets for intercity, suburban and
              interregional routes are more than 40 years old.
            </p>
            <p className=" pb-3 text-gray-800">In addition, we provide:</p>
            <ol className=" px-4 text-gray-800 list-decimal">
              <li>
                Advertising spaces (banners, banners, signs, information on
                tickets, distribution of leaflets/business cards, as well as
                advertising on our official website);
              </li>
              <li>
                Premises for rent at bus stations and bus stations (office
                premises, retail space, premises free use and land plots);
              </li>
              <li>Rent of buses for group charter transportation.</li>
            </ol>
            <p className=" pb-3 text-gray-800">
              <br />
              Every year, passengers turn to us to simply and safely issue
              travel tickets. The company's employees ensure equal access to
              transport services for citizens entitled to social support
              measures.
            </p>
          </section>
          <section className="px-4 text-gray-800 ">
            <p className=" pb-3 text-xl text-blue-700 font-medium">
              Bus station information desk
              <br />
              <a
                className=" text-base text-gray-800"
                href="tel:+73412908888"
                target="_blank"
              >
                +7 (888) 88-88-88
              </a>
            </p>
            <p className="pb-3 text-xl text-blue-700 font-medium">
              Head office
            </p>
            <p>Izhevsk, Mayakovskogo Street, 47</p>
          </section>
        </div>
        <SideBar />
      </div>
    </>
  );
}

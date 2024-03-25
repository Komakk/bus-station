import VKWidget from "./VKWidget";
import YandexMap from "./YandexMap";
import Navigation from "./components/Navigation";
import PopRouteItem from "./components/PopRouteItem";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <>
      <Navigation />
      <main className=" relative top-14">
        <section className="  bg-search-form bg-center bg-cover text-white  md:pt-20 md:pb-7 lg:pt-28 lg:pb-16">
          <SearchForm />
        </section>
        <div className="md:w-200 lg:w-220 xl:w-[1170px] mx-auto lg:flex">
          <div className=" lg:w-3/4">
            <section className=" px-4 sm:px-1 ">
              <h2 className=" mt-7 mb-6 sm:pl-3 text-2xl text-blue-900 font-medium">
                Popular destinations
              </h2>
              <PopRouteItem />
              <PopRouteItem />
              <PopRouteItem />
              <PopRouteItem />
              <PopRouteItem />
              <PopRouteItem />
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
          <aside className=" px-4 pt-6 lg:w-1/4">
            <button className=" py-3 mb-5 w-full block border border-blue-800 text-blue-700 ">
              <img
                className=" inline-block mr-1"
                src="./public/jbility-toggle.svg"
              />
              Accessibility options
            </button>
            <button className=" py-3 mb-5 w-full block border border-blue-800 text-blue-700">
              <img
                className=" w-5 inline-block mr-1"
                src="./public/contacts.svg"
              />
              Client support centre
            </button>
            <button className=" py-3 mb-5 w-full block border border-blue-800 text-blue-700">
              <img
                className=" w-6 inline-block mr-1"
                src="./public/story.svg"
              />
              Feedbacks
            </button>
            <h2 className=" pb-4 text-xl text-blue-700">News</h2>
            <div className=" mb-4   shadow-lg text-gray-800">
              <p className=" p-3 border-2 border-slate-100">Some news title</p>
              <p className=" py-2 px-4 bg-gray-100 text-xs text-gray-500">
                21.02.2024
              </p>
            </div>
            <div className=" mb-4   shadow-lg text-gray-800">
              <p className=" p-3 border-2 border-slate-100">Some news title</p>
              <p className=" py-2 px-4 bg-gray-100 text-xs text-gray-500">
                21.02.2024
              </p>
            </div>
            <div className=" mb-4   shadow-lg text-gray-800">
              <p className=" p-3 border-2 border-slate-100">Some news title</p>
              <p className=" py-2 px-4 bg-gray-100 text-xs text-gray-500">
                21.02.2024
              </p>
            </div>
            <div className=" text-blue-700 text-center">
              <a>{"All news >>"}</a>
            </div>
            <div className=" mt-5">
              <VKWidget />
            </div>
          </aside>
        </div>
      </main>
      <footer>
        <div className=" mt-20">
          <YandexMap />
        </div>
        <div className="  bg-gray-100 ">
          <div className="pt-7 px-5 pb-4 md:w-200 lg:w-220 xl:w-[1170px] mx-auto">
            <div className="lg:flex lg:justify-between lg:flex-row-reverse">
              <div className=" pb-5">
                <p className=" text-gray-500">Technical support</p>
                <a
                  className=" text-2xl text-blue-700"
                  href="tel:8 800 600-03-38"
                >
                  8 888 888-88-88
                </a>
              </div>
              <hr className=" mt-5 mb-5 lg:hidden" />
              <div>
                <a className=" mr-8 mb-4 inline-block cursor-pointer hover:underline">
                  Requisites
                </a>
                <a className=" mr-8 mb-4 inline-block cursor-pointer hover:underline">
                  Terms of use
                </a>
                <a className="mb-4 inline-block cursor-pointer hover:underline">
                  Privacy Policy
                </a>
                <div className=" mt-3 flex">
                  <a className="cursor-pointer">
                    <img
                      className=" h-11 mr-5 mb-6"
                      src="./public/app-store.webp"
                    />
                  </a>
                  <a className="cursor-pointer">
                    <img
                      className=" h-11 mr-5 mb-6"
                      src="./public/google-play.webp"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <hr className=" mb-4" />
              <p className=" mb-4 text-gray-400">
                We use the information recorded{" "}
                <a
                  className=" text-blue-700 cursor-pointer hover:underline"
                  href=""
                >
                  in cookies
                </a>
                , in particular for advertising and statistical purposes, and to
                tailor our websites to the individual needs of Users. You can
                change the settings regarding cookies in your browser. Changing
                settings may limit the functionality of the site.
              </p>
              <hr className=" mb-4" />
              <p className=" text-gray-400">
                © 2013-2024, ООО "Капитал"- Онлайн сервис продажи билетов На
                автобус
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

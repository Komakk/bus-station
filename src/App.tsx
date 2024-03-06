import ListItem from "./ListItem";
import VKWidget from "./VKWidget";
import YandexMap from "./YandexMap";

export default function App() {
  return (
    <>
      <header className="flex items-center justify-center h-14 ">
        <button className=" absolute left-5 text-gray-500">
          <svg className=" h-10 w-10 fill-current" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>

        <h1 className=" text-2xl uppercase text-blue-700 font-light">
          Bus Station
        </h1>
      </header>
      <div className=" fixed overflow-auto w-4/5 h-full top-0 bg-white z-50">
        <div className=" p-8 h-24 bg-blue-700 text-center text-white">
          <a className=" underline cursor-pointer">Sign in</a>
          {` ${"\u00A0"} | ${"\u00A0"} `}
          <a className=" underline cursor-pointer">Sign up</a>
        </div>
        <div className=" py-4 px-5 border-b flex ">
          <a className=" cursor-pointer hover:underline">
            <p>Search trip</p>
            <p className=" text-xs text-gray-500">and buying tickets</p>
          </a>
        </div>
        <nav className=" py-4 px-5">
          <ul>
            <ListItem
              title="Services"
              src="/#"
              innerList={["Advertisement", "Rent", "Cooperation"]}
            />
            <ListItem
              title="About"
              src="/#"
              innerList={["Management and stations", "Vacancies", "News"]}
            />
            <ListItem
              title="Passenger Service"
              src="/#"
              innerList={[
                "Boarding and ticket return",
                "Ticket reservation",
                "Trip rules",
                "Passenger insurance",
              ]}
            />
            <ListItem title="Contacts" src="/#" />
            <ListItem title="Schedule" src="/#" />
          </ul>
        </nav>
        <div className=" fixed w-4/5 bottom-0 p-2 bg-slate-400"></div>
      </div>
      <div className=" fixed top-0 left-0 w-full h-full z-40 backdrop-brightness-50"></div>
      <main>
        <section className="bg-search-form bg-center bg-cover text-white">
          <div className=" px-6 py-5 bg-sky-600/30">
            <h2 className=" pl-2 text-2xl font-medium drop-shadow-lg">
              Buy ticket
            </h2>
            <form className=" flex flex-col ">
              <label className="pt-6 drop-shadow-md font-medium">From</label>
              <input
                className=" text-gray-800 px-3 py-2"
                type="text"
                value={"Izhevsk"}
              ></input>
              <label className="pt-2 drop-shadow-md font-medium">To</label>
              <input
                className=" text-gray-800 px-3 py-2"
                type="text"
                value={"Mozhga"}
              ></input>
              <label className="pt-2 drop-shadow-md font-medium">
                Departure date
              </label>
              <input
                className=" text-gray-800 px-3 py-2"
                value={"2024-02-18"}
                type="date"
              ></input>
              <button className=" mt-8 px-3 py-2 bg-yellow-400" type="submit">
                Search
              </button>
            </form>
          </div>
        </section>
        <section className=" px-4">
          <h2 className=" mt-7 mb-6 text-2xl text-blue-900 font-medium">
            Popular destinations
          </h2>
          <a className=" mt-6 relative text-white text-xl font-bold block h-56 w-full bg-route-votkinsk bg-center bg-cover">
            <div className=" w-full h-full backdrop-brightness-75">
              <span className=" absolute bottom-14 left-5">
                <span className=" text-base">Izhevsk - </span>
                <br />
                Votkinsk
              </span>
              <br />
              <span className=" absolute bottom-6 left-5 text-lg">
                from 270 rub
              </span>
            </div>
          </a>
          <a className=" mt-6 relative text-white text-xl font-bold block h-56 w-full bg-route-votkinsk bg-center bg-cover">
            <div className=" w-full h-full backdrop-brightness-75">
              <span className=" absolute bottom-14 left-5">
                <span className=" text-base">Izhevsk - </span>
                <br />
                Votkinsk
              </span>
              <br />
              <span className=" absolute bottom-6 left-5 text-lg">
                from 270 rub
              </span>
            </div>
          </a>
          <a className=" mt-6 relative text-white text-xl font-bold block h-56 w-full bg-route-votkinsk bg-center bg-cover">
            <div className=" w-full h-full backdrop-brightness-75">
              <span className=" absolute bottom-14 left-5">
                <span className=" text-base">Izhevsk - </span>
                <br />
                Votkinsk
              </span>
              <br />
              <span className=" absolute bottom-6 left-5 text-lg">
                from 270 rub
              </span>
            </div>
          </a>
        </section>
        <section className=" px-4">
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
            Every year, passengers turn to us to simply and safely issue travel
            tickets. The company's employees ensure equal access to transport
            services for citizens entitled to social support measures.
          </p>
        </section>
        <section className="px-4 text-gray-800">
          <p className=" pb-3 text-xl text-blue-700 font-medium">
            Bus station information desk
            <br />
            <a
              className=" text-base text-gray-800"
              href="tel:+73412908888"
              target="_blank"
            >
              +7 (3412) 90-88-88
            </a>
          </p>
          <p className="pb-3 text-xl text-blue-700 font-medium">Head office</p>
          <p>Izhevsk, Mayakovskogo Street, 47</p>
        </section>
        <aside className=" px-4 pt-6">
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
            <img className=" w-6 inline-block mr-1" src="./public/story.svg" />
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
      </main>
      <footer>
        <div className=" mt-20">
          <YandexMap />
        </div>
        <div className=" pt-7 px-5 pb-4 bg-gray-100">
          <div className=" pb-5">
            <p className=" text-gray-500">Technical support</p>
            <a className=" text-2xl text-blue-700" href="tel:8 800 600-03-38">
              8 800 600-03-38
            </a>
          </div>
          <hr className=" mt-5 mb-5" />
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
      </footer>
    </>
  );
}

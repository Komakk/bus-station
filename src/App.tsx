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
      <main>
        <section className=" px-6 py-9 bg-search-form bg-center bg-cover text-white">
          <h2 className=" text-2xl font-medium drop-shadow-lg">Buy ticket</h2>
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
        </section>
        <section className=" px-4">
          <h2 className=" mt-6 text-2xl text-blue-900 font-medium">
            Popular destinations
          </h2>
          <a className=" relative text-white text-xl font-bold block h-56 w-full bg-route-votkinsk bg-center bg-cover">
            <span className=" absolute bottom-14 left-5">
              <span className=" text-base">Izhevsk - </span>
              <br />
              Votkinsk
            </span>
            <br />
            <span className=" absolute bottom-6 left-5 text-lg">
              from 270 rub
            </span>
          </a>
        </section>
      </main>
    </>
  );
}

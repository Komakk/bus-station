import VKWidget from "../VKWidget";

export default function SideBar() {
  return (
    <aside className=" px-4 pt-6 lg:w-1/4">
      <button className=" py-3 mb-5 w-full block border border-blue-800 text-blue-700 ">
        <img className=" inline-block mr-1" src="/jbility-toggle.svg" />
        Accessibility options
      </button>
      <button className=" py-3 mb-5 w-full block border border-blue-800 text-blue-700">
        <img className=" w-5 inline-block mr-1" src="/contacts.svg" />
        Client support centre
      </button>
      <button className=" py-3 mb-5 w-full block border border-blue-800 text-blue-700">
        <img className=" w-6 inline-block mr-1" src="/story.svg" />
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
  );
}

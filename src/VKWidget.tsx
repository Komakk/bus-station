import { useEffect, useRef } from "react";

export default function VKWidget() {
  // useEffect(() => {
  //     VK.Widgets.Group(
  //       "vk_groups",
  //       { mode: 0, width: "auto", height: "250" },
  //       154467839
  //     );
  // }, []);
  return (
    <div id="vk_groups">
      <div className=" h-36">
        <div className=" h-16 border-b">
          <a className=" flex items-center justify-center" href="#">
            <img className=" rounded-full" src="./public/station.jpg" />
            <span className=" pl-3 font-semibold">Автовокзалы Удмуртии</span>
          </a>
        </div>
        <a className=" block mt-3 text-gray-500">5,838 followers</a>
        <button className=" px-4 py-2 bg-blue-700 text-white w-full rounded-lg">
          Follow on VK
        </button>
      </div>
    </div>
  );
}

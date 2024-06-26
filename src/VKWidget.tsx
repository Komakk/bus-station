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
      <div className=" h-36 px-4">
        <div className=" h-16 border-b">
          <a className=" flex items-center justify-start" href="#">
            <img className=" rounded-full" src="/station.jpg" />
            <span className=" pl-3 font-semibold">Автовокзалы Удмуртии</span>
          </a>
        </div>
        <a className=" block mt-3 text-gray-500">5,838 followers</a>
        <button className=" px-4 py-2 bg-blue-700 text-white w-full rounded-lg flex justify-center items-center mt-3">
          <svg className="h-5 w-5 fill-current mr-3" viewBox="0 0 24 24">
            <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z" />
          </svg>
          <span>Follow on VK</span>
        </button>
      </div>
    </div>
  );
}

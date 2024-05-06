export default function Ticket() {
  return (
    <div className=" mb-5 p-3 bg-gray-100 shadow-lg">
      <div className=" flex text-gray-800">
        <span className=" text-2xl">06:15</span>
        <span className=" px-3 flex items-center flex-auto text-gray-500">
          <span className=" w-3 h-[1px] inline-block flex-auto bg-gray-500"></span>
          01:15 hrs
          <span className=" w-3 h-[1px] inline-block flex-auto bg-gray-500"></span>
        </span>
        <span className=" text-2xl">07:30</span>
      </div>
      <div className=" text-gray-700">
        <span>Izhevsk</span>
        <span className=" float-right">Votkinsk</span>
      </div>
      <div className=" mt-2 flex text-gray-800">
        <div className=" w-2/5">
          <p>
            <span className=" text-2xl">300</span> rub
          </p>
          <p className=" text-xs text-gray-700">10 free seats</p>
        </div>
        <button className=" w-3/5 bg-green-500 text-white">Continue</button>
      </div>
      <div className=" border-t mt-2 pt-3 text-blue-700 text-sm">
        <span>
          Trip details &nbsp;<span className=" fa fa-caret-down"></span>
        </span>
        <span className=" float-right">
          Route &nbsp;<span className=" fa fa-angle-right"></span>
        </span>
      </div>
    </div>
  );
}

export default function PopRouteItem() {
  return (
    <a className=" mt-6 relative text-white text-xl font-bold block h-56 w-full sm:inline-block sm:w-1/3 sm:p-3 bg-route-votkinsk bg-center bg-cover">
      <div className=" w-full h-full backdrop-brightness-75">
        <span className=" absolute bottom-14 left-5">
          <span className=" text-base">Izhevsk - </span>
          <br />
          Votkinsk
        </span>
        <br />
        <span className=" absolute bottom-6 left-5 text-lg">from 270 rub</span>
      </div>
    </a>
  );
}

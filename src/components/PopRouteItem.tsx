import { Link } from "react-router-dom";
import { getDate } from "../../utils/utils";

export default function PopRouteItem({
  from,
  to,
}: {
  from: string;
  to: string;
}) {
  const link = `/${from}/${to}/${getDate(new Date())}`;
  return (
    <div className=" mt-6 h-56 w-full sm:mt-0 sm:inline-block sm:w-1/3 sm:p-3">
      <Link
        to={link}
        className=" text-white text-xl font-bold block h-full  bg-route-votkinsk bg-center bg-cover"
      >
        <div className=" relative w-full h-full bg-gray-700/40">
          <span className="relative top-10  left-5">
            <span className=" text-base">{from} - </span>
            <br />
            {to}
          </span>
        </div>
      </Link>
    </div>
  );
}

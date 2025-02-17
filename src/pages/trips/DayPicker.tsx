import { Link, useParams } from "react-router-dom";
import { getDate } from "../../../utils/utils";

const today = new Date();
today.setHours(0, 0, 0, 0);

export default function DayPicker({ dpDate }: { dpDate: Date }) {
  const { from, to } = useParams();

  const dateArray = dpDate.toDateString().split(" ");
  const isDisabled = dpDate.getTime() < today.getTime();

  return (
    <Link
      className={`${
        isDisabled
          ? " border-gray-300 text-gray-300 pointer-events-none"
          : "border-sky-700 text-sky-700"
      } px-3 py-1 border`}
      to={`/${from}/${to}/${getDate(dpDate)}`}
    >
      {dateArray[2] + " " + dateArray[1]}
    </Link>
  );
}

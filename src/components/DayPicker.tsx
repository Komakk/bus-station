export default function DayPicker({ date }: { date: Date }) {
  const dateArray = date.toDateString().split(" ");
  const isDisabled = date.getTime() < Date.now();

  return (
    <button
      className={`${
        isDisabled
          ? " border-gray-300 text-gray-300"
          : "border-sky-700 text-sky-700"
      } px-3 py-1 border`}
      disabled={isDisabled}
    >
      {dateArray[2] + " " + dateArray[1]}
    </button>
  );
}

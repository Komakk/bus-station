import "./DatePicker.css";

export default function DatePicker() {
  return (
    <div className=" relative">
      <input
        className="w-full text-gray-800 px-3 py-2"
        type="date"
        value={"2024-02-18"}
      />
    </div>
  );
}

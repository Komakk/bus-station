import { useState } from "react";
import "./DatePicker.css";

export default function DatePicker() {
  const [date, setDate] = useState(new Date());

  return (
    <div className=" relative">
      <input
        className="w-full text-gray-800 px-3 py-2"
        type="date"
        value={date.toISOString().split("T")[0]}
        onChange={(e) => {
          setDate(new Date(e.target.value || date));
        }}
      />
    </div>
  );
}

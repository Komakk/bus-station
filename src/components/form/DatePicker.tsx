import { getDate } from "../../../utils/utils";
import "../../assets/DatePicker.css";

interface DatePickerProps {
  dateValue: string;
  setDateValue: (value: React.SetStateAction<string>) => void;
}

const today = new Date();
today.setHours(0, 0, 0, 0);

export default function DatePicker({
  dateValue,
  setDateValue,
}: DatePickerProps) {
  return (
    <div className=" relative">
      <input
        className="w-full text-gray-800 px-3 py-2"
        type="date"
        value={dateValue}
        min={getDate(new Date())}
        onChange={(e) => {
          setDateValue(e.target.value || dateValue);
        }}
      />
    </div>
  );
}

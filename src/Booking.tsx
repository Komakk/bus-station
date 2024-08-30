import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import QRCode, { QRCodeToDataURLOptions } from "qrcode";

export default function Booking() {
  const ref = useRef<HTMLImageElement>(null);
  const location = useLocation();
  const { data } = location.state;

  useEffect(() => {
    const options: QRCodeToDataURLOptions = {
      margin: 0,
      type: "image/jpeg",
      errorCorrectionLevel: "H",
      width: 120,
    };

    QRCode.toDataURL("987654321", options, function (err, url) {
      if (err) throw err;

      if (ref.current) ref.current.src = url;
    });
  }, []);

  return (
    <>
      <main className=" relative top-14 text-gray-800">
        <div className=" relative p-3 max-w-200 mx-auto bg-slate-50">
          <h1 className=" pb-3 text-2xl text-blue-800">
            <b>Bus Ticket</b>
          </h1>
          <p>
            <b>Ticket Number:</b> 123456789
          </p>
          <p>
            <b>Departure:</b> Izhevsk
          </p>
          <p className="pb-1">
            <b>Arrival:</b> Votkinsk
          </p>
          <table className="w-full">
            <caption className="text-left">
              <b>Passengers:</b>
            </caption>
            <thead className=" h-7 bg-blue-800 text-gray-100 text-left">
              <tr>
                <th className="pl-2">Passenger</th>
                <th>Type</th>
                <th>Seat</th>
              </tr>
            </thead>
            <tbody className=" bg-gray-50">
              <tr className=" h-7 px-2 even:bg-gray-200">
                <td className="pl-2">John Dee</td>
                <td>Adult</td>
                <td>3</td>
              </tr>
              <tr className=" h-7 px-2 even:bg-gray-200">
                <td className="pl-2">John Dee</td>
                <td>Adult</td>
                <td>3</td>
              </tr>
              <tr className=" h-7 px-2 even:bg-gray-200">
                <td className="pl-2">John Dee</td>
                <td>Adult</td>
                <td>3</td>
              </tr>
              <tr className=" h-7 px-2 even:bg-gray-200">
                <td className="pl-2">John Dee</td>
                <td>Adult</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <p className=" pt-5">
            {1 > 1 ? `${2} Adults` : `${1} Adult`}
            <span className=" float-right">{300}rub</span>
          </p>
          <div className=" border-t"></div>
          <p>
            {1 > 1 ? `${2} Children` : `${1} Child`}
            <span className=" float-right">{150}rub</span>
          </p>
          <div className="border-t">
            <p className="">
              {1} Ensurance
              <span className=" float-right">{20}rub</span>
            </p>
          </div>
          <div className="border-t"></div>
          <p className="">
            Service Fee<span className=" float-right">0rub</span>
          </p>
          <div className=" border-t"></div>
          <p className="py-3 text-2xl font-medium">
            Total
            <span className=" float-right">
              {360}
              rub
            </span>
          </p>
          <img ref={ref} className="absolute top-4 right-4"></img>
          <div className="pt-3 text-sm">
            <p>
              <b>IMPORTANT!</b> Departure and arrival times are local to each
              stop.
            </p>
            <p>
              For regulatory reasons, it is required to carry the ticket(hard
              copy or electronic form).
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

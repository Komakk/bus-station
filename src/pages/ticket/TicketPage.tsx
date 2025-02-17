import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QRCode, { QRCodeToDataURLOptions } from "qrcode";
import { BookingType, Passenger } from "../../types/types";
import { toJpeg } from "html-to-image";

export default function TicketPage() {
  const ref = useRef<HTMLImageElement>(null);
  const ticketImageRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { ticketId, from, to, passengers, booking } = location.state;
  const typifiedBooking: BookingType = booking;

  function downloadTicketImage() {
    if (ticketImageRef.current === null) return;

    const options = {
      width: ticketImageRef.current.scrollWidth,
      height: ticketImageRef.current.scrollHeight * 1.05,
    };

    toJpeg(ticketImageRef.current, options)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "ticket.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const options: QRCodeToDataURLOptions = {
      margin: 0,
      type: "image/jpeg",
      errorCorrectionLevel: "H",
      width: 250,
    };

    QRCode.toDataURL(ticketId, options, function (err, url) {
      if (err) throw err;

      if (ref.current) ref.current.src = url;
    });
  }, []);

  return (
    <>
      <main className=" relative top-14 text-gray-800">
        <div
          ref={ticketImageRef}
          className=" relative mb-5 p-3 max-w-200 mx-auto bg-slate-50"
        >
          <h1 className=" text-center md:text-left pb-3 text-2xl text-blue-800">
            <b>Bus Ticket</b>
          </h1>
          <img
            ref={ref}
            className="mb-5 block mx-auto static sm:absolute sm:w-32 top-4 right-4"
          ></img>
          <p>
            <b>Ticket Number:</b> {ticketId}
          </p>
          <p>
            <b>Departure:</b> {from.city}{" "}
            {String(from.date).split("T").join(" ")}
          </p>
          <p className="pb-1">
            <b>Arrival:</b> {to.city} {String(to.date).split("T").join(" ")}
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
              {passengers.map((passenger: Passenger) => (
                <tr key={passenger.id} className=" h-7 px-2 even:bg-gray-200">
                  <td className="pl-2">{`${passenger.firstname} ${passenger.lastname}`}</td>
                  <td>{passenger.type}</td>
                  <td>{passenger.seat}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className=" pt-5">
            {`${typifiedBooking.adult.count} ${
              typifiedBooking.adult.count > 1 ? "Adults" : "Adult"
            }`}
            <span className=" float-right">
              {typifiedBooking.adult.price}rub
            </span>
          </p>
          <div className=" border-t"></div>
          <p>
            {`${typifiedBooking.child.count} ${
              typifiedBooking.child.count > 1 ? "Children" : "Child"
            }`}
            <span className=" float-right">
              {typifiedBooking.child.price}rub
            </span>
          </p>
          <div className="border-t">
            <p className="">
              {typifiedBooking.luggage.count} Luggage
              <span className=" float-right">
                {typifiedBooking.luggage.price}rub
              </span>
            </p>
          </div>
          <div className="border-t">
            <p className="">
              {typifiedBooking.ensurance.count} Ensurance
              <span className=" float-right">
                {typifiedBooking.ensurance.price}rub
              </span>
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
              {Object.values(typifiedBooking).reduce(
                (prev, cur) => prev + cur.price,
                0
              )}
              rub
            </span>
          </p>

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
        <div className="p-3 max-w-96 mx-auto flex justify-between text-white">
          <button
            className=" px-4 py-2 w-40 bg-green-500"
            onClick={() => {
              navigate(-1);
            }}
          >
            Go back to search
          </button>
          <button
            className=" px-4 py-2 w-40 bg-green-500"
            onClick={downloadTicketImage}
          >
            Download ticket
          </button>
        </div>
      </main>
    </>
  );
}

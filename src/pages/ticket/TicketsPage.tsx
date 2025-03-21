import { useEffect, useState } from "react";
import { Ticket } from "../../types/types";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { getDate, getTime } from "../../../utils/utils";

export default function TicketsPage() {
  const { currentUser } = useAuth();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  useEffect(() => {
    let ignore = false;
    fetch(`http://localhost:8000/tickets/by-email/${currentUser?.email}`)
      .then((response) => response.json())
      .then((data) => {
        if (!ignore) {
          setTickets(data);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  if (tickets.length === 0) return <div>No tickets found</div>;

  return (
    <div className=" container mx-auto p-6">
      <h2 className=" text-2xl font-semibold mb-4">Yours tickets</h2>
      <table className="w-full text-sm sm:text-base">
        <thead className=" h-7 bg-blue-800 text-gray-100 text-left">
          <tr>
            <th className="pl-2">Departure</th>
            <th>Arrival</th>
            <th>Ordered</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className=" bg-gray-50">
          {tickets.map((ticket) => (
            <tr key={ticket.id} className=" h-7 px-2 even:bg-gray-200">
              <td className="pl-2">
                {ticket.trip.from.city}
                <br />
                {ticket.trip.from.date.split("T").join(" ")}
              </td>
              <td>
                {ticket.trip.to.city}
                <br />
                {ticket.trip.to.date.split("T").join(" ")}
              </td>
              <td>{`${getDate(new Date(ticket.ordered))} ${getTime(
                new Date(ticket.ordered)
              )}`}</td>
              <td>
                <Link className=" hover:underline" to={`/tickets/${ticket.id}`}>
                  View {">"}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

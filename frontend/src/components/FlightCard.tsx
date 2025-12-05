import { type Flight } from "../store/flightSlice";

interface Props {
  flight: Flight;
  onSelect: () => void;
}

const FlightCard: React.FC<Props> = ({ flight, onSelect }) => {
  const dep = new Date(flight.departureTime);
  const arr = new Date(flight.arrivalTime);

  return (
    <div
      className="
        bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition

        flex flex-col gap-3
        sm:flex-row sm:items-center sm:justify-between
      "
    >
      {/* Airline Left */}
      <div className="flex items-center gap-4">
        <img
          src={flight.airlineLogoUrl}
          alt={flight.airlineName}
          className="h-10 w-10 object-contain rounded-full border p-1"
        />
        <div>
          <p className="font-semibold text-sm sm:text-base">{flight.airlineName}</p>
          <p className="text-[11px] text-slate-500">{flight.flightNumber}</p>
        </div>
      </div>

      {/* Middle Route */}
      <div className="flex items-center justify-between gap-6 sm:gap-10 flex-1">
        <div className="flex flex-col items-center">
          <span className="text-sm font-semibold">
            {dep.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
          <span className="text-[10px] text-slate-500">{flight.fromCity.toUpperCase()}</span>
        </div>

        <div className="hidden sm:block text-slate-500"></div>

        <div className="flex flex-col items-center">
          <span className="text-sm font-semibold">
            {arr.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
          <span className="text-[10px] text-slate-500">{flight.toCity.toUpperCase()}</span>
        </div>
      </div>

      {/* RIGHT → Price + Book Button (Always Right Aligned) */}
      <div className="flex flex-col items-end gap-2 sm:min-w-[120px] self-end">
        <span className="text-lg font-bold text-blue-600">
          ₹{flight.price.toFixed(0)}
        </span>

        <button
          onClick={onSelect}
          className="
            px-4 py-1.5 text-xs sm:text-sm
            bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition
            w-fit
          "
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FlightCard;

import { useState } from "react";

export default function YandexMap() {
  const [isVisible, setIsVisible] = useState(false);
  if (isVisible) {
    return (
      <div style={{ position: "relative", overflow: "hidden" }}>
        <a
          href="https://yandex.ru/maps/org/avtovokzal_udmurtii/1033546935/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "0px",
          }}
        >
          Автовокзал Удмуртии
        </a>
        <a
          href="https://yandex.ru/maps/44/izhevsk/category/bus_station/184108121/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
        >
          Автовокзал, автостанция в Ижевске
        </a>
        <a
          href="https://yandex.ru/maps/44/izhevsk/category/bus_tickets/184108281/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "28px",
          }}
        >
          Автобусные билеты в Ижевске
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=53.208421%2C56.840156&mode=poi&poi%5Bpoint%5D=53.210848%2C56.840196&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1033546935&z=16.88"
          width="100%"
          height="400"
          style={{ position: "relative" }}
        ></iframe>
      </div>
    );
  } else {
    return (
      <div className=" h-44 bg-izhevsk bg-cover bg-center">
        <div className=" backdrop-brightness-50 h-full w-full flex items-center justify-center">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className=" p-2 text-xl bg-blue-600 hover:bg-blue-800 hover:border hover:border-blue-900 text-white"
          >
            View location on the map
          </button>
        </div>
      </div>
    );
  }
}

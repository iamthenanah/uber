"use client";

import { useState, useEffect, useRef } from "react";
import { Calendar, Clock } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
interface NominatimSuggestion {
  place_id: number;
  lat: string;
  lon: string;
  display_name: string;
}

const center = {
  lat: 40.7128,
  lng: -74.006,
};

function SetViewOnChange({ coords }: { coords: { lat: number; lng: number } }) {
  const map = useMap();
  useEffect(() => {
    map.setView(L.latLng(coords.lat, coords.lng), 13);
  }, [coords, map]);
  return null;
}

export default function Hero() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupLatLng, setPickupLatLng] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [dropoffLatLng, setDropoffLatLng] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [pickupSuggestions, setPickupSuggestions] = useState<
    NominatimSuggestion[]
  >([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState<
    NominatimSuggestion[]
  >([]);

  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState("");
  const [showTimeSelector, setShowTimeSelector] = useState(false);
  const dateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setShowTimeSelector(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getSuggestions = async (query: string) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${query}&addressdetails=1`
    );
    return await res.json();
  };

  const handlePickupChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPickup(value);
    if (value.length > 2) {
      const suggestions = await getSuggestions(value);
      setPickupSuggestions(suggestions);
    } else {
      setPickupSuggestions([]);
    }
  };

  const handleDropoffChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setDropoff(value);
    if (value.length > 2) {
      const suggestions = await getSuggestions(value);
      setDropoffSuggestions(suggestions);
    } else {
      setDropoffSuggestions([]);
    }
  };

  return (
    <section className="bg-white w-full px-0 py-8 md:py-24">
      <div className=" mx-auto lg:flex  items-center gap-20">
        <div className="w-full">
          <h1 className="text-5xl/14 font-bold text-black mb-6">
            Go anywhere with Uber
          </h1>

          <div className="grid gap-4 mb-4 w-full max-w-lg relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter pickup location"
                value={pickup}
                onChange={handlePickupChange}
                className=" bg-gray-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black w-full"
              />
              {pickupSuggestions.length > 0 && (
                <ul className="absolute z-10 bg-white border border-gray-300 rounded-xl mt-1 max-h-48 overflow-y-auto w-full shadow-md">
                  {pickupSuggestions.map((sug, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => {
                        setPickup(sug.display_name);
                        setPickupLatLng({
                          lat: parseFloat(sug.lat),
                          lng: parseFloat(sug.lon),
                        });
                        setPickupSuggestions([]);
                      }}
                    >
                      {sug.display_name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Enter dropoff location"
                value={dropoff}
                onChange={handleDropoffChange}
                className=" bg-gray-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black w-full"
              />

              {dropoffSuggestions.length > 0 && (
                <ul className="absolute z-10 bg-white border border-gray-300 rounded-xl mt-1 max-h-48 overflow-y-auto w-full shadow-md">
                  {dropoffSuggestions.map((sug, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => {
                        setDropoff(sug.display_name);
                        setDropoffLatLng({
                          lat: parseFloat(sug.lat),
                          lng: parseFloat(sug.lon),
                        });
                        setDropoffSuggestions([]);
                      }}
                    >
                      {sug.display_name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="flex flex-col w-max md:flex-row gap-4 mb-4">
            <div className="relative flex-1" ref={dateRef}>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select date"
                className="w-full border border-zinc-300 rounded-xl px-4 py-3 text-sm pl-10"
                calendarClassName="custom_calendar"
                popperPlacement="bottom-start"
              />
              <Calendar
                size={18}
                className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-500 pointer-events-none"
              />
            </div>

            <div className="relative w-full md:w-auto flex-1">
              <button
                className="w-full border border-zinc-300 rounded-xl px-4 py-3 text-sm text-left flex items-center gap-2 hover:ring-2 hover:ring-black"
                onClick={() => setShowTimeSelector(!showTimeSelector)}
              >
                <Clock size={18} />
                {time || "Select time"}
              </button>
              {showTimeSelector && (
                <div className="absolute top-full left-0 mt-2 z-10 w-full bg-white border border-zinc-300 rounded-xl shadow-md p-2 max-h-60 overflow-y-auto">
                  {[...Array(24)].map((_, h) =>
                    ["00", "15", "30", "45"].map((m) => (
                      <div
                        key={`${h}:${m}`}
                        onClick={() => {
                          setTime(`${h.toString().padStart(2, "0")}:${m}`);
                          setShowTimeSelector(false);
                        }}
                        className="px-4 py-2 hover:bg-zinc-100 cursor-pointer text-sm"
                      >
                        {`${h.toString().padStart(2, "0")}:${m}`}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center justify-center text-sm font-medium hover:bg-zinc-900 w-full md:w-auto">
              Set prices
            </button>
            <p className="text-sm text-zinc-600 underline cursor-pointer">
              Log in to see your recent activity
            </p>
          </div>
        </div>

        <div className="w-full  rounded-xl overflow-hidden pt-6">
          <MapContainer
            center={pickupLatLng || dropoffLatLng || center}
            zoom={13}
            className="w-full h-[400px] rounded-xl overflow-hidden z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {pickupLatLng && (
              <>
                <Marker position={pickupLatLng}>
                  <Popup>Pickup</Popup>
                </Marker>
                <SetViewOnChange coords={pickupLatLng} />
              </>
            )}
            {dropoffLatLng && (
              <>
                <Marker position={dropoffLatLng}>
                  <Popup>Dropoff</Popup>
                </Marker>
                <SetViewOnChange coords={dropoffLatLng} />
              </>
            )}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}

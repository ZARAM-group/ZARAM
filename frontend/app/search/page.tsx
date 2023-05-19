"use client";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import OneItem from "../../components/OneItem/OneItem";
import "./Search.css";

const page = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<any[]>([]);
  const [gender, setGender] = useState("woman");

  useEffect(() => {
    if (query.length) {
      if (gender === "woman") {
        axios
          .get(`http://localhost:3001/items/searchWoman?query=${query}`)
          .then((found) => {
            setItems(found.data);
          });
      } else if (gender === "man") {
        axios
          .get(`http://localhost:3001/items/searchMan?query=${query}`)
          .then((found) => {
            setItems(found.data);
          });
      } else {
        axios
          .get(`http://localhost:3001/items/searchKids?query=${query}`)
          .then((found) => {
            setItems(found.data);
          });
      }
    }
  }, [query, gender]);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleGenderClick = (selectedGender: string) => {
    setGender(selectedGender);
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }
  };

  return (
    <div>
      <Navbar showSearch={false} />
      <div id="search-gender-container">
        <div id="gender-container">
          <button className="search-gender" onClick={() => handleGenderClick("woman")}>
            WOMAN
          </button>
          <button className="search-gender" onClick={() => handleGenderClick("man")}>
            MAN
          </button>
          <button className="search-gender" onClick={() => handleGenderClick("kids")}>
            KIDS
          </button>
        </div>
        <input
          type="text"
          ref={searchInputRef}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="SEARCH FOR AN ITEM, COLOR, COLLECTION..."
        />
      </div>
      <div id="items-container">
        {items.map((e, i) => {
          return <OneItem key={i} name={e.name} price={e.price} image={e.image} />;
        })}
      </div>
    </div>
  );
};

export default page;

"use client"
import { useState, useEffect } from "react";
import "./help.css";
import axios from "axios";

const Helpbar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const apiUrl = 'http://localhost:3001';

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="form__group field">
        <h3>HOW CAN WE HELP YOU?</h3>
        <input type="input" className="form__field" placeholder="Name" name="name" id="name" required />
      </div>
    </div>
  );
};

export default Helpbar;

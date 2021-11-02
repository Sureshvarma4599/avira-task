import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function Service() {
  const [Datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setDatas(res.data);
      console.log(res.data);
    });
  }, []);

  return Datas;
}

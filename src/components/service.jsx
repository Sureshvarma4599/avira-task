import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { useHistory } from "react-router-dom";
export default function Service() {
  const [Datas, setDatas] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setDatas(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="cardWrapper">
      {Datas.map((item) => (
        <div
          key={item.id}
          className="cards"
          onClick={() => {
            history.push({
              pathname: "/detail",
              state: { detail: item.description },
            });
          }}
        >
          <img src={item.image} style={{ width: "100px", height: "auto" }} />
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

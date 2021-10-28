import React from "react";
import { useLocation } from "react-router-dom";
export default function Detail() {
  const location = useLocation();
  const description = location.state.detail;
  return (
    <div>
      <p>{description}</p>
    </div>
  );
}

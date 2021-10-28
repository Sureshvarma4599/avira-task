import React, { useState, useEffect } from "react";

import Service from "./service";
export default function Dashboard() {
  return (
    <div>
      <h1>welcome </h1>
      <div>{Service()}</div>
    </div>
  );
}

import React from "react";
import Add from "../components/Add";
import Counter from "../components/Counter";
import Temperatures from "../components/Temperatures";
import Timer from "../components/Timer";

export default function ComponentPage() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: "darkblue" }}> Component Showcase</h1>
      <Add />
      <Counter />
      <Temperatures />
      <Timer />
    </div>
  );
}


import React from "react";
import { getValue } from "../Utils/ItemUtils";

export default function ValuePerRs({ item }) {
  return <div>{`Value: ${getValue(item)}`}</div>;
}

import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { random } from "../redux/reducer/randomReducer";

export default function BT2() {
  const bt2 = JSON.stringify(useSelector((state: any) => state.random));
  const dispatch = useDispatch();
  return (
    <div>
      <p>List number: {bt2}</p>
      <button onClick={() => dispatch(random())}>Random number</button>
    </div>
  );
}

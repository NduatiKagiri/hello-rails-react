import React, { useEffect } from "react";
import { fetchGreeting } from "../store/greeting/greetingReducer";
import { useSelector, useDispatch } from "react-redux";

export default function Greeting() {
  const { greeting } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div>
      <h1>Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
}

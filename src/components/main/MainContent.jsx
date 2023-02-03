import React, { useEffect, useReducer, useState } from "react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

const reducer = (state, action) => {
  switch (action.type) {
    case "PLUS":
      return {
        ...state,
        result: state.result + Number(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} + ${state.input} = ${state.result + +state.input}`,
        ],
      };
    case "MINUS":
      return {
        ...state,
        result: state.result - Number(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} - ${state.input} = ${state.result - +state.input}`,
        ],
      };
    case "MULTIPLY":
      return {
        ...state,
        result: state.result * Number(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} * ${state.input} = ${state.result * +state.input}`,
        ],
      };
    case "DIVIDE":
      return {
        ...state,
        result: state.result / Number(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} / ${state.input} = ${state.result / +state.input}`,
        ],
      };
    case "changeInput":
      return { ...state, input: action.input };
    default:
      return state;
  }
};

const initialState = {
  result: 0,
  input: "",
  history: [],
};

const MainContent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    dispatch({ type: "changeInput", input: e.target.value });
  };

  const plusHandler = () => {
    dispatch({ type: "PLUS" });
  };
  const minusHandler = () => {
    dispatch({ type: "MINUS" });
  };
  const multiplyHandler = () => {
    dispatch({ type: "MULTIPLY" });
  };
  const divideHandler = () => {
    dispatch({ type: "DIVIDE" });
  };

  console.log(state);

  return (
    <div>
      <Input type="number" value={state.input} onChange={handleInputChange} />
      Result: {state.result}
      <ul>
        {state.history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Button disabled={!state.input} onClick={plusHandler}>
        +
      </Button>
      <Button disabled={!state.input} onClick={minusHandler}>
        -
      </Button>
      <Button disabled={!state.input} onClick={multiplyHandler}>
        *
      </Button>
      <Button disabled={!state.input} onClick={divideHandler}>
        /
      </Button>
    </div>
  );
};

export default MainContent;

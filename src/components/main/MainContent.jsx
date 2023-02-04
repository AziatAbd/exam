import React, { useReducer, useState } from "react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

const actionsType = {
  PLUS: "PLUS",
  MINUS: "MINUS",
  MULTIPLY: "MULTIPLY",
  DIVIDE: "DIVIDE",
  CHANGE_INPUT: "CHANGE_INPUT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionsType.PLUS:
      return {
        ...state,
        result: state.result + parseInt(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} + ${state.input} = ${state.result + +state.input}`,
        ],
        prevHistory: [...state.history],
        prevResult: [state.result],
      };
    case actionsType.MINUS:
      return {
        ...state,
        result: state.result - parseInt(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} - ${state.input} = ${state.result - +state.input}`,
        ],
        prevHistory: [...state.history],
        prevResult: [state.result],
      };
    case actionsType.MULTIPLY:
      return {
        ...state,
        result: state.result * parseInt(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} * ${state.input} = ${state.result * +state.input}`,
        ],
        prevHistory: [...state.history],
        prevResult: [state.result],
      };
    case actionsType.DIVIDE:
      return {
        ...state,
        result: state.result / parseInt(state.input),
        input: "",
        history: [
          ...state.history,
          `${state.result} / ${state.input} = ${state.result / +state.input}`,
        ],
        prevHistory: [...state.history],
        prevResult: [state.result],
      };
    case actionsType.CHANGE_INPUT:
      return { ...state, input: action.input };
    default:
      return state;
  }
};

const initialState = {
  result: 0,
  input: "",
  history: [],
  prevHistory: [],
  prevResult: 0,
};

const MainContent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [prevHistory, setPrevHistory] = useState(false);

  const stepBackHandler = () => {
    setPrevHistory(true);
  };

  const handleInputChange = (e) => {
    dispatch({ type: actionsType.CHANGE_INPUT, input: e.target.value });
  };

  const plusHandler = () => {
    dispatch({ type: actionsType.PLUS });
    setPrevHistory(false);
  };
  const minusHandler = () => {
    dispatch({ type: actionsType.MINUS });
  };
  const multiplyHandler = () => {
    dispatch({ type: actionsType.MULTIPLY });
  };
  const divideHandler = () => {
    dispatch({ type: actionsType.DIVIDE });
  };

  console.log(state.prevResult);

  return (
    <div>
      <Button onClick={stepBackHandler}>just one step back</Button>
      <div>
        <Input type="number" value={state.input} onChange={handleInputChange} />
        {prevHistory ? (
          <ul>
            <h3>Result: {state.prevResult}</h3>
            {state.prevHistory.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <ul>
            <h3>Result: {state.result}</h3>
            {state.history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
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
    </div>
  );
};

export default MainContent;

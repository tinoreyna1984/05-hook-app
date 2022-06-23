import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas sobre todoReducer", () => {
  const initialState = [
    {
      id: 1,
      text: "Hola",
      done: false,
    },
  ];

  test("debe regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });
});

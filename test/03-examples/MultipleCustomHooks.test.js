import { render, screen, act } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
jest.mock("../../src/hooks/useFetch");

describe("Pruebas sobre MultipleCustomHooks", () => {

  /* test("Mostrar el componente por defecto", () => {
    render(<MultipleCustomHooks />);
    expect(screen.getByRole("loading"));
    expect(screen.getByText("Breaking Bad Quotes"));
  }); */

  test("Debe mostrar una cita", () => {
    screen.debug();
    useFetch.mockReturnValue({
      data: [
        {
            character: "Tino",
            quote: "Hola",
        },
      ],
      loading: false,
      error: null,
    });
  });
});

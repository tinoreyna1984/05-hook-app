import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas sobre useForm", () => {
  const initialForm = {
    name: "Tino",
    email: "tino@gmail.com",
  };

  test("Debe de regresar un objeto con dos funciones", () => {
    const { result } = renderHook(() => useForm(initialForm));
    console.log(result.current);
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      values: initialForm,
      handleInputChange: expect.any(Function),
      reset: expect.any(Function),
    });
  });

  test("Debe de cambiar el nombre en el formulario", () => {
    const nuevoValor = "Fernando";
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange } = result.current;
    console.log(result.current);

    act(() => {
      handleInputChange({
        preventDefault: () => {
        }, // esto es porque handleInputChange recibe el evento como parametro
        target: {
          name: "name",
          value: nuevoValor,
        },
      });
    });

    expect(result.current.name).toBe(nuevoValor);
  });
  
  test("Debe de resetear el formulario", () => {
    //const nuevoValor = "Fernando";
    const { result } = renderHook(() => useForm(initialForm));
    const { reset } = result.current;
    console.log(result.current);

    act(() => {
        reset({
        target: {
          name: "name",
          value: initialForm.name,
        },
      });
    });

    expect(result.current.name).toBe(initialForm.name);
  });
});

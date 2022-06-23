import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas sobre useCounter', () => { 
    test('debe retornar valores por defecto', () => { 
        const {result} = renderHook(() => useCounter(10));
        const [count, increment, decrement, reset] = result.current;

        expect(count).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        
        expect(reset).toEqual(expect.any(Function));
     })
    test('debe generar el counter con el valor de 100', () => { 
        const {result} = renderHook(() => useCounter(100));
        const [count] = result.current;
        expect(count).toBe(100);
     })
    test('debe generar funcionar el incremento', () => { 
        const {result} = renderHook(() => useCounter(100));
        const [count, increment] = result.current;

        console.log(result.current)
        
        act(() => {
            increment();
        })
        console.log(result.current)
        
        //expect(result.current).toBe(101);
     })
 })
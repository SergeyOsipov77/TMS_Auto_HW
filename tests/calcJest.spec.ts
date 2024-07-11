import { Calculator } from '../src/calculator';



describe('Calculator', () => {
    let calc: Calculator;


    beforeEach(() => {
        calc = new Calculator(10, 5);
    });


    it('Сложение двух чисел', () => {
        expect(calc.add()).toBe(15);
    });

    it('Вычитание двух чисел', () => {
        expect(calc.subtract()).toBe(5);
    });

    it('Умножение двух чисел', () => {
        expect(calc.multiply()).toBe(50);
    });


    it('Деление двух чисел', () => {
        expect(calc.divide()).toBe(2);
    });



    it('Вычисление остатка от деления', () => {
        expect(calc.modulus()).toBe(0);
    });



    it('Вычесление квадратного корня', () => {
        expect(calc.squareRoot(25)).toBe(5);
    });



    it('Ошибка при делении на ноль', () => {
        const calcZero = new Calculator(10, 0);
        expect(() => calcZero.divide()).toThrow();
    });


    it('Ошибка при вычислении квадратного корня отрицательного числа', () => {
        expect(() => calc.squareRoot(-1)).toThrow();
    });

    it('Сложение. Результат является целым числом', () => {
        expect(calc.add()).toEqual(15); 
    });
    
    it('Вычитание. Результат является целым числом', () => {
        expect(calc.subtract()).toEqual(5);
    });
    
    it('Умножение. Результат является целым числом', () => {
        expect(calc.multiply()).toEqual(50);
    });
    
    it('Деление. Результат является целым числом', () => {
        expect(calc.divide()).toEqual(2);
    });
    
    it('Остаток от деления. Результат является целым числом', () => {
        expect(calc.modulus()).toEqual(0);
    });
    
    it('Извлечение корня. Результат является целым числом', () => {
        expect(calc.squareRoot(25)).toEqual(5); 
    });
});
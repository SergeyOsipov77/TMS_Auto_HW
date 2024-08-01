import { Calculator } from '../src/calculator';
import  assert  from 'assert';


describe('Calculator', () => {
    let calc: Calculator;

    beforeEach(() => {
        calc = new Calculator(10, 5);
    });

    it('Сложение двух чисел', () => {
        assert.equal((calc.add()), 15, "Ошибка сложения");
    });

    it('Вычитание двух чисел', () => {
        assert.equal((calc.subtract()), 5, "Ошибка вычитания");
    });

    it('Умножение двух чисел', () => {
        assert.equal((calc.multiply()), 50, "Ошибка умножения");
    });

    it('Деление двух чисел', () => {
        assert.equal((calc.divide()), 2, "Ошибка деления");    
    });

    it('Вычисление остатка от деления', () => {
        assert.equal((calc.modulus()), 0, "Ошибка ычисление остатка от деления");
    });

    it('Вычесление квадратного корня', () => {
        assert.equal((calc.squareRoot(25)), 5, "Ошибка вычесление квадратного корня");
    });
})
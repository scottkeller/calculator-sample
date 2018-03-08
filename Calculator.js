/**
 *  Calculator base class
 */
class Calculator{

    /**
     * Adds two numbers together
     * @param {number} x 1st number to be added
     * @param {number} y 2nd number to be added
     * @returns {number}
     */
    add(x, y) {
        return x+y;
    }
     /**
     * Subtracts two numbers
     * @param {number} x minuend
     * @param {number} y subtrahend
     * @returns {number}
     */
    subtract(x, y) {
        return x-y;
    }
    /**
     * Multiplies two numbers
     * @param {number} x multiplicand
     * @param {number} y multiplier
     * @returns {number}
     */
    multiply(x, y) {
        return x*y;
    }

    /**
     * Divides two numbers
     * @param {number} x dividend
     * @param {number} y divisor
     * @returns {number}
     */
    divide(x, y) {
        if(y !== 0){
            return x/y
        }
        return NaN
    }

}

module.exports = Calculator;
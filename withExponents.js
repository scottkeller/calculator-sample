/**
 * Functional mixin to extend Calculator
 */
withExponents = function()
{
    /**
     * Exponential function
     * @param {number} x base number
     * @param {number} y exponent
     * @returns {number}
     */
    this.pow = Math.pow;
    /**
     * Multiplies the result of exponential function of two sets of numbers
     * @param {[number, number]} x 1st set of numbers
     * @param {[number, number]} y 2nd set of numbers
     * @returns {number}
     */
    this.multiplyExp = (x, y) =>
    {
        return this.pow(x[0], x[1]) * this.pow(y[0], y[1])
    };
    /**
     * Divides the result of exponential function of two sets of numbers
     * @param {[number, number]} x 1st set of numbers
     * @param {[number, number]} y 2nd set of numbers
     * @returns {number}
     */
    this.divideExp = (x, y) =>
    {
        return this.pow(x[0], x[1]) / this.pow(y[0], y[1])
    };
};

module.exports = withExponents;
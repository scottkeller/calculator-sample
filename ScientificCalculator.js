/**
 * Calculator base class
 * @type {Calculator}
 */
Calculator = require('./Calculator');

/**
 * Scientific calculator extends base calculator
 */
class ScientificCalculator extends Calculator{

    constructor() {
        super();
        /**
         * Sine of a number
         * @param {number} x
         * @returns {number}
         */
        this.sin = Math.sin;
        /**
         * Cosine of a number
         * @param {number} x
         * @returns {number}
         */
        this.cos = Math.cos;
        /**
         * Tangent of a number
         * @param {number} x
         * @returns {number}
         */
        this.tan = Math.tan;
        /**
         * Logarithm of a number
         * @param {number} x
         * @returns {number}
         */
        this.log = Math.log;
    }

}

module.exports = ScientificCalculator;
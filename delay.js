/**
 * Delay promise function
 * @param {int} timeout timeout duration in milliseconds
 * @param {object} obj object to operate on
 * @param {string} method name of a method to execute, member of obj
 * @param {[number, number]} args numbers to pass to the method
 * @returns {Promise<any>}
 */

let delay = function(timeout, obj, method, args) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //if the object contains the method, resolve
            if(obj.hasOwnProperty(method)){
                resolve(obj['method'](args[0], args[1]))
            }
            //otherwise reject nonexisting methods of the object
            else{
                err = new Error('Method ' + method + 'does not exist');
                reject(err)
            }
        }, timeout);
    });
};

module.exports = delay;
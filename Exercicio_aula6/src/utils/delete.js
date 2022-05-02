const validate = require('validate.js');
const Constants = require('./Constants');
const Constraints = require('./users_validation');

const Delete = { 
    delete(data) {
        const validation = validate.validate(data, Constraints.deleteBy);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }
    }
};
module.exports = Delete;
const {StatusCodes}=require('http-status-codes');
const { sequelize } = require('../../models');
class ValidationError extends Error {
    constructor(error){
        super();
        let explanation=[];
        error.errors.forEach(err => {
          explanation.push(err.message);
        });
       this.name='Validation Error';
       this.message='Not able to Validate the data sent in the request';
       this.explanation=explanation;
       this.statusCode=StatusCodes.BAD_REQUEST;
    }
}

module.exports=ValidationError;

// npx sequelize model:generate --name Booking --attributes flightId:integer,userId:integer,status:enum
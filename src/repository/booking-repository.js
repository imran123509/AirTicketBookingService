const { ValidationError } = require('sequelize');
const {Booking}=require('../models/index');
const { AppError } = require('../utils/errors');
const { StatusCodes } = require('http-status-codes');

class BookingRepository {
    async create(data){
        try {
           const booking =await Booking.create(data);
           return booking; 
        } catch (error) {
           if(error.name=='sequelizeValidationError'){
                throw new ValidationError(error);
           }
           throw new AppError(
            'RepositoryError','cannot Create Booking',
            'there is some issue creating the booking please try later',
            StatusCodes.INTERNAL_SERVER_ERROR
           );
        }
    }
}

module.exports=BookingRepository;

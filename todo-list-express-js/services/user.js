import * as UserRepo from '../repository/users.js';
import { successResponse, errorResponse } from '../utils/response.js';

export const getAllUser = async (request, response, next) => {
    try {
        const [result] = await UserRepo.getData();
        successResponse(response, "Ok",result)
    } catch (error) {
        next(error)
    }
}

export const createUser = async (request, response, next) => {
    try {
        let name = request.body.name;
        let email = request.body.email;
        let password = request.body.password;
        const [result] = await UserRepo.createData(name, email, password);
        successResponse(response, "berhasil menambahkan data", result.insertId)
    } catch(error) {
        next(error);
    }
}

export const getUserById = async(request, response, next) => {
    try {
        let id = request.params.id;
        const [result] = await UserRepo.getDataById(id);
        console.log(result);
        if(result.length > 0) {
            successResponse(response, "Ok", result[0])
        } else {
            errorResponse(response, "data tidak ditemukan", 404);
        }
    } catch(error) {
        next(error)
    }
}

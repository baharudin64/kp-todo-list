import * as UserRepo from '../repository/users.js';

const getAllUser = async () => {
    const [result] = await UserRepo.getData();

    console.log(result);
}

const createUser = async (name, email, password) => {
    const [result] = await UserRepo.createData(name, email, password);

    console.log(`user berhasil di tambahkan dengan id ${result.insertId}`)
}

export { getAllUser, createUser}
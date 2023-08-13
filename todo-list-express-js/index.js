/*
    1. Tambahkan endpoint users untuk menghapus dan meakukan update
        - endpoint delete harus menggunakan method delete
        - endpoint update harus menggunakan method put
    2. Buat database tasks dengan kolom sebagai berikut : 
        task_id, user_id, task_name, is_completed,created_at, updated_at
    3. Buat endpoint CRUD lengkap untuk table task.
*/
import expess from 'express';
import * as UserService from './services/user.js'

const app = expess();
const port = 8080;
const host = "localhost"

app.use(expess.json())

app.get("/users", UserService.getAllUser);
app.get("/users/:id", UserService.getUserById);
app.post("/users", UserService.createUser);

app.listen(port, host, () =>{
    console.log(`server REST API berlajan di http://${host}:${port}`);
})
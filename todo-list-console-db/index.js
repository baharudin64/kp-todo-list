/*
    1. buat function berikut pada service user: 
        - function update
        - function delete
        - function get by id (tampilkan 1 data object yang di ambil)
    2. Buat function pada repository users untuk get data by id user.
    3. jalankan function2 yang ada di service tersebut di file index.js;
*/

import { getAllUser, createUser } from "./services/user.js";

console.log('Menambahkan user 1');
createUser("user1", "user1@gmail.com", "pass1234");
console.log('Menambahkan user 2');
createUser("user2", "user2@gmail.com", "pass123");

console.log("menampilkan seluruh data");

getAllUser();
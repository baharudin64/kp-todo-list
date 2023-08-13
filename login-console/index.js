/*
    1. Tambahkan data array users dengan nama, email dan password anda
    2. Ketika login berhasil tampilkan di console dengan kalimat berikut:
     "Login berhasil. email yang anda gunakan adalah: <email dari data user>"
    3. buat fungsi untuk melakukan pengecheck-an email jika email ada dalam data maka lanjutkan tanya password.
        jika tidak maka tutup aplikasi.
*/

const readline = require('readline')

const users = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function addUser(name, email, password) {
    let user = {
        name: name,
        email: email,
        password: password
    };

    users.push(user);
}

function login(email, password) {
    const user = users.find(item => item.email === email && item.password == password);

    if (user) {
        console.log(`login berhasil. Selamat datang ${user.name}`);
    } else {
        console.log("login gagal, email atau password tidak cocok")
    }
}

addUser("Andika", "dika@gmail.com", "pass1234");
addUser("rovi", "rovi@gmail.com", "pass1234");
addUser("Baharudin", "baharudinhasan19@gmail.com", "pass1234");

rl.question("Masukkan email: ", (email) => {
    rl.question("Masukkan password: ", (password) => {
        login(email, password);
        rl.close();
    })
})



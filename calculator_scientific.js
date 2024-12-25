// Menambahkan nilai ke tampilan kalkulator
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Menghapus semua input pada tampilan kalkulator
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Menghitung hasil ekspresi matematika yang dimasukkan
function calculate() {
    try {
        // Mengevaluasi ekspresi matematika menggunakan eval()
        const result = eval(document.getElementById('display').value);
        
        // Menampilkan hasil atau error jika ekspresi tidak valid
        if (result === undefined || result === Infinity || isNaN(result)) {
            document.getElementById('display').value = 'Error';
        } else {
            document.getElementById('display').value = result;
        }
    } catch (error) {
        // Menangani error dan menampilkan pesan error pada tampilan
        document.getElementById('display').value = 'Error';
    }
}

// Fungsi untuk menghitung akar kuadrat
function sqrt() {
    const value = document.getElementById('display').value;
    if (value) {
        const result = Math.sqrt(parseFloat(value));
        document.getElementById('display').value = result;
    }
}

// Fungsi untuk menghitung logaritma
function log() {
    const value = document.getElementById('display').value;
    if (value) {
        const result = Math.log10(parseFloat(value));
        document.getElementById('display').value = result;
    }
}

// Fungsi untuk menghitung sinus
function sin() {
    const value = document.getElementById('display').value;
    if (value) {
        const result = Math.sin(parseFloat(value) * Math.PI / 180);  // Mengonversi derajat ke radian
        document.getElementById('display').value = result;
    }
}

// Fungsi untuk menghitung kosinus
function cos() {
    const value = document.getElementById('display').value;
    if (value) {
        const result = Math.cos(parseFloat(value) * Math.PI / 180);  // Mengonversi derajat ke radian
        document.getElementById('display').value = result;
    }
}

// Fungsi untuk menghitung tangen
function tan() {
    const value = document.getElementById('display').value;
    if (value) {
        const result = Math.tan(parseFloat(value) * Math.PI / 180);  // Mengonversi derajat ke radian
        document.getElementById('display').value = result;
    }
}

// Fungsi untuk menghitung eksponen (e^x)
function exp() {
    const value = document.getElementById('display').value;
    if (value) {
        const result = Math.exp(parseFloat(value));
        document.getElementById('display').value = result;
    }
}

// Fungsi untuk menghitung pangkat dua (x²)
function square() {
    const value = document.getElementById('display').value;
    if (value) {
        const result = Math.pow(parseFloat(value), 2);
        document.getElementById('display').value = result;
    }
}

// Fungsi untuk menghitung π
function pi() {
    document.getElementById('display').value = Math.PI;
}

// Fungsi untuk menghitung nilai e (Euler's number)
function e() {
    document.getElementById('display').value = Math.E;
}

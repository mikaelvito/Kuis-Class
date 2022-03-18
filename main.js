class Kendaraan {
    constructor(nama, beroperasiDi, tahunDitemukan) {
        this.namaKendaraan = nama;
        this.beroperasiDi = beroperasiDi;
        this.tahunDitemukan = tahunDitemukan;
    }

    introduction() {
        console.log(`
            Saya adalah ${this.namaKendaraan}.
            Saya beroperasi di ${this.beroperasiDi}.
            Saya ditemukan pada ${this.tahunDitemukan}
        `);
    }
}

class Pesawat extends Kendaraan {
    constructor
}
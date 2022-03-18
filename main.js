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
            Saya diproduksi pertama kali pada tahun ${this.tahunDitemukan}
        `);
    }
}

class Pesawat extends Kendaraan {
    constructor(nama, beroperasiDi, tahunDitemukan, sayap) {
        super(nama, beroperasiDi, tahunDitemukan);
        this.sayap = sayap;
    }

    terbang() {
        super.introduction();
        console.log(`
        saya bisa terbang loh.
        karena saya mempunyai ${this.sayap}
        `);
    }
}

class Mobil extends Kendaraan {
    constructor(nama, beroperasiDi, tahunDitemukan, drift) {
        super(nama, beroperasiDi, tahunDitemukan,);
        this.drift = drift;
    }

    drifting() {
        super.introduction();
        console.log(`
        saya bisa ngesot
        ngesot adalah kata lain dari ${this.drift}
        `);
    }
}

const ae86 = new Mobil("ae86", "darat", 1983, "drift");
const silvia = new Mobil ("silvia", "darat", "1975", "drift");

const boeing = new Pesawat("boeing model one", "langit", 1916, "sayap");
const airbus = new Pesawat("airbus model one", "langit", 1950, "sayap");

boeing.introduction();
airbus.introduction(); 

boeing.terbang();
airbus.terbang();

ae86.introduction();
silvia.introduction();

ae86.drifting();
silvia.drifting();

try {
    airbus.drifting();
} catch (err) {
    alert("AIRBUS GABISA NGESOT BOS");
}
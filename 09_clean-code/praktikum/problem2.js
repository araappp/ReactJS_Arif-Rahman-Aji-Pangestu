class kendaraan{
   constructor(totalroda, kecepatanperjam) {
    this.totalroda = totalroda;
    this.kecepatanperjam = kecepatanperjam;
   }
}

class mobil extends kendaraan {
    tambahkecepatan(kecepatanbaru) {
        this.kecepatanperjam = this.kecepatanperjam + kecepatanbaru;
        return this.kecepatanperjam;
    }
    berjalan() {
        this.tambahkecepatan(10);
    }
}

let mobilcepat = new mobil(4, 20);

console.log(mobilcepat.berjalan());
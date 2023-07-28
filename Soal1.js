const nama = prompt('masukkan nama anda');
const peran = prompt('pilih peran anda : tabib, ksatria, penyehir');
const ksatria = 'ksatria';
const tabib = 'tabib';
const penyihir = 'penyihir';


if (nama) {
    alert(`Hello ${nama}`)
}else{
alert('nama wajib diisi')
};

if (peran == ksatria) {
    alert(`halo ksatria ${nama}, kamu dapat menyerang musuh`)
} else if (peran == tabib) {
    alert(`halo tabib ${nama}, kamu akan membantu temanmu`)
} else if (peran == penyihir) {
    alert(`halo penyihir ${nama}, ciptakan keajaiban yang akan membantu temanmu`)
} else {
    alert ('kamu jadi bot aja ya, peran yang anda masukkan tidak ada')
}


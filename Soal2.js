let hari = prompt ('masukkan tanggal');
if (hari >= 31) {
    alert('nilai yang kamu masukkan kebanyak bro!, tanggal cuma ada 31');
    main();
}
let bulan = prompt ('masukkan bulan');
if (bulan > 12) {
    alert('nilai yang kamu masukkan kebanyak bro!, bulan cuma ada 12');
    main();
}
let tahun =prompt ('masukkan tahun');

switch(bulan) {
    case '1' :
        alert(`${hari} januari ${tahun}`);
        break;
    case '2' :
        alert(`${hari} Februari ${tahun}`);
        break;
    case '3' :
        alert(`${hari} Maret ${tahun}`);
        break;
    case '4' :
        alert(`${hari} April ${tahun}`);
        break;
    case '5' :
        alert(`${hari} Mei ${tahun}`);
        break;
    case '6' :
        alert(`${hari} Juni ${tahun}`);
        break;
    case '7' :
        alert(`${hari} Juli ${tahun}`);
        break;
    case '8' :
        alert(`${hari} Agustus ${tahun}`);
        break;
    case '9' :
        alert(`${hari} September ${tahun}`);
        break;
    case '10' :
        alert(`${hari} Oktober ${tahun}`);
        break;
    case '11' :
        alert(`${hari} November ${tahun}`);
        break;
    case '12' :
        alert(`${hari} Desember ${tahun}`);
        break;
}

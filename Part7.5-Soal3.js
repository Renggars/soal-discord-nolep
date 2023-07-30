function prosesSentence (name, age, addres, hobby) {
    return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + addres + ', dan saya punya hobby yaitu ' + hobby
}

let name = 'Rengga';
let age = '18';
let addres = 'Singapura';
let hobby = 'Foya-foya';
let fullSentence = prosesSentence(name, age,addres,hobby);

console.log(fullSentence);
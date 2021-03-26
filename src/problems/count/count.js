let text = "hola que tal, bienbenidos a Bettatech. Si os esta gustando este video, suscribete y darle a la campana! campana"

function normalize(word) {
    return word.toLowerCase().replace('!', '').replace(',', '').replace('.', '');
}

function count(text) {
    dic = {};
    text2 = text.split(' ');
    for (let word of text2) {
        if (normalize(word) in dic) {
            dic[normalize(word)]++;
        } else {
            dic[normalize(word)] = 1;
        }
    }
    console.log(dic);
}
console.log(count(text));
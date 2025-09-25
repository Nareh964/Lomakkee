const id = document.getElementById("id");
const salasana = document.getElementById("password");
const nimi = document.getElementById("name");
const osoite = document.getElementById("address");
const maa = document.getElementById("maa")
const virhe = document.getElementById("error");
const postinumero = document.getElementById("zip");
const sahkoposti = document.getElementById("email");
const sukupuoli = document.getElementsByName("sukupuoli")
const kieli = document.getElementsByName("lang");
const form = document.getElementById("lomakke");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let message = [];

    //Käyttäjä ID
    if (id.value === "" || id.value == null || id.value.length < 6){
        message.push("Käyttäjä ID vaaditaan ja sen tulee olla vähintään 6 merkkiä pitkä");
    }
    //Salansa
    if (salasana.value === "" || salasana.value == null || salasana.value.length  < 6 || !/[A-Z]/.test(salasana.value) || !/[!@£$€&%#]/.test(password.value)){
        message.push("Salasana vaaditaan ja sen tulee olla vähintää  6 pituista pitkä, sitä sisältää vähintään yhden iso kirjain ja erikoismerkkejä");
    }

    //Nimi
    if (nimi.value === "" || nimi.value == null) {
        message.push("Nimeä vaaditaan");
    }

    //Osoite
    if (osoite.value === "" || osoite.value == null){
        message.push("Osoite vaaditaan")
    }

    //Maa
    if (maa.value === "non" ){
        message.push("Valitse maa")
    }

    //Postinumero
    if (postinumero.value === "" || postinumero.value == null || !/\d{5}$/.test(postinumero.value)){
        message.push("Postinumero vaaditaan ja sen tulee olla 5 numeroa pitkä");
    }


    //Säköposti
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(sahkoposti.value);

    if (sahkoposti.value === "" || sahkoposti.value == null || !validEmail ){
        message.push("Sähköposti vaaditaan ja sen tulee olla oikea muotoinen");
    }

    //Sukupuoli
    const x = document.querySelector("input[name='sukupuoli']:checked");
    if (!x){
        message.push("Valitse sukupuoli")
    }

    //Kieli
    const k = document.querySelector("input[name='lang']:checked");
    if (!k){
        message.push("Valitse kieli")
    }

    //virhe
    if (message.length > 0){
        virhe.innerText = message.join(', ');
    } else {
        virhe.innerText = "";
    }
})  
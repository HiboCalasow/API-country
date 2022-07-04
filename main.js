let countryName=document.getElementById('country-name');
let countryFlag=document.getElementById('country-flag');
let searchBtn=document.getElementById('search');
searchBtn.addEventListener("submit",(e) => {
    e.preventDefault();
    //console.log(e.target[0].value);
    fetch(`https://restcountries.com/v3.1/name/${e.target[0].value}`)
    .then((res) => res.json())
    .then((data) => {
console.log(data);
countryName.textContent=data[0].name.common;
countryFlag.innerHTML=`<img src=${data[0].flags.png} alt="country flag">`;
    });
});

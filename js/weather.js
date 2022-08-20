const key = `0363f7a9726741dbc814f2c65b8e32a6`;
const searchCountry = () => {
    const input = document.getElementById("get-input");
    const searchText = input.value;
    input.value = ' ';

    const url = ` https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => display(data))





}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}



const display = d => {
    console.log(d)
    setInnerText('city', d.name)
    setInnerText("temperature", d.main.temp)
    setInnerText("mood", d.weather[0].main);


    // set weather icon 
    const url = `http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`
    const icon = document.getElementById('icon')
    icon.setAttribute('src', url);




}
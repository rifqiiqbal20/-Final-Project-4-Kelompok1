let leter = 0;
const text = "RAMALAN CUACA"
function typetext() {
          if (leter < text.length) {
                    document.getElementById('typing').innerHTML += text.charAt(leter);
                    leter++;
                    let speed = Math.floor(Math.random() * 300) + 300;
                    setTimeout(typetext, speed);
          }
}
typetext()
const searchinput = document.querySelector('.box input');
const searchBtn = document.querySelector('.button');
const image = document.querySelector('.icon')
async function getWeaters(city) {
          var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=abf9618384de3f0d3c478fc6c1407915&&units=metric`);
          if (res.status == 404) {
                    document.querySelector('.error').style.display = "block";
          } else {
                    document.querySelector('.error').style.display = "none";
          }
          var data = await res.json();
          console.log(data);
          document.querySelector('.suhu').innerHTML = Math.round(data.main.temp) + '°C';
          document.querySelector('.kota').innerHTML = (data.name);
          document.querySelector('.kelembapan').innerHTML = Math.round(data.main.humidity) + '%';
          document.querySelector('.deskripsi').innerHTML = (data.weather[0].description);
          document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + "km/h";

          if (data.weather[0].main == "Clouds") {
                    image.src = "./gambar/cloud.png"
          } else if (data.weather[0].main == "Rain") {
                    image.src = "./gambar/rain.png"
          } else if (data.weather[0].main == "Drizzle") {
                    image.src = "./gambar/gerimis.png"
          }
          else if (data.weather[0].main == "Clear") {
                    image.src = "./gambar/berawan.png"
          }
          else if (data.weather[0].main == "Mist") {
                    image.src = "./gambar/kabut.png"
          }


}
getWeaters();


searchBtn.addEventListener('click', () => {
          getWeaters(searchinput.value);
})
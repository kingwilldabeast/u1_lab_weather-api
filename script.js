
const apiKey = "1d3ac0137ab74a19812132303240905"
const button = document.querySelector("#submitButton")
const textInput = document.querySelector('#textInput')

const cityName = document.querySelector('#cityName')
const cityLocalTime = document.querySelector('#cityLocalTime')
const regionName = document.querySelector('#regionName')
const countryName = document.querySelector('#countryName')

//////////////////ROWS /////////////////////
// const weatherRows = document.querySelector('#weatherRows');
// const labelRow = document.querySelector('#labelRow');
// const dayLabel = document.querySelector('#dayLabel');
// const weatherIcon = document.querySelector('#weatherIcon');
// const weatherLabel = document.querySelector('#weatherLabel');
// const tempLabel = document.querySelector('#tempLabel');
// const windSpeedLabel = document.querySelector('#windSpeedLabel');
// const humidityLabel = document.querySelector('#humidityLabel');
// const rainInchesLabel = document.querySelector('#rainInchesLabel');
// const windDirectionLabel = document.querySelector('#windDirectionLabel');
//////////////////DAY 1/////////////////////
// const currentDateRow = document.querySelector('#currentDateRow');
const day1 = document.querySelector('#day1');
const icon1 = document.querySelector('#icon1');
const weatherCondition1 = document.querySelector('#weatherCondition1');
const temperature1 = document.querySelector('#temperature1');
const windSpeed1 = document.querySelector('#windSpeed1');
const humidity1 = document.querySelector('#humidity1');
const rainInches1 = document.querySelector('#rainInches1');
// const windDirectionCurrentDate = document.querySelector('#windDirectionCurrentDate');
//////////////////DAY 2/////////////////////
const day2 = document.querySelector("#day2")
const icon2 = document.querySelector("#icon2")
const weatherCondition2 = document.querySelector("#weatherCondition2")
const temperature2 = document.querySelector("#temperature2")
const windSpeed2 = document.querySelector("#windSpeed2")
const humidity2 = document.querySelector("#humidity2")
const rainInches2 = document.querySelector("#rainInches2")
// const windDirection2 = document.querySelector("#windDirection2")
//////////////////DAY 3/////////////////////
const day3 = document.querySelector("#day3")
const icon3 = document.querySelector("#icon3")
const weatherCondition3 = document.querySelector("#weatherCondition3")
const temperature3 = document.querySelector("#temperature3")
const windSpeed3 = document.querySelector("#windSpeed3")
const humidity3 = document.querySelector("#humidity3")
const rainInches3 = document.querySelector("#rainInches3")
// const windDirection3 = document.querySelector("#windDirection3")
//////////////////DAY 4/////////////////////
const day4 = document.querySelector("#day4")
const icon4 = document.querySelector("#icon4")
const weatherCondition4 = document.querySelector("#weatherCondition4")
const temperature4 = document.querySelector("#temperature4")
const windSpeed4 = document.querySelector("#windSpeed4")
const humidity4 = document.querySelector("#humidity4")
const rainInches4 = document.querySelector("#rainInches4")
// const windDirection4 = document.querySelector("#windDirection4")
//////////////////DAY 5/////////////////////
const day5 = document.querySelector("#day5")
const icon5 = document.querySelector("#icon5")
const weatherCondition5 = document.querySelector("#weatherCondition5")
const temperature5 = document.querySelector("#temperature5")
const windSpeed5 = document.querySelector("#windSpeed5")
const humidity5 = document.querySelector("#humidity5")
const rainInches5 = document.querySelector("#rainInches5")
// const windDirection5 = document.querySelector("#windDirection5")
//////////////////DAY 6/////////////////////
const day6 = document.querySelector("#day6")
const icon6 = document.querySelector("#icon6")
const weatherCondition6 = document.querySelector("#weatherCondition6")
const temperature6 = document.querySelector("#temperature6")
const windSpeed6 = document.querySelector("#windSpeed6")
const humidity6 = document.querySelector("#humidity6")
const rainInches6 = document.querySelector("#rainInches6")
// const windDirection6 = document.querySelector("#windDirection6")
//////////////////DAY 7/////////////////////
const day7 = document.querySelector("#day7")
const icon7 = document.querySelector("#icon7")
const weatherCondition7 = document.querySelector("#weatherCondition7")
const temperature7 = document.querySelector("#temperature7")
const windSpeed7 = document.querySelector("#windSpeed7")
const humidity7 = document.querySelector("#humidity7")
const rainInches7 = document.querySelector("#rainInches7")
// const windDirection7 = document.querySelector("#windDirection7")

function getWeekDay(inputDate) {
    let date = new Date(inputDate);
    let index = date.getDay();
    console.log(index)
    let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let weekday = weekdays[index];
    return weekday;
  }

//   let today = new Date()
//   console.log(getWeekDay("2024-05-09"))
// console.log(response.data.forecast.forecastday[0].date)
// console.log(new Date())

button.addEventListener('click', async () => {
    let input = textInput.value
    if (input == ``) { input = "london" }
  
      let response = await axios.get(
        // `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=no`
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${input}&days=7&aqi=no&alerts=no`
    )
    console.log(response.data)

      cityName.innerHTML = response.data.location.name
      cityLocalTime.innerHTML = response.data.location.localtime
      regionName.innerText = response.data.location.region
      countryName.innerText = response.data.location.country


        day1.innerText = getWeekDay(response.data.forecast.forecastday[0].date)
        icon1.setAttribute('src',response.data.forecast.forecastday[0].day.condition.icon)
        weatherCondition1.innerText = response.data.forecast.forecastday[0].day.condition.text
        temperature1.innerText = response.data.forecast.forecastday[0].day.avgtemp_f
        windSpeed1.innerText = response.data.forecast.forecastday[0].day.maxwind_mph
        humidity1.innerText = response.data.forecast.forecastday[0].day.avghumidity + "%"
        rainInches1.innerText = response.data.forecast.forecastday[0].day.totalprecip_in + " in"
////////////////////////////////////////////////////
        day2.innerText = getWeekDay(response.data.forecast.forecastday[1].date)
        icon2.setAttribute('src',response.data.forecast.forecastday[1].day.condition.icon)
        weatherCondition2.innerText = response.data.forecast.forecastday[1].day.condition.text
        temperature2.innerText = response.data.forecast.forecastday[1].day.avgtemp_f
        windSpeed2.innerText = response.data.forecast.forecastday[1].day.maxwind_mph
        humidity2.innerText = response.data.forecast.forecastday[1].day.avghumidity + " %"
        rainInches2.innerText = response.data.forecast.forecastday[1].day.totalprecip_in + " inches"
        ////////////////////////////////////////////////////
        day3.innerText = getWeekDay(response.data.forecast.forecastday[2].date)
        icon3.setAttribute('src',response.data.forecast.forecastday[2].day.condition.icon)
        weatherCondition3.innerText = response.data.forecast.forecastday[2].day.condition.text
        temperature3.innerText = response.data.forecast.forecastday[2].day.avgtemp_f
        windSpeed3.innerText = response.data.forecast.forecastday[2].day.maxwind_mph
        humidity3.innerText = response.data.forecast.forecastday[2].day.avghumidity + " %"
        rainInches3.innerText = response.data.forecast.forecastday[2].day.totalprecip_in + " inches"
        ////////////////////////////////////////////////////
        day4.innerText = getWeekDay(response.data.forecast.forecastday[3].date)
        icon4.setAttribute('src',response.data.forecast.forecastday[3].day.condition.icon)
        weatherCondition4.innerText = response.data.forecast.forecastday[3].day.condition.text
        temperature4.innerText = response.data.forecast.forecastday[3].day.avgtemp_f
        windSpeed4.innerText = response.data.forecast.forecastday[3].day.maxwind_mph
        humidity4.innerText = response.data.forecast.forecastday[3].day.avghumidity + " %"
        rainInches4.innerText = response.data.forecast.forecastday[3].day.totalprecip_in + " inches"
        ////////////////////////////////////////////////////
        day5.innerText = getWeekDay(response.data.forecast.forecastday[4].date)
        icon5.setAttribute('src',response.data.forecast.forecastday[4].day.condition.icon)
        weatherCondition5.innerText = response.data.forecast.forecastday[4].day.condition.text
        temperature5.innerText = response.data.forecast.forecastday[4].day.avgtemp_f
        windSpeed5.innerText = response.data.forecast.forecastday[4].day.maxwind_mph
        humidity5.innerText = response.data.forecast.forecastday[4].day.avghumidity + " %"
        rainInches5.innerText = response.data.forecast.forecastday[4].day.totalprecip_in + " inches"
        ////////////////////////////////////////////////////
        day6.innerText = getWeekDay(response.data.forecast.forecastday[5].date)
        icon6.setAttribute('src',response.data.forecast.forecastday[5].day.condition.icon)
        weatherCondition6.innerText = response.data.forecast.forecastday[5].day.condition.text
        temperature6.innerText = response.data.forecast.forecastday[5].day.avgtemp_f
        windSpeed6.innerText = response.data.forecast.forecastday[5].day.maxwind_mph
        humidity6.innerText = response.data.forecast.forecastday[5].day.avghumidity + " %"
        rainInches6.innerText = response.data.forecast.forecastday[5].day.totalprecip_in + " inches"
        ////////////////////////////////////////////////////
        day7.innerText = getWeekDay(response.data.forecast.forecastday[6].date)
        icon7.setAttribute('src',response.data.forecast.forecastday[6].day.condition.icon)
        weatherCondition7.innerText = response.data.forecast.forecastday[6].day.condition.text
        temperature7.innerText = response.data.forecast.forecastday[6].day.avgtemp_f
        windSpeed7.innerText = response.data.forecast.forecastday[6].day.maxwind_mph
        humidity7.innerText = response.data.forecast.forecastday[6].day.avghumidity + " %"
        rainInches7.innerText = response.data.forecast.forecastday[6].day.totalprecip_in + " inches"
    })      //////////////////////////////////////////////////////
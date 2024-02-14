let input_box=document.getElementById("txt")

let Search_button=document.getElementById("btn")
let temparature = document.querySelector('#Temparture_value');
let humidity=document.querySelector('#humidity_value');
let windspeed=document.querySelector('#Windspeed_value')
let hum_img=document.querySelector("#hum")
let wind_img=document.querySelector("#wind")


Search_button.addEventListener("click",(event)=>{
      event.preventDefault();

      if(input_box.value==="")
      {
          alert("Error fetching weather data empty")
      }

      let city_name=input_box.value
      let apikey = "1ac41d822f470089588e62f6ac6cbdce";
      let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
      
            fetch(apiurl+`&appid=${apikey}&q=${city_name}`)
            .then(response => response.json())
            .then(data => {
                let dataTemp=data.main.temp;
                temparature.innerHTML=`${data.main.temp}&#8451 <br>${city_name} `;
                humidity.innerHTML =`${data.main.humidity} % humidity `;
                windspeed.innerHTML =`${data.wind.speed} mph windspeed`;
                hum_img.src='humidity.png';
                hum_img.classList.add("humidity_img");
                wind_img.src='wind.png';
                wind_img.classList.add("windspeed_image")
        //   .style.src='humidity.png';
                if(dataTemp > 26)
                {
                    maincontainer.style.backgroundImage="url('weather1.webp')"
                }
                else if(dataTemp >= 20 && temparature <= 25)
                {
                    maincontainer.style.backgroundImage="url('weather2.webp')"
                    maincontainer.style.color="white";
                    
                }
                else{
                    maincontainer.style.backgroundImage="url('weather3.webp')"
                    maincontainer.style.color="white";
                }
                input_box.value=" "
                
            })
           
      
})








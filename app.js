if (window.fetch) {
              console.log('Fetch API поддерживается')
}
else {
              console.log('Ваш браузер не поддерживает Fetch API')
}

        

function sendReqGET() {
              if (!window.fetch) {
                            window.alert('Ваш браузер не поддерживает Fetch API')
                            return
              }

              const lat = document.getElementById("lat").value
              const lon = document.getElementById("lon").value
              // const lat = 44.58
              // const lon = 33.52

              var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3494d4a987dd4298bb658ab4d1f6ebaa`
              
              console.log(url)

              fetch(url)
                            .then(function(response) {
                                          if (!response.ok) {
                                                        throw new Error('Статус:' + response.status)
                                          }
                                          return response.json()
                            })
                            .then(function(json) {
                                          console.log(json)
                                          console.log("--------------------------------------")
                                          console.log(json.name)
                                          console.log(json.main.temp-273)
                                          document.getElementById('wearther').value = json.main.temp-273
                            })
}
const button = document.querySelector('.button') 
button.addEventListener('click', function() {
              console.log(lat.value)
              console.log(lon.value)
              sendReqGET()
})

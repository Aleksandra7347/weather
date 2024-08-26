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

              var url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.6054434&lon=33.5220842&appid=3494d4a987dd4298bb658ab4d1f6ebaa'

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
                                          document.getElementById('location').value = json.name
                                          console.log(json.main.temp-273)
                                          document.getElementById('wearther').value = json.main.temp-273
                            })
}

sendReqGET()
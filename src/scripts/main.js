const dateEvent = new Date("mar 11, 2024 19:00")
const timeStampEvent = dateEvent.getTime()

const counterHours = setInterval(() => {
  const currentTime = new Date()
  const timeStampCurrentTime = currentTime.getTime()

  const minutes = 1000 * 60 
  const hours = minutes * 60
  const days = hours * 24

  const timeUntilEvent = timeStampEvent - timeStampCurrentTime
  const daysUntilEvent = Math.floor(timeUntilEvent / days)
  const hoursUntilEvent = Math.floor((timeUntilEvent % days) / hours)
  const minutesUntilEvent = Math.floor((timeUntilEvent % hours) / minutes)
  const secondsUntilEvent = Math.round((timeUntilEvent % minutes) / 1000)

  document.getElementById('counter').innerHTML = `
  ${String(daysUntilEvent).length === 1 ? `0${daysUntilEvent}` : `${daysUntilEvent}`}d 
  ${String(hoursUntilEvent).length === 1 ? `0${hoursUntilEvent}` : `${hoursUntilEvent}`}h 
  ${String(minutesUntilEvent).length === 1 ? `0${minutesUntilEvent}` : `${minutesUntilEvent}`}m 
  ${String(secondsUntilEvent).length === 1 ? `0${secondsUntilEvent}` : `${secondsUntilEvent}`}s
`

  if(timeUntilEvent < 0 ) {
    clearInterval(counterHours)
    document.getElementById('delete').innerHTML = ''
    document.getElementById('counter').innerHTML = 'Terminou =('
  }
}, 1000)
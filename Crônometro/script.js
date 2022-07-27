let hour = 0
let minute = 0
let second = 0
let stopwatch

function start() {
  pause()
  stopwatch = setInterval(() => timer(), 1000)
}

function pause() {
  clearInterval(stopwatch)
}

function reset() {
  hour = 0
  minute = 0
  second = 0
  document.getElementById('hour').innerHTML = '00'
  document.getElementById('minute').innerHTML = '00'
  document.getElementById('second').innerHTML = '00'
}

function timer() {
  second++
  if (second == 60) {
    second = 0
    minute++
  }
  if (minute == 60) {
    minute = 0
    hour++
  }
  document.getElementById('hour').innerHTML = returnDate(hour)
  document.getElementById('minute').innerHTML = returnDate(minute)
  document.getElementById('second').innerHTML = returnDate(second)
}

function returnDate(input) {
  return input >= 10 ? input : `0${input}`
}

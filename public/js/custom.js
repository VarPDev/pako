const currentDate = new Date()
const currentMonth = currentDate.getMonth()

if (currentMonth === 11 || currentMonth === 0) {
  for (let i = 0; i <= 200; i++) {
    const snow = document.createElement('div')
    snow.className = 'snow'

    document.body.prepend(snow)
  }
}
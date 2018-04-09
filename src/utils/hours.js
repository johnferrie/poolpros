export function getDealerHours(weekHours) {
  const hoursMap = {
    weekdays: '',
    saturday: '',
    sunday: '',
  }

  for (const key in weekHours) {
    const hours = weekHours[key]
    let mapKey = 'weekdays'
    let separator = ''

    if (!hours || hours === 'On Call') {
      separator = '- '
    }

    if (key === 'sat') {
      mapKey = 'saturday'
    }

    if (key === 'sun') {
      mapKey = 'sunday'
    }

    hoursMap[mapKey] = separator + (hours || 'Closed')
  }

  return hoursMap
}

export function capitalizeFirst(str) {
  const first = str[0].toUpperCase()
  return first + str.slice(1)
}

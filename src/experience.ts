// Works out time since a start month, so the site never needs a manual update.

export type YearMonth = { year: number; month: number } // month is 1-12

function plural(n: number, word: string) {
  return `${n} ${word}${n === 1 ? '' : 's'}`
}

export function monthsSince(start: YearMonth, now = new Date()) {
  return Math.max(0, (now.getFullYear() - start.year) * 12 + (now.getMonth() + 1 - start.month))
}

// "1 year, 2 months", "8 months", "2 years"
export function timeSince(start: YearMonth, now = new Date()) {
  const total = monthsSince(start, now)
  const years = Math.floor(total / 12)
  const months = total % 12
  if (years === 0) return plural(months, 'month')
  if (months === 0) return plural(years, 'year')
  return `${plural(years, 'year')}, ${plural(months, 'month')}`
}

// "1 yr 2 mo", for the stats row
export function shortTimeSince(start: YearMonth, now = new Date()) {
  const total = monthsSince(start, now)
  const years = Math.floor(total / 12)
  const months = total % 12
  if (years === 0) return `${months} mo`
  if (months === 0) return `${years} yr`
  return `${years} yr ${months} mo`
}

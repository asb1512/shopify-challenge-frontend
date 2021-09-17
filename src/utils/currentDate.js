export function getCurrentDate() {
  let today = new Date()
  let yyyy = today.getFullYear()
  let mm = today.getMonth() + 1
  let dd = today.getDate()

  return `${yyyy}-${mm}-${dd}`
}
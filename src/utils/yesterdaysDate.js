import { getCurrentDate } from "./currentDate";

export function getYesterdaysDate() {
  const splitStrArray = getCurrentDate().split('-')
  const yyyy = splitStrArray[0]
  const mm = splitStrArray[1]
  const dd = () => {
    const int = parseInt(splitStrArray[2], 10) - 1
    const str = int.toString()
    return str
  }
  return `${yyyy}-${mm}-${dd()}`
}
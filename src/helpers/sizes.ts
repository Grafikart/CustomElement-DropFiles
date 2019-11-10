export function humanSize (size: number, precision: number = 2) {
  let i = Math.floor(Math.log(size) / Math.log(1024))
  return (size / Math.pow(1024, i)).toFixed(precision).toString() + ['o', 'ko', 'Mo', 'Go', 'To'][i]
}

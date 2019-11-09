export function humanSize (size, precision = 2) {
  let i = Math.floor(Math.log(size) / Math.log(1024))
  return (size / Math.pow(1024, i)).toFixed(0) * 1 + ' ' + ['o', 'ko', 'Mo', 'Go', 'To'][i]
}

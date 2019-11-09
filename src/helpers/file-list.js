export function arrayToFilelist(files) {
  const data = (new ClipboardEvent("")).clipboardData || new DataTransfer
  files.forEach(file => {
    if (!file instanceof File) {
      throw new TypeError("expected argument to FileList is File or array of File objects")
    }
    data.items.add(file)
  })
  return data.files
}

export function arrayToFileList(files: File[]): FileList {
  // const data = (new ClipboardEvent('')).clipboardData || new DataTransfer
  const data = new ClipboardEvent('').clipboardData || new DataTransfer()
  files.forEach(file => data.items.add(file))
  return data.files
}

export function mergeFiles(files1: File[], files2: File[]): File[] {
  const files = [...files1]
  files2.forEach(file => {
    if (files.find(f => f.size === file.size && f.name === file.name) === undefined) {
      files.push(file)
    }
  })
  return files
}

export function mergeFileLists(files1: FileList, files2: FileList): FileList {
  return arrayToFileList(mergeFiles(Array.from(files1), Array.from(files2)))
}

export function diffFiles(oldFiles: FileList | null, newFiles: FileList): Array<File[]> {
  if (oldFiles === null) {
    return [Array.from(newFiles), []]
  }
  const added = Array.from(newFiles).filter(f => !Array.from(oldFiles).includes(f))
  const removed = Array.from(oldFiles).filter(f => !Array.from(newFiles).includes(f))
  return [added, removed]
}

export function removeFile(fileList: FileList, file: File): FileList {
  return arrayToFileList(Array.from(fileList).filter(f => f !== file))
}

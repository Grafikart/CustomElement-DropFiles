import pdf from './pdf.svg'
import doc from './doc.svg'
import xls from './xls.svg'
import media from './media.svg'
import zip from './zip.svg'
import { strToDom } from '../helpers/dom'

type IconList = {
  [k: string]: string
}

const icons: IconList = {
  doc: doc,
  docx: doc,
  txt: doc,
  pdf: pdf,
  xls: xls,
  xlsx: xls,
  csv: xls,
  mp3: media,
  mpeg: media,
  zip: zip,
  tar: zip,
  rar: zip
}

/*
Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ doc: string; docx: string; pdf: string; }'.
  No index signature with a parameter of type 'string' was found on type '{ doc: string; docx: string; pdf: string; }'.

 */

export function renderExtension(file: File): Element {
  const ext = file.name
    .split('.')
    .slice(-1)[0]
    .toLowerCase()
  if (icons[ext] !== undefined) {
    return strToDom(icons[ext]).firstChild as Element
  }
  const img = strToDom(`<img src="" alt="icone"/>`).firstChild as HTMLImageElement
  const reader = new FileReader()
  reader.addEventListener(
    'load',
    () => {
      img.setAttribute('src', reader.result.toString())
    },
    false,
  )
  reader.readAsDataURL(file)
  return img
}

import pdf from "./pdf.svg"
import doc from "./doc.svg"
import { strToDom } from "../helpers/dom"

type IconList = {
  [k: string]: string
}

const icons: IconList = {
  doc: doc,
  docx: doc,
  pdf: pdf
}

/*
Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ doc: string; docx: string; pdf: string; }'.
  No index signature with a parameter of type 'string' was found on type '{ doc: string; docx: string; pdf: string; }'.

 */

export function renderExtension(file: File): Element {
  const ext = file.name
    .split(".")
    .slice(-1)[0]
    .toLowerCase()
  if (icons[ext] !== undefined) {
    return <Element>strToDom(icons[ext]).firstChild
  }
  const img = <HTMLImageElement>strToDom(`<img src=""/>`).firstChild
  const reader = new FileReader()
  reader.addEventListener(
    "load",
    () => {
      img.setAttribute("src", reader.result.toString())
    },
    false
  )
  reader.readAsDataURL(file)
  return img
}

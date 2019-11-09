import {h} from 'preact'
import {useState} from 'preact/hooks'
import FileImage from './file-image.jsx'
import FilePDF from './file-pdf.jsx'
import FileDoc from './file-doc.jsx'

export default function ({file}) {
  const extension = file.name.split('.').slice(-1)[0].toLowerCase()
  if (['doc', 'docx'].includes(extension)) {
    return <FileDoc/>
  } else if (extension === 'pdf') {
    return <FilePDF/>
  } else if (['png', 'jpg'].includes(extension)) {
    return <FileImage file={file}/>
  }
  return null
}

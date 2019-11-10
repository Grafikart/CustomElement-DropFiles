import {h} from 'preact'
import FileExtension from './icons/file-extension'
import { humanSize } from '../../helpers/sizes'

export default function file (props = {file, onDelete}) {
  console.log('rendering file ' + file.name, props)
  return <div className="drop-files__file">
    <FileExtension file={file}/>
    <div className="drop-files__fileinfo">
      <span>{file.name}</span>
      <em>{humanSize(file.size)}</em>
    </div>
    <svg onclick={() => onDelete(file)} width="24" height="24" viewBox="0 0 24 24" fill="none"
         xmlns="http://www.w3.org/2000/svg" className="drop-files__delete">
      <path
        d="M4 5H7V4C7 3.46957 7.21071 2.96086 7.58579 2.58579C7.96086 2.21071 8.46957 2 9 2H15C15.5304 2 16.0391 2.21071 16.4142 2.58579C16.7893 2.96086 17 3.46957 17 4V5H20C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H19V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5V5ZM7 7V20H17V7H7ZM9 5H15V4H9V5ZM9 9H11V18H9V9ZM13 9H15V18H13V9Z"
        fill="currentColor"/>
    </svg>
  </div>
}

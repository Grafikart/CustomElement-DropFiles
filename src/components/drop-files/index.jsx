import {h, createRef} from 'preact'
import {useEffect, useState, useRef} from 'preact/hooks'
import {arrayToFilelist} from '../../helpers/file-list'
import FileList from './file-list.jsx'

function useDragOver () {
  const [isDraggedOver, setDragOver] = useState(false)

  return {
    isDraggedOver,
    onDragOver: () => setDragOver(true),
    onDragLeave: () => setDragOver(false),
  }
}

function mergeWithouDuplicates (files1, files2) {
  const files = [...files1]
  files2.forEach(file => {
    if(files.find(f => f.size === file.size && f.name === file.name) === undefined) {
      files.push(file)
    }
  })
  return files
}

export default function Counter({name, label = "Drop files here or click to upload.", help = null, input}) {
  const {isDraggedOver, onDragOver, onDragLeave} = useDragOver()
  const [files, setFiles] = useState([])
  const classes = ['drop-files']
  const hasFiles = files.length > 0
  const container = useRef(null)
  if (isDraggedOver) classes.push('is-hovered')
  if (hasFiles) classes.push('has-files')

  function deleteFile (file) {
    setFiles(files.filter(f => f !== file))
  }

  function onChange(e) {
    setFiles(mergeWithouDuplicates(files, Array.from(e.currentTarget.files)))
  }

  useEffect(() => {
    input.files = arrayToFilelist(files)
  }, [files])

  useEffect(() => {
    input.style.display = "none"
    container.current.appendChild(input)
  }, [input])

  return (
    <div className={classes.join(' ')} onDragOver={onDragOver} ref={container} onDragLeave={onDragLeave} onDrop={onDragLeave}>
      <FileList files={files} onDelete={deleteFile}/>
      <div className="drop-files__explanations">
        <strong>{label}</strong>
        {help ? <em>{help}</em> : null}
      </div>
      <input type="file" multiple onChange={onChange} className="drop-files__fake"/>
    </div>
  )
}

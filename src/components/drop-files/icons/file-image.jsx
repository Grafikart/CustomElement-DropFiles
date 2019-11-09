import {h} from 'preact'
import {useState} from 'preact/hooks'

export default function ({file}) {
  const [src, setSRC] = useState(null)
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.addEventListener("load", () => {
    setSRC(reader.result);
  }, false)
  return <img src={src}/>
}

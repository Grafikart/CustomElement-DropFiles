import {h, Component, useEffect} from 'preact'
import {humanSize} from '../../helpers/sizes'
import File from './file'

function onExit (el, i, removeElement) {
  setTimeout(() => {
    el.classList.add("is-leaving");
    setTimeout(removeElement, 500);
  }, i * 50);
}

function onAppear (el, i) {
  setTimeout(() => {
    el.classList.add("is-appearing");
    setTimeout(() => {
      el.style.opacity = 1;
      el.classList.remove("is-appearing");
    }, 500);
  }, i * 50);
}

function delayUnmounting(Component) {
  return function (props) {
    return <Component {...props} />;
  };
}

export default function ({files, onDelete}) {
  return (
    <div className="drop-files__files">
      {files.map(file => {
        return <File file={file} onDelete={onDelete}/>
        return delayUnmounting(File, {file, onDelete})
      })}
    </div>
  )
}

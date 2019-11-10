import File from './drop-files/file'
import { removeWithAnimation, strToDom } from '../helpers/dom'
import FileComponent from './file'
import { diffFiles } from '../helpers/files'
import { deleteCallback } from '../interfaces'
import Flip from '../helpers/flip'

interface Props {
  onDelete: deleteCallback
}

export default class FileListComponent {

  private container: HTMLDivElement
  private oldFiles: FileList = null
  private fileElements: Map<File, HTMLDivElement>
  private onDelete: deleteCallback
  private flip: Flip

  render ({onDelete}: Props): HTMLDivElement {
    this.flip = new Flip()
    this.onDelete = onDelete
    this.fileElements = new Map()
    this.container = <HTMLDivElement>strToDom(`<div class="drop-files__files"></div>`).firstChild
    return this.container
  }

  update (fileList: FileList): void {
    const [added, removed] = diffFiles(this.oldFiles, fileList)
    added.forEach(file => {
      const fileComponent = FileComponent({file, onDelete: this.onDelete})
      this.fileElements.set(file, fileComponent)
      this.container.appendChild(fileComponent)
    })
    if (removed.length > 0) {
      this.flip.read(Array.from(this.fileElements.values()))
      const removeElements = removed.map(file => {
        const element = this.fileElements.get(file)
        this.fileElements.delete(file)
        return element
      })
      this.flip.remove(removeElements)
    }
    this.flip.play(Array.from(this.fileElements.values()))
    this.oldFiles = fileList
  }

}

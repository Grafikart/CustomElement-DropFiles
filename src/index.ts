import './style.css'

class DropFilesElement extends HTMLInputElement {

  private connected = false

  private getAttributes () {
    return {
      label: this.getAttribute('label') || 'Drop files here or click to upload.',
      help: this.getAttribute('help'),
    }
  }

  onFirstConnect () {
    const div = document.createElement('div')
    const {label, help} = this.getAttributes()

    div.classList.add('drop-files')
    div.innerHTML = `<div class="drop-files__explanations">
      <strong>${label}</strong>
      ${help ? ("<em>" + help + "</em>") : null}
    </div>`
    this.insertAdjacentElement('afterend', div)
    this.removeAttribute('is')
    this.style.display = 'none'
    div.appendChild(this)
    div.addEventListener('dragover', () => div.classList.add('is-hovered'))
    div.addEventListener('dragleave', () => div.classList.remove('is-hovered'))
  }

  connectedCallback() {
    if (this.connected === true) return
    this.connected = true
    this.onFirstConnect()
  }
}

customElements.define('drop-files', DropFilesElement, { extends: "input" });

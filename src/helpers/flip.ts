export default class Flip {

  private duration: number
  private positions: Map<Element, DOMRect>

  constructor () {
    this.duration = 350
    this.positions = new Map()
  }

  /**
   * Mémorise la position de nos éléments
   *
   * @param {Element[]} elements
   */
  read (elements: Element[] | HTMLCollection) {
    Array.from(elements).forEach(element => {
      this.positions.set(element, <DOMRect>element.getBoundingClientRect())
    })
  }

  /**
   * Anime les éléments vers leur nouvelle position
   *
   * @param {Element[]} elements
   */
  play (elements: Element[] | HTMLCollection) {
    Array.from(elements).forEach((element, k) => {
      const newPosition = element.getBoundingClientRect()
      const oldPosition = this.positions.get(element)
      if (oldPosition === undefined) {
        element.animate([{
          transform: `translate(0, -30px)`,
          opacity: 0
        }, {
          transform: 'none',
          opacity: 1
        }], {
          duration: this.duration,
          easing: 'ease-in-out',
          fill: 'both',
          delay: 50 * k
        })
        return
      }
      const deltaX = oldPosition.x - newPosition.x
      const deltaY = oldPosition.y - newPosition.y
      const deltaW = oldPosition.width / newPosition.width
      const deltaH = oldPosition.height / newPosition.height
      element.animate([{
        transform: `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`
      }, {
        transform: 'none'
      }], {
        duration: this.duration,
        easing: 'ease-in-out',
        fill: 'both'
      })
    })
  }

  /**
   * Supprime les éléments avec une animation
   *
   * @param {Element[]} elements
   */
  remove (elements: Element[]) {
    elements.forEach(element => element.parentNode.appendChild(element))
    elements.forEach(element => {
      const newPosition = element.getBoundingClientRect()
      const oldPosition = this.positions.get(element)
      const deltaX = oldPosition.x - newPosition.x
      const deltaY = oldPosition.y - newPosition.y
      element.animate([{
        transform: `translate(${deltaX}px, ${deltaY}px)`,
        opacity: 1
      }, {
        transform: `translate(${deltaX}px, ${deltaY - 30}px)`,
        opacity: 0
      }], {
        duration: this.duration,
        easing: 'ease-in-out',
        fill: 'both'
      })
      window.setTimeout(function () {
        element.parentNode.removeChild(element)
      }, this.duration)
    })
  }

}

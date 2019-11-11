type FlipArgument = Element[]

/**
 * Flip animation
 */
export default class Flip {
  private duration: number
  private positions: Map<Element, DOMRect>
  private timingFunction = "cubic-bezier(0.5, 0, 0, 0.5)"

  constructor() {
    this.duration = 450
    this.positions = new Map()
  }

  /**
   * Mémorise la position de nos éléments
   */
  read(elements: FlipArgument) {
    elements.forEach(element => {
      this.positions.set(element, <DOMRect>element.getBoundingClientRect())
    })
  }

  /**
   * Anime les éléments vers leur nouvelle position
   */
  play(elements: FlipArgument) {
    elements.forEach((element, k) => {
      const newPosition = element.getBoundingClientRect()
      const oldPosition = this.positions.get(element)
      if (oldPosition === undefined) {
        element.animate(
          [
            {
              transform: `translate(0, 10px)`,
              opacity: 0
            },
            {
              transform: "none",
              opacity: 1
            }
          ],
          {
            duration: this.duration,
            easing: this.timingFunction,
            fill: "both",
            delay: 50 * k
          }
        )
        return
      }
      const deltaX = oldPosition.x - newPosition.x
      const deltaY = oldPosition.y - newPosition.y
      const deltaW = oldPosition.width / newPosition.width
      const deltaH = oldPosition.height / newPosition.height
      if (deltaX === 0 && deltaY === 0 && deltaH === 0 && deltaW === 0) return
      element.animate(
        [
          {
            transform: `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`
          },
          {
            transform: "none"
          }
        ],
        {
          duration: this.duration,
          easing: this.timingFunction,
          fill: "both"
        }
      )
    })
  }

  /**
   * Supprime les éléments avec une animation
   *
   * @param {Element[]} elements
   */
  remove(elements: FlipArgument) {
    // We move the elements to remove at the end
    elements.forEach(element => element.parentNode.appendChild(element))
    // We animate the removal of the element
    elements.forEach(element => {
      const newPosition = element.getBoundingClientRect()
      const oldPosition = this.positions.get(element)
      const deltaX = oldPosition.x - newPosition.x
      const deltaY = oldPosition.y - newPosition.y
      element.animate(
        [
          {
            transform: `translate(${deltaX}px, ${deltaY}px)`,
            opacity: 1
          },
          {
            transform: `translate(${deltaX}px, ${deltaY - 10}px)`,
            opacity: 0
          }
        ],
        {
          duration: this.duration,
          easing: this.timingFunction,
          fill: "both"
        }
      )
      window.setTimeout(function() {
        element.parentNode.removeChild(element)
      }, this.duration)
    })
  }
}

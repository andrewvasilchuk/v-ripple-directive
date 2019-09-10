import defaultConfig from './config'

let handler

export default {
  bind(el, binding) {
    init(el, binding)
  },
  update(el, binding) {
    const { oldValue } = binding

    if (oldValue) {
      const event = oldValue.event || defaultConfig.event

      el.removeEventListener(event, handler)
      init(el, binding)
    }
  },
}

function init(el, binding) {
  const { value } = binding
  let event = defaultConfig.event

  if (value) {
    if (typeof value !== 'object')
      throw new Error('v-ripple expects object as a value')
    event = value.event || event
  }

  el.addEventListener(event, (handler = e => eventHandler(e, value)))
}

function eventHandler(e, options) {
  const { currentTarget: self } = e
  const { top, left } = self.getBoundingClientRect()
  const { pageY, pageX } = e

  let y, x

  if (pageY) {
    y = pageY - top - window.pageYOffset
  } else {
    y = self.offsetHeight / 2
  }

  if (pageX) {
    x = pageX - left
  } else {
    x = self.offsetWidth / 2
  }

  const size = Math.min(self.offsetHeight, self.offsetWidth)

  const style = getComputedStyle(self)

  const { position } = style

  const borderWidth = {}

  borderWidth.top = style['border-top-width']
  borderWidth.right = style['border-right-width']
  borderWidth.bottom = style['border-bottom-width']
  borderWidth.left = style['border-left-width']

  if (position === 'static') {
    self.style.position = 'relative'
  }

  const rippleWave = createRippleWave(size, x, y)
  const ripple = createRipple()

  ripple.style.top = `-${style['border-top-width']}`
  ripple.style.right = `-${style['border-right-width']}`
  ripple.style.bottom = `-${style['border-bottom-width']}`
  ripple.style.left = `-${style['border-left-width']}`

  ripple.appendChild(rippleWave)

  if (options) {
    applyCustomOptionsToRipple(ripple, options)
  }

  self.appendChild(ripple)

  ripple.addEventListener('animationend', () => ripple.remove())
}

/**
 * Function that creates a ripple
 * @param {string} tag - tag of the returned ripple
 * @returns {HTMLElement} An HTML element
 *
 * @example
 *
 * createRipple('span')
 */
function createRipple(tag = 'div') {
  const ripple = document.createElement(tag)
  ripple.classList.add('v-ripple')
  return ripple
}

/**
 * Function that created a ripple wave
 * @param {number} size - size of a wave in 'px'
 * @param {number} x - x position of a wave in 'px'
 * @param {number} y - y position of a wave in 'px'
 * @param {string} tag - tag of the returned ripple wave
 *
 * @returns {HTMLElement} An HTML Element
 *
 * @example
 *
 * createRippleWave(100, 10, 10, 'span')
 */
function createRippleWave(size, x, y, tag = 'div') {
  const el = document.createElement(tag)
  el.classList.add('v-ripple__wave')
  const { style } = el

  // size
  style.width = `${size}px`
  style.height = `${size}px`

  // position
  style.left = `${x - size / 2}px`
  style.top = `${y - size / 2}px`

  return el
}

/**
 * Function tha applies custom options to the ripple
 * @param {HTMLElement} ripple - an HTML element
 * @param {object} options - options to apply
 */
function applyCustomOptionsToRipple(ripple, options) {
  const { style } = ripple

  Object.keys(options).forEach(key => {
    style.setProperty(`--v-ripple-${key}`, options[key])
  })
}

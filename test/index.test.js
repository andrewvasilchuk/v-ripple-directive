import { createLocalVue, mount } from '@vue/test-utils'
import VRipple from '../src'
import config from '../src/config'

const defaultEvent = config.event

const className = '.v-ripple'

const Component = {
  template: `<div v-ripple></div>`,
}

let localVue

beforeAll(() => {
  localVue = createLocalVue()
  localVue.use(VRipple)
})

describe('VRipple', () => {
  test('should create ripple element when event triggers', () => {
    const wrapper = mount(Component, { localVue })

    wrapper.trigger(defaultEvent)

    expect(wrapper.find(className).exists()).toBeTruthy()
    expect(wrapper.find(`${className}__wave`).exists()).toBeTruthy()
  })

  test('should delete ripple element when animation ends', () => {
    const wrapper = mount(Component, { localVue })

    wrapper.trigger(defaultEvent)
    wrapper.find(className).trigger('animationend')
    expect(wrapper.find(className).exists()).toBe(false)
  })

  test('should create ripple element when custom event name is provided', () => {
    const eventName = 'focus'

    const wrapper = mount(
      {
        template: `<div v-ripple="{ event: '${eventName}' }"></div>`,
      },
      { localVue }
    )

    wrapper.trigger(eventName)

    expect(wrapper.find(className).exists()).toBeTruthy()
    expect(wrapper.find(`${className}__wave`).exists()).toBeTruthy()
  })

  test('should correctly calculate position depending on border-width of parent', () => {
    const borderWidth = 2
  
    const wrapper = mount(
      {
        template: `<div style="border-width: ${borderWidth}px" v-ripple></div>`,
      },
      { localVue }
    )

    wrapper.trigger(defaultEvent)

    const { top, right, bottom, left } = wrapper.find(className).element.style

    expect(top).toBe(`-${borderWidth}px`)
    expect(right).toBe(`-${borderWidth}px`)
    expect(bottom).toBe(`-${borderWidth}px`)
    expect(left).toBe(`-${borderWidth}px`)
  })
})

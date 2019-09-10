<template>
  <div id="app">
    <h1>v-ripple-directive</h1>
    <ul class="buttons">
      <li class="buttons__item">
        <a v-ripple href="#" class="btn btn--theme--vue" role="button">Button</a>
      </li>
      <li class="buttons__item">
        <a v-ripple href="#" class="btn btn--theme--bootstrap" role="button">Button</a>
      </li>
      <li class="buttons__item">
        <a
          v-ripple="{ event: event, color: color, duration: duration, opacity: opacity, 'scale-start': 1, 'scale-end': 12 }"
          href="#"
          class="btn btn--theme--bulma"
          role="button"
        >Button</a>
      </li>
    </ul>
    <br />
    <br />
    <ul class="controls">
      <li class="controls__item">
        <label for="event">
          <code>event:</code>
        </label>
        <select v-model="event" id="event">
          <option value="click">click</option>
          <option value="mouseenter">mouseenter</option>
          <option value="mouseleave">mouseleave</option>
        </select>
      </li>
      <li class="controls__item">
        <label for="color">
          <code>color:</code>
        </label>
        <select v-model="color" id="color">
          <option value="purple">purple</option>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
        </select>
      </li>
      <li class="controls__item">
        <label for="duration">
          <code>duration:</code>
        </label>
        <select v-model="duration" id="duration">
          <option value="1s">1s</option>
          <option value="2s">2s</option>
          <option value="3s">3s</option>
          <option value="4s">4s</option>
        </select>
      </li>
      <li class="controls__item">
        <label for="opacity">
          <code>opacity:</code>
        </label>
        <select v-model="opacity" id="opacity">
          <option value="0.32">0.32</option>
          <option value="0.64">0.64</option>
          <option value="1">1</option>
        </select>
      </li>
      <li class="controls__item">
        <label for="scale-start">
          <code>scale-start:</code>
        </label>
        <select v-model="scaleStart" id="scale-start">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="0.64">0.64</option>
        </select>
      </li>
      <li class="controls__item">
        <label for="scale-end">
          <code>scale-end:</code>
        </label>
        <select v-model="scaleEnd" id="scale-end">
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="24">24</option>
        </select>
      </li>
    </ul>
    <br />
    <div
      class="alert"
    >Note that the last button has custom options that you can configure using controls above.</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      event: 'click',
      color: 'purple',
      duration: '4s',
      opacity: '0.64',
      scaleStart: '1',
      scaleEnd: '12',
    }
  },
}
</script>

<style lang="scss">
@import '../src/index.scss';

$gutter: 16px;

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
}

h1 {
  margin-top: 0;
  text: {
    align: center;
    transform: uppercase;
  }
  color: #333;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

code {
  padding: 2px 4px;
  background-color: #f5f5f5;
  color: #ff3860;
  font: {
    size: 12px;
    weight: 400;
  }
}

select {
  width: 96px;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 512px;
  padding-left: 0;
  margin: {
    top: 0;
    right: auto;
    bottom: 0;
    left: auto;
  }
  list-style: none;

  &__item {
    padding: 4px;
  }
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  margin: -#{$gutter};
  list-style: none;

  &__item {
    padding: $gutter;
  }
}

.btn {
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;

  &--theme {
    &--vue {
      padding: 12px 24px;
      border: 2px solid #3eaf7c;
      color: #fff;
      background-color: #3eaf7c;
      text-transform: uppercase;
      transition: background-color 0.4s;

      &:hover {
        background-color: #4abf8a;
      }
    }

    &--bootstrap {
      padding: 6px 12px;
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
      line-height: 1.5;
    }

    &--bulma {
      padding: 6px 12px;
      border: 1px solid #363636;
      background-color: #fff;
      line-height: 1.5;
      color: #363636;
    }
  }
}

.alert {
  padding: 12px 24px;
  border: 1px solid #b8daff;
  border-radius: 4px;
  font-size: 14px;
  color: #004085;
  background-color: #cce5ff;
}
</style>

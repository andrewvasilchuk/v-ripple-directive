# 🌊 v-ripple-directive

> Vue.js directive for ripple effect.

## ✨ Features

- lightweight (`~964b` gzip).
- fully customizable during runtime/build.
- build upon [CSS Custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).

## Demo

[![Edit v-ripple-directive](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-template-dsuuw?fontsize=14)

## 💿 Installation

### 📦 Via NPM

```bash
npm install v-ripple-directive --save
```

### 🧶 Via Yarn

```bash
yarn add v-ripple-directive
```

### 🖥️ Directly in browser

```html
<link rel="stylesheet" href="https://unpkg.com/v-ripple-directive@0.2.0/dist/index.css"></link>
<script src="https://unpkg.com/v-ripple-directive@0.2.0/dist/v-ripple-directive.min.js"></script>
<script>
  Vue.use(VRipple)
</script>
```

> ⚠️ Don't forget to include `script` with Vue.js before installing the plugin.

## Initialization

### 🎨 Styles

To make everything work you should import core styles.
The idea behind is that you can override default styles during build process.
Example of using `SASS`/`SCSS`:

```scss
@import 'v-ripple-directive/src/index.scss';
```

Available `SASS` variables, that you can override during build process:

```scss
$v-ripple-color: #fff !default;
$v-ripple-duration: 2s !default;
$v-ripple-opacity: 0.32 !default;
$v-ripple-scale-start: 0.32 !default;
$v-ripple-scale-end: 24 !default;
```

Example of overriding:

```scss
...
$v-ripple-color: purple;
@import 'v-ripple-directive/src/index.scss';
...
```

**Note**: library is build upon [CSS Custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*), so you can easily override styles during runtime.

Available `CSS` custom properties, that you can override during runtime:

```css
:root {
  --v-ripple-color: #fff;
  --v-ripple-duration: 2s;
  --v-ripple-opacity: 0.32;
  --v-ripple-scale-start: 0.32;
  --v-ripple-scale-end: 24;
}
```

Example of override:

```css
/* globally */
:root {
  --v-ripple-color: tomato;
}

/* just for single element */
.foo {
  --v-ripple-color: lime;
}
```

Move on to `JS`.

### As a plugin

It must be called before `new Vue()`.

```javascript
import Vue from 'vue'
import VRipple from 'v-ripple-directive'

Vue.use(VRipple)
```

### As a global directive

```javascript
import Vue from 'vue'
import { directive } from 'v-ripple-directive'

Vue.directive('ripple', directive)
```

### As a local directive

```javascript
import { directive } from 'v-ripple-directive'

export default {
  name: 'YourAwesomeComponent',
  directives: {
    ripple: directive,
  },
}
```

## 🚀 Usage

```html
<template>
  <section>
    <a href="#" v-ripple>Foo bar</a>
    <!-- v-ripple with custom options -->
    <a
      href="#"
      v-ripple="{ event: 'mouseenter', color: 'purple', duration: '2s', opacity: '0.64', 'scale-start': '1', 'scale-end': '12' }"
      >Foo bar</a
    >
  </section>
</template>
```

## ⚙️ Directive value

If you pass a value, it always should be an object that contains one of these properties:

| Property      | Description                                                                   |
| ------------- | ----------------------------------------------------------------------------- |
| `event`       | Name of event to trigger ripple animation                                     |
| `color`       | Color of the ripple (any `CSS` valid `color`)                                 |
| `duration`    | Duration of the ripple animation (any `CSS` valid `animation-duration` value) |
| `opacity`     | Opacity of the ripple (any CSS valid `opacity` value)                         |
| `scale-start` | Initial scale of the ripple (any CSS valid `transform: scale()` value)        |
| `scale-end`   | Ultimate scale of the ripple (any CSS valid `transform: scale()` value)       |

## Powered by

- `Rollup` (and plugins)
- `SASS` and `node-sass`
- `PostCSS`
- `Autoprefixer`

## 🔒 License

[MIT](http://opensource.org/licenses/MIT)

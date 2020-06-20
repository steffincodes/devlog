---
title: HTML/CSS/JS Hero Image
excerpt: Randomly generated Hero Image with Google Fonts
favicon: 🖍️
tags: snippet
---

Randomly generating banner images, cause why not 🤷

Store list of fonts and style from [here](https://developers.google.com/fonts/docs/developer_api) like so

```js
const listOfFontEffect = [
  "anaglyph",
  "emboss",
  "fire",
  "fire-animation",
  "neon",
  "outline",
  "shadow-multiple",
  "3d",
  "3d-float",
];

const listOfFontFamily = [
  "ABeeZee",
  "Abel",
  "Abhaya Libre",
  "Abril Fatface",
  "Aclonica",
  "Acme",
  .
  .
  .
];
```

After getting that we have the choose one at random `js` snippet

```js
//var randomElement = arr[Math.floor(Math.random()*arr.length)]
googleFontsSetup.fontFamily =
  listOfFontFamily[Math.floor(Math.random() * listOfFontFamily.length)];
googleFontsSetup.fontEffect =
  listOfFontEffect[Math.floor(Math.random() * listOfFontEffect.length)];
```

After getting the random values we use the google font api to load for `post-title` alone for performance I guess 🧐

```js
<style jsx global>{`
@import url("https://fonts.googleapis.com/css?
            family=${googleFontsSetup.fontFamily}
            &text=${title}
            &effect=${googleFontsSetup.fontEffect}");

`}</style>
```

And that's how the banner was done 😎

### Bonus tip:

Pastel color generation (cause I prefer them pastel)

```js
var hue = Math.floor(Math.random() * 360);
var pastel = "hsl(" + hue + ", 100%, 87.5%)";  
```

Check out the code [here](https://github.com/steffin-codes/devlog/blob/master/components/cover-image.js)

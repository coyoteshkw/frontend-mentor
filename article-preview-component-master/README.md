# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![desktop preview](./design/desktop-preview.jpg)


### Links

- Solution URL: [solution URL here](https://github.com/coyoteshkw/frontend-mentor/tree/main/article-preview-component-master)
- Live Site URL: [live site URL here](https://coyoteshkw.github.io/frontend-mentor/article-preview-component-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- Propagation

JavaScript has **Propagation**, so when I want to make a func to click on card and pop-up share card disappeared, it didn't work.

I read doc and using `event.stopPropagation();` to solve this.

```javascript
shareBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  shareBoard.classList.add("up");
});
```

- width: 100%

I found using `width:100%` rather than `max-width: 100%` on this situation is better.

add `object-fit` and `object-position`

```css
.card__img img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
}
```

### Continued development

on large screen pop-up share-card will overflow the card. But card has overflow:hidden because I use `position:absolute` on mobile layout's pop-up(it lie behind the card), if overflow visible it will appear.

at last I use a `overflow-y: hidden;` and `overflow-x: visible;` on card, `overflow-y: visible;` when >800px.

### Useful resources

- [javascript.info](https://zh.javascript.info/bubbling-and-capturing) I learn Propagation on this.

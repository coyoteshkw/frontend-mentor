# Frontend Mentor - Social links profile solution

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![desktop-design card](./design/destkop-design.jpg)

### Links

- Solution URL: [solution URL here](https://github.com/coyoteshkw/frontend-mentor/tree/main/social-links-profile-main)
- Live Site URL: [A live site URL here](https://coyoteshkw.github.io/frontend-mentor/social-links-profile-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

- `a` is a inline element

when I use a for button in `<li>`, I found setting style for a just useless. Only can write css for `<li>`.

In the end I found that because `<a>` is a inline element, it's width fit the **content** size, not the same as the parent element width like `<li>`.
In fact, I have never encountered such a problem before. My solution is to **turn a element into a block**.

```css
.card__button {
  display: block;
  text-align: center;
  padding-block: 1rem;
  background-color: var(--clr-grey-700);
  border-radius: 10px;
  font-size: .875rem;
  line-height: .875rem;
}
.card__button:hover {
  background-color: var(--clr-green);
  color: var(--clr-grey-900);
}
```

- flex or not

When I saw preview picture, the first thing I thought is using flex layout, but finally decided to use normal layout, because I'm not sure using flex layout like crazy is the right thing to do.

for avatar, I simply used `margin-inline: auto` to center. All `.card__introduction` module just use margin-top. But on links module I use flex.

I do not know if it's best decision, but I did it.

- use `min-width` on card

this time I didn't use fixed width and height, but found that made the card too narrow. If I increase the padding, it won't fit the picture, so I use **min-width and larger padding** to solve this problem, maybe this isn't necessary, I'll try not to use it next time.

```css
.card {
  min-width: 326px;
  padding: 1.5rem;
}

/* responsive */
@media screen and (min-width: 768px) {
  .card {
    min-width: 382px;
    padding: 2.375rem;
  }
}
```

- `:focus` can catch tab selection.

### Continued development

When the card size is less than 300px, the top of the card disappears, and canceling min-width cannot prevent this problem.I would like it to automatically shrink, but this doesn't seem to do that automatically.

# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![screen](./design/desktop-preview.jpg)

### Links

- Solution URL: [solution URL here](https://github.com/coyoteshkw/frontend-mentor/tree/main/testimonials-grid-section-main)
- Live Site URL: [live site URL here](https://coyoteshkw.github.io/frontend-mentor/testimonials-grid-section-main)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

use grid-column and grid-row creating complex layout.
using pseudo class

at first I use `grid-template-columns: repeat(fit-content, minmax(255px, 1fr));` but
when screen larger I must control grid item's position manually(some card was too big
or to small for one row height)

This actually messed me up, but I managed to come up with a layout that I was (barely) happy with.

### Continued development

when screen > 400px and <1200px, sometimes the card will too height for adapting grid height,
making space between card content too wide. And card avatar in one grid row different.

I can use align-self:start control avatar but still weird.(space not be the same)

maybe I could try `container query` on card font or card layout next time.

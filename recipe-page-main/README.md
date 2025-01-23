# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### Screenshot

![preview](./preview.jpg)

### Links

- Solution URL: [solution URL here](https://github.com/coyoteshkw/frontend-mentor/tree/main/recipe-page-main)
- Live Site URL: [live site URL here](https://coyoteshkw.github.io/frontend-mentor/recipe-page-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This is the most difficult time I have ever written code, although I am quite satisfied with the actual effect.

I noticed that on small screen sizes, the `recipe__img` spans the full width, but others not. I am hesitant about how to handle it. Finally I use a `container` wrapper the text content then give it `padding-inline`.(Now I think `recipe__main-container` is a better name. `container` give it some ambiguity led me having some wrong thoughts)

Then when screen size is big enough, I make the whole `recipe` card flex and have it centered. For `recipe__img` I give it the same `padding-inline` of `container`

> I think this solution is a bit funny, **must be a better way, but I can't think of it.** I learned from Kevin that I can use a grid layout to make a *call-to-action* img, but I had a trouble because I don't know enough about the grid layout, and I doubt whether it is the best solution here(too complex), **so I ended up using this funny but simpler method.** Hopefully I can find a better way by other coders after submitting this assignment

```css
.container {
  padding: 0 var(--space32) var(--space32);
}

@media screen and (min-width: 500px) {
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--clr-stone100);
  }

  .recipe {
    max-width: 730px;
    margin-block: 8.125rem;
    border-radius: 20px;
    overflow: hidden;
    padding-top: var(--space40);
  }

  .recipe__img {
    /* border-radius is calculated based on the original value with padding added */
    padding-inline: var(--space40);
    overflow: hidden;
  }

  .recipe__img img {
    border-radius: 10px;
  }

  .container {
    padding: 0 var(--space40) var(--space40);
  }
}
```

- control list-style

can just use `padding` on **ul(ol)** to push content right. dot not content

and `color` on ul also nice. I use `::marker` on li(not ul) to colored dot.

```css
.recipe__list {
  margin-block: 0;
  color: var(--clr-stone600);
  padding-left: 20px;
}
.recipe__list-item::marker {
  color: var(--clr-brown800);
}
```

- same style (BEM)

I found that the styles of the titles were all the same, so I used a generic recipe__title and a slightly modified recipe__title--section/main for them. Also for list.

- create a table

table -> tr -> td. use border-bottom to create divider(and `:not` pseudo element). use `:nth-child` bold right column(**maybe have better solution?**)

more details on [MDN docs](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element#表格内容)

- border-radius on img

the conflict between padding-inline and border-radius. When adding `padding-inline` to `.recipe__img`, the internal element will reduce its width to adapt to the padding, **but its rounded corners are still calculated based on its original size**, resulting in the rounded corner effect seemingly disappearing.

I asked gpt it give me 2 solutions:

1. give `recipe__img img` a border-radius. So the parent have padding, but child not

```css
  .recipe__img img {
  width: calc(100% -2 * var(--space32))
}
```

2. use `calc()` to control img width

  ```css
  .recipe__img img {
    width: calc(100% -2 * var(--space32))
  }
  ```

I use solution 1.

### Continued development

the divider and the spacing between them were one of the hardest parts of the whole page. There are many ways to achieve it but it's impossible to know which is the best practice.

Finally I use `recipe__title`'s margin and `recipe__section`'s padding-bottom. section margin-top is zero.

### Useful resources

- [MDN docs](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element#%E8%A1%A8%E6%A0%BC%E5%86%85%E5%AE%B9) - Search table element information.

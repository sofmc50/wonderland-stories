# A Curious Turn in Wonderland

Completed CCT 360 image-sequencing lab using HTML, CSS, and JavaScript only.

[View the finished website](https://sofmc50.github.io/wonderland-stories/) · [GitHub repository](https://github.com/sofmc50/wonderland-stories)

## The two sequences

1. **Into Wonderland:** White Rabbit → tea party → Queen of Hearts. Curiosity leads Alice into danger.
2. **A way out:** Queen of Hearts → tea party → White Rabbit. An imagined escape, a pause for tea, and a guide away from danger.

These are creative interpretations of the same three illustrations, not two claims about the original book’s plot. Buttons reverse the order and update the explanation. Each sequence labels its beginning, middle, and end.

## Open the lab

Open `index.html` in a browser. No installation or build step is needed. Keep `style.css`, `script.js`, and the `images` folder beside it.

## How the JavaScript works

- `let` variables store image paths and references to HTML elements.
- `document.getElementById()` finds an element using its HTML ID.
- Two named functions change the first and last images using `.src`, and update their `.alt` descriptions.
- `.innerHTML` changes the headings, captions, and explanation using fixed text, like the lecture's DOM example.
- `.addEventListener("click", functionName)` connects each button to its function, as required by the lab.
- `.disabled` uses `true` and `false` to mark the selected button. The other button remains available.
- `showIntoWonderland()` at the end sets the initial selection.

The middle image stays in place. No arrays, loops, conditionals, frameworks, or libraries are used.

Lecture reference: https://docs.google.com/presentation/d/1YNVvHMi1vigdVMd37y6GAtDpffc8-odEMOec0571jMA/edit

## Project files

```
index.html
style.css
script.js
README.md
images/
    rabbit.png
    tea-party.png
    queen.jpg
```

All required images are included locally. The finished website is published with GitHub Pages from the main branch.

## Image credits

Public-domain illustrations by John Tenniel for Lewis Carroll’s *Alice’s Adventures in Wonderland* (1865), downloaded from Wikimedia Commons and included locally.

- White Rabbit: https://commons.wikimedia.org/wiki/File:Alice_par_John_Tenniel_02.png
- Tea party: https://commons.wikimedia.org/wiki/File:Teaparty.png
- Queen of Hearts: https://commons.wikimedia.org/wiki/File:Queen_of_Hearts.jpg

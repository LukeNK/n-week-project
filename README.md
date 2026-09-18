# n-week-project
*Currently migrating, please wait for more information...*

## Publication
A chapter starts in `/drafts/` with `layout: draft`. This means that the chapter is still in early draft.

When you are happy with the chapter and it is _almost_ ready to publish, you can now move the chapter to `/chapters` folder. This will indicate that the chapter is in final drafting, and will likely be published in a few publications.

When you want to publish a chapter, simply change the front matter to `layout: chapter`.

## Note when writing math equations
There are two ways to write display maths.

The first way is used when you want to examples that you won't need to reference it.
```latex
\\[
    x = 1
\\]
```

The second way is used when you want will need to refer to it later, or when it is something worth remembering.
```html
<eq id="eq-m-define">
    x = 1
</eq>
```

There is a difference when adding newlines in the display math environment. If you are using the "weak" math display, then you will need to use `\\\\\` in order to properly add a newline. This is because of the weird backslash-resolving when we put it through so many layers.
```latex
\\[\begin{aligned}
    x &= 1 + 1 \\\\\
    &= 2
\end{aligned}\\]
```

Compared to the "strong" math display, when you only need to use two backward slashes:
```html
<eq>\begin{aligned}
    x &= 1 + 1 \\
    &= 2
\end{aligned}</eq>
```

We got to do something about this...

## Dynamic referencing
To use dymaic referencing, you must first define an equation / a table with an HTML ID (figures will be automatically assigned an ID using their filenames). Then you can simply use anchor to refer to it:
```html
<a href="#eq-m-define"></a>
```
The system will automatically resolve the text content of the anchor. However, you can put your own text in it and the system will leave it alone.

## Note of what to write here
- `.GITIGNORE` to have header background unique to each publication at `/header.*`
- Math newline when using `<eq>` is `//`
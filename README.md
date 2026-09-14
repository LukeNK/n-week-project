# n-week-project
*Currently migrating, please wait for more information...*

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
To use dymaic referencing, you must first define a figure / an equation with an HTML ID. Then you can simply use anchor to refer to it:
```html
<a href="#eq-m-define"></a>
```
The system will automatically resolve the text content of the anchor. However, you can put your own text in it and the system will leave it alone.

## Note of what to write here
- `.GITIGNORE` to have header background unique to each publication at `/header.*`
- Math newline when using `<eq>` is `//`
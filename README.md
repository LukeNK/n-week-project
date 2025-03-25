# n-week-project
*Currently migrating, please wait for more information...*

## Regex rules for migration
`\n\n` to
```html
</p>

<p>
```

`<p><h(.)` to `<h$1`

`</h(.)>\n` to
```html
</h$1>
<p>
```

`\\textbf\{` to `<b>`

`\\textit\{` to `<i>`

Find `\ref`, `\footnote`
# n-week-project
*Currently migrating, please wait for more information...*

## Command for local hosting
```batch
cd ..; python -m http.server
```

## Migration guide
_Let's go second time_

```
<h3>(.*)</h3>
### $1

<b>(.*)</b>
**$1**

</b>(.*)<b>
**$1**

<i>(.*)</i>
_$1_

(<p>|</p>|<ul>|</ul>|</li>)
<empty>

    <li>
-

\\\[
\\\[

\\\]
\\\]
```

## Note of what to write here
- `.GITIGNORE` to have header background unique to each publication at `/header.*`
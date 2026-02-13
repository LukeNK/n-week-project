---
layout: chapter
title: Derivative
prerequisites:
  - m-limit
---
It is recommended that the reader understand about limits before proceeding.

### Derivative concept
Today is a beautiful day to find the slope of a graph at a point. We remember that the slope between two points is the difference in the y-axis divided by the difference in the x-axis:
<eq>
    m
    = \frac{\Delta y}{\Delta x}
    = \frac{y_2-y_1}{x_2-x_1}
</eq>

However, what we originally asked is the slope of a graph at one single point, therefore we need to move the two points as close as possible to each other (_the definition of limit_) until they are essentially one point similar to <a href="#fig-a10"></a>. Consider the fact that the y-axis essentially is the output of the function $f(x)$, making $\Delta y=f(x+\Delta x)-f(x)$, we can use limit to describe the fact that the difference $\Delta x$ is getting smaller and smaller ($\Delta x\to0$):
<eq id="eq-m3">
    f'(x)
    = \lim_{\Delta x\to 0} \frac
        {f(x+\Delta x)-f(x)}
        {\Delta x}
</eq>
<figure>
    <img src="{{ site.url }}/figures/a/10.png" style="max-height: 15rem;" alt="Two points approaching each other">
    <figcaption>Two points approaching each other</figcaption>
</figure>

Other notations to highlight the fact that the derivative is simply the rate of change of a function at a point is:
<eq>
    \frac{d}{dx}f(x) = \frac{df}{dx} = \frac{dy}{dx}f(x)
</eq>
This notation highlights the fact that the derivative is the _ratio_ between the change in the y-axis and the change in the x-axis, giving you the ability to move $dx$ in a certain scenario. If you want to find the slope at a certain $x=c$, you can use the following notation:
<eq>
    \left.\frac{d}{dx}f(x)\right|_{x=c} = f'(x)\bigg|_{x=c} = f'(c)
</eq>

Lastly, you can take derivatives as many times as you like. After all, if you take the derivative of a derivative, it simply showing the rate of change of the derivative function itself.
<eq>
    f''(x)=(f'(x))'
</eq>

### Derivative rules
In this section, instead of using the full notation $f(x)$, the function is simplified to $f$. The start of this section will simply provide a quick look-up sheet of the rules, while the latter part will explain the intuition of some harder rules.

A note: before you do any derivative manipulation, consider simplifying the function. For example, we have:
\\[
    [(x+1)^2]' = [x^2 + 2x + 1]' = 2x + 2
\\]
If you were to manipulate the original equation as a composite function the derivative would be much messier.

**Multiplication by a constant**:
<eq> (cf)' = cf' </eq>

The **sum** and **difference rule** are a bit anti-climatic:
<eq>
    (f+g)' = f'+g'
    \qquad
    (f-g)' = f'-g'
</eq>

The **product rule** can be remembered by the phrase "Left-D right, right-D left":
<eq>
    (fg)' = fg'+f'g
</eq>

The **quotient rule** was found by expanding the derivative's limit definition. The numerator is almost similar to the product rule, except with a minus; if you imagine we are multiplying $\frac{f}{1}\frac{1}{g}$, then the $g^2$ is almost like trying to use the reciprocal to cancel out the denominator. I know this explanation is not accurate, but it is a good way to visualize the rule during tests.
<eq>
    \left( \frac{f}{g} \right)'
    = \frac{f'g-fg'}{g^2}
</eq>

The **reciprocal rule** is another rule that is a bit hard to digest, but luckily rarely seen:
<eq>
    \left( \frac{1}{f} \right)'
    = -\frac{f'}{f^2}
</eq>

It is also appropriate to recall the **fractional exponent rule** and **negative exponent rule**:
<eq>
    a^\frac{m}{n} = \sqrt[n]{a^m}
    \qquad
    a^{-n} = \frac{1}{a^n}
</eq>
Which will be useful when utilizing **the power rule**:
<eq> (x^n)' = nx^{n-1} </eq>
You can remember that the power rule "flattened" our exponent graph by one degree.

The **chain rule** in a wordy notation but the one that gets across my mind is: assume we have $u=g(x)$ and $y=f(u)=f(g(x))$ then the derivative is:
<eq>
    y'_x
    = y'_u \cdot u'_x
</eq>
This means that "the derivative of $f$ plug in original $g$ times the derivative of $g$ plug in $x$". You can feel it showcases a "staircase" approach to the composite function.

The **L'Hôpital rule** is used when finding the limit at a point with an indeterminate result (read more about its usage in <a href="#sec-a-limit-hopital"></a>):
<eq>
    \lim_{x\to a} \frac{f(x)}{g(x)}
    = \lim_{x\to a} \frac{f'(x)}{g'(x)}
</eq>
This means the limit of a quotient of two functions equals the limit of the quotient of the derivative of those two functions.

When all rules fail, you can always use the original derivative definition in equation <a href="#eq-m3"></a>

<h4>Visualizing the product rule</h4>
<!-- Maybe someday change f(x) to y and df to dy. I won't change it right now because that means redrawing figure m11. -->
Assume we have two functions: $g(x)$ and $h(x)$, and $f(x)=h\cdot g$. Because it is the multiplication between two functions, you can think of $f(x)$ as the area of a rectangle with $h(x)$ and $g(x)$ as two sides, similar to <a href="#fig-a11"></a>.
<figure>
    <img src="{{ site.url }}/figures/a/11.png" style="max-height: 15rem;" alt="Representation of a product between two functions">
    <figcaption>Representation of a product between two functions</figcaption>
</figure>

To calculate the rate of change at that point, we need another point $dx$ away from $x$ and $dx\to0$. Furthermore, we need to consider how our two functions "react" to $dx$. We deduct from the formula of derivative:
\\[
    \frac{dh}{dx} = h'
    \Leftrightarrow
    dh = h' \;dx
\\]
A similar transformation can be made with $g(x)$. What $dh$ is showing here is how much the result of the function $h(x)$ would increase for a change in $x$ — $dh$ is the change we have when we move $x$.

Label the additional area $df$:
\\[ df = g \cdot dh + h \cdot dg + dh \cdot dg \\]
We can expand the entire equation to:
\\[ df = g(h' \;dx) + h(g' \;dx) + (h' \;dx) \cdot (g' \;dx) \\]
We want to find the ratio at that point $df/dx$, so we divide both sides by $dx$:
\\[ \frac{df}{dx} = g \cdot h' + g' \cdot h + h' \cdot g' \;dx \\]
Because $dx\to0$, we can eliminate that term:
\\[
    \frac{df}{dx} = gh' + g'h
    \Rightarrow
    \frac{d}{dx}(gh) = gh' + g'h
\\]

<h4>Visualizing the chain rule</h4>
An anonymous professor once said: "Using the chain rule is like peeling an onion: you have to deal with each layer at a time, and if it is too big you will start crying."

Assume we have $g(h(x))$. We can imagine these two functions like a production line: we put in the raw number $x$, and then the function $h$ will "process" the input before passing it to $g$, after which the output will then be given. This production chain can be visualized in <a href="#fig-a12"></a>. Note that now we denote a tiny change in our input as $dx$, a tiny change in our output as $dy$, and our ultimate goal is to find the ratio $dy/dx$.
<figure>
    <img src="{{ site.url }}/figures/a/12.png" alt="Chain rule visualization">
    <figcaption>Chain rule visualization</figcaption>
</figure>

As we increase our input by a $dx$ amount, it will increase the _output_ of the function $h$ by a $dh$ amount. Similar to the product rule, we manipulate our derivative ratio $dh/dx$ to calculate that change in the output:
\\[ dh = h'(x) \;dx \\]
Repeat that same process with the function $g$, but now you have to remember that the input is no longer $x$, but $h$ and a tiny change $dh$:
\\[ dy = g'(h) \cdot dh \\]
Expand $dh$, we have:
\\[ dy = g'(h) \cdot (h' \;dx) \\]
Finally, because we ultimately want to find the ratio of the changes, we divide both sides by $dx$ and expand the fact that $h$ is simply $h(x)$:
\\[ \frac{dy}{dx} = g'(h(x)) \cdot h'(x) \\]
If you think of  $dg/dh$ as "derivative of $g$ when plugging in $h$", another interesting way to write this:
\\[ \frac{dy}{dx} = \frac{dg}{dh}\frac{dh}{dx} \\]

### Derivative of common functions
**A constant** will have a slope equal to $0$:
<eq> (c)' = 0 </eq>

**A line** will have a slope similar to its... slope. This is similar to $m$ in the form $y=mx+b$:
<eq>
    (ax)' = a
    \qquad
    (x)' = 1
</eq>

**The derivative of a square root:**
<eq>
    \sqrt{x}
    = x^\frac{1}{2}
    = \frac{1}{2} x^{-\frac{1}{2}}
</eq>

**Exponential functions** with $x$ as the exponent. Further explanation can be found in Euler's constant and the natural $\log$:
<eq>
    (e^x)' = e^x
    \qquad
    (a^x)' = a^x\ln(a)
</eq>

**Logarithms**:
<eq>
    (\ln(x))' = \frac{1}{x}
    \qquad
    (\log_a(x) )' = \frac{1}{x\ln(a)}
</eq>

**Trigonometric functions**:
<eq>
    (\sin x)' = \cos x
    \qquad
    (\cos x)' = -\sin x
    \qquad
    (\tan x)' = \sec^2x
</eq>

### Additional material
It is recommended that you explore <a href="#m-integral"></a> for the _inverse_ concept of derivative: anti-derivative. For other additional reading material connecting to calculus as a whole, place look at <a href="#sec-a-integral-material"></a>.
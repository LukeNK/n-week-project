## Limit
Despite the author trying their best to explain this chapter for complete beginners, it is still expected that the reader has some basic understanding of limits. Please go read about limits somewhere first before hopping on this guide.

### Approach and limit
**Approach** is the concept that a variable reaches closer and closer to a number. **Limit** is both the upper bound and the lower bound of something, like my patience for example. If we consider $x$ as the input and the value of $f(x)$ as the output, then we think limit as the bound for which the output could be given an input.

Say we have a function that spreads one butter cube into two slices of bread ($g(x)=2x$). As we get closer and closer to two cubes ($x\to2$), then the number of bread slices we can spread will approach four slices. Represent that in a mathematical term, we have:
\\[ \lim_{x\to2}g(x) = 4 \\]

You may wonder: why I said that the limit is _both_ the upper and the lower bound but my result only gives out one value. This is because the difference between the upper bound and the lower bound is _approaching_ one single number. If you have two butter cubes, both the maximum and the minimum you can spread is 4. Later you will see that is not always true for certain equations.

Another interesting thing is that the limit is essentially what the value of the function _is supposed_ to be. In our case, we evaluate that limit by simply plugging $g(2)=4$. This is the property we got from the definition of limit itself: it is the "restriction" of the y-axis (the output) as the x-axis (the input) gets closer to a value (<a href="#fig-a2"></a>). If x "squeeze" then it will result in $g(x)$ being squeezed to a value. This is why when solving limits, it is about arranging your function to the point where you can plug in the $x$ value to answer your limit.
<div class="figure">
    <figure>
        <img src="figures/a/2.png" alt="Representation of lim(x→2)g(x)=4">
        <figcaption>Representation of $ \lim_{x\to2}g(x)=4 $</figcaption>
    </figure>
    <figure>
        <img src="figures/a/3.png" alt="A discontinuous function">
        <figcaption>A discontinuous function</figcaption>
    </figure>
</div>


The biggest takeaway from this section is: limit is what the output approaches given the input is approaching a number. Moreover, because both the upper bound and the lower bound approach a number, we can think of the limit as a value that the function is supposed to be at a given x-coordinate, even if the function is undefined at that point.

### Limit from different sides
The example above "squeezes" the x-axis from both sides but what if we have an equation like <a href="#fig-a3"></a>?

No matter how hard you push the x-axis from two sides together, the y-axis limit will not get smaller. If we let $x$ approach from the left side (**negative side**) then the limit approaches $0$; if we let $x$ approach from the **positive side** then the limit approaches $1$. This is the situation we mentioned earlier about the upper bound and the lower bound creating a range instead of approaching one single number. In this case, we can only state what the limit approach as $x$ approaches from either side:
\\[
    \lim_{x\to0^-}f(x) = 0
    \qquad
    \lim_{x\to0^+}f(x) = 1
\\]
Be careful: the sign denotes where we _start_. If the sign is negative, we approach it <i>from the negative side</i> and move _to the positive side_. I do not know why I used to mistake between those two, so that is a way to remember. Moreover, the limit of $f(x)$ as $x\to0$ does not exist.

A function's limit only exists if the limit from both sides approaches the same number:
\\[
    \text{If }
    \lim_{x\to a^-}f(x)
    = \lim_{x\to a^+}f(x)
    \text {  then }
    \lim_{x\to a}f(x) \text{ exists}
\\]
This leads us to the definition of **continuity**: if the limit of $f(x)$ at $a$ is equal to $f(x)$ then the function is continuous at $a$.

### Unbound limit
<div class="figure">
    <figure>
        <img src="figures/a/1.png" alt="The graph of the function f(x)=1/x^2">
        <figcaption>The graph of the function $ f(x)=\frac{1}{x^2} $</figcaption>
    </figure>
    <figure>
        <img src="figures/a/4.png" alt="The graph of function f(x)=1/x">
        <figcaption>The graph of function $ f(x)=\frac{1}{x} $</figcaption>
    </figure>
</div>

Consider the function $f(x)=1/x^2$ in <a href="#fig-a1"></a>,  you can see that moving from both sides, the limit slowly becomes higher and higher. It seems like it is **unbounded** or the limit seems to reach **positive infinity**.
\\[ \lim_{x\to0} \frac{1}{x^2} = \infty \\]

As you can see, both the upper limit and the lower limit still attempt to reach closer to one single value, so the limit still exists. Consider $f(x)=1/x$ in <a href="#fig-a4"></a>, we have the following:
\\[
    \lim_{x\to0}\frac{1}{x}
\\]
does not exist, but
\\[
    \lim_{x\to0^-}\frac{1}{x} = -\infty
    \qquad
    \lim_{x\to0^+}\frac{1}{x} = +\infty
\\]
The main limit does not exist, but the limit from either side is unbounded. The limit must exist first before continuing to check if the limit is bounded or unbounded.

### Limit to infinity
Once again consider the function $f(x)=1/x^2$ as $x\to\infty$. What that means is we consider $x$ to grow to a big number and see if our y-axis merges to a number. From the graph, we can see that the value of the function is slowly reaching $0$, therefore we can state:
\\[ \lim_{x\to\infty} \frac{1}{x^2} = 0\\]

Of course, the limit to infinity can be infinity too:
\\[ \lim_{x\to\infty} 2x = \infty \\]

Do not be fooled! Infinity is not a variable you can move around or do mathematical operations to it. The equal sign in this case simply states that the limit is reaching a _concept_ of extremely big numbers. We will discuss more about evaluating limit to infinity in the evaluating section. You just need to remember that the limit to infinity simply assumes that as we plug large numbers, we look if the value of the function reaches a number or not.

### Solving finite limits
If we have $c$ is a constant, $a$ is the number we are trying to approach, and we definite:
\\[
    \lim_{x\to a}f(x) = L
    \text{ and }
    \lim_{x\to a}g(x) = M
\\]
The basic **limit theorems** are:
<eq>
    \lim_{x\to a}[f(x)+g(x)] = L+M
    \qquad
    \lim_{x\to a}[f(x)-g(x)] = L-M
</eq>
<eq>
    \lim_{x\to a}[f(x)\cdot g(x)] = L\cdot M
    \qquad
    \lim_{x\to a}[f(x)/g(x)] = L/M
</eq>
<eq>
    \lim_{x\to a}c = c
</eq>
<eq>
    \lim_{x\to a} \left[f(x)^n\right]
    = \left[\lim_{x\to a}f(x)\right]^n
    \qquad
    (n \in N)
</eq>
These theorems can be deducted from the concept that limit is essentially substituting $a$ into our functions, so all standard number arithmetic still works just fine.

From these theorems, you can see that **finding a finite limit** is simply doing algebra manipulation of the function until you reach a point where you can substitute $x$ into your equation. The typical procedure to solve a finite limit can be found in <a href="#fig-a5"></a>.
<figure>
    <img src="figures/a/5.png" alt="Procedure to calculate limit, courtesy of Khan Academy.">
    <figcaption>Procedure to calculate limit, courtesy of Khan Academy.</figcaption>
</figure>

<h4>Vertical asymptote</h4>
The tables in this section use $+$ simply to denote the fact that the number is $>0$ and similarly with the negative sign.

**The limit of the multiplication between two functions**, when it is at the asymptote, can be simplified in <a href="#tab-a1"></a>. Remember that multiplication is commutative and check if the limit exists in the first place or not. The table is pretty straightforward, as the signs are similar to multiplication between two numbers: two negatives get a positive.
<table id="tab-a1">
    <caption>Finding the limit of the multiplication between two functions</caption>
    <tr>
        <th>$\lim_{x\to a}f(x)$</th>
        <th>$\lim_{x\to a}g(x)$</th>
        <th>$\lim_{x\to a}[f(x) \cdot g(x)]$</th>
    </tr>
    <tr>
        <td>$+&infin;$</td>
        <td>$+$</td>
        <td>$+&infin;$</td>
    </tr>
    <tr>
        <td>$+&infin;$</td>
        <td>$-$</td>
        <td>$-&infin;$</td>
    </tr>
    <tr>
        <td>$-&infin;$</td>
        <td>$+$</td>
        <td>$-&infin;$</td>
    </tr>
    <tr>
        <td>$-&infin;$</td>
        <td>$-$</td>
        <td>$+&infin;$</td>
    </tr>
</table>

**The limit of a division between two functions** $f(x)$ and $g(x)$ starts with two requirements:
\\[
    \lim_{x\to a}f(x) \neq 0
    \text{ and }
    \lim_{x\to a}g(x) = 0
\\]
After that, you need to check if the function $g(x)$ for $x$ approaches $a$ is larger than $0$ or not — you are checking the result that the whole function will dispense. The interaction between the limit of $f(x)$ and the sign of $g(x)$ can be found in <a href="#tab-a2"></a>. Note that you still need to pay close attention to which direction you are approaching $x$ and whether the limit exists at that point. Once again the signs are similar to typical division. &infin;
<table id="tab-a2">
    <caption>Interaction of the limit between two functions</caption>
    <tr>
        <th>$\lim_{x\to a}f(x)$</th>
        <th>The sign of $g(x)$</th>
        <th>$\lim_{x\to a}\frac{f(x)}{g(x)}$</th>
    </tr>
    <tr>
        <td>+</td>
        <td>+</td>
        <td>+&infin;</td>
    </tr>
    <tr>
        <td>+</td>
        <td>-</td>
        <td>-&infin;</td>
    </tr>
    <tr>
        <td>-</td>
        <td>+</td>
        <td>-&infin;</td>
    </tr>
    <tr>
        <td>-</td>
        <td>-</td>
        <td>+&infin;</td>
    </tr>
</table>

<h4>Trigonometric identities</h4>
As it is impossible to cover all of the identities, this section will list identities that are useful in AP Calculus exams. First, recall the definition of a few trigonometric functions:
<eq>
    \tan\theta = \frac{\sin\theta}{\cos\theta}
    \qquad
    \cot = \frac{1}{\tan\theta} = \frac{\cos\theta}{\sin\theta}
    \qquad
    \csc\theta = \frac{1}{\sin\theta}
    \qquad
    \sec\theta = \frac{1}{\cos\theta}
</eq>

Here are **Pythagorean identities**, which help when reviewing with a unit circle that displays trigonometric functions like <a href="#fig-a8"></a>:
<figure>
    <img src="figures/a/8.png" alt="A unit circle with trigonometric functions">
    <figcaption>A unit circle with trigonometric functions</figcaption>
</figure>
<eq>
    \sin^2\theta + \cos^2\theta = 1^2
    \qquad
    \tan^2\theta + 1^2 = \sec^2\theta
    \qquad
    1^2 + \cot^2\theta = \csc^2\theta
</eq>
The $1^2=1$ was added to help the reader remember the connection to the original Pythagorean theorem $a^2+b^2=c^2$. You can work out more identities from the figure. Just in case you forgot, $\sin^2\theta=\sin(\theta)\cdot\sin(\theta)$ — it is the squared of the _result_ of the function, NOT the $\theta$ inside the function.

The **double-angle identities**:
<eq>
    \sin2\theta = 2 \sin\theta \cos\theta
</eq>
<eq>\begin{aligned}
    \cos2\theta
    =& \cos^2\theta - \sin^2\theta \\\\\\
    =& 2\cos^2\theta - 1 \\\\\\
    =& 1 - 2\sin^2\theta
\end{aligned}</eq>
<eq>
    \tan2\theta = \frac{2\tan\theta}{1 - \tan^2\theta}
</eq>

The **half-angle identities** frequently being mentioned but more often used for integral questions:
<eq>
    \sin^2\theta = \frac{1}{2}(1-\cos2\theta)
</eq>
<eq>
    \cos^2\theta = \frac{1}{2}(1+\cos2\theta)
</eq>

Finally, it is crucial to remember that the limit of most of the trigonometric functions as $\theta\to0$ is undefined. Can you see why?

<h4>Composite function limits</h4>
The standard theorem is:
<eq>
    \lim_{x\to a} f(g(x))
    = f(\lim_{x\to a} g(x))
</eq>
If and only if the limit of $g(x)$ exists and $f(x)$ is continuous at $\lim_{x\to a} g(x)$:
\\[
    \lim_{x\to a}g(x) = L
    \text{ and }
    \lim_{x\to L} f(x) \text { exists}
\\]

Remember: the theorem only stated about "moving" the limit inside and does not mention anything about the limit itself. Therefore, if you cannot apply the theorem, it does not mean that the limit does not exist so you should inspect the function instead.

When inspecting the functions through graphs, it is best to put the two functions in two different graphs. Since the output of $g(x)$ is the input of $f(x)$, you can visualize it as if you "flip" the $g(x)$ y-axis to match with the x-axis of $f(x)$.

Finally, if the graph is discontinuous, it does not mean that the limit at that point does not exist. Slowly follow one-sided limits and see if they are equal.

<h4>Intermediate Value Theorem</h4>
If a function is continuous over an interval $[x_0, x_1]$, what you might be able to see is the fact that the function's result (y-axis) will need to move from $y_1$ to $y_2$ — the function cannot "jump" because it is continuous. Therefore, this theorem guarantees that within $[x_0, x_1]$, you will find a value within $[y_0, y_1]$:
<eq>
    f(x) \text{ continuous on } [x_0, x_1] \text { and } c \in [x_0, x_1]
    &rArr;
    f(c) \in [f(x_0), f(x_1)]
</eq>
The f(x) _may_ get out of the specified range (most notably quadratic equations), but we are certain that there exists _at least_ one value satisfies our equation.

<h4>The squeeze theorem</h4>
Also known as the **sandwich theorem**, it helps calculate limits that are a bit weird. Suppose in an area that we know:
\\[ f(x) \leq h(x) \leq g(x) \\]
then for some real number $a$:
<eq>
    \text{If } \lim_{x\to a}f(x) = L = \lim_{x\to a}g(x)
    \text{ then }
    \lim_{x\to a}h(x) = L
</eq>
Read: If we certainly know that, inside the range we are evaluating, $h(x)$ is always between the other two functions, then if the limit of both $f(x)$ and $g(x)$ is equal to a number, then those two limits "sandwich" $h(x)$ to that same value.

For example, we have the following function with the graph from <a href="#fig-a7"></a> and <a href="#fig-a6"></a>:
\\[ x^2 \sin\left( \frac{1}{x} \right) \\]
<div class="figure">
    <figure>
        <img src="figures/a/7.png" alt="The graph of x^2 sin(1/x) and ±x^2">
        <figcaption>The graph of $ x^2\sin{\frac{1}{x}} $ and $ \pm x^2 $</figcaption>
    </figure>
    <figure>
        <img src="figures/a/6.png" alt="The graph zoomed in">
        <figcaption>The graph zoomed in</figcaption>
    </figure>
</div>

Of course, we can observe from the graph that the function approaches $0$ as $x\to0$, but what if we don't have the graph? We know from the property of a sine graph that the coefficient at the front will determine the height of the graph. Therefore, we know that:
\\[
    -1 \leq \sin(x) \leq 1
    \Rightarrow
    -x^2 \leq x^2 \sin\left( \frac{1}{x} \right) \leq x^2
\\]
And we know that at $0$, $-x^2 = x^2 = 0$, therefore making:
\\[ \lim_{x\to0} x^2 \sin\left( \frac{1}{x} \right) = 0\\]

### Solving limits at infinity
There are two seemingly different ways to solve for infinite limits but behind the curtain, they are the same.

The **intuitive way** is to turn the function into a rational function (a function in the form $P(x)/Q(x)$). If the degree of the numerator is higher, then the limit is either positive infinity or negative infinity — you need to look at the sign of the $x$ with the highest degree since that $x$ will be the one that determines the direction of the equation. If the degree of the denominator is the largest, then the limit will head to $0$. If the degree of both are equal, divide the coefficients of the terms with the largest exponent:
\\[
    lim_{x\to\infty}\frac{-5x^2+1}{3x^2-x}
    = \frac{-5}{3}
\\]

Finally, you can combine with the theorems mentioned above to adjust your answer properly. The reason this works is we are trying to find which term grows the fastest by comparing their degree; if they have the same degree, they "contested" each other to reach a ratio.

The **algebraic way** is to transform what you have into what you can evaluate. All the theorems from the solving finite limit section still hold unless specified otherwise.
\\[\begin{aligned}
    & lim_{x\to\infty}\frac{5x^2+1}{3x^2-x} \\\\\\
    =&
        lim_{x\to\infty}\frac{(5x^2+1) / x^2}{(3x^2-x) / x^2}
        &\text{divide by } x^2 \\\\\\
    =& lim_{x\to\infty}\frac{5+\frac{1}{x^2}}{3-\frac{x}{x^2}} \\\\\\
    =&
        \frac
            {lim_{x\to\infty}(5+\frac{1}{x^2})}
            {lim_{x\to\infty}(3-\frac{x}{x^2})}
        &\text{apply the theorems} \\\\\\
    =& \frac{5+0}{3-0} &\text{find the limit of each term} \\\\\\
    =& \frac{5}{3}
\end{aligned}\\]

It is once again crucial to remember that you cannot simply substitute $\infty$ into your equation and manipulate it as if it is a variable.

<h3 id="sec-a-limit-hopital">L'Hôpital's rule</h3>
If you think the derivative $f'(x)$ is simply a special transformation of the original function $f(x)$, we can use the derived function to solve a limit that is in the indeterminate form:
<eq>
    \lim_{x\to a} \frac{f(x)}{g(x)}
    = \lim_{x\to a} \frac{f'(x)}{g'(x)}
</eq>
Here are the **indeterminate forms** that L'Hôpital rule can help with:
<eq>
    \frac{0}{0} \qquad
    \frac{\infty}{\infty} \qquad
    0\times\infty \qquad
    1^\infty \qquad
    0^0 \qquad
    \infty^0 \qquad
    \infty - \infty
</eq>
The **conditions** are, very obvious, the functions must be differentiable and the final limit must exist. Less obvious is the fact that you can only use this rule when $f(x)/g(x)$ is indeterminate.

You can take as many differentiations as it takes to solve the limit equation. You can also take the antiderivative but usually, that will result in a more complex function. Consider we have this example:
\\[
    \lim_{x\to\infty} \frac{e^x}{x^2}
    = \frac{\infty}{\infty}
\\]
Note that the derivative of $e^x$ is $e^x$, we can slowly transform our limit:
\\[
    \lim_{x\to\infty} \frac{e^x}{x^2}
    = \lim_{x\to\infty} \frac{e^x}{2x}
    = \lim_{x\to\infty} \frac{e^x}{2}
    = \infty
\\]
In the last step, we know that $e^x$ grows much more rapidly than $2$.

## Derivatives
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
    <img src="figures/a/10.png" style="max-height: 15rem;" alt="Two points approaching each other">
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
    <img src="figures/a/11.png" style="max-height: 15rem;" alt="Representation of a product between two functions">
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
    <img src="figures/a/12.png" alt="Chain rule visualization">
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
It is recommended that you explore <a href="#sec-a-integral"></a> for the _inverse_ concept of derivative: anti-derivative. For other additional reading material connecting to calculus as a whole, place look at <a href="#sec-a-integral-material"></a>.

<h2 id="sec-a-integral">Integrals</h2>
It is an absolute requirement that the reader understands derivatives, which in turn requires the knowledge of limits.

### Why antiderivative is integral?
This section is not necessary to understand the concept of integral, so the reader feels free to skip it. However, this section will provide an in-depth examination of how mathematicians came up with the connection between antiderivative and integral — we are going to construct calculus from the ground up. If that is the question you have in mind, please continue to read this section as the author has rewritten it thrice now.

Assume we have a graph $f(x)$ and an unknown function $A(x)$ that represents the area under $f(x)$ between the y-axis and the input. We will split into two situations and each situation will explain a different component of integration to construct the full image:

<h4>The main function is zero-degree (constant)</h4>
If we have $f(x)=c$, the graph of our constructed function will look like <a href="#fig-a13"></a>. If we were to find the area between $0$ and $a$, we could simply calculate $A(a)$ to get the result.
<div class="figure">
    <figure>
        <img src="figures/a/13.png" alt="A representation of a constant function's integral">
        <figcaption>A representation of a constant function's integral</figcaption>
    </figure>
    <figure>
        <img src="figures/a/14.png" alt="A representation of a linear function's integral">
        <figcaption>A representation of a linear function's integral</figcaption>
    </figure>
</div>

If we move $a$ a $dx$ amount to the right and want to find the area at that point, we plug $A(a+dx)$. If you look at the red rectangle on the figure, there are two ways to interpret that area:

- It is the area of $A(a+dx)$ subtracted by $A(a)$
- It is the area created by the increase in the variable $a$ (which is $dx$) multiplied by the height of that area $f(a)$ (in this case, we plug the number in to find the height).

And clearly, those two are mentioning the same area, so we can state that they are equal:
\\[
    A(a+dx)-A(a)
    = f(a) \;dx
\\]
We can generalize the point we selected by replacing $a$ with $x$:
\\[
    A(x+dx)-A(x)
    = f(x) \;dx
\\]
Then re-arrange the equation:
\\[
    \frac{A(x+dx)-A(x)}{dx}
    = f(x)
\\]
Hang on... that essentially stated that the slope of $A(x)$ is the value of $f(x)$; on the other hand, it stated that essentially $f(x)$ is the derivative of $A(x)$! Despite $A(x)$ being unknown in the beginning, we can find a function whose derivative is $f(x)$ to get $A(x)$. Thus, the antiderivative is the area under the graph.

<h4>The main function is first-degree (linear)</h4>
Alright, we have seen the connection between $A(x)$ and $f(x)$, but where are the $\int$ sign and the final $dx$? Assume $f(x)$ is a linear equation with a graph similar to <a href="#fig-a14"></a>. Notice that now our area function will need to account for both the green rectangle and the pink triangle at the top of every rectangle.

If we want to find the area under $f(x)$ from $0$ to $a$, we will need to add the area of all of the slices between $0$ and $a$. The area of each green rectangle is $f(x) \;dx$ and we want to find the sum of all of those areas from $0$ to $a$:
\\[
    \int^a_0 f(x) \;dx + \text{pink area}
    = A(a)
\\]
As you can see, the $\int$ acts both as a $\Sigma$ notation for the sum of the rectangles and $\lim_{dx\to0} f(x)\;dx$<note>This notation is semi-accurate for the sake of simplicity. If you want to understand integral as summation, search "Riemann sum".</note>. Intuitively, you can see that the slope of $f(x)$ will dictate how much the area will grow moving from $a$ to $dx$: the sharper $f(x)$ is, the faster the area will grow and reverse. The integral is the accumulation of change.

Note that the smaller the $dx$, the finer we slice our area, making our pink area approach $0$ and our summation of the green area closer to the actual area. Algebraically, this is because $f(x)=dA/dx$ so the left term will cancel out $dx$, while the pink area will still be multiplied by $dx$ (the base width of the triangle). Eventually, we have:
\\[
    \int^a_0 f(x) \;dx
    = A(a)
\\]

If we have another point $b>a$, and we want to find the area from point $a$ to $b$, we simply find the area of point $b$ and minus it by the area at $a$:
\\[
    \int^b_a f(x) \;dx
    = A(b) - A(a)
\\]

### Integration concept
Starting with a geometry intuition: think of a paper. If you look at a paper from the edge, it has a very tiny thickness. However, as you stack the papers together, eventually those tiny thicknesses will create an area on the side: you can measure the height of the stack and multiply it by the edge's length to get the stack's edge area.

Integral is the **antiderivative** of a function, which helps us find the area under a curve by chopping it into thin sheets and stir-frying it... wait sorry wrong note... _Ehem..._

Integral helps us find the area under a function $f(x)$ by slicing it into many small pieces with equal $dx$ thickness and height of $dx$. As $dx\to0$, our approximation of the area will get better and better; at some point with extremely small $dx$, the value would just be the sum of all small segments of $f(x)$. Similar to our paper example from above: as we continue to stack the papers, the sides will eventually create an area. To tell that $F(x)$ is the **indefinite integral** of $f(x)$, we use
<eq>
    \int f(x) \;dx = F(x) + C
</eq>

The reason we have $C$ is because any constant will have its derivative as $0$, so both $F(x)+1$ or $F(x)+3$ will have the the derivative as $f(x)$. To express that we have a lot of possible antiderivatives, we use the constant $C$. _When solving integrals_, most of the time you can simply add the integration constant at the very end when answering the question instead of accounting it for every small step.

The notation we used above is _indefinite integral_ which expresses a function without any particular input and does not spit out any number. If we want to find the area of a particular region $[a,b]$, we will use a **definite integral** to denote $a$ as the lower bound and $b$ as the upper bound. Since we have $F(x)$ as the area function from $0$ to $x$, we find the area of $[0,b]$ and then subtract it by $[0,a]$ to get the interested area:
<eq>
    \int^b_a f(x) \;dx
    = \left. F(x) \right|^b_a
    = F(b) - F(a)
</eq>
Note that the $C$ was _conveniently_ cancelled, so we can ignore that.

Another important thing to remember is integral is the **signed area** under a function. What that meant is that if the function $f(x)$ ever dipped below $0$, then the area between the x-axis and $f(x)$ will be considered negative. If you want the area in general without that subtraction, consider splitting your integral into two: calculate the positive area then add it to the absolute value of the negative area.

**Notation-wise**, because integration is the sum of $f(x)\;dx$, it is also appropriate to remember that the $dx$ is still a part of the integral<note>Technically, you can still move the $dx$ outside of the integral since the $dx$ was distributed into multiple terms of $f(x)$, so you just need to symbolize the sum of all $f(x)$ then multiplied it to $dx$. However, this is a high-level technique and requires an in-depth understanding of this topic itself.</note>:
\\[
    \int (f(x)\cdot dx)
\\]
Please don't kidnap $dx$ in the dead of the night when you are doing homework that is due the next day. Only physicists do that<note>Feel free to contemplate on the equation $e^x=(1-\int)^{-1}0$ before contacting your local physicist</note>.

A final word of this section: **antiderivative (indefinite integral)** is simply the function $F(x)$ without any real value, while **definite integral** is the result of plugging in values into our indefinite integral. Those two terms are usually used interchangeably, but they are slightly different.

### Integration rules
Note that the lowercase $c$ in this section is different from the integral constant $C$ (uppercase). Generally, the integral of a function will have a higher degree and will be a bit more complex but in academic settings, the teachers will usually make integration easy.

**The sum rule** and the similar **difference rule** are almost universal at this point after you learn limit, derivative, and integral:
<eq>
    \int [f(x) + g(x)] \;dx
    = \int f(x) \;dx + \int g(x) \;dx
</eq>
Is it quite fascinating to see that the integral sign and the $dx$ are similar to being distributed across the terms?

**Multiplication by a constant**:
<eq>
    \int cf(x) \;dx = c\int f(x) \;dx
</eq>

**The power rule** has a requirement that $n \neq -1$:
<eq id="eq-m4">
    \int x^n \;dx
    = \frac{x^{n+1}}{n+1} + C
</eq>

**Integration by parts** is useful when you can separate your functions into two parts and multiply those together. Assume you found two functions $u(x)$ and $v(x)$:
<eq id="eq-m5">
    \int u v \;dx
    = u \int v \;dx - \int u' \cdot \left(\int v \;dx\right) dx
</eq>
You can specifically define two functions as $u$ and $v'$, and solve for $u'$ and $v$ individually:
<eq>
    \int u v' \; dx
    = uv - \int u' v \; dx
</eq>
When writing the result, remember: alternate both $u$ and $u'$, but you only use the solved $v$.

**Integration by substitution** or **the reverse chain rule** requires you to set up your chained function in a particular way. Assume:
\\[
    g(x)=u
    \qquad
    g'(x) \;dx=du
\\]
We can use $u$ as an input placeholder and compute our integral as:
<eq>
    \int f(g(x)) \cdot g'(x) \;dx
    = \int f(u) \;du
</eq>
After that, solve the integral normally (remember the variable is now a placeholder $u$) before substituting $g(x)$ back into the equation.

<h4>The power rule</h4>
The intuition has $nx^{n-1} = (x^n)'$ as the derivative's power rule. However, the left side is $n$ times larger than our function inside the integral. If we were to divide both sides by $n$, then the input would be the original function stated in the rule. Of course, the $n$ is offset by $1$ because we put it relative to the derivative on the right side.
\\[
    nx^{n-1} = (x^n)'
    \Leftrightarrow x^{n-1} = \frac{(x^n)'}{n}
    \Rightarrow^{\text{-ish}} x^{n} = \frac{x^{n+1}}{n+1}
\\]
Such a way of thinking will work, but as you can see, it is not accurate when you need to insert that "-ish" into the equation. As for the reason it is not accurate, did you realize that the final equation somehow dropped the derivative bracket?

<h4>Integration by parts</h4>
While it is true that we need to have $C$ for every integral result, it is not necessary in the case of the inner integrals $\int v\;dx$ because the $C$ will eventually cancel out.

It is important to identify which $u$ and $v$ to use to make the derivatives and integrals easier — you should choose a $u$ that gets simpler when you differentiate it and is similar to $v$ integration. A rule to remember is **I LATE**. You should choose $u$ based on which of these comes first:

- **I**: inverse trigonometric functions such as $sin^{-1}$
- **L**: logarithmic functions like $\ln(x)$ or $log(x)$
- **A**: algebraic functions like $x^2$ or $x+1$
- **T**: trigonometric functions such as $\sin(x)$
- **E**: exponential functions such as $e^x$ or $3^x$ ($x$ as the power... you don't want to give something unknown the power)


**The formula** originates from algebra manipulation of the original product rule:
\\[\begin{aligned}
    &(fg)' = fg'+f'g \\\\\\
    \Leftrightarrow& fg' = (fg)'-f'g \\\\\\
    \Leftrightarrow&\int fg'\;dx = \int(fg)'\;dx-\int f'g\;dx
        &\text{Take the integral of every terms}\\\\\\
    \Leftrightarrow&\int fg'\;dx = fg -\int f'g\;dx
        &\text{Derivative cancels the integral}\\\\\\
\end{aligned}\\]

<h4>Integration by parts trick: the tabular method</h4>
This is a quick trick to calculate the integral function that was set up according to our stated format $\int uv\;dx$ of the integration by parts rule. It is recommended that the reader find an online resource with videos to explain as it is much easier to understand with an interactive format. A recommended video was included in the additional material section<a href="#sec-a-integral-material"></a>.

It is best to show the procedure as an example. Let's say we have the following integral:
\\[ \int x^3\sin x \;dx \\]
We identify $u=x^3$ and $v=\sin x$. Next, we set up the <a href="#tab-a3"></a>. For every row on the $u$ column, we take a derivative of the previous row; similarly, we take the antiderivative for every $v$ row. For the sign, you can either denote it on the arrow, make a separate column for it, or negate the results in the $u$ column; the last row of the sign column was left empty as a reminder that you will not take the last derivative into the final result.
<table id="tab-a3">
    <caption>Example of the tabular method's table</caption>
    <tr>
        <th>Sign</th>
        <th>$ u $</th>
        <th>$ v $</th>
    </tr>
    <tr>
        <td>+</td>
        <td>$ x^3 $</td>
        <td>$ \sin x $</td>
    </tr>
    <tr>
        <td>-</td>
        <td>$ 3x^2 $</td>
        <td>$ -\cos x $</td>
    </tr>
    <tr>
        <td>+</td>
        <td>$ 6x $</td>
        <td>$ -\sin x $</td>
    </tr>
    <tr>
        <td>-</td>
        <td>$ 6 $</td>
        <td>$ \cos x $</td>
    </tr>
    <tr>
        <td></td>
        <td>$ 0 $</td>
        <td>$ \sin x $</td>
    </tr>
</table>

Take a look at <a href="#fig-a16"></a> and now look at what one should get as a result. It is easier to remember the method visually than a wordy description.
\\[\begin{aligned}
    \int x^3\sin x \;dx =
    &+ x^3 (-\cos x) \\\\\\
    &- 3x^2 (-\sin x) \\\\\\
    &+ 6x (\cos x) \\\\\\
    &- 6 (\sin x) \\\\\\
    =& -x^3\cos x + 3x^2\sin x + 6x\cos x - 6\sin x
\end{aligned}\\]

<figure>
    <img src="figures/a/16.png" alt="Integration by part using the tabular method">
    <figcaption>Integration by part using the tabular method</figcaption>
</figure>

You need the $u$ column to eventually reach $0$ to make this method work. In case your table gets too long, maybe consider using the original integration by parts formula (<a href="#eq-m5"></a>). Furthermore, do not worry about accidentally going past the stop point, as the $0$ in the $u$ column should remind you that $a\times0=0$.

<h4>Integration by substitution</h4>
The listed formula somehow subtlety cancelled out everything but in reality, it is just simply an expansion of the derivative $du$ itself. Let's start fresh from an integral:
\\[
    \int \cos(x^2) \cdot 2x \;dx
\\]
We can define $u$:
\\[
    u = x^2
\\]
Therefore $u'$ or the derivative of $u$, notated with small changes in $du$ is:
\\[
    \frac{du}{dx} = 2x
    \Leftrightarrow
    dx=\frac{du}{2x}
\\]
Replace $dx$ into our integral, we can see the $2x$ were cancelled out nicely, making all the variables inside the integral become $u$ instead of $x$. After that, we can calculate the integral with our input variable as $u$, then substitute $u$ back to answer:
\\[\begin{aligned}
    \int \cos(x^2) \cdot 2x \;dx
    &= \int \cos(u) \cdot 2x \;\frac{du}{2x} \\\\\\
    &= \int \cos(u) \;du \\\\\\
    &= \sin(u) + C \\\\\\
    &= \sin(x^2) + C
\end{aligned}\\]

Note that most of the time, it is not possible to start with an already set-up function but it is okay: you can just go ahead and select a convenient $u$ and replace $dx=du/u'$. We have this example:
\\[\begin{aligned}
    \int x\sqrt{x-1} \;dx
    &= \int x\sqrt{u} \;du
    \qquad\text{Define } u=x-1 \text{ and } du=dx \\\\\\
    &= \int (u+1)\sqrt{u} \;du
    \qquad\text{From the original definition: } x=u+1 \\\\\\
    &= \int (u+1)u^{\frac{1}{2}} \;du \\\\\\
    &= \int u^{\frac{3}{2}} + u^{\frac{1}{2}} \;du \\\\\\
    &= \frac{2}{5}u^{\frac{5}{2}} + \frac{2}{3}u^{\frac{3}{2}} \\\\\\
    &= \frac{2}{5}(x-1)^{\frac{5}{2}} + \frac{2}{3}(x-1)^{\frac{3}{2}}
    \qquad\text{Substitute } u=x-1 \\\\\\
    &= \frac{2}{5}\sqrt{(x-1)^5} + \frac{2}{3}\sqrt{(x-1)^3}
    \qquad\text{Add integration constant}
\end{aligned}\\]

### Integral of common functions
**The constant function** has a similar representation to the <a href="#fig-a13"></a> where the integral will increase the degree of a function. It is the power rule in <a href="#eq-m4"></a>.
<eq>
    \int a \;dx = ax + C
</eq>
If you continue to expand the power rule, we will have an integral for **linear function** and a **squared**:
<eq>
    \int x \;dx = \frac{x^2}{2} + C
    \qquad
    \int x^2 \;dx = \frac{x^3}{3} + C
</eq>

**The reciprocal function** can be used for general situations or when $n=-1$ for the power rule:
<eq>
    \int x^{-1} \;dx
    = \int \frac{1}{x} \;dx
    = \ln|x| + C
</eq>

**Exponential with Euler's number** is quite easy to remember if you remember that its derivative is always itself (with the $C$):
<eq>
    \int e^x \;dx = e^x + C
</eq>

If we have **the variable as the power**, natural log once again came up:
<eq>
    \int a^x \;dx = \frac{a^x}{ln(a)} + C
</eq>

And if we put **a natural log** on the table after appearing in so many equations, we have its integral as:
<eq>
    \int \ln(x)dx
    = x \ln(x) - x + C
    % = x(\ln(x) - 1) + C
</eq>

**Trigonometric functions** can be remembered by recalling the original derivative trigonometric functions:
<eq>\begin{aligned}
    \int \cos(x) dx = \sin(x) + C \\\\\\
    \int \sin(x) dx = -\cos(x) + C \\\\\\
    \int \sec^2(x) dx = \tan(x) + C \\\\\\
\end{aligned}</eq>

<h3 id="sec-a-integral-material">Additional material</h3>

- A YouTube playlist by 3Blue1Brown to help with the visualization of constructing derivatives (as well as other calculus concepts): <a href="https://www.youtube.com/playlist?list=PL0-GT3co4r2wlh6UHTUeQsrf3mlS2lk6x">Essence of calculus</a>
- An in-depth look into the proof and connection between derivatives and integrals: <a href="https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus">https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus</a>
- The tabular method explanation video: <a href="https://www.youtube.com/watch?v=Yyic5aaXGaw">https://www.youtube.com/watch?v=Yyic5aaXGaw</a>
- A strongly worded flowchart to solve integrals can be found in <a href="#fig-a18"></a>


<figure>
    <img src="figures/a/18.png" alt="Solving integrals flowchart, courtesy of a deleted Reddit user on r/math">
    <figcaption>Solving integrals flowchart, courtesy of a deleted Reddit user on r/math</figcaption>
</figure>

---
layout: chapter
---
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
        <img src="{{ site.url }}/figures/a/2.png" alt="Representation of lim(x→2)g(x)=4">
        <figcaption>Representation of $ \lim_{x\to2}g(x)=4 $</figcaption>
    </figure>
    <figure>
        <img src="{{ site.url }}/figures/a/3.png" alt="A discontinuous function">
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
Be careful: the sign denotes where we _start_. If the sign is negative, we approach it _from the negative side_ and move _to the positive side_. I do not know why I used to mistake between those two, so that is a way to remember. Moreover, the limit of $f(x)$ as $x\to0$ does not exist.

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
        <img src="{{ site.url }}/figures/a/1.png" alt="The graph of the function f(x)=1/x^2">
        <figcaption>The graph of the function $ f(x)=\frac{1}{x^2} $</figcaption>
    </figure>
    <figure>
        <img src="{{ site.url }}/figures/a/4.png" alt="The graph of function f(x)=1/x">
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
    <img src="{{ site.url }}/figures/a/5.png" alt="Procedure to calculate limit, courtesy of Khan Academy.">
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
    <img src="{{ site.url }}/figures/a/8.png" alt="A unit circle with trigonometric functions">
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
        <img src="{{ site.url }}/figures/a/7.png" alt="The graph of x^2 sin(1/x) and ±x^2">
        <figcaption>The graph of $ x^2\sin{\frac{1}{x}} $ and $ \pm x^2 $</figcaption>
    </figure>
    <figure>
        <img src="{{ site.url }}/figures/a/6.png" alt="The graph zoomed in">
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
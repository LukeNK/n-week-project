---
layout: chapter
title: Integrals
prerequisites:
  - m-derivative
---
It is an absolute requirement that the reader understands derivatives, which in turn requires the knowledge of limits.

### Why antiderivative is integral?
This section is not necessary to understand the concept of integral, so the reader feels free to skip it. However, this section will provide an in-depth examination of how mathematicians came up with the connection between antiderivative and integral — we are going to construct calculus from the ground up. If that is the question you have in mind, please continue to read this section as the author has rewritten it thrice now.

Assume we have a graph $f(x)$ and an unknown function $A(x)$ that represents the area under $f(x)$ between the y-axis and the input. We will split into two situations and each situation will explain a different component of integration to construct the full image:

<h4>The main function is zero-degree (constant)</h4>
If we have $f(x)=c$, the graph of our constructed function will look like <a href="#fig-a13"></a>. If we were to find the area between $0$ and $a$, we could simply calculate $A(a)$ to get the result.
<div class="figure">
    <figure>
        <img src="{{ site.url }}/figures/a/13.png" alt="A representation of a constant function's integral">
        <figcaption>A representation of a constant function's integral</figcaption>
    </figure>
    <figure>
        <img src="{{ site.url }}/figures/a/14.png" alt="A representation of a linear function's integral">
        <figcaption>A representation of a linear function's integral</figcaption>
    </figure>
</div>

If we move $a$ a $dx$ amount to the right and want to find the area at that point, we plug $A(a+dx)$. If you look at the purple rectangle on the figure, there are two ways to interpret that area:

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
    <img src="{{ site.url }}/figures/a/16.png" alt="Integration by part using the tabular method">
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
    <img src="{{ site.url }}/figures/a/18.png" alt="Solving integrals flowchart, courtesy of a deleted Reddit user on r/math">
    <figcaption>Solving integrals flowchart, courtesy of a deleted Reddit user on r/math</figcaption>
</figure>

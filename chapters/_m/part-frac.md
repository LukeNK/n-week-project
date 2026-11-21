---
layout: draft
title: Partial Fraction
---

### Decomposition
Let's say you have a rational expression $P(x)/Q(x)$. The first step before proceeding is to make sure that the fraction is proper first; otherwise, you must do a long division first in order to get:
<eq>
    \text{Degree of } P(x) < \text{Degree of } Q(x)
</eq>

The first step you need to do is factoring the denominator. Ultimately, you want to get each factor with the degree of one, or the degree of two if it cannot be factored further. You can also have a factor being repeated more than once, indicated with an exponent.
<eq>
    ax + b \text{ or } ax^2 + bx + c
</eq>

Now you will need to go through each factor and consider their exponent and then start to write the partial fraction with some placeholder variable $A$ and $B$. Essentially, you are repeating the factor from 1 until you reach the exponent.
<eq>
    (ax + b)^n &\rightarrow\text{Add } \frac{A_1}{(ax+b)^1} + \frac{A_2}{(ax+b)^2} + \ldots + \frac{A_i}{(ax+b)^i} \\
    (ax^2 + bx + c)^n &\rightarrow\text{Add } \frac{A_1x + B_i}{(ax^2 + bx + c)^1} + \ldots + \frac{A_ix + B_i}{(ax^2 + bx + c)^i}
</eq>

Note that we always consider what is inside the bracket, and the exponent outside the bracket will tell us how many times we will need to repeat the partial fraction terms.

### Finding the solution
After all of that efforts to split the fraction, we will now combine it again. Here, it is important to remember one important aspect of fraction addition:
<eq>
    \frac{A}{B} + \frac{C}{D} = \frac{A\cdot D + C\cdot B}{B\cdot D}
</eq>

Wait what? Why are we combining everything back again? Actually, it is because now, we got a completing new fraction that can be equate to the old fraction, and then we will find whatever variables can actually make them the equal to each other. Let's use an example to demonstrate this technique:
\\[\begin{aligned}
    \frac{1}{x^2-1}
    &= \frac{1}{(x+1)(x-1)} \\\\\
    &= \frac{A}{x+1} + \frac{B}{x-1} \\\\\
    \Rightarrow 1
    &= A(x-1) + B(x+1)
\end{aligned}\\]

The rigorous steps are like this, where you simply remove x and solve for A and B:
\\[
    0x + 1 = Ax - A + Bx + B \Rightarrow\begin{cases}
        0x = Ax + Bx \\\\\
        1 = -A + B
    \end{cases}
\\]

However, we do not have much time inside the tests room, so we simply pick out all of the coefficients with the degree zero, degree one, and degree two, and so on from each side, and then equate them together. We simply find all of the $x^n$ and then match them with the necessary coefficient, then put all of the coefficients into the same line in the system of equation.
<!-- Add illustration of the picking process -->

At the end, your system of equation should give:
\\[
    \begin{cases}
        A = -\frac{1}{2} \\\\\
        B = \frac{1}{2}
    \end{cases} \Rightarrow
    \frac{1}{x^2-1} = \frac{-1/2}{x+1} + \frac{1/2}{x-1}
\\]
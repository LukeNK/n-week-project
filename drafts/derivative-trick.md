---
layout: draft
title: Derivative Trick
prerequisites:
  - m-derivative
---
This is a derivative trick that the Author found from "Feynman's Tips on Physics" book, chapter 1-4. This trick is especially useful when computing derivative functions without transcendental functions.

### The basics
Let's start with a simple example, where we have two functions $u(x)^a$ and $v(x)^b$. We define the mutiple of those three as $f(x)$:
\\[
    f(x) = u^a \cdot v^b
\\]
Please do remember that $u$ and $v$ is NOT a variable, but a function of x. Therefore, to prepare ourselves for taking the derivative of $f(x)$, we write the derivatives of them to the side using the chain rule:
\\[\begin{aligned}
    u^a \rightarrow& a \cdot u^{a-1} \cdot u' \\\\\\
    v^b \rightarrow& b \cdot v^{b-1} \cdot v'
\end{aligned}\\]
Now we find the derivative of the "function of everything," aka $f(x)$:
\\[
    f'(x) = (u^a \cdot bv^{b-1}v' + au^{a-1}u' \cdot v^b) \qquad\text{criss-cross the derivatives we found above} \\\\\\
\\]
Recall the exponential rules $f^{x-y} = \frac{f^x}{f^y}$ and $\frac{1}{f} = f^{-1}$:
\\[\begin{aligned}
    f'(x)
    =& \left( a\frac{u^a}{u}u' \cdot v^b + u^a \cdot b\frac{v^b}{v}v' \right) \\\\\\
    =& \left(u^av^b a\frac{u'}{u} + u^a v^b b\frac{v'}{v} \right) \qquad\text{arrange to show like terms} \\\\\\
    =& (u^a v^v)\left(a\frac{u'}{u} + b\frac{v'}{v} \right) \\\\\\
    =& f\left(a\frac{u'}{u} + b\frac{v'}{v}\right)
\end{aligned}\\]
Therefore, we showed that:
<eq>
    f(x) = u^a \cdot v^b \Rightarrow f'(x) = f\cdot\left(a\frac{u'}{u} + b\frac{v'}{v}\right)
</eq>

In the above example, you may have noticed that $a$ and $b$ can be negative or fractional. This means that you can find complex fractional derivative with ease:
\\[\begin{aligned}
    f(x) =& \frac{x-2}{(x-1)^2} \\\\\\
    \Rightarrow f'(x) =& \frac{x-2}{(x-1)^2} \left[ 1\frac{1}{x-2} - 2\frac{1}{x-1} \right] \\\\\\
    =& \frac{x-2}{(x-1)^2} \left[ \frac{(x-1) - 2(x-2)}{(x-2)(x-1)} \right] \\\\\\
    =& \frac{(x-1) - 2(x-2)}{(x-1)^3} \qquad\text{this is similar to the quotient rule} \\\\\\
    =& \frac{-x+3}{(x-1)^3}
\end{aligned}\\]
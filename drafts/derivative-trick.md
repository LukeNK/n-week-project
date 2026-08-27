---
layout: draft
title: Derivative Trick
prerequisites:
  - m-derivative
---
This is a derivative trick that the Author found from "Feynman's Tips on Physics" book, chapter 1-4. This trick is especially useful when computing derivative functions without transcendental functions.

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
    =& \left(u^a \cdot b\frac{v^b}{v}v' + a\frac{u^a}{u}u' \cdot v^b\right) \\\\\\
    =& \left(u^a v^b b\frac{v'}{v} + u^av^b a\frac{u'}{u} \right) \qquad\text{arrange to show like terms} \\\\\\
    =& (u^a v^v)\left(b\frac{v'}{v} + a\frac{u'}{u}\right) \\\\\\
    =& f\left(a\frac{u'}{u} + b\frac{v'}{v}\right) \\\\\\
\end{aligned}\\]
Therefore, we showed that:
<eq>
    f(x) = u^a \cdot v^b \Rightarrow f'(x) = f(x)\cdot\left(a\frac{u'}{u} + b\frac{v'}{v}\right)
</eq>
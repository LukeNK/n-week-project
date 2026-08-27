---
layout: draft
title: Feynman's Derivative Trick
prerequisites:
  - m-derivative
---
This is a derivative trick that the Author found from *Feynman's Tips on Physics* book, chapter 1-4. This trick is especially useful when computing derivative functions without transcendental functions.

### The basics
Let's start with a simple example, where we have two functions $u(x)^a$ and $v(x)^b$. We define the mutiple of those three as $f(x)$:
\\[
    f(x) = u^a \cdot v^b
\\]
Please do remember that $u$ and $v$ is NOT a variable, but a function with $x$ as an input. Therefore, to prepare ourselves for taking the derivative of $f(x)$, we write the derivatives of them to the side using the chain rule:
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

Of course, you can have more than just $u^a\cdot v^b$. However, because the Author is lazy to format all of the LaTeX, so here is the formula that is mentioned in *Feynman's Tips on Physics* that inspired this chapter:
<eq id="eq-m-feynman">
    f(x) = k \cdot u^a \cdot v^b \cdot w^c \cdot ...
    \Rightarrow f'(x) = f\cdot\left(a\frac{u'}{u} + b\frac{v'}{v} + c\frac{w'}{w} +... \right)
</eq>

### How to use this trick
Let's say we have a more complicated function. The Author preffer to write everything horizontally like this so we can quickly calculate each term:
\\[
    f(x) = \frac{(x+4)\sin x}{\sqrt{x+1}} = (x+4)\sin x(x+1)^{-1/2}
\\]
Wait, didn't the Author tell you that we cannot deal with transcendental functions? Well... you see, it is not particularly difficult to find $\sin$ derivative (since it is still with respect to x) — in fact, this trick works almost perfectly with everything. The problem is that *usually*, there are simpler way to deal with certain equations. As you can see above, we used it to find the derivative of $(x-2)/(x-1)^2$, but we could just use the quotient rule to arrive at the same answer faster. Therefore, this trick is mostly useful for rational functions, where continuously applying the product and quotient rule is very slow and tricky compared to doing algebra.

Anyway, we can quickly find the derivative of the above function using our formula in <a href="#eq-m-feynman"></a>. The first step is always to write down the original function and then open a big bracket<note>VSCode is screaming at the Author for not closing this bracket</note>:
\\[
    f'(x) = \frac{(x+4)\sin x}{\sqrt{x+1}}\Biggl[
\\]
The next step is just simply go through each term, think about their power and their derivative, and write down:
\\[
    f'(x) = \frac{(x+4)\sin x}{\sqrt{x+1}}\left[ 1\frac{1}{x+4} + 1\frac{\cos x}{\sin x} -\frac{1}{2}\frac{1}{x+1} \right]
\\]
For my lazy readers, you can stop here. However, it is best to simplify this to something that we can quickly plug into other equations if required.
\\[
    f'(x) = \frac{(x+4)\sin x}{\sqrt{x+1}}\left[ \frac{1}{x+4} + \frac{\cos x}{\sin x} - \frac{1}{2(x+1)} \right]
\\]

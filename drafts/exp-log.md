---
layout: draft
title: "Exponential and Logarithmic Functions"
---

### Exponential rules
Before we start talking about exponential functions, we must first understand the rules of exponents. The reason is because it is important for us to be able to manipulate the functions, and the rules of exponents are the tools for that.

Firstly, we must understand that exponents are just a shorthand for repeated multiplication. With $a$ being called a base and $n$ being called an exponent, we can write:
<eq>
    a^n = \underbrace{a \cdot a \cdot a \cdot \ldots \cdot a}_{n\text{ times}}
</eq>

If the same base is being multiplied, we can simply add the exponents. This is simply because we are just "chaining" the multiplication together. The reverse is also true for division, where we can subtract the exponents:
<eq>
    a^m \cdot a^n = a^{m+n} \qquad
    \frac{a^m}{a^n} = a^{m-n}
</eq>

If we have a power of the power, we can multiply the exponents together. In the following formula, it is basically "multiply $a$ by itself $n$ times, and then do that $m$ times":
<eq>
    (a^n)^m = a^{nm}
</eq>

We can also distribute the exponent by breaking up the base.
<eq>
    (ab)^n = a^n \times b^n \qquad
    \left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}
</eq>

Please note that $(a+b)^n \neq a^n + b^n$ in general.

When you encouter a negative exponent, it is simply means that you can "flip" the base from the numerator to the denominator. This is just a combination of the division rule and the power of the power rule:
<eq>
    a^{-n} = (a^n)^{-1} = \frac{1}{a^n}
</eq>

We have the following values that is worth remembering. A lot of people said that the calculator would just give you the answer anyway, but it is only useful if you already know the variable (in this case, the base). Therefore, remembering this can be useful when you are trying to simply an equation:
<eq>
    a^0 = 1 \qquad
    a^{1} = a
</eq>

Other other hand, we should know that radicals are also just another way to write exponents. So far, we have only considered integer exponents, but we can expand it to rational numbers as well. This is why fractional exponents are just another way to write roots. Note that from this rule, it makes no difference if we take the root first or the power first.
<eq>
    a^{\frac{1}{n}} = \sqrt[n]{a} \qquad
    a^{\frac{m}{n}} = \sqrt[n]{a^m} = \left(\sqrt[n]{a}\right)^m
</eq>

### Exponential functions
We can define a basic exponential function as follow. Note this is different from the basic parabolic quadratic function, because your $x$ (the input) is now in the exponent.
<eq>
    y=a^x
</eq>

<figure>
    <img src="{{ site.url }}/figures/m/11.png">
    <figcaption>The graph of $y=2^x$</figcaption>
</figure>

I hope now you can see why people describe certain things as "exponential growth": as x increases, y also increases, but the further we go to the possible x direction, the faster y will grow.

Regardless of the base, all exponential functions will never touch the x-axis $y=0$, as well as always crossing the y-axis at $x=1$. Furthermore, because any base raises to the power of 1 is itself, $f(1) = a$.

Except when $a=0$ (in which case, we will just have a line at $y=0$), we notice that:
<eq>\begin{aligned}
    &f(x) < 0 \text{ for } x < 0 \qquad
    &f(x) > 0 \text{ for } x > 0 \qquad
    &\text{ when } a > 1  & \\\
    &f(x) > 0 \text{ for } x < 0 \qquad
    &f(x) < 0 \text{ for } x > 0 \qquad
    &\text{ when } 0 < a < 1
\end{aligned}</eq>

#### Restriction on the base

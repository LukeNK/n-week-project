---
layout: chapter
title: Exponential and Logarithmic Functions
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

It is also worth noting that radical is just the "opposite" of exponent, just like subtraction is the opposite of addition:
<eq>
    a^n = b \Leftrightarrow a = \sqrt[n]{b}
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
    <img style="max-height: 20rem;" src="{{ site.url }}/figures/m/11.png">
    <figcaption>The graph of $y=2^x$</figcaption>
</figure>

I hope now you can see why people describe certain things as "exponential growth": as x increases, y also increases, but the further we go to the possible x direction, the faster y will grow. I hope you can also see that there is an asymptote $x=0$, which is true for all exponential functions: they will always be possitive and smiling. We should try to be like them, too!

Regardless of the base, all exponential functions will never touch the x-axis $y=0$, as well as always crossing the y-axis at $x=1$. Furthermore, because any base raises to the power of 1 is itself, $f(1) = a$.

Except when $a=0$ (in which case, we will just have a line at $y=0$), we notice that:
<eq>\begin{aligned}
    &f(x) < 0 \text{ for } x < 0
    &f(x) > 0 \text{ for } x > 0 \qquad
    &\text{ when } a > 1  & \\
    &f(x) > 0 \text{ for } x < 0
    &f(x) < 0 \text{ for } x > 0 \qquad
    &\text{ when } 0 < a < 1
\end{aligned}</eq>

What about for $a < 0$? You technically can still get y at a certain x, but there are some problems with it, which will be discussed more in the next section. However, the first problem you might have noticed with negative exponent is the very foundation of complex number. If we allow negative base, our solution set won't be restricted to the real numbers. Assume that we allow negative base, eventually we will run into a problem like this:
<eq>
    y = (-1)^\frac{1}{2} = \sqrt{-1} = i
</eq>

### Logarithmic
Because an exponential function is an one-to-one function, that means that we can define an invert function. A lot of people said that the logarithmic function just come out of nowhere, and that is exactly what it is: we simply define a function as an invert function of another function. This is similar to say that since you can disassemble a laptop, you can simply "invert" your actions to assemble it.
<eq>
    x = a^y \Rightarrow y = \log_a x
</eq>

Or if you prefer seeing log as the main hero ("logarithme" is masculine according to French):
<eq>
    \log_a(a^x) = x
</eq>

In an elementary level, log functions are simply what you need to find the exponent given the base and the result. However, at a higher level, you should know that all of the properties of exponent functions also carry to logarithmic functions. You can imagine that the arithmetics between log functions are the world between the exponents, while the inside of the log function is the world between the bases.
<eq>\begin{aligned}
    a^xa^y = a^{x+y} \Leftrightarrow \log_a(a^{x+y}) &= \log_a(a^x) + \log_a(a^y) \\
    &= x + y
\end{aligned}</eq>

It should be clear: the base of the log should not be matter, as long as it is consistent across all terms. Normally, we would take either $e$ or $10$ as the base, and allow me to quote my professor: "There is a good reason for that".
<eq>
    \ln(a^{x+y}) = \ln(a^x) + \ln(a^y)
</eq>

They are so important that they are called "natural log" and "common log", respectively:
<eq>
    \log_e x = \ln x \qquad
    \log_{10} x = \log x
</eq>

Therefore, the exponential properties can be translated into logarithmic properties:
<eq>
    \log_a(xy) = \log_a x + \log_a y \qquad
</eq>
<eq>
    \log_a(x^n) = n\log_a x
</eq>
<eq>
    \log_a(a^x) = x
</eq>

And here are some special values:
<eq>
    \log_a 1 = 0 \qquad
    \log_a a = 1
</eq>

And you can also change the base of the log function with the following formula:
<eq>
    \log_a x = \frac{\log_b x}{\log_b a}
</eq>

### Negative bases
Note that there is a restriction on the base of exponential and log functions. Mathematicians explicitly require it to be possible:
<eq>
    y = a^x \Leftrightarrow x = \log_a(y) \qquad
    (a > 0)
</eq>

One common couter-example you might think of is $(-2)^2 = 4 \Rightarrow \log_{-2} 2 = 4$. However, the problem arises when there are numbers that are not so well-behaved, such as $(-2)^x = 3 \Rightarrow x = ?$. To ensure consistency, mathematicians just "ban" the lower half of the number line entirely. You can also simply put $(-2)^x$ in any graphing calculator to see how exponentional functions with negative bases are naughty.

You can also further test this idea out by doing some calculations. The value of $(-2)^1 = -2$ and $(-2)^2 = 4$ can be easily calculated, but let's talk about their mid-point:
\\[
    (-2)^{1.5} = (-2)^1 \times (-2)^{\frac{1}{2}} = (-2)^1 \times \sqrt{-2} = ???
\\]
As you can see, you cannot take the square root of a negative number; by extension, the base cannot be negative or else the function would have holes everywhere.

However, that is not the end of the story. The complex plane allow us to find solutions that are not the real numbers, yet they are at least *consistent*. You can find more about it in <a href="#m-imaginary-number"></a>.
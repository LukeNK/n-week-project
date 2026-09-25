---
layout: chapter
title: Logarithmic
prerequisites:
    - m-exp
---

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
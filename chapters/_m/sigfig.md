---
layout: chapter
title: Significant Figures, Rounding, and Scientific Notation
---
**Significant figures (digits)**, usually denoted with "SF" in Canada, is considered to be the level of precision of a number. The amount of significant figures you have implies the accuracy of your number. The rules are very easy to follow:

- All **leading** zeros are not significant
- If there is a decimal point, all **trailing** zeros are significant
- Digits between the first and the last **non-zero digit** are significant
- If a digit is significant but the rules above do not cover, you can underline it

Remember, the second point only counts trailing zeros, which are zeros after a non-zero digit, regardless of where the decimal point is.

We can add "**plus/minus**" ($\pm$) to further show our level of accuracy.

**Rounding** is simply reducing the number of significant figures. Here is an additional rule you might not know about rounding 5: you should round it to make the last digit _even_. This ensures that the ups and downs will cancel out each other over a long chain of calculations.

### Scientific notation
Scientific notation is a way to deal with very big or very small numbers. There are two parts in a scientific notation: the **mantissa** $m$ (decimal portion) and the **exponent** $n$ (ordinate):
<eq> m \times 10^n </eq>
A good way to think of the exponent $n$ is in terms of how you move the decimal point in the mantissa $m$. If $n$ is positive, move the decimal point to the right $n$ times (which is $\times10^n$), and vice versa for a negative power.

A constraint for the mantissa to prevent people from writing the number too hard to read is it must be between 1 and less than 10 ($1 ≤ \|m\| < 10$). If you have $0.6$, simply move the decimal to the right and _subtract_ the exponent by $1$, which gives you $6\times10^{-1}$. The mantissa can be also negative ($-1.3\times10^1$ for example). When dealing with **negative scientific notation**, just treat it like a normal notation and do not confuse between negative mantissa and negative exponent.

**Ten raised by zero** equals 1, useful to represent numbers with the right mantissa but does not hint at the fact that it is in scientific notation:
<eq> 10^0=1 </eq>

**To convert a number to scientific notation**, simply move the decimal point until it satisfies the mantissa's requirement. To remember which sign to put for the exponent: if you moved the decimal point to the left (making the mantissa smaller), then you need to multiply it by a factor of $10$ to make it the same as the original number. Ask yourself: do I need the exponent to be _bigger_ or _smaller_ to make the mantissa equal the original number?

Scientific notation is helpful when counting significant figures because now all of the digits that appear in the mantissa are significant.

**To add/subtract** numbers in scientific notation, make the exponent the same and simply deal with the mantissa, then readjust the result to proper scientific notation by moving the decimal. The answer should be rounded to the least number of decimal places.
\\[\begin{aligned}
    & 3.0 \times 10^2 + 6.4 \times 10^3 \qquad 300 + 6400 \\\\\\
    =& 3.0 \times 10^2 + 64 \times 10^2 \qquad \text{least number of decimal places is }0 \\\\\\
    =& (3.0 + 64) \times 10^2 \\\\\\
    =& 67.0 \times 10^2 \qquad \text{round the number, return the mantissa to scientific notation} \\\\\\
    =& 6.7 \times 10^3
\end{aligned}\\]

**To multiply/divide**, you also multiply/divide the mantissa by themselves first, then multiply/divide the exponents by using an exponent rule $10^n\cdot10^m=10^{n+m}$. This was hidden behind the fact that multiplication is commutative. The answer should have the same significant figures as the number with the least significant figures.
\\[\begin{aligned}
    & (4.1\times10^6)\times(3.110\times10^8) \qquad\text{2SF} \times\text{4SF} \\\\\\
    =& (4.1\times3.110)\times10^{6+8} \\\\\\
    =& 12.751\times10^{14} \qquad \text{round to 2SF and shift decimal point} \\\\\\
    =& 1.2\times10^{15}
\end{aligned}\\]

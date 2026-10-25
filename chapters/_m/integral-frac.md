---
layout: chapter
title: Integration with Partial Freaction
prerequisites:
    - m-integral
    - m-poly-div
---

### Partial fraction

### Taking integration
For this terms, it is helpful for you to further split it into two simpler integrals. The latter term will usually being solved with a different technique (usually the integral of $\tan^{-1}x$)
<eq>\begin{aligned}
    \int\frac{Ax+b}{ax^2+bx+c}\;dx &= \int\frac{Ax}{ax^2+bx+c}\;dx + \int\frac{b}{ax^2+bx+c}\;\dx
    &= \frac{A}{2}\ln|ax^2+bx+c| + \int\frac{b}{ax^2+bx+c}\;\dx
\end{aligned}</eq>

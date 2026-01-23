---
layout: chapter
title: Imaginary Numbers
---
### Introduction
The definition of a **complex number**:
<eq> i = \sqrt{-1} </eq>
<eq id="eq-m1">
    z = a + ib \in \mathbb{C}
    \qquad (a, b \in \mathbb{R})
</eq>
We define the real part of $z$ as $Re(z)=a$ and the imagined part $Im(z)=b$. Furthermore, we define the conjugate of a complex number as $z^*$ (z star):
<eq> z^*=a-ib </eq>
Because $b=0$ for real numbers, the conjugate of a real number is itself.

### Visual intuition
<figure>
    <img src="{{ site.url }}/figures/m/9.png" alt="Complex number intuition">
    <figcaption>Complex number intuition</figcaption>
</figure>
As a way to draw it on a standard two-axis graph similar to <a href="#fig-m9"></a>, you can put the horizontal axis (x-axis) as $a$ and the vertical axis as $b$ to represent the imaginary part of a complex number. This works better if you also recall that we were taught real numbers on a left-right number line.

With this intuition, a number will have a certain "distance" away from the origin. When finding the conjugate of a complex number, you are essentially flipping the vertical axis. If you pay close attention to <a href="#eq-m1"></a>, you can see that it closely resembles the standard graph form $y=mx+b$.

### Identities
The **norm** of a complex number, which visually is the length of the vector from the origin to $z$ on a plane, is denoted as $\mid z \mid$:
<eq>
    \mid z \mid
    = \sqrt{a^2 + b^2}
</eq>
Another fundamental equation is **the norm squared** which is the direct result of the norm itself:
<eq>
    \mid z \mid^2
    = a^2 + b^2
    = (a + bi)(a - bi)
    = z \cdot z^*
</eq>
The proof for these identities can be worked backward. Furthermore, the norm squared is used to calculate the probability of a state in quantum physics, something you should keep at the back of your mind if you want to pursue that field.

From the visual intuition we established above, a complex number represented on a unit circle (the norm is equal to 1) can also be written with trigonometric functions:
<eq>
    z
    = \cos{\theta} + i \sin{\theta}
    = e^{i\theta}
</eq>

### Complex number calculations
**Adding and subtracting** two complex numbers is just simply doing every part individually:
<eq> (a + bi) + (c + di) = (a + c) + (b + d)i </eq>
Remember to pay close attention to the negative sign at the beginning of the second term when subtracting.

**Multiplying** two complex numbers is simply using FOIL (multiplying terms together). Another extended version of FOIL that requires a bit of memorization is:
<eq>
    (a+bi)(c+di)
    = ac + adi + bci + bdi^2
    = (ac - bd) + (ad + bc)i
</eq>
A fascinating fact is when you multiply a complex number by $i$, the result is another complex number vector that is $90^\circ$ (or $\pi/2$) counterclockwise.

**Dividing** is a bit of work. You start with a fraction, then multiply the first fraction by another fraction with both the numerator and the denominator as the conjugate of the first fraction's denominator (making the second fraction equal to 1). Here is an example:
\\[\begin{aligned}
    &\frac{2 + 3i}{4 - 5i} \\\\\\
    =& \frac{2+3i}{4-5i} \cdot \frac{4+5i}{4+5i} \\\\\\
    =& \frac{(2 + 3i)(4 + 5i)}{4^2 + 5^2} \qquad (a + bi)(a - bi) = a^2 + b^2 \\\\\\
    =& \frac{8 + 10i + 12i - 15}{41} \\\\\\
    =& \frac{-7 + 22i}{41}
    = -\frac{7}{41} + \frac{22}{41}i
\end{aligned}\\]

### Polar form
The polar form provides you with another "description" of the very same point on the plane. Instead of identifying a point on the plane using the axes, we use the distance from the origin and the angle from the positive x-axis instead. Notation-wise, $r$ is the radius from the origin (the distance) and $\theta$ is the angle from the positive x-axis. We can do a conversion from **Cartesian to Polar**:
<eq>
    r = \sqrt{x^2 + y^2}
    \qquad
    \theta = \tan^{-1} (y/x)
</eq>
From **Polar to Cartesian**, we can calculate the $x$ and $y$ separately using $\cos$ and $sin$:
<eq>
    x = r \times \cos\theta
    \qquad
    y = r \times \sin\theta
</eq>

A common way to write a complex number in Polar form is by getting the unit vector multiplied by the radius:
<eq> x + iy = r(\cos\theta + i\sin\theta) </eq>

### Multiplying in Polar form
The polar form provides intuition to complex multiplication problems. When multiplying two complex numbers together, the magnitudes get multiplied and the angles get added.
<eq id="eq-m2">
    r = r_1 \times r_2
    \qquad
    \theta = \theta_1 + \theta_2
</eq>


This also explains why multiplying with $i$ with get a complex number that is perpendicular to the start vector. $i$ simply added $90^\circ$ to the angle and kept the radius the same.
<eq> 0 + 1i \Rightarrow r = 1 \qquad \theta = 90^\circ </eq>

From <a href="#eq-m2"></a>, we can yield the general formula when raising  a complex number by an exponent, called **De Moivre's formula**:
<eq>
    (r(\cos\theta + i\sin\theta))^n
    = r^n(\cos{n\theta} + i\sin{n\theta})
</eq>
\\[ \Rightarrow r_{result} = r^n \qquad \theta_{result} = n \times \theta \\]
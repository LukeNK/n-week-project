---
layout: chapter
title: Trigonometric Functions
---

### Basic from a right triangle
The three basic trigonometric functions are sine, cosine, and tangent. They are especially useful in a right triangle, where if we know the angle $\theta$ and one side, we can quickly find the other two sides<note>The other angle can be found using the fact that the sum of angles in a triangle is 180 degrees.</note>. The result of these functions are the ratios of two sides of the triangle, which can be remembered by the mnemonic "SOH CAH TOA" (SOH: **s**ine = **o**pposite / **h**ypotenuse). Tangent is a bit special because it can be expressed as the ratio of two other functions, which can be be easily derive.
<eq> \sin{\theta} = \frac{\text{opposite}}{\text{hypotenuse}} </eq>
<eq> \cos{\theta} = \frac{\text{adjacent}}{\text{hypotenuse}} </eq>
<eq> \tan{\theta} = \frac{\text{opposite}}{\text{adjacent}} = \frac{\sin{\theta}}{\cos{\theta}}</eq>

<figure>
    <img src="{{ site.url }}/figures/m/6.png" alt="The sides of a right triangle">
    <figcaption>The sides of a right triangle</figcaption>
</figure>

It is also important for us to remember the Pythagorean theorem, which can be reframed in our case as:
<eq> o^2 + a^2 = h^2 </eq>

These functions have the reciprocal functions as well, which are cosecant, secant, and cotangent. However, when facing a problem, it is a good idea to just simplify all of the functions to sine and cosine. The relationship between all four functions can be sumarized in <a href="#fig-m7"></a>.
<eq>\begin{aligned}
    \csc{\theta} = \frac{1}{\sin{\theta}} \qquad
    \sec{\theta} = \frac{1}{\cos{\theta}} \qquad
    \cot{\theta} = \frac{1}{\tan{\theta}}
\end{aligned}</eq>

<figure>
    <img src="{{ site.url }}/figures/m/7.png" alt="Relationship between trigonometric functions">
    <figcaption>Relationship between trigonometric functions</figcaption>
</figure>

At this level, it is best to think of these functions as a magic box that takes in an angle and gives out a ratio.

### Unit circle
A unit circle has a radius of 1 and the centre at the origin. If we draw a line from the centre to a point on the circle, we can create a right triangle with the axes. Since the hypotenuse is 1, the sine and cosine of the angle $\theta$ will simply be the $y$ and $x$ coordinates of the point on the circle, respectively. That makes the tangent becomes $y/x$, which is simply the slope of the hypotenuse.
<eq>
    x = \cos{\theta}
    \qquad
    y = \sin{\theta}
    \qquad
    \tan{\theta} = \frac{y}{x}
</eq>

<figure>
    <img src="{{ site.url }}/figures/m/8.png" alt="Trigonometric functions in a unit circle">
    <figcaption>Trigonometric functions in a unit circle</figcaption>
</figure>

It is exactly from the unit circle that we can extend the definition to include angles greater than 180 degrees. This means at certain quandron, the trigonometric functions can be negative (due to one of the two x or y component is negative). This can be, once again, be remembered using the mnemonic "All Students Take Calculus" or simply remember the signs of the x and y coordinates.

### Inverse function
The inverse functions are named with "arc" in front of the name, and they are used when we have the ratio and want to find the angle. However, their output are rather... incompleted. If you look at the unit circle, there are two posible that angles that can give out the same ratio. This is why when putting in a ration, the output will usually be the angle in the first quadrant. From there, depends on the function, you can find the other angle using geometry.

<figure>
    <img src="{{ site.url }}/figures/m/10.png" alt="Similar angles and where to find them">
    <figcaption>Similar angles and where to find them</figcaption>
</figure>

There is another problem with the inverse functions and it comes from the periodicity of trigonometric functions. When you rotate by 360&deg; (2&pi; radians), you will end up looking at the same direction. This is similar on the unit circle, where the coordinate would be the same after a full rotation. That is why for one ratio, there are infinitely many angles, so it is important for us to know the range of the angle we are looking for (usually $0^\circ \leq \theta < 360^\circ$ or $0 \leq \theta < 2\pi$).

### Trigonometric identities
The pythagorean identity is the most important one, which can be derived from the Pythagorean theorem and the definition of sine and cosine:
<eq>
    \sin^2{\theta} + \cos^2{\theta} = 1
</eq>

Since the Author believes in the reader's ability to break down the problem into sine and cosine, we can move ahead with the double angle identities from sinde and cosine:
<eq>
    \sin{2\theta} = 2\sin{\theta}\cos{\theta}
</eq>
<eq>
    \cos{2\theta} = \cos^2{\theta} - \sin^2{\theta}
</eq>

And one extremely useful fact in math: if you have an angle that does not fit into the identities, you can equate what you need with what you have. For example, if I have $\sin{x/2}$, I can just let $x/2 = 2\theta$, use the identity, and then subtitle back.
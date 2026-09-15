---
layout: draft
title: Application of Integrals
prerequisites:
    - m-integral
---

### Net change

### Displacement, velocity, and acceleration
This section will help you to visualize the back and forth relationship of derivative and integral.

Assume that we have a function velocity over time (which means we can plug in the time to get the value of velocity):
<eq>
    v(t) = 3t^2
</eq>
<figure>
    <img src="{{ site.url }}/figures/m/12.png">
    <figcaption>The graph of $6t$, $3t^2$, and $t^3$</figcaption>
</figure>

Acceleration $a(t)$ is defined as the change is speed over time. Conveniently, the change in value of a function is also known as the slope (derivative!), so we can define acceleration as:
<eq>\begin{aligned}
    a(t) &= \Delta v = v'(t) \\
    &= \frac{d}{dx}3t^2 = 6t
\end{aligned}</eq>

However, what is the unit of acceleration? It is $\frac{m}{s^2}$!

Now, let's think the other way. Let's think about what velocity actually means: the change in displacement.
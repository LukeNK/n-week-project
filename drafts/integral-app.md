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

Acceleration $a(t)$ is defined as the change is speed over time. Conveniently, the change in value of a function is also known as the slope (**derivative**!), so we can define acceleration as:
<eq>\begin{aligned}
    a(t) &= \frac{\Delta v}{\Delta t}  = v'(t) \\
    &= \frac{d}{dx}3t^2 = 6t
\end{aligned}</eq>

The unit of acceleration can also give us another hint: $\frac{m}{s^2} = \frac{m}{s}/s$. If you read it in two parts, it will mean "number of meter of second over one unit of second."

Now, let's think the other way. Let's think about what velocity actually means: the change in displacement. So it is similar to the equation above but in the opposite direction: we are finding the function whose derivative is $v(t)$ (**antiderivative**!). Hence, we will need to take the integral of $v(t)$:
<eq>\begin{aligned}
    v(t) &= \frac{\Delta d}{\Delta t}  = d'(t) \\
    \Rightarrow d(t) &= \int v(t) dx = t^3
\end{aligned}</eq>

<figure>
    <img src="{{ site.url }}/figures/m/12.png">
    <figcaption>The graph of $6t$, $3t^2$, and $t^3$</figcaption>
</figure>

### Area under the curve
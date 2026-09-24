---
layout: chapter
title: Integration Application
prerequisites:
    - m-integral
---

### Area under the curve
Imagine you have to shade the area under a curve. It is possible for you to shade the entire area by simply use a pencil and only make lines parallel to the y-axis. You will have to make a lot of lines but because each lines still have a width larger than 0, you will eventually shade the entire area. That is the foundation of the area under the curve, it is just that a line is the value of $y=f(x)$ and the integral is simply adding all of the value of $f(x)$ inside the interval.

So that is the meaning of the phrase "the accumulation of the value of a function": it is simply adding many thin lines together until you can shade the entire area.

<figure>
    <!-- In this figure, draw axis, then draw one pencil line from the x-axis to f(x). Have a scale to the right to tell the reader that the length of the line is f(x) and the integral -->
    <img src="{{ site.url }}/figures/m/12.png" style="max-height: 15rem">
    <figcaption>Shading the area under the curve using lines</figcaption>
</figure>

### Volume with integral
This idea can be extended to a higher level: if you have a 3D shape and a function $A(x)$ that can give you the area of the cross section, you can find the volume by using integration. After all, the cross sections are simply tiny slices of the actual volume, just like how the lines are tiny slices of the area. As for the integral limits $a$ and $b$, they should be selected to reflect the length of the cylinder along the x-axis. Of course, you are not tied to the x-axis: $x=y^2$ is definitely a valid function and it is much easier for you to find the integration along the y-axis.
<eq>
    \text{Volume} = \int_a^b A(x) \;dx
</eq>

That idea can be extended to find the **volume of a function when you rotate it about an axis**. So because we have the radius equal to $f(x)$, the area of the cross sections becomes:
<eq>
    A(x) = \pi\left(f(x)\right)^2
</eq>
We can now plug the formula into our integral to get the volume and throw the pi outside because it is a constant.
<eq>
    \text{Volume} = \pi\int_a^b f(x)^2 \;dx
</eq>

You can also create a hollow cylinder, too! That means there is a space between your actual "solid" and the axis, so we define $g(x)$ as the distance from the axis to where the solid start. This procedure is called **the washer method**.
<eq>\begin{aligned}
    A(x) &= \pi(\text{outer radius})^2 - \pi(\text{inner radius})^2 \\
    &= \pi\left(f(x)^2-g(x)^2\right) \\
    \Rightarrow \text{Volume} &= \pi\int_a^b f(x)^2 - g(x)^2 \;dx
\end{aligned}</eq>

So in general, the most difficult part of these types of exercises is finding the area function $A(x)$. Once you found it, it is mostly about finding the integral.

<!--
Talk about the shell method
-->

### Net change and average
We can rewrite the definition of definite integral in a way that give the spotlight to the resultant function:
<eq>
    \int^b_a f'(x) \;dx = f(b) - f(a)
</eq>

So the **net change** is the change in value of $f(x)$ from a to b, and if you have the value of the integral, it also tells you the difference between two points. We do not know why you have the value of the integral before actually computing the antiderivative, but it is definitely something that you can do.

If you come back to integral definition, you will also remember one thing: the integration of a function is the sum of the tiny slices under the curve. Since the integration of a function already do half of the work for us, we can now simply subtract the number of tiny slices between between two values (which is simply the difference between them) to get the **average value of a function** over an interval:
<eq>
    f(x)_{average} = \frac{\int^b_a f(x) \;dx}{b-a}
</eq>

You can actually derive this formula. Define $\Delta x = \frac{b-a}{n}$, we have the average of a function as:
\\[\begin{aligned}
    A_n &= \frac{f(x_1) + f(x_2) + \ldots + f(x_n)}{n} \\\\\
    &=\frac{\sum_{i=1}^{n} f(x_i)}{n} \\\\\
    &=\frac{\sum_{i=1}^{n} f(x_i)}{\frac{\Delta x}{b-a}} \\\\\
    &=\frac{\sum_{i=1}^{n} f(x_i) \;\Delta x}{b-a} \\\\\
    &=\frac{\int^b_a f(x) \;dx}{b-a}
\end{aligned}\\]

### Displacement, velocity, and acceleration
This section will help you to visualize the back and forth relationship of derivative and integral. Assume that we have a function velocity over time (which means we can plug in the time to get the value of velocity):
<eq>
    v(t) = 2t
</eq>

Acceleration $a(t)$ is defined as the change is speed over time. Conveniently, the change in value of a function is also known as the slope (**derivative**!), so we can define acceleration as:
<eq>\begin{aligned}
    a(t) &= \frac{\Delta v}{\Delta t}  = v'(t) \\
    &= \frac{d}{dx}2t = 2
\end{aligned}</eq>

The unit of acceleration can also give us another hint: $\frac{m}{s^2} = \frac{m}{s}/s$. If you read it in two parts, it will mean "meter of second changed in one second."

Now, let's think the other way. Let's think about what velocity actually means: the change in displacement. So it is similar to the equation above but in the opposite direction: we are finding the function whose derivative is $v(t)$ (**antiderivative**!). Hence, we will need to take the integral of $v(t)$:
<eq>\begin{aligned}
    v(t) &= \frac{\Delta d}{\Delta t}  = d'(t) \\
    \Rightarrow d(t) &= \int 2t \;dx = t^2
\end{aligned}</eq>

<figure>
    <img src="{{ site.url }}/figures/m/13.png" style="max-height: 15rem">
    <figcaption>The graph of $v(t)=2t$</figcaption>
</figure>

If you look at the graph of the velocity, you can deduct both the derivative and the integral:
- the slope never change, so the derivative of our function should be a constant; and
- each time we "step" to the right, the area becoms bigger and bigger, so it is growing exponentially.
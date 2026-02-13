---
layout: chapter
title: Derivative with Implicit and Partial Differentiation
prerequisites:
  - m-derivative
---

### Implicit differentiation
When being introduced to derivatives, we mostly focus on functions with one input to one output, which can be checked by using the vertical line test. However, there are certain curves that cannot be defined as a function, such as a circle. Therefore, we use implicit differentiation to find the slope at a point by thinking y itself as a function of x; rather than saying $y=...x...$, we just do not bother with defining y itself and just treat it as a function.

We first start by thinking that $y$ is a function, so we define its derivative as:
<eq>
    \frac{dy}{dx} = y' = y'(x)
</eq>

Because $y$ is a function that has an input of $x$, every time we take the derivative of it, we must apply the chain rule. For example, the power rule must consider $x^2$ as the outer function and $y$ as the inner function:
\\[
    \frac{d}{dx} y^2
    = \frac{d}{dy} y^2 \cdot \frac{dy}{dx}
    = 2y \cdot y'
\\]

If you already know how to take the derivative normally, the shortcut for implicit differentiation is to take the derivative normally (as if the y is the "main variable"), but then multiple the result with $y'$. The difficult part is to solve for $y'$ at the end. This is because the answer we have after taking the derivative will still be an equation, so you need to put $y'$ to one side of the equation<note>As someone who studies physics, the Author thinks it is possible that you simply plug x and y values into the equation right after taking the derivative. It would be simpler because now you have all numbers with one missing variable, but this is not recommened for a number of reasons, including when you do not really know what you are doing.</note>.

### Partial derivative
When we have a function with more than one input, and we want to express the rate of change of one varible compared to another, we can use partial derivatives. Recall that $\frac{dy}{dx}$ is the rate of change of $y$ with respect to $x$; if x moves a tiny bit, then the derivative will express how much y will change. However, when there are more than one input, we will have multiple slopes to consider, depends on which direction we are looking at; it could be very steep in the x direction but shallow in the y direction, just like when you stand on the side of a mountain.

Therefore, we use partial derivatives to see the rate of change in one particular direction. This can be done by pretending that the other variables are constant, and then take the derivative normally. The notation for partial derivative when we want to see how z changes when x changes is:
<eq>
    \frac{\partial z}{\partial x} = \frac{\partial}{\partial x} f(x,y) = f_x(x,y)
</eq>

From the above notation, we can see that because we are investigating the z and x variable, we must hold y constant. Except that, the process of taking the derivative is the same as normal. Because y is a constant, so $y^2$ is also a constant, therefore the derivative of a power function is:
\\[
    \frac{\partial}{\partial x} x^2y^2 = 2xy^2
\\]

It is a bit less obvious to see, but the partial derivative in the context of a two-variable function is the same as the full derivative, because we are only looking at one direction.
<eq>
    \frac{dy}{dx}
    = \frac{\partial y}{\partial x}
    \qquad \text{(when y is a function of x only)}
</eq>

### The Implicit Function Theorem
This theorem is a useful tool to combine the two concepts of implicit differentiation and partial differentiation. It states that if we have a multi-variable function that is equal to 0, we can find the partial derivative of one variable with respect to another by taking the partial derivatives of the function itself. It can be expressed (in a formal yet simplified notation) as:
<eq>
    f(x, y, z) = 0
    \Rightarrow
    \frac{\partial z}{\partial x}
    = -\frac{\frac{\partial f}{\partial x}}{\frac{\partial f}{\partial z}}
    = -\frac{f_x}{f_z}
</eq>

In practice, this means that if you have a multi-variable equation, you can put everything to one side and have zero on the other side. The side with variblables will be the function $f(x, y, z)$, and you can then apply the implicit function theorem to find the partial derivative.
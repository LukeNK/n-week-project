---
layout: draft
title: Collisions and Momentum
prerequisites:
    - p-energy
---

### Atomic idea
Objects are made tiny atoms and their interaction are "spring-y". When two objects come close together, they do not want to come very close to each other, so the tiny atoms push against each other.

Therefore, we look at momentum:
<eq>
    \vec{P} = m\vec{v}
</eq>

And then we define another separate quantity for calculate the impulse, which is simply the change in momentum:
<eq>
    \vec{I} = \vec{P_f} - \vec{P_i}
</eq>

But another definition of impulse is the the addition of tiny small forces that made when the spring tried to push two objects:
<eq>\begin{aligned}
    \vec{I} &= \int_{t_o}^{t_f} \vec{F} \;dt
    &= \int_{t_o}^{t_f} m\vec{a} \;dt
    &= \int_{v_o}^{v_f} m\frac{d\vec{v}}{dt} \;dt
    &= \int_{v_o}^{v_f} m \;d\frac{v}
\end{aligned}</eq>

And if you know a little bit if calculus (which, you are not required in this chapter), you can see that the impulse is the area under a curve.

### Average force
So to calculate the average force, we can use the impulse and time:
<eq>
    \vec{F_{ave}} = \frac{\vec{I}}{\Delta t}
</eq>

### Conservation of momentum
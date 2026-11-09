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

### Collision
You might notice this thing: if you drop a glass, would you preffer dropping it to a soft carpet floor or to a hard concrete floor?

### Conservation of momentum
So we have been mostly look at colision between something small and something large, but momentum is most powerful when there are two relatively equal objects collide with each other.

The equation is:
<eq>
    m_1\vec{v_{1f}}
</eq>

There are two **types of collisions**:
- Inelastic collision: happends when two objects stick into each other
- Elastic collision: happens when two objects bounce against each other.

In inelastic collisions, energy is not conserved. This is because the two objects must be deformed in order to make the two stick together.
<eq>
    m_1\vec{v_{1f}} + m_2\vec{v_{2f}} = (m_1 + m_2)\vec{v_f}
</eq>

Elastic collision is where energy is conserved.
<eq>
    v_{1f} - v{2f} =
</eq>
You mnust also use
<eq>
    m_1\vec{v_{1f}} + m_2\vec{v_{2f}} = m_1\vec{v_{1i}} + m_2\vec{v_{2i}}
</eq>
---
layout: draft
title: Work and Energy
prerequisites:
    - p-mechanical-fwpe
---

### The general idea of energy
The unit of energy is 1 Joule (abbriviated as J) equals to $1kg\cdot m^2 \cdot s^{-2}$

There are a few energy types:
- Kinetic energy
- Potential energy
- Thermal energy
- Chemical energy
- Mass energy

And we have not accounted for all of the energy! Scientists have drawn a concept of dark energy, which they acredited it to the expansion of universe.

When we consider of energy, we think of a **system**. A system is a "boundary" of the energy. In simpler words, a system is just the particular object that you are concerning. To the change of the total energy of the system, we will will need to either send energy to the system from the environment. All of that can be summarized to the **first law of the thermodynamic**:
<eq>
    W_{ext} + Q = \Delta E_{sys}
</eq>

In that equation, the external work done from the environment *to* the system $W_{ext} add with the introduced heart $Q$ will change the total energy of the system $\Delta E_{sys}$.

### Work
Energy is a "cheatcode" for us to skip considering all of the forces; however, we can still make a connection between force and energy. So if a constant force moves an object, we can then deduct the work it has done with:
<eq>\begin{aligned}
    W &= \vec{F}\cdot\vec{\Delta R}
    &= F\cdot\Delta R \cos{\theta}
\end{aligned}</eq>

If the force is non-constant, you can "chop" the path into tiny sections and add the work together with integration:
<eq>
    W = \int_a^b F(x) \;dx
</eq>

### Kinetic energy
For now, we shall define kinetic energy with the variable $K$ and there are a two possible source of energy

Translational kinetic energy
<eq>
    K_{in} = \frac{1}{2}mv^2
</eq>

Rotational kinetic energy
<eq>
    K_{rot} = \frac{1}{2}I\omega^2
</eq>

### Potential energy
The most common potential energy you will encounter
<eq>
    U_{grav} = mgh
</eq>

<eq>
    U_{spring} = \frac{1}{2}Kx^2
</eq>

### Work-energy method
As discussed above, it is a great shortcut,

We should use this method if there is a change of height or speed over time.

We first identify the system, then identify how the environment is adding energy to the system. Gravity is considered a part of the system already, though.

Note that one of the amazing part of this system is to do not consider the path, but only the start $t_i$ and the end $t_f$. We do not concern about what happen in-between of the motion.
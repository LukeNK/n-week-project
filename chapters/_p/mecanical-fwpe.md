---
layout: chapter
---
## Mechanical Force, Work, Power, and Energy
This is a chapter to distinguish the four concepts and draw a connection between them. This chapter concerns mechanical physics so you might need to look somewhere else for thermal and electrical energy.

### Force
Force can be described as a push or pull on an object, usually denoted with $\vec{F}$. Force is a vector, so it has a direction and a magnitude.

**Net force** is the sum of all forces being exerted on one single object. If you don't see an object being moved (like when you are pushed against a heavy object), it is because your $\vec{F}_{net}=0$, since all forces cancel out each other.

Thanks to Sir Issac Newton, we have three Newton laws of motion that describe the way forces are described in physics:
<h4>Newton's first law</h4>
<quote>
    An object at rest remains at rest, or if in motion, remains in motion at a constant velocity unless acted on by a net external force
</quote>

In short, if the $\vec{F}_{net} = 0$ then the object will continue to do what it is doing. This law resulted in the existence of **momentum**: you don't need to do anything to keep an object moving in a no-friction environment — it is the _change_ in motion that requires a force to alter the object's movement.

<h4>Newton's second law</h4>
The algebraic version of Newton's second law is:
<eq>
    \vec{F}_{net}=m\vec{a}
    \iff
    \vec{a}=\frac{\vec{F}_{net}}{m}
</eq>
With $m$ being the mass and $\vec{a}$ being the acceleration vector.

A real-life intuition for this is you need to push a heavy car a lot stronger for it to move (accelerate) compared to pushing a shopping cart.

<h4>Newton's third law</h4>
If body $A$ exerts a force $\vec{F}$ on body $B$, then $B$ simultaneously exerts a force $-\vec{F}$ on $A$:
<eq>
    \vec{F}_{AB} = -\vec{F}_{BA}
</eq>

A common misconception is that the action and the reaction forces cancel each other out. This was cleared out by the law's equation because the forces were considered on two different systems. For example, when pulling down on a vertical rope, a climber is exerting a force _on the rope_ ($\vec{F}_{AB}$), while the rope is pulling upward _on the person_ ($-\vec{F}_{BA}$). When you draw a free-body diagram, the downward vector is the gravitational vector pulling _on the person_, so it is not $\vec{F}_{AB}$. Repeat: $\vec{F}_{AB}$ DOES NOT CANCEL $-\vec{F}_{BA}$.

<figure>
    <img src="{{ site.url }}/figures/p/1.png">
    <figcaption>The reason why it is hard to wake up in the morning</figcaption>
</figure>
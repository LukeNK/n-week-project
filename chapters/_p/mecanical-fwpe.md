---
layout: chapter
title: Mechanical Force, Work, Power, and Energy
---
This is a chapter to distinguish the four concepts and draw a connection between them. This chapter concerns mechanical physics so you might need to look somewhere else for thermal and electrical energy.

### Force
Force can be described as a push or pull on an object, usually denoted with $\vec{F}$. Force is a vector, so it has a direction and a magnitude.

**Net force** is the sum of all forces being exerted on one single object. If you don't see an object being moved (like when you are pushed against a heavy object), it is because your $\vec{F}_{net}=0$, since all forces cancel out each other.

Thanks to Sir Issac Newton, we have three Newton laws of motion that describe the way forces are described in physics:
<h4>Newton's first law</h4>
<quote>
    An object at rest remains at rest, or if in motion, remains in motion at a constant velocity unless acted on by a net external force
</quote>

In short, if the $ \vec{F}_{net} = 0 $ then the object will continue to do what it is doing. This law resulted in the existence of **momentum**: you don't need to do anything to keep an object moving in a no-friction environment — it is the *change* in motion that requires a force to alter the object's movement.

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

<!-- Error: because the _ is also italic in MD, so the MD got precedence before MathJax -->
A common misconception is that the action and the reaction forces cancel each other out. This was cleared out by the law's equation because the forces were considered on two different systems. For example, when pulling down on a vertical rope, a climber is exerting a force *on the rope* ($ \vec{F}\_{AB} $), while the rope is pulling upward *on the person* ($ -\vec{F}\_{BA} $). When you draw a free-body diagram, the downward vector is the gravitational vector pulling *on the person*, so it is not $ \vec{F}\_{AB} $. Repeat: $ \vec{F}\_{AB} $ DOES NOT CANCEL $ -\vec{F}\_{BA} $.
### Work
Work is simply what the force accomplishes. Try to ask yourselves "How much work you have done today" and that is what work is telling you about a force.
<eq>
    W = \vec{F} \cdot \vec{s}
    \iff
    W = Fs\cos{\theta}
</eq>
$F$ is a constant force, $s$ is the displacement, and the angle $\theta$ is the difference between the two vectors $\vec{F}$ and $\vec{s}$. $W$ is a scalar quantity with the unit joule (J). Work is simply the dot product between two vectors.

From the formula, the angle $\theta$ determines the "efficiency" of a force. If the force applies directly to the direction of the movement, you can see that the work will be the largest ($\cos0=1$) and the opposite with a force being applied perpendicular to the direction of movement.

Work transfers energy from one place to another, or one form to another: when you push a box, you transfer your energy to move that box. In a closed system with only you and the box, the energy that you lose must have went to the box; in a scientific terms, the change in energy is work:
<eq>
    W = \Delta E
</eq>
Moreover, work only shows what has been accomplished. If you exert a great force on a wall and it does not move (or break), then no work has been done. This line of thinking will later apply to energy and power.

As an advanced expansion, you can see that work is the area under the **force versus displacement** graph. If the force is variable, then work is given by:
<eq>
    W = \int \vec{F} \cdot d\vec{s}
</eq>

### Power
Power is the rate at which you are doing work. It is the amount of energy transferred per unit time. Power shows the efficiency of a work.
<eq>
    P = \frac{W}{t}
</eq>
$t$ is the time and $P$'s base unit is joule per second, making 1 J/s the definition of a watt (W). Similar to work, power is a scalar quantity.

As a simple example, burning one kilogram of coal releases more energy than detonating a kilogram of TNT, but because the TNT reaction releases energy more quickly, it delivers more power than coal. You can say that TNT is much more _powerful_ than coal.

Because of the existence of the $t$ variable here, we can have work formula based on velocity:
<eq>
    P = F \times v
</eq>
With $v$ is the velocity.

From the power basic formula, people also have watt-hour as another unit of work:
<eq>
    1 \text{W.h} = 3600 \text{J}
</eq>
This unit describes 1 watt of work being done or energy being used for one hour.

### Energy
Energy is the ability to do work. You can work as long as you have energy. At first glance, you might notice that both work and energy have the same unit (joule); this is because energy is simply the capacity to do work, and you can repeat work for a certain amount of time before running out of energy.

The **Law of Conservation of Energy** tells us that energy can neither be created nor destroyed - only converted from one form of energy to another.

<h4>Kinetic energy</h4>
It is the energy when the object is moving; this energy can be transferred when interacts (collide) with another object and produces work. The kinetic energy of an object with $m$ mass moving with $v$ velocity is defined with:
<eq>
    E_k
    = \frac{1}{2}mv^2
    = \frac{mv^2}{2}
</eq>
$E_k$ increases exponentially to $v$, meaning you will need a lot more energy to accelerate faster on an already fast object.

A good way to distinguish between work and energy is by simply imagining a car staying still. To get the car moving, you need to put some work into it to get it moving. The work you put in was stored as the energy to keep the car moving. To get the car to stop, you need to take that energy away from the car by pushing it the opposite way.

<h4>Gravitational potential energy</h4>
**Gravity** is the attraction of two objects with mass together. At a certain distance, a very large object (like the Earth) will have a noticeable **gravitational acceleration** $\vec{g}$. When an object is put inside the gravitational field of the Earth (or other object appropriate for our calculation), the potential energy of the former relative to the latter is:
<eq> E_g = mgh </eq>
With $h$ is the height. If we are calculating the height relative to the ground, then the result potential energy is also relative to the ground. The ground was chosen to be the **reference point**. On Earth, $\vec{g}\approx9.8\text{m/s}^2$.

<h4>Elastic potential energy</h4>
Created by the state of the object, **elastic energy** is the potential energy created from a spring being pushed or pulled. Any spring will have a **spring constant** $k$ and the constant tells us the stiffness of the material:
<eq>
    E_e = \frac{1}{2}kx^2
</eq>
$x$ is the length that the material was stretched or compressed.

This equation also tells you that the stiffness of a material matters less compared to how far you can stretch that material. The author is writing this out of spite because he once had an assignment about making a crossbow; he decided to make the string harder, resulting in less energy being created and the bow being a lot weaker. Knowing this could've saved him a two-week spring break contemplating on life, questioning his career choice, and doubting his make-shift ability. It was about a year since, but he still remembers the moment the physics teacher wrote this equation on the board and told the author that the topic was supposed to be learned much later. Lesson: physics and all sciences are interconnected.

<h4>Thermal energy</h4>
The heat that you feel with touching objects is because the molecules within them are wiggling. Because the molecules are moving, you can consider it a form of kinetic energy; the _sum_ of those little motions is called the thermal energy, and the <i>average</i> is called temperature. A hot object means the molecules in the substance are wiggling faster and storing more energy, increasing the average and the total energy. It is also important to note that thermal energy will transfer from hot to cold object until the _temperature_ is the same.

A quantity to connect between energy and temperature is **specific heat capacity**, the standard unit is $\frac{J}{kg.K}$. It is the amount of the energy needed to heat a kg of mass to 1 degree of Kelvin. This is a property specific to each material, because just like the kinetic energy $mv^2/2$, the mass of each molecules matters. Combining all of the things above, we have the formula for **thermal energy**:
<eq>
    E_h = m \cdot c \cdot \Delta T
</eq>
with $\Delta T$ is the change in temparature.

<h4>Mechanical energy</h4>
The sum of kinetic energy and potential energy is mechanical energy and it must remain constant without external interaction. In a projectile motion, the energy will convert between the gravitational potential energy and the kinetic energy:
<eq>
    E
    = E_k + E_g
    = \frac{1}{2}mv^2+mgh
</eq>
Moreover, if the system is closed, then the mechanical energy in the system must be conserved.
<eq> E = \text{constant} </eq>

That also means that whenever $E_k$ increases, $E_g$ decreases, and vice versa.

We have a similar equation with elastic potential energy:
<eq>
    E
    = E_k+E_e
    = \frac{1}{2}mv^2 + \frac{1}{2}kx^2
    = \text{constant}
</eq>

<figure>
    <img src="{{ site.url }}/figures/p/1.png">
    <figcaption>The reason why it is hard to wake up in the morning</figcaption>
</figure>
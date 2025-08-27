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
The heat that you feel with touching objects is because the molecules within them are wiggling. Because the molecules are moving, you can consider it a form of kinetic energy; the _sum_ of those little motions is called the thermal energy, and the _average_ is called temperature. A hot object means the molecules in the substance are wiggling faster and storing more energy, increasing the average and the total energy. It is also important to note that thermal energy will transfer from hot to cold object until the _temperature_ is the same.

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
<figure comic>
    <img src="{{ site.url }}/figures/p/1.png">
</figure>

## Bra–ket Notation
### Introduction
The bra–ket notation provides a separation from the term “vector” that is used for quantities like displacement or velocity — these vectors tend to be related to the three dimensions of space. In quantum mechanics, a “state” is more complex and involves more abstract multi- or infinite-dimensional vector space (that is, it has multiple axes instead of x, y, and z). At an elementary level, the bra–ket notation is just another way of denoting an arrow over a label for vectors.

In quantum physics, ket is a version of vector to store organized data of multiple spaces, hence it is hard to imagine a multi-dimensional vector; think of it as multiple knobs on an airplane where only certain combinations will make the plane move. Throughout this chapter, "vector" and "ket" are used interchangeably.

Since a “ket” is just a standard vector, we can write a vector v with this notation:
\\[
    |v \rangle
    = \begin{pmatrix} 1 \\ 0 \end{pmatrix}
\\]
The “bra” of this vector is the conjugate transpose of the ket vector:
<eq>
    \langle v|
    = ((\,|0\rangle\,)^*)^T
    = \begin{pmatrix}
        1^* \\\\\\
        0^*
    \end{pmatrix}^T
    = \begin{pmatrix} 1 & 0 \end{pmatrix}
</eq>

**Conjugate transpose**, in plain English with complex number context, means flipping the matrix's rows and columns, then finding a number with an equally real part and an imaginary part that is opposite in sign. Note that conjugation is denoted with a superscript asterisk ($^*$) while transpose is denoted with a "T" superscript ($^T$). Here is a general explanation for conjugation:
<eq> (a+bi)^*\ = a-bi </eq>
The conjugate of a real number is itself since $b = 0$.

### Operations
At the end of the day, ket is a vector and you can still perform vector operations on it like addition or multiplication.

The **inner product** of two vectors is an operation that generates a scalar value from two vectors. It is the sum of matching terms in two kets together. The inner product and dot product are essentially the same with the inner product being the generalization of the dot product (technicality of complex numbers aside). The definition of the inner product of two d-dimension ket:
\\[
    |a\rangle = \begin{pmatrix}a_1 \\ \vdots \\ a_d\end{pmatrix}
    \qquad
    |b\rangle = \begin{pmatrix}b_1 \\ \vdots \\ b_d\end{pmatrix}
\\]
<eq>
    \langle a|b \rangle
    := \langle a | \cdot | b \rangle
    = a^*_1 \cdot b_1 + \ldots + a^*_d \cdot b_d
</eq>
An intuition to think of a dot product (inner product of real numbers) is getting the "shadow" of one vector on the other, then multiplying by the length of the other vector.

The **modulus squared of the inner product** will be used a lot for calculations and is worth remembering:
<eq>
    \mid\langle a|b \rangle\mid^2
    = \langle a|b \rangle \cdot \langle b|a \rangle
</eq>

The **length of a ket vector** is given by the square root of the inner product with itself. Consider the ket $|a\rangle$ from the example above:
<eq>
    \mid | a \rangle \mid
    = \sqrt{\langle a|a \rangle}
    = \sqrt{\sum_{i=1} ^{d} a^*_i a_i}
    = \sqrt{\sum_{i=1} ^{d} \mid a_i \mid^2}
    = a_1^2 + \ldots + a_d^2
</eq>
If a ket or a vector has a length equal to one ($\mid | a \rangle \mid = 1$) then we can say that the ket or vector is **normalized**.

### Basis
Every vector (and hence ket) can be reduced to the axes components (in a 2D case it is x and y):
\\[
    |v \rangle
    = \begin{pmatrix}x \\ y\end{pmatrix}
    = x\begin{pmatrix}1 \\ 0\end{pmatrix} + y\begin{pmatrix}0 \\ 1\end{pmatrix}
\\]
The equation above "breaks down" the 2D vector into two smaller vectors that are perpendicular to each other. The two vectors here form the **standard basis**, which are also normalized and form a "unit" in our vector space.

In most cases, we want an **orthonormal basis** which is:

- Orthogonal: each basis vector is at right angles to all others. We can test it by making sure any pairing of basis vectors has a dot product a·b = 0.
- Normalized: each basis vector has a length of 1


_To check if two vectors are orthogonal to each other_, we check their inner product to see if they have a dot product of zero. With the intuition from the operations section, we can see that light from right overhead cannot cast a shadow (as if it is the sun at noon). Here is an example calculated from the basis vector of the example above:
\\[
    \begin{pmatrix}1 \\ 0\end{pmatrix} \cdot \begin{pmatrix}0 \\ 1\end{pmatrix}
    = 1 \cdot 0 + 0 \cdot 1
    = 0
\\]
Checking the length of these two vectors is left as an exercise for the reader.

## Qubit Introduction
"God does not play dice" — Albert Einstein

"Stop telling God what to do" — Niels Bohr

### The light polarization experiment and the necessity of qubit
Imagine a light polarizer whose preferential direction is along the x-axis. What the last sentence means is that if a light travels along the x-axis through the polarizer, the light itself will remain intact; if it travels along the y-axis, the entire light will get absorbed.

Now consider a light travel diagonally to the polarizer with an angle from the positive x-axis (called $\alpha$ for our example). From what we established above, a fraction of the light will get absorbed proportional to $\alpha$. If $\alpha = 0^\circ$, all light will get through; if $\alpha = 90^\circ$, none will get through; and proportional to that in between.

The problem arises when you consider light as a group of individual identical photons. Because they are similar to each other, it is not possible to predict which photon will get through and whatnot. On the other hand, they do not interact with each other, so how could they establish such a proportional ratio according to $\alpha$?

To add complexity (to be more accurate, _simplicity_) to the problem, we can launch individual photons to the polarizer one at a time. Because they don't interact with each other, this means they are based on **probability** to determine should they get through or not.

This is a more "practical" example of the commonly misrepresented Schrodinger's cat thought experiment. Most of the time in quantum physics, we use probability on one single "item" to represent the possible states it can achieve. In this experiment, our probability applies to the photons and does not in any way imply the fact that it, in a typical sense, _exists_ in two different states — it is stating the possibility that it can become either.

### A qubit
**A bit** in quantum mechanics can be written differently. Since a bit can only be _either_ 0 or 1, it can be represented with a ket that has a length of 1 (indicating a bit is certainly $100\%$ true or false). As a representation for the positive x-axis is 0, and the y-axis is the possibility that a bit is 1, we have the **standard basis** (also known as the **computational basis**):
<eq>
    0 \rightarrow |0\rangle = \begin{pmatrix} 1 \\ 0\end{pmatrix}
    \qquad
    1 \rightarrow |1\rangle = \begin{pmatrix} 0 \\ 1\end{pmatrix}
</eq>
<eq> \mathcal{S} = \{ |0\rangle, |1\rangle \} </eq>

As you can see, both kets from the equation above are _orthonormal bases_. You can "break down" a ket into these two basis kets. This makes the definition of a **qubit**:
<eq>
    |\psi\rangle
    = \alpha|0\rangle + \beta|1\rangle
    \qquad
    \alpha,\beta\in\mathbb{C},
    \mid\alpha\mid^2 + \mid\beta\mid^2 = 1
</eq>
The restriction of $\alpha$ and $\beta$ means that the possibility of a qubit being 0 or 1 equals $1$ ($100\%$). This condition also means that $|\psi\rangle$ is normalized. These two numbers are also called **amplitudes** of $|\psi\rangle$.

**Hadamard basis** is another frequently used orthonormal basis $\mathcal{H} = \{|+\rangle, |-\rangle\}$
<eq>
    |+\rangle
        = \frac{1}{\sqrt{2}}(|0\rangle+|1\rangle)
        = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 1 \end{pmatrix}
    \qquad
    |-\rangle
        = \frac{1}{\sqrt{2}}(|0\rangle-|1\rangle)
        = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ -1 \end{pmatrix}
</eq>

### Probability
In a typical spacial sense, you would imagine $|\psi\rangle$ as a single vector — that is not the case in quantum mechanics. When we measure the system, the result would be exactly _either_ $|0\rangle$ or $|1\rangle$. That is why we described a qubit in terms of $\alpha$ and $\beta$. Moreover, such intuition can drive you crazy once you learn about multiple qubits. I would imagine this as rotating multiple knobs on a machine in a way to make the sum of the _amplitude squared_ by every knob equal to $1$.

Funny enough, the reason $1$ was mentioned is because it relates to **probability**. The probability for either state to be measured can be defined with the norm squared, resulting in the total possibility being $1$ ($100\%$):
<eq>
    Probability(0) \sim \mid\alpha\mid^2
    \qquad
    Probability(1) \sim \mid\beta\mid^2
</eq>
Since you would measure the states of $|\psi\rangle$ independently, what you would get is this:
<eq>
    Probability(0) = \frac{\mid\alpha\mid^2}{\mid\alpha\mid^2 + \mid\beta\mid^2}
    \qquad
    Probability(1) = \frac{\mid\beta\mid^2}{\mid\alpha\mid^2 + \mid\beta\mid^2}
</eq>

Noted that from both equations above, it is the probability of the _result of the measurement_ and we assume that the measurement reflects _exactly_ the system's state. In simple terms, if we get the result labelled as $0$ of some measurement, we are certain that the state of our system is $\|0\rangle$.

## Combine Qubits, Tensor Product, and Quantum Entanglement
This chapter is quite long due to the connected nature of these three concepts. As a preview, a tensor product is a way to combine qubits, while entanglement is a math equation from two tensor products.

Moreover, this chapter is math-heavy to explain the computation behind the basic intuition of superposition (which is sometimes portrayed wrongly). When you approach it from a mathematical perspective, qubit becomes less of something magic and much more realistic. After this section, you will realize that superposition is the representation of a mathematical concept — it is a math equation that you can _experience_ in reality.

### Two qubits
We map multiple bits together with classical bits by simply string them as "01" and so on. For qubits, it is a bit different. Instead of stringing the bits together, we describe the possibility of two qubits being in the following states.
<eq id="eq-p1">
    |00\rangle = \begin{pmatrix}1 \\ 0 \\ 0 \\ 0\end{pmatrix}
    \qquad
    |01\rangle = \begin{pmatrix}0 \\ 1 \\ 0 \\ 0\end{pmatrix}
    \qquad
    |10\rangle = \begin{pmatrix}0 \\ 0 \\ 1 \\ 0\end{pmatrix}
    \qquad
    |11\rangle = \begin{pmatrix}0 \\ 0 \\ 0 \\ 1\end{pmatrix}
</eq>
An intuition to read this is to think that each row in the vector corresponds to a possibility that the qubit can become. For example, the $|00\rangle$ ket is telling us that it is certain that is it a "00" bit. The ket vectors can be re-imagined like this:
\\[
    \begin{pmatrix}
        \text{Probability of }|00\rangle \\\\\\
        \text{Probability of }|01\rangle \\\\\\
        \text{Probability of }|10\rangle \\\\\\
        \text{Probability of }|11\rangle
    \end{pmatrix}
\\]

Now recall that qubits are simply the basis vectors multiplied by a certain amplitude. The amplitude we will put into our equation here essentially alters the chance a certain combination ("00" for example) will appear. Let's consider a state $|\psi_{AB}\rangle$ that is an equal superposition of all the standard basis vectors from <a href="eq-p1"></a>:
\\[\begin{aligned}
    |\psi_{AB}\rangle
    &= \frac{1}{2}|00\rangle + \frac{1}{2}|01\rangle + \frac{1}{2}|10\rangle + \frac{1}{2}|11\rangle \\\\\\
    &= \frac{1}{2}(
        \begin{pmatrix}1 \\ 0 \\ 0 \\ 0\end{pmatrix} +
        \begin{pmatrix}0 \\ 1 \\ 0 \\ 0\end{pmatrix} +
        \begin{pmatrix}0 \\ 0 \\ 1 \\ 0\end{pmatrix} +
        \begin{pmatrix}0 \\ 0 \\ 0 \\ 1\end{pmatrix}
    ) \\\\\\
    &= \frac{1}{2}\begin{pmatrix}1 \\ 1 \\ 1 \\ 1\end{pmatrix}
    = \begin{pmatrix}
        1/2 \\ 1/2 \\ 1/2 \\ 1/2
    \end{pmatrix}
\end{aligned}\\]
Upon verifying the norm of the vector with $4\times(\frac{1}{2})^2 = 1$, we can confirm that $|\psi_{AB}\rangle$ is a valid two-qubit quantum state, while the amplitudes tell us that those two qubits have an equal chance of being 00, 01, 10, or 11.

One reason that physicists prefer to use this over the zeros and ones string is due to the co-exist nature of qubits. When you string the bits together, you unknowingly imply the ordered nature of the string itself which makes one bit appear before another. Qubits co-exist with each other and there isn't any order because they are all equal, in addition to the fact that it is much easier to mathematically manipulate vectors compared to strings.

### Multiple qubits
It is now crucial to construct everything from the fundamental form to get a general formula. Our goal when representing multiple qubits is to show all of the possible _states_ these qubits can achieve and the probabilities. Remember to read this subsection in conjunction with the example of the two qubits above.

We start by defining $n$ as the number of qubits we want to represent and $d$ as the **dimension number.** The notation to represent the **dimension of a vector space** is:
<eq>
    \mathbb{C}^d
</eq>
This $d$ right here also tells us how many dimensions (rows in simple terms) our vectors will have, as it tells us how _frequently_ each possible combination will appear.
<eq> d = 2^n </eq>
We got this formula from permutation. For each choice, we have two choices down the line. The dimension number represents the number of possible states we can have when observing our qubits.

We define the **standard bases for n qubits** starting with defining the list of basis vectors as $S_n$ and we know that it contains $d$ vectors that are orthogonal to each other. For each vector, we assigned it as the $i$-th axis vector to represent a certain axis. We now have a vector in our list:
<eq>
    |x_i\rangle
    = \begin{pmatrix}0 \\ \vdots \\ 1 \\ \vdots \\ 0 \end{pmatrix}
    \rightarrow i^{th}\text{ position}
    \qquad
    i \in \{1,2,\dots,d\}
</eq>
Now we have our **standard bases** as:
<eq>
    S_n = \{ |x_1\rangle, \dots, |x_d\rangle \}
</eq>
With that, you need $\{\alpha_1,\dots,\alpha_d\}$ to represent the probability of each combination showing up in your qubits. Your final ket will look something like this:
\\[\begin{pmatrix}
    \alpha_1|x_1\rangle \\\\\\
    \vdots \\\\\\
    \alpha_d|x_d\rangle
\end{pmatrix}\\]

The following is the formal, correct, and common notation. The notation above was the simplified notation for the sake of simplicity in this guide.
<eq>\begin{aligned}
    \text{For each distinct string }
    x & \in \{0, 1\}^n \\\\\\
    \text{ associate }x\text{ with a distinct integer }
    i & \in \{1,2,\dots,d\}
\end{aligned}</eq>
<eq>
    S_n = {|x\rangle}_{x \in \{0,1\}^n}
</eq>
The $x \in \{0,1\}^n$ simply tells that elements in the ket $x$ are either 0 or 1 with the vector length of $n$.

A $n$-qubit state $|\psi\rangle \in \mathbb{C}^d$ with $d=2^n$ can be written as a **superposition of standard basis elements**:
<eq>
    |\psi\rangle
    = \sum_{x\in\{0,1\}^n} \alpha_x |x\rangle
    \qquad
    \text{where } \forall x,\alpha \in \mathbb{C}
</eq>
In addition to that, we need to make all the probabilities add up to $1$:
<eq>
    \sum_{x\in\{0,1\}^n} |\alpha_x|^2 = 1
</eq>

### Tensor product
Also known as the **outer product** or the **Kronecker product**, this is the mathematical representation of what we discussed above about combining multiple qubits. Define the two qubits we want to combine as:
<eq>
    |\psi\rangle_A
        = \alpha_A|0\rangle + \beta_A|1\rangle
        = \begin{pmatrix}
            \alpha_A|0\rangle \\ \beta_A|1\rangle
        \end{pmatrix}
    \\\\\\
    |\psi\rangle_B
        = \alpha_B|0\rangle + \beta_B|1\rangle
        = \begin{pmatrix}
            \alpha_B|0\rangle \\ \beta_B|1\rangle
        \end{pmatrix}
</eq>
The joint state $|\psi\rangle_{AB} \in \mathbb{C}^2\otimes\mathbb{C}^2$ can be expressed as a **tensor product**:
<eq id="eq-p2">
    |\psi\rangle_{AB}
    = |\psi\rangle_A \otimes |\psi\rangle_B
    = \begin{pmatrix}
        \alpha_A \\ \beta_A
    \end{pmatrix} \otimes |\psi\rangle_B
    = \begin{pmatrix}
        \alpha_A|\psi\rangle_B \\ \beta_A|\psi\rangle_B
    \end{pmatrix}
    = \begin{pmatrix}
        \alpha_A\alpha_B \\\\\\
        \alpha_A\beta_B \\\\\\
        \beta_A\alpha_B \\\\\\
        \beta_A\beta_B \\\\\\
    \end{pmatrix}
</eq>
As you can see, each row of the product is simply the amplitude of a basis vector in a direction. Probabilistic-wise, it simply shows the probability of two independent events happening together (two states appearing together). Moreover, the example shows you why combining qubits makes the vector space grow exponentially to $n$: for every $\alpha_i$ there will be $n$ number of $\alpha_{i+1}$, and so on.

The formal definition of a **tensor product** with $d$ is the dimension of $|\psi_1\rangle$:
<eq>
    |\psi_1\rangle \otimes |\psi_2\rangle
    = \begin{pmatrix}
        \alpha_1 \\ \vdots \\ \alpha_d
    \end{pmatrix} \otimes |\psi_2\rangle
    = \begin{pmatrix}
        \alpha_1|\psi_2\rangle \\ \vdots \\ \alpha_d|\psi_2\rangle
    \end{pmatrix}
</eq>
Of course, the last step can be further expanded but it was left as that for the ease of reading — the full notation would be extremely cumbersome.

Another thing to realize is that the length of the result vector relates to $d_1 \times d_2$. It is true because, after all, a matrix with $d_1$ rows and $d_2$ will also have the ability to represent the same data: take every row of $|\psi_A\rangle$ and multiply it by $|\psi_B\rangle$. The tensor product is essentially just reshaped that data to represent it as a vector instead of a matrix (table). With $\alpha$ and $\beta$ are the amplitudes of $|\psi_A\rangle$ and $|\psi_B\rangle$ respectively, we have $ |\psi_1\rangle \otimes |\psi_2\rangle $ similar to:
\\[
    |\psi_1\rangle \times |\psi_2\rangle^T
    = \begin{pmatrix}
        \alpha_1 \\ \vdots \\ \alpha_d
    \end{pmatrix} \begin{pmatrix}
        \beta_1 & \dots & \beta_d
    \end{pmatrix}
    = \begin{pmatrix}
        \alpha_1\beta_1 & \dots & \alpha_1\beta_d \\\\\\
        \vdots & \ddots & \vdots \\\\\\
        \alpha_d\beta_1 & \dots & \alpha_d\beta_d
    \end{pmatrix}
\\]

There are a few ways to write tensor products that you've probably seen subtly throughout this guide. When writing two kets next to each other, it usually suggested that there is a tensor operator between them:
<eq>
    |\psi_1\rangle \otimes |\psi_2\rangle
    = |\psi_1\rangle |\psi_2\rangle
</eq>
With qubits combination, there is also writing classical bits as a string to imply a tensor product:
<eq>
    |0\rangle_A \otimes |0\rangle_B
    = |0\rangle_A |0\rangle_B
    = |00\rangle_{AB}
</eq>

A few useful properties of tensor product. The tensor product is **distributive**:
<eq>
    |\psi_1\rangle \otimes (|\psi_2\rangle + |\psi_3\rangle)
    = |\psi_1\rangle \otimes |\psi_2\rangle + |\psi_1\rangle \otimes |\psi_3\rangle
</eq>
Similarly:
\\[
    (|\psi_1\rangle + |\psi_2\rangle ) \otimes |\psi_3\rangle
        = |\psi_1\rangle \otimes |\psi_3\rangle + |\psi_2\rangle \otimes |\psi_3\rangle
\\]
This DOES NOT violate the non-commutative property, since the order is still preserved.

The **associative** property permits the moving of the brackets:
<eq>
    |\psi_1\rangle \otimes (|\psi_2\rangle \otimes |\psi_3\rangle)
    = (|\psi_1\rangle \otimes |\psi_2\rangle) \otimes |\psi_3\rangle
</eq>

The reason tensor product is not commutative is because the position of lines in the final product moves. The second line in these two products is different if you think about it ($\alpha_1\beta_2$ versus $\beta_1\alpha_2$):
<eq>
    |\psi_1\rangle \otimes |\psi_2\rangle
    \neq |\psi_2\rangle \otimes |\psi_1\rangle
</eq>
 In other words, the order in which you apply the tensor product operator matters.

### Quantum entanglement
If we further break down the tensor product equation according to <a href="#eq-p2"></a>, we will have a representation of multiple qubits using classical bits:
<eq id="eq-p3">
    (\alpha_A|0\rangle + \beta_A|1\rangle) \otimes
    (\alpha_B|0\rangle + \beta_B|1\rangle)
    = \begin{pmatrix}
        \alpha_A\alpha_B \\\\\\
        \alpha_A\beta_B \\\\\\
        \beta_A\alpha_B \\\\\\
        \beta_A\beta_B \\\\\\
    \end{pmatrix}
</eq>
As you can see, the equation above implies the fact that these two qubits are working independently from each other. The fact that $|\psi\rangle_A$ is in a state does not change the possibilities in the other qubit.

Now consider this:
<eq>
    |0\rangle_A \otimes |0\rangle_B +
    |1\rangle_A \otimes |1\rangle_B
    = \begin{pmatrix} 1 \\ 0 \\ 0 \\ 1 \end{pmatrix}
</eq>
This equation describes a relationship where if $|\psi\rangle_A$ is 0, then we know that  $|\psi\rangle_B$ must be 0 — it is special in the fact that we cannot describe it using the independent state <a href="#eq-p3"></a>. The matrix here describes the fact that there is _no possibility_ that these two qubits are different, so knowing one is enough to know the state of the other qubit.

How can we make such entanglement happen? That is the question for the engineers to manufacture the particles — entanglement is possible from our theory and it is their job to figure out how. That is why sometimes it is best to think of quantum entanglement as a mathematical concept rather than a practical connection. We know that it is possible to produce in real life because there is nothing _theoretically_ stopping us from doing that. It is like having a $1+1=2$ equation to tell you that you can add things in real life but the practical interpretation is up to you.

That is it! Entanglement is not spooky action as a distance or anything, but it is the fact that if you know about one qubit, you can have the information of the other qubit as well! When you Google "entanglement", the images always show there is a connection between these two entangled qubits, but in reality, it is about having one qubit is enough to know about the other's state. _Basically_, nothing travels between them.

### A metaphorical analogy to explain qubit
Feeling lost? Let's use a very real example as opposed to our generalization filled with _complex numbers_. This section is quite poetic so get a cup of water, sit back, relax, and enjoy a little physics-math story.

We have Luka who is having a hard time deciding between the coffee shop and the tea shop. Because these two shops are next to each other, we have no way to tell if she will go for a coffee or a tea until she walks into one shop (_observation/measurement_). We can define the state of walking to either shop as:
\\[
    \text{Coffee} \rightarrow |c\rangle = \begin{pmatrix} 1 \\ 0\end{pmatrix}
    \qquad
    \text{Tea} \rightarrow |t\rangle = \begin{pmatrix} 0 \\ 1\end{pmatrix}
\\]

**Qubit**: Luka equally enjoys both shops and has a 50/50 chance of going to either shop. You just know from your previous observations that Luka has that 50/50 nature. Luka is the potential customer of both shops on that day until she walks into one shop. We can describe Luka's indecisiveness with:
\\[
    |A\rangle
    = \frac{1}{\sqrt{2}}|c\rangle + \frac{1}{\sqrt{2}}|t\rangle
    = \begin{pmatrix}
        \frac{1}{\sqrt{2}} \\\\\\
        \frac{1}{\sqrt{2}}
    \end{pmatrix}
\\]

**Multiple qubits**: we have Luke represented by $\|E\rangle$, who is also indecisive between the two shops. We now need to describe the fact that there are four possibilities:

- Both of them go to the coffee shop
- Luka goes to the coffee shop, Luke goes to the tea shop
- Luka goes to the tea shop, Luke goes to the coffee shop
- Both of them go to the tea shop

Assign each of these events into a vector. If we see both of them in the coffee shop, the first row will be $1$ and the other rows will be $0$, since at that _state_, it is certain that there is 1 possibility. That is the nature of quantum mechanics: you can only observe one possible state at a time. The combinations of these two introverts can be represented with a tensor product:
\\[
    |A\rangle \otimes |E\rangle
    = \begin{pmatrix}
        \frac{1}{\sqrt{2}} \\\\\\
        \frac{1}{\sqrt{2}}
    \end{pmatrix} \otimes \begin{pmatrix}
        \frac{1}{\sqrt{2}} \\\\\\
        \frac{1}{\sqrt{2}}
    \end{pmatrix}
    = \begin{pmatrix}
        1/2 \\ 1/2 \\ 1/2 \\ 1/2
    \end{pmatrix}
\\]

**Quantum entanglement**: now Luka and Luke are a couple and they will always go with each other. If you see Luka in a shop, Luke is there too so you won't have to find him — just ask Luka where she is and you will know Luke's location. We can once again represent this relationship with a tensor product:
\\[
    |c\rangle_A \otimes |c\rangle_E
        + |t\rangle_A \otimes |t\rangle_E
    = \begin{pmatrix} 1 \\ 0 \\ 0 \\ 1 \end{pmatrix}
\\]
From that equation, you know there is no way these two will go to separate shops. Another way to read this is: "If Luka is in the coffee shop, there is NO WAY Luke is in the tea shop" and so on.

### Additional reading materials

- Tensor product: <a href="https://www.math3ma.com/blog/the-tensor-product-demystified">https://www.math3ma.com/blog/the-tensor-product-demystified</a>

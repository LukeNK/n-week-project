---
layout: chapter
title: Qubits Introduction
prerequisites:
  - p-braket
---
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
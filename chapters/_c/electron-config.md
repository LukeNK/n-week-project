---
layout: chapter
title: Electron Configuration
---
### Introduction: The modern model of atoms
This section is for a simplified explanation of what is going on. It is not required if you are in a hurry but is highly recommended to grasp the deeper understanding of the explanations in the latter sections.

Most of us are used to the fact that an electron flies around the nucleus in a fixed orbit. This is unfortunately an oversimplification of what happened but for a good reason. Throughout this chapter's model, an electron can move freely around a region rather than flying in a predetermined orbit. Every time you "observe" an electron, you take a picture of it which shows its position in space. As you take more pictures, you will eventually see where it is most likely to appear, and that is how you establish the orbit<note>In this case, we still call it an "orbit" but understand that it is a "region" in space where the electron has 90% chance of appearing in it.</note> of the electron.

The first four atomic orbital shapes that you will see are s, p, d, and f. For larger atoms, there will be more electrons which require more space to be in, which will create more diverse region's shape (likewise, the outer shell in the classic atom model has more electrons than the inner shell). Each atomic orbital can store up to 2 electrons and will be filled from the smallest orbital to the biggest orbital (which will be called a "shell"). Lastly, the electrons are shy and they would love to occupy an orbital to themselves if possible using Hund's rule.

Of course, what is being said is still a simplification but it is enough for you to grasp the idea of what we are doing in this chapter. Particularly, the given model does not address the wave-particle duality of quantum mechanics nor the complexity of electron orbit; for your information, all of that is stepping on the line between physics and chemistry. Now, this section is the general analogy for you to understand but the latter sections will have a more academic approach to the topic for you to take tests.

### Quantum numbers
There are three unique quantum numbers to describe an atomic orbital; this can be extended to describe an electron using the orbital it is in and its spin (the fourth quantum number). **The Pauli exclusion principle** says that each orbital only has 2 electrons with a different spin, which means that the four quantum numbers are essentially the ID of an electron.

**The principal quantum number ($n$)** indicates the relative size of the atomic orbital. This is relative to the "shell" of the electron in the classic atom model, so as the number of shells increases, there will be more electrons which leads to more atomic orbital. _Most of the time_, a higher $n$ means that the orbital has higher energy and the electron will spend more time farther from the nucleus.
<eq>
    n\in\mathbb{N}\setminus\{0\}
    \qquad 0 \leq n
</eq>

**The azimuthal quantum number ($l$)**<note>Also known as the angular momentum quantum number.</note>  is the second quantum number, indicating the shape of the atomic orbital. This usually goes by the name of "subshell", making one shell $n$ can have multiple subshells $l$. As the shell number increases, so does the number of subshells it has; for example: the shell $n=2$ will have two subshells: s and p. The s orbital (2s) is larger than the s orbital in the first shell (1s).
<eq>
    l\in\mathbb{Z}
    \qquad  0 \leq l \leq n-1
</eq>
As far as this chapter is concerned, you will mostly refer to this number using letters instead. Starting from $l=0$ and going up, we will refer to the subshell as s, p, d, f, g, h, and i; the letters after the g sub-shell follow in alphabetical order—excepting letter j and those already used. At the introductory level, the subshell f will likely be the highest $l$ you will ever see.

**The magnetic quantum number ($m_i$)** tells us the orientation in space of a given atomic orbital. This number is _fortunately_ unimportant for our electron configuration topic, but keep in mind that an orbital shape can have multiple different orientations, usually based on the three 3D axes: $x$, $y$, and $z$.
<eq>
    m_l\in\mathbb{Z}
    \qquad -l \leq m_l \leq +l
</eq>
As you can see from the formula, the number of possible $m_l$ (hence the number of electrons) grows pretty quickly.

Those there quantum numbers are enough to indicate which orbit you are talking about. It is suitable to remember that there are many possible orientations of an atomic orbital and many orbits with relatively the same size; similarly, _in classical words_, there are many orbitals in a subshell and many subshells in a shell. At this introductory level, many terminologies from the classical model are often used interchangeably with the vocabularies from the quantum mechanics model, so do not worry about using the correct word... _yet_.

**The spin quantum number ($m_s$)** as the fourth quantum number indicates the quantum spin of a particle or in this case, an electron. Because an atomic orbit can have two electrons with a different spin, this number is necessary to indicate which electron you are referring to.
<eq>
    m_s\in\left\{
        +\frac{1}{2},
        -\frac{1}{2}
    \right\}
</eq>

### Orbital diagram
An orbital diagram is used to represent how many electrons are there, and what orbit they are in. Each box here represents an orbit, which can store two electrons drawn by two arrows; if there is only one electron, that electron will have up spin. <a href="#fig-c1"></a> represents how electrons slowly fill from the smallest to the biggest orbit (from 1s to 2s). It is once again important to remember the **Pauil's exclusion principle** and the fact that the two electrons that share the same orbit should have a different spin.
<figure>
    <img src="{{ site.url }}/figures/c/1.png" alt="Orbital diagram and electron configuration of Helium and Lithium">
    <figcaption>Orbital diagram and electron configuration of Helium and Lithium</figcaption>
</figure>


We group orbitals from the same subshell by connecting the sides of the orbital boxes. **The Hund's rule** dictates how we should fill the atomic orbitals from the same subshell:
<quote>
    Every orbital in a sublevel is singly occupied before any orbital is doubly occupied.
</quote>
In simple terms demonstrated by <a href="#fig-c2"></a>, you should fill all the orbitals in the same subshell with electrons of the same spin (_in most cases_, up spin) before putting in the opposite spin.
<figure>
    <img src="{{ site.url }}/figures/c/2.png" alt="How electrons fill the orbits from the 2p subshell">
    <figcaption>How electrons fill the orbits from the 2p subshell</figcaption>
</figure>

The number of orbitals per subshell is based on the third quantum number mentioned above: it is the number of possible values for $m_i$. The general formula for the number of atomic orbitals based on the second quantum number $l$ is:
<eq> 1 + 2(l-1) </eq>
Multiply the result by 2 and you get the number of electrons a subshell can hold.

Another thing you need to keep in mind is the **Aufbau principle** ("Aufbau" in Germany translates to "build up", which suits its purpose of building electron configuration from the ground state up):
<quote>
    When filling orbitals, the lowest energy orbitals available are always filled first.
</quote>
This principle is here to warn you of the fact that the subshell's energy level is not in order. Yes, the order _inside a shell_ follows the basic order based on $l$; however, an example would be the subshell 4s has a lower energy level compared to the 3d subshell. This is a reminder that $n$ is simply to show you the _relative size_ of the orbit (compared to a similarly shaped orbit) while $l$ is the shape — this is why the terminology "shell" is confusing in this case, as we tend to think they are orderly stacked but in fact, they are not (<a href="#fig-c3"></a>). Luckily, there is a trick to remember the energy level, presented in <a href="#fig-c4"></a>; the Aufbau principle starts to kick as we reach scandium, the first transition metal in the periodic table.
<figure>
    <img src="{{ site.url }}/figures/c/3.png" alt="Energy diagram for each subshell">
    <figcaption>Energy diagram for each subshell, courtesy of BYJUS</figcaption>
</figure>
<figure>
    <img src="{{ site.url }}/figures/c/4.png" style="height: 70vh;" alt="Aufbau principle's trick diagram">
    <figcaption>Aufbau principle's trick diagram, courtesy of BYJUS</figcaption>
</figure>

And just like any principle in chemistry, there are exceptions to the Aufbau principle. These exceptions are not very related to chemistry but it should not come as a surprise when encountering them.

To summarize this section, here is the list of things to think about when drawing an orbital diagram:

- Count how many electrons you need, then divide by 2 to have the number of boxes you will need to have
- Draw out the boxes with the correct shell subshell configuration. A simple tip to remember is 1, 3, 5, 7 for the s, p, d, and f subshell
- Fill the subshell: fill the entire subshell with up-spin electrons before filling it with down-spin (or vice versa for special cases)
- Stop when you already put down enough electrons, check if your element has a special case (usually question-dependent special cases)


### Electron configuration
Taking from <a href="#fig-c1"></a>, lithium's electron configuration has 3 electrons on two separate subshells — we write the number of electrons per subshell as a superscript after the subshell's notation. If we have $x$ as the number of electrons in a subshell, the general format for a subshell's electron configuration is:
<eq>
    n\,l\,^x
</eq>
This makes the electron configuration for Li which has 3 electrons as:
\begin{equation*}
    1s^2\;2s^1
\end{equation*}

Regarding the Aufbau principle, there are conflicting sources regarding whether you should sort according to the energy level or the shell's number order. This is up to you but consult your instructor for their preference. However, sorting by shell order is especially useful for writing the electron configuration of ions (which will be discussed later).

**The core notation** allows us to condense the electron configuration of elements based on the last noble gas before the element in the periodic table. This is because of the property where noble gas has a full valence shell. For example, sodium follows immediately after neon, so we can simplify to the core notation with warping Ne in a square bracket:
\begin{equation*}
    1s^2 \; 2s^2 \; 2p^6 \; 3s^1
    \rightarrow
    [\text{Ne}] \; 3s^1
\end{equation*}

The valence shell (the outermost shell) is also how chemists name the blocks from the periodic table. From the example above, Na is clearly from the s block, as its outermost subshell is s. Once again, keep in mind the Aufbau principle and the outermost shell is not necessarily the shell with the highest $n$ quantum number.

Recall that a cation has fewer electrons (positively charged) and an anion has more, which will in turn remove some electrons from the electron configuration. For _only_ cations, sort the neutral atom's electron configuration from the smallest to the largest, disregarding the Aufbau principle. After that, simply add or remove the electron according to your sorted order. Because of that, Sn<sup>4+</sup> should not be written as [Kr] 5s<sup>2</sup> 4d<sup>8</sup> but instead as:
\begin{equation*}
    \text{[Kr]} \; 4d^{10}
\end{equation*}

If an ion has the same electron configuration as another neutrally charged element, we call it **isoelectronic** with that element.
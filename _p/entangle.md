---
layout: chapter
prerequisites:
  - p/qubit
---
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

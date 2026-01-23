---
layout: chapter
title: Bra–ket Notation
---
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
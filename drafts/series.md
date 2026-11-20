---
layout: draft
title: Series
prerequisites:
    - m-integrals
---

### Series
A series is simply adding the terms in a sequence together:
<eq>\begin{aligned}
    \sum_{i=1}^n a_i = a_1 + a_2 + \ldots + a_n = S_n
\end{aligned}</eq>

Usually, the context implies that a series is an **infinite series** (so $n=/infty$), while if you end at one particular index, it is called a **partial sum**.

There are a few possible manipulation you can do on a series, which are just extensions of the basic algebra addition rules. For example, you can pull out the common factor:
<eq>
    \sum ka_i = k\sum a_i = kS
</eq>

You can also combine two different series together:
<eq>
    \sum a_i + b_i = S_n + s_n
</eq>
// taking constant outside
// split two terms

A special type of series is called **geometric series**, which is defined as:

// textbook definition of series

Note that to quickly check if a series is a geometric series, you simply divide a term by a previous term, then do the same with a different term. If both of them are equal to the same constant, they are a geometric series.
// fraction rule

A **telescopic series** is a series with one possible form of:
// telescopic definition 1/(n(n+1))

It is poetically called like that is because the series allows you to see the from the beginning to to the end, like a telescope bringing images from very far away close to your eyes.

The **harmonic series** is
// sumation definition

The **p-series** is a series with the numerator 1 and the numerator is the index raised by some exponent:
                //definition

#### Convergent and divergent
In the study of infinite series, we (to be precise, mathematicians) wants to consider whether a series **converges** or **diverges**. A series diverges when, even if you add an infinite number of terms, it still approaches a number... hang on, isn't that very similar to the usage of limit?
<eq>
    \sum_{i=1}^{\infty} a_i = S
</eq>

The first test you can do is to check whether the sequence of the terms are monotonic and decreasing to zero or not. The intuition is pretty clear: if the terms are increasing to infinity, then their sum must also be increasing to infinity. That is general idea to **test for divergent**: if the limit of a general term approaches to infinity but the result do not exist or not equal to zero, then the series diverges.
<eq>
    \lim_{i\to\infty} a_i \text{DNE or } = 0 \Rightarrow \text{series diverges}
</eq>
// if lim DNE or not equal to 0, series is diverge

If we found the limit equals to zero, however, we know nothing about the series and we will need to proceed with other tests.

The **integral test** uses the basic fact that an integral is just a sum of many small parts together. Therefore, if the integral converges, the sum also converges, and vice versa:
// integral test

In this test, just pick whatever lower limit that is an integer that is convenient for you. There is also a restriction on the function itself: it must be decreasing, or in terms of derivative:
// dy/dx

Therefore, chose your lower bound of the integral wisely to ensure that you can satisfy the requirements

And going back to the rules of addition: if one of the series diverges, then if we add another series, it will still diverges.

Geometric series test is used when you have... a geometric series.

### Sum of series
We can only find the sum of a series if it is convergent.

The geometric series has the sum of

This is one of the most beautiful aspect of the telescope series: its always converges to 1! To derive this fact, you must use partial fraction, but the result you should get is:
// mathematical definition

The harmonic series always diverges

The p-series converges if p > 1

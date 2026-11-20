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

Usually, the context implies that a series is an **infinite series** (so $n=\infty$), while if you end at one particular index, it is called a **partial sum**.

There are a few possible manipulation you can do on a series, which are just extensions of the basic algebra addition rules. For example, you can pull out the common factor:
<eq>
    \sum ka_i = k\sum a_i = kS
</eq>

You can also combine two different series together (with the sum of the $b_i$ series equals to $s_n$):
<eq>
    \sum a_i + b_i = S_n + s_n
</eq>

A special type of series is called **geometric series**, which is defined as:
<eq>
	\sum ar^{i-1} = k + kr^1 + kr^2 + \ldots
</eq>

Note that to quickly check if a series is a geometric series, you simply divide a term by a previous term, then do the same with a different term. If both of them are equal to the same constant, they are a geometric series. This is essentially the step for you to find the **common ratio** $r$:
<eq>
	\frac{a_{i+1}}{a_i} = \frac{kr^ir}{kr^i} = r
</eq>

A **telescopic series** is a series with one possible form of:
<eq>
	\sum\frac{1}{i(i+1)}
</eq>

The **harmonic series** is:
<eq>
	\sum\frac{1}{i}
</eq>

The harmonic series is a special case of a much more general idea of **p-series** where the index is being raised by a power of one:
<eq>
	\sum\frac{1}{i^p}
</eq>

We then have **the alternating series**, which is when the terms alternate between positive and negative:
<eq>
	\sum (-1)^{i}a_i \text{ or } \sum (-1)^{i}a_i
</eq>

### Convergence and divergence
In the study of infinite series, we (to be precise, mathematicians) wants to consider whether a series **converges** or **diverges**. A series diverges when, even if you add an infinite number of terms, it still approaches a number... hang on, isn't that very similar to the usage of limit?
<eq>
    \lim_{n\to\infty}\sum_{i=1}^{n} a_i = \sum a_i = S
</eq>

The first test you can do is to check whether the sequence of the terms are monotonic and decreasing to zero or not. The intuition is pretty clear: if the terms are increasing to infinity, then their sum must also be increasing to infinity. That is general idea to **test for divergent**: if the limit of a general term approaches to infinity but the result do not exist or not equal to zero, then the series diverges.
<eq>
    \lim_{i\to\infty} a_i \text{ DNE or } \neq 0 \Rightarrow \text{series diverges}
</eq>

If we found the limit equals to zero, however, we know nothing about the series and we will need to proceed with other tests.

The **integral test** uses the basic fact that an integral is just a sum of many small parts together. Therefore, if the integral converges, the sum also converges, and vice versa. So if you have the sigma notation of a series, simply try to evaluate the improper integral with the upper bound to infinity to determine the convergence:
<eq>
	\sum a_i \text{ have the same convergence behaviour as } \int_k^\infty f(x) \;dx
</eq>

In this test, just pick whatever lower limit that is an integer that is convenient for you. There is also a restriction on the function itself: it must be decreasing, or in terms of derivative:
<eq>
	f'(x) < 0 \text{ on the interval}
</eq>

Therefore, chose your lower bound of the integral wisely to ensure that you can satisfy the requirements. This test is extremely powerful because it always give out the answer, provided that you can integrate the function.

**Geometric series test** is used when you have... a geometric series. It can be simply stated as:
<eq>
	\sum ar^i \text{, if } |r| < 1 \Rightarrow \text{ series converges}
</eq>

**P-series test** is also another easy definition to memorize:
<eq>
	\sum \frac{1}{i^p} \text{, if } p > 1 \Rightarrow \text{ series converges}
</eq>

**The alternating series test** will tell you a series converge if *both* of the following requirements are met in an alternating series:
<eq>
	\lim_{i\to\infty} |a_i| = 0 \text{ and } |a_{i+1}| < |a_{i}|
</eq>

The second requirement is just another way of saying that the terms must be decreasing

The last two tests will require us to use another series that we already known its property. Let's say our $a_i$ series is our unknown, and we have $b_i$ is our known. We can deduct some properties between them before applying the convergence / divergence of our known into our unknown.

The first test we can use is the **comparision test**, which allows two posibilities. It is also very similar to the sandwich theorem of limit. The first posibility state that if our unknown is smaller than our known, then our known can "sandwich" the series if itself converges:
<eq>
	\text{If } a_i < b_i \text{ and } \sum b_i \text{ converges } \Rightarrow \sum a_i \text{ converges}
</eq>

But if the unknown series is bigger than our known, then our known can keep the series away from zero if itself diverges:
<eq>
	\text{If } a_i > b_i \text{ and } \sum b_i \text{ diverges } \Rightarrow \sum a_i \text{ diverges}
</eq>

We then have the **limit comparision test**, which requires us to divide the general term of the series. Note that for the first posibility, it does not include infinity:
<eq>
	\text{If } \lim_{i\to\infty}\frac{a_i}{b_i} > 0 \Rightarrow\text{they share convergence / divergence}
</eq>

But when the limit equals to zero, then that means our known series is growing faster than our unknown. Therefore, if our known converges, the unknown must also converges:
<eq>
	\text{If } \lim_{i\to\infty}\frac{a_i}{b_i} = 0 \text{ and } \sum b_i \text{ converges } \Rightarrow \sum a_i \text{ converges}
</eq>

So when the limit grows to infinity, that means our unknown is growing faster, so we have:
<eq>
	\text{If } \lim_{i\to\infty}\frac{a_i}{b_i} = \infty \text{ and } \sum b_i \text{ diverges } \Rightarrow \sum a_i \text{ diverges}
</eq>

And going back to the rules of addition: if one of the series diverges, then if we add another series, it will still diverges. When solving exercises related to series, we are mostly trying to simplify the problems down to the known series form. After that, you can simply apply the necessary tests to draw a conclusion for the convergence / divergence of the series.

<!-- ### Sum of series
We can only find the sum of a series if it is convergent. Therefore, when you read this section, always assume that the series has been checked for convergence.

The **trigonometric series** has the sum

This is one of the most beautiful aspect of the telescope series: its always converges to 1! To derive this fact, you must use partial fraction, but the result you should get is:
// mathematical definition

It is poetically called like that is because the series allows you to see the from the beginning to to the end, like a telescope bringing images from very far away close to your eyes.

The harmonic series always diverges

The p-series converges if p > 1 -->
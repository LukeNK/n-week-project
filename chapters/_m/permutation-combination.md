---
layout: chapter
title: Permutation and Combination
---
The difference between **permutation** and **combination** is in the order. **Permutation is an ordered combination** or in other words, a combination does not concern the order.

**Order does not matter** here means that a 123 string is the same as a 213 string.

When approaching statistical problems relating to permutation or combination, the basic approach should be calculating every individual part that you can count, then dividing to remove the over-count or multiplying to compensate for the under-count.

### Permutation
<h4>Permutations with repetition</h4>
When $n$ is the number of elements and $r$ is how many times we can select the elements, the number of possible permutations we can have is:
<eq> n^r </eq>

For example, every time we roll a dice, there are 6 possible results (faces). If we roll it once again, now there are 6 results for every previous roll's result $6\times6$. If we ask how many permutations there are after 3 rolls of dice, the result is $6^3=216$ permutations. Every time we roll the dice, there is the possibility that a face will repeat (hence repetition is allowed).

<h4>Permutations without repetition</h4>
Four people were tasked to line up in a straight line, how many possible line arrangements can we get? There are four possible people to stand at the first position; for every selection, there will now be three possible candidates to stand at the second position, and so on... A person cannot appear twice in a line (not a quantum physics topic) so our choice gets reduced each time.

The formula is:
<eq>
    n!
    = n \times (n-1) \times \dots \times 2 \times 1
</eq>
and despite being unrelated to statistics, this is a property of factorial:
<eq> 0! = 1 </eq>

Continuing with the example above, what if we want to find how many possible line arrangements with only two people? In this question, we are "cutting short" our factorial formula because there are no more selections after the second person. To do that, we cancel the spare part by dividing it by itself:
<eq>
    P(n,r) = nPr = P^r_n
    = \frac{n!}{(n-r)!} = n(n-1)\dots(n-r+1)
</eq>
$n \ge r$ as you cannot have a collection longer than the number of elements you have. In this formula, the second notation was commonly seen on calculators, while the third notation is common in Vietnam (with $P$ being replaced with $A$).

### Combination
The most common version you will need is combinations without repetition, so treat the combination with repetition as some extra reading.

<h4>Combinations without repetition (regular combination)</h4>
We want to pick two people from four people. We do not care about the order we pick but rather how many people we pick. Say if we picked Luke and Luna:

- _If the order does matter_: there are two possibilities: Luke first or Luna first.
- _If the order does not matter_: only one possibility: Luke and Luna.

So as you can see, permutations have twice the possibilities. You can calculate how many possibilities permutation has _more_ than combination by using permutation on the subset itself (in this case, the set contains Luke and Luna):
\\[ P(r, r) = r! \\]
Now we simply divide our permutation formula with this spare part to get our **combination formula**:
<eq>
    C(n,r)= nCr = C^r_n
    = \begin{pmatrix} n \\ r \end{pmatrix}
    = \frac{n!}{r!(n-r)!}
</eq>

You still need to keep in mind the fact that if an item was selected, it cannot be selected again in this non-repetition version (our example selection cannot have two Lukes or Luke will have to do a job twice).

<h4>Combination with repetition</h4>
This is a combination without repetition, but we plug in a different number to achieve our goal. Unfortunately, it is quite difficult to explain the algebraic proof so instead, this section will based on the visual intuition of one particular example.

We want to buy six tea bags, with three different flavours: (A) aloe vera tea, (B) black tea, or (C) chai tea. In this case, there are two important factors:

- Repetition is allowed: we can pick a tea flavour more than once
- The order does not matter: we only care about how many we have picked


Because order does not matter, we will list our teas in the same order: A then B then C. Next, we will add a separator between the teas. Here is what our diagram will look like:
\\[\begin{bmatrix}
    -&-&-&|&-&-&|&- \\\\\\
    |&-&-&-&|&-&-&- \\\\\\
    |&-&-&-&-&-&-&| \\\\\\
    |&|&-&-&-&-&-&-
\end{bmatrix}\\]
There are still six dashes representing our six allowed selections, while the two separators simply indicate that we are moving between the types of tea. In the second example, you can see that we did not select A but only B and C. The third example only shows that there was only B that was selected; similar to C in the fourth example

With that diagram, the answer broke down to how many ways we can put down these two dividers. We have $n=3$ teas which means we have $n-1$ separators; There are $r+n-1$ spaces including the items and the separators to insert the divisors:
<eq>
    C(n+r-1,n-1)
    = \frac{(n+r-1)!}{r!(n-1)!}
</eq>
This calls: select space to insert $n-1$ separators. Now you may ask why it is not simply $r-1$ (the space between the items only). It is because we always have the possibility that two separators are standing next to each other — such a case would
 not be covered by the $r-1$ where there is no "space" for the separators to stand next to each other.

The $n-1$ on the denominator gets from $n+r-1-r$ being cancelled, therefore we have the official **combination with repetition** formula:
<eq>
    C(n+r-1,r) = C(n+r-1,n-1)
</eq>

The first hint to realize that you are dealing with combinations without repetition is in the fact that $n < r$. In our example, we had more positions to fill than the items we had, so we must repeat some. Notice that in this case, $n$ and $r$ "swapped" places for each other compared to other formulas; what we plugged in our original combination formula is still the same though.

### Solving problems
**How many ways we can rearrange the word "Canada"?** This question cares about the order, so the first step is to get the basic permutation with the factorial formula $6!=720$. However, notice that there are three different "a" inside that word, so we need to "remove" that over-count. We do that by dividing our over-count by the number of possible arrangements of the three "a" characters:
\\[ \frac{6!}{3!} = 240 \\]

Most of the time when solving statistical problems, it is about you determining how much you have over-counted, then removing that spare part by dividing.

**From 1, 2, 3, and 4, how many 3-digit numbers (with non-repeating digits) can we get that are smaller than 320?** The first digit of our number will need to be either 1 or 2 to be _certain_ that any number selected after it will be smaller than $320$. Because this is non-repeating, after we select either 1 or 2, we only have $3$ options left for the second digit, and $2$ options for the last digit; the number of possibilities is: $2\times3\times2$. _If the first digit is 3_, there is only one possibility for the second digit: 1 because otherwise, the number would be larger than $320$. The final result for this route can be calculated with $1\times1\times2$ or can be counted by listing $312$ and $314$.
\\[ (2\times3\times2) + (1\times1\times2) = 14 \\]

For this problem, an addition was used because we counted by part instead of under-counting every possibility. One thing to highlight this type of problem is when your logic route has conditional statements "if".

In both questions, we solved not by blindly applying the permutation or combination formula but rather by starting from scratch. This is extremely useful to help you keep track of what you are counting or for problems with multiple datasets to consider.
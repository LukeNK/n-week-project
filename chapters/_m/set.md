---
layout: chapter
title: Sets
---
Because sets are fairly simple to understand, this chapter will act more as a quick reference sheet.

### Basic
Sets are written with curly braces with its elements separated by a comma:
<eq> A = \{0,1,2,3\} </eq>
Order does not matter and duplicates do not count. If there are two similar elements then they are treated as one.

**Element-of symbol** is written as:
<eq>
    2 \in \{1,2,3\}
    \qquad
    4 \notin \{1,2,3\}
</eq>

**Two sets are equal** if they contain the same elements.
<eq>
    A = B
    \text{ if and only if }
    \forall x (x \in A  \leftrightarrow x \in B)
</eq>
"$A=B$ if and only if for all $x$ in $A$, there exists a similar $x$ in $B$".

A set can contain another set:
<eq>
    C = \{A, \{5,6,7\}\} = \{\{0,1,2,3\}, \{5,6,7\}\}
</eq>

A set's **cardinality** is the number of distinct elements. We only count the number of objects in the set we are evaluating (only counting the number of elements at the top level).
<eq>
    |\{1,2,3\}| = 3
    \qquad
    |C| = 2
</eq>

Instead of listing everything (maybe even with dots $\dots$), you can describe the elements of a set with **set builder notation**:
<eq>
    \{n \mid n \in N \text{ and } n < 100\}
</eq>
In that notation, $n$ was defined as a variable that will go in the set; the condition for $n$ was put after the vertical line.

**An empty set** has a special notation:
<eq>
    \emptyset = \{\}
    \qquad
    |\emptyset| = 0
</eq>

Any non-empty set will have $\emptyset$ as its subset:
<eq> \emptyset \subset A </eq>

**A subset** can be noted like this:
<eq> \{1,2\} \subseteq A </eq>
Note that there is a difference between a subset and being an element. **A proper subset** is a subset that is not identical. The underline below the subset symbol is similar to the equal sign in $\leq$ sign.
<eq>
    \{1,2\} \subset A
    \qquad
    A=B \Rightarrow A \subseteq B \text{ but } A \not\subset B
</eq>

**A power set** is a set containing all of a set's subsets:
<eq> P(S) = \{A \mid A \subseteq S\} </eq>
Notice that the power set contains the set $S$ itself (as the definition is not a proper subset) and an empty set $\emptyset$. The cardinality of a power set is $|P(S)| = 2^{|S|}$.

**Cartesian product** is all possible ways to take things from two sets. The Cartesian product of sets $A$ and $B$ is the set of all ordered pairs of values from $A$ and $B$.
<eq>
    A \times B
    = \{(a,b) \mid a \in A, b \in B\}
</eq>
Cartesian product is not commutative:
<eq>
    A \times B \neq B \times A
</eq>

### Set operation
**The union** of two sets contains all elements from both of those sets. It is the set of all elements from both sets:
<eq>
    A \cup B
    = \{ x \mid x \in A \text{ or } x \in B \}
</eq>

**The intersection** of two sets is the set containing elements that appear on both sets:
<eq>
    A \cap B
    = \{ x \mid x \in A \text{ and } x \in B \}
</eq>
Note that the symbols are similar to the "and" logic operator ($\land$).

**The difference** between two sets is the set of values in one but not the other, similar to subtraction:
<eq>
    A-B = A \setminus B
    = \{ x \mid x \in A \text{ and } x \not\in B \}
</eq>
The difference does not have commutative property.

Similar to sigma notation, we can describe a large number of sets with:
<eq>
    \bigcup^n_{i=1} S_i
    \qquad
    \bigcap^n_{i=1} S_i
</eq>
---
layout: chapter
---
## Logic and Proofs
Logic is very easy to understand. If it is hard for you, you have a bigger problem that this chapter cannot solve. However, to save time, mathematicians created multiple notations to make their lives easier (and our lives a bit harder). This chapter is an attempt to quickly summarize those notations and acts as a reference sheet whenever you see strange logic notations.

### Symbols and notations
**Propositions** are statements that could be either true or false. We use $T$ or $F$ to indicate true or false.

A proposition can be **negated**, which gives the opposite of the proposition. The negation of $p$ is:
<eq> \neg p </eq>
**The conjunction operator** will return true if both propositions $p$  and $q$ are true; it is similar to an "and" statement.
<eq> p \land q </eq>

**Disjunction** is similar to an "or" statement where it only requires either one statement to be true.
<eq> p \lor q </eq>

**Exclusive or** (XOR) will return true if either statement is true, but not both.
<eq> p \oplus q </eq>
It is similar to $(p \lor q)\land\neg(p \land q)$.

**Implication** expresses that one thing will result in another ("if $p$ then $q$"):
<eq> p \rightarrow q </eq>
$p$ is called the antecedent, premise, or hypothesis; $q$ is called the conclusion or consequence because it is the result of $p$. Moreover, noted that the whole statement itself can still generate $T$ or $F$ values. If we have a statement "If the store is open today ($p$), then Luka will go ($q$)". Consider the truth table, we have:
- If the store opens, then Luka will go, making $p \rightarrow q$ true.
- If the store opens but Luka does not go, then apparently Luka's action does not depend on the store being opened.
- If the stores do not open but Luka still goes, the statement $p \rightarrow q$ is still true because it does not say anything about the store being closed.
- If the store closes and Luka stays at home, the statement is still true for a similar reason.

A **bi-conditional statement** is similar to the statement "if and only if", that is when both propositions support each other. This is similar to the equal sign, so even if both propositions are false, the bi-conditional statements still hold (because $F=F$)
<eq> p \leftrightarrow q </eq>
The difference is that bi-conditional implies that both $p$ and $q$ are similar to each other; that is, they are either both true or both false for $p \leftrightarrow q$ is true.

**Equivalent** are propositions that are the same. There are two ways to write it and you will usually see the latter in algebra:
<eq>
    p \equiv q
    \qquad
    p \Leftrightarrow q
</eq>

**A predicate** is a statement with variables, written with a capital letter and a variable listed as arguments:
<eq> P(x,y,z) </eq>
Predicate is the founding block of functions — that is why the function notation is similar to this. Once the variables have values, it is a proposition with a determined true or false result.

**The universal quantifier** is used to denote sentences with words like "all" or "every":
<eq> \forall xP(x) </eq>
Essentially that statement allowed us to plug every possible $x$ into our predicate $P(x)$.

**The existential quantifier** is used to denote sentences with words like "some". It implies the fact that there are at least _some_ variables that make the predicate $P$ hold.
<eq> \exists xP(x) </eq>
Informally, $\forall$ is just a bunch of  $\land$s and $\exists$ is just a bunch of $\lor$s.

Noted that for **nested quantifiers**, the order does matter:
\\[
    \forall x \exists y (x+y=0)
    \qquad
    \exists x \forall y (x+y=0)
\\]
The first one is: "For all $x$, there exists $y$ that makes the predicate true". The second one is saying "There is some $x$ that when you select _any_ $y$, the value $x+y=0$".

**Therefore** symbol is:
<eq> \therefore </eq>

At the end of a proof, **Q.E.D.** is used to show that the proof is completed.

### Logic proof
**Inference** is when you prove something is true by proving that everything we know is true is equivalent to $q$, therefore $q$ must be true.
<eq>
    ((p \rightarrow q) \land p) \rightarrow q
</eq>
If $p$ leads to $q$ and $p$ is true, then it will lead to $q$ is true.

A few logic terms:
- **Proof**: a valid argument based on theorems and what is known to be true.
- **Conjecture**: a statement that you think is true and will be proven with your proof
- **Theorem**: a statement that has been shown to be true
- **Premise**: a condition or a requirement for something to be true
- **Lemma**: a small theorem that we need to get to the proof we are interested in
- **Corollary**: a small theorem that is the result of the more important theorem

**Disproving conjecture** is a proving method that applies to theorems with $\forall xP(x)$, where you can simply find a single $x$ that dissatisfies $P(x)$.

**Direct proof** assumes that $p$ is true, then follows implications to show that $q$ is true. This is _similar_ to how you do algebra where you make multiple $=$ lines to get to your answer. To be more exact, it is algebra that gets this idea from logic. This is the application of **hypothetical syllogism**:
<eq>
    (p \rightarrow r)\land(r \rightarrow q)
    \rightarrow (p \rightarrow q)
</eq>

**Proof by induction** is simply proving that $P(n)$ is true for $1$, then proving that $\forall n=k\leq1$, it is still true with $n=k+1$.

**Proof by contraposition** utilizes this rule:
<eq>
    p \rightarrow q
    \equiv \neg q \rightarrow \neg p
</eq>
In simple terms, **proof by contraposition** simply proves that if $q$ is wrong then $p$ must be wrong too, and then we prove that because $p$ is right then $q$ is right.

**The existence proof** is useful for statements like $\exists xP(x)$. Just simply find one $x$ that satisfies $x$ and you are done. Disproving such a statement is harder because then you must prove that $\forall x$, $P(x)$ is false.

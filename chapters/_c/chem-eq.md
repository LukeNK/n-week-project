---
layout: chapter
title: Chemical Equations
prerequisites:
  - c-stoichiometry
---

### Chemical equations
A chemical equation usually indicates the proportion of the chemicals that participate in a reaction, essentially showing the mole of particles you need. Take a simple and very practical equation:
\\[
    200\text{ ml milk} + 10\text{ ml matcha} \rightarrow 210\text{ ml matcha latte}
\\]
If you read that equation, you will come to a conclusion that "I will need to have 200 ml of milk and 10 ml of matcha to get the *perfect* matcha latte." From that equation, you can also easily scale the formula according to your need: if you need double the amount of matcha latte (420 ml), you would double the amount of the ingredients to get 400 ml of milk and 20 ml of matcha.

You can follow the arrow to come to this conclusion: in the left side (where the arrow points away) are the reactants and in the right side are the products.

So that is the general idea of chemical equations: they are recipes for you to "cook" a certain products<note>Unfortunately, a lot of times, you should not consume the products in a chemical lab.</note>. However, rather than using ml, the scientists use mol — which, if you think about it, is basically a representation of each individual atoms.
<eq id='eq-chem-eq-1'>
    2\text{HCl} \rightarrow 1\text{H}_2 + 1\text{Cl}_2
</eq>
From that equation, it simply shows you that for two HCl molecules, you can get one molecule of H₂ and one molecule of Cl₂; by extension, it means that two moles of HCl can give you one mole of each product. In chemical equations, we usually omit coefficients equal to one.

### Stoichiometry
But you see, it is quite difficult to pick each atom and tell them to react with each other. That is why we need stoichiometry because it is a way to convert between what is practical for us and what is actually happening.

Let's go back to <a href='#eq-chem-eq-1'></a> and assume that we got 1 gram of H₂. If we convert it to mol, you will see that we got:
\\[
    1\text{ g} \times \frac{1\text{ mol}}{1.008\text{ g}} = 0.9921\text{ mol H₂}
\\]

We can now see how much HCl we get by considering this: for each "portion" of H₂, two new portions of HCl are created.
\\[\begin{aligned}
    1\text{ molecules H₂} \times \frac{2\text{ molecules HCl}}{1\text{ molecules H₂}} &= 2\text{ molecules HCl} \\\\\
    \Rightarrow
    0.9921\text{ molecules H₂} \times \frac{2\text{ molecules HCl}}{1\text{ molecules H₂}} &= 1.984\text{ molecules HCl}
\end{aligned}\\]

From here, you can once again use stoichiometry to convert HCl to a practical unit for measuring.

### Balancing equations
You will need to remember: **the number atom of each elements are conserved before and after a reaction.** This means that if you supply two hydrogen atoms, you will get two hydrogen atoms at the end. They could be arranged differently, they could be separated, but they still exist. You cannot start with a fish but get a beef Wellington in the end.

In some cases, certain moleculars are bonded tightly to the point they won't be separated throughout the reactions. Take this example:
\\[
    \text{Na}_3\text{PO}_4 + \text{KOH} \rightarrow \text{NaOH} + \text{K}_3\text{PO}_4
\\]
This is the steps that the Author uses to balance, but you can definitely do it differently:
```
_Na₃PO₄ + _KOH → _NaOH + _K₃PO₄    Notices that K is imbalanced
_Na₃PO₄ + 3KOH → _NaOH + 1K₃PO₄    Balances K, OH is imbalanced
_Na₃PO₄ + 3KOH → 3NaOH + 1K₃PO₄
1Na₃PO₄ + 3KOH → 3NaOH + 1K₃PO₄    Checks each element
```
<eq>
    \text{Na}_3\text{PO}_4 + 3\text{KOH} \rightarrow 3\text{NaOH} + \text{K}_3\text{PO}_4
</eq>

So balancing chemical equations is basically just trials-and-errors. In certain cases, you will need to use fractions — which is certainly valid as long as the proportion is correct — but most instructors require that you use whole number if possible.

### Limiting reagents and excess reagents
Sometimes it is hard to follow a recipe exactly, and a similar thing also happens with chemical reactions. Usually, it is hard to put the exact amount of the reactants in a chemical reaction. However, chemists came up with a solution: rather than having to control two or more reactant, we only need to control one and just have more than enough of the other reactants. After all, the reaction can only happen when there is enough of all reactants — a lot of reactions would not be able to process if you do not have even one reactant.

Therefore, the reactant that will run out before other reactants are called **limiting reactant**, because it limits the amount of product that can be made. The other reactants that we have plently of are called **excess reagents**. Let's say we have this reaction:
\\[
    \text{N}_2 + 3\text{H}_2 \rightarrow 2\text{NH}_3
\\]
Imagine you only have one mol of each reactant. You can realize that for each mol of nitrogen, we will need 3 mols of hydrogen. However, because we only have 1 mols of hydrogen, we will not have enough hydrogen to react with all the nitrogen. Therefore, we can conclude that hydrogen is the limiting reactant, and the nitrogen is the excess reactant.

We can further set up a table of amount to see what will happen to each reactant:
<table id="tab-a3">
    <caption>Table of amounts of the reaction</caption>
    <tr>
        <th></th>
        <th>N₂</th>
        <th>3H₂</th>
        <th>2NH₃</th>
    </tr>
    <tr>
        <th>Initial (mol)</th>
        <td>1.00</td>
        <td>1.00</td>
        <td>0</td>
    </tr>
    <tr>
        <th>Change (mol)</th>
        <td>-0.33</td>
        <td>-1.00</td>
        <td>+0.66</td>
    </tr>
    <tr>
        <th>Final (mol)</th>
        <td>0.66</td>
        <td>0</td>
        <td>0.66</td>
    </tr>
</table>

In the table above, the "Change" row describe what will happen during the reaction, so it needs to follow the ration provided by the reaction equation.

One of the quickest way for you to pick out the limiting reagent is simply start with picking out one specific product. Then you can ask yourselves for each reactant: "If this reactant reacts fully then how much product do I have?" After that, you can simply pick out the reactant that gives the least amount of product. Back to our example above: we know that 1 mol of nitrogen will yield 2 mols of ammonia but 1 mol of hydrogen can only give 0.66 mols of the products, so we know that hydrogen must be the limiting reactant.

### Percent yield
Of course, all of the calculations are theoretical. In reality, there will be errors that make the amount of products being less than what is expected.
<eq>
    \text{yield}\% = \frac{\text{actual}}{\text{calculated}} \times 100\%
</eq>

Percent yield is usually calculated based on mass, but there are definitely situations where it is based on volume. It should akso be less than 100%. If you somehow get percent yielf higher than 100%, then please contact either the Nobel prize or your instructor, or you have supplied more reactants than what you have calculated.
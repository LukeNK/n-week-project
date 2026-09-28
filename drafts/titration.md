---
layout: draft
title: Titration and Back Titration
prerequisites:
    - c-chem-eq
---

### Limiting reagents and excess reagents
Sometimes it is hard to follow a recipe exactly, and a similar thing also happens with chemical reactions. Usually, it is hard to put the exact amount of the reactants in a chemical reaction. However, chemists came up with a solution: rather than having to control two or more reactant, we only need to control one and just have more than enough of the other reactants. After all, the reaction can only happen when there is enough of all reactants — a lot of reactions would not be able to process if you do not have even one reactant.

Therefore, the reactant that will run out before other reactants are called **limiting reactant**, because it limits the amount of product that can be made. The other reactants that we have plently of are called **excess reagents**. Let's say we have this reaction:
\\[
    \text{N}_2 + 3\text{H}_2 \rightarrow 2\text{NH}_3
\\]
Imagine you only have one mol of each reactant. You can realize that for each mol of nitrogen, we will need 3 mols of hydrogen. However, because we only have 1 mols of hydrogen, we will not have enough hydrogen to react with all the nitrogen. Therefore, we can conclude that hydrogen is the limiting reactant, and the nitrogen is the excess reactant.

We can further set up a table of amount to see what will happen to each reactant:
<table id="tab-a3">
    <caption>Table of amount of the reaction $\text{N}_2 + 3\text{H}_2 \rightarrow 2\text{NH}_3$</caption>
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

### Forward titration
Titration is simply a process that we carefully drop an amount of limiting reagent until the **endpoint** is reached where the excess reagent has completely reacted. In order to prepare titration, you will need an **indicator**, which is a special chemical that can tell you when the excess reagent has completely reacted. You will also need our chemicals to be in an aqueous form so that you can carefully control the flow and stop when you see that the reaction has completely occured. Titration is mostly useful for you to find the concentration or even the number of mols of an unknown sample.

One of the most difficult thing about titration is figuring out the mol of each substance. However, do not panic: most of the time, you are given concentration and the volume of each chemicals. Simply multiply them together to get the number of mols — it is just basic stoichiometry.

Let's say we have a reaction:
\\[
    \text{NaOH} + \text{HCl} \rightarrow \text{NaCl} + \text{H}_2\text{O}
\\]
And let's say the concentration of NaOH is 1M. We will need to find the concentration of a 10 ml sample of HCl. We set up the titration by putting the HCl in Erlenmeyer flask, and put the NaOH into our burette. At the end of the process, we should get the volume of titrant used. So now the process is very straight forward:
- multiply the volume with molarity to get the number of mols;
- from that result, use the equation to get the number of mols of HCl; then
- divide by the volume of HCl to get the concentration of HCl.

### Back titration
Titration is a strong tool because it allows us to infer certain information even when we do not have much information about the substance. This is especially true for back titration, when there are usually three main steps:
- make a compound react to an excess amount of a solution;
- use that solution to titrate with another known solution; then
- make calculations to infer the information of the original solid.

So in a back titration process, there will be two reactions: one when you react the compound with the intermediate solution and one when you react the intermediate solution with the titrant. In the first step, the compound is the limiting reactant, so that a set amount $V_\text{used}$ of the intermediate solution is used. In the second step, the remaining volume of the intermediate solution $V_\text{excess}$ will react with another known titrant.

So what about the calculation? Let's list our known:
- $V_t$: the volume of titrant used;
- $V_\text{total}$: the volume of our intermediate solution that we prepared; and
- $M_t$ and $M_s$: the molarity of our titrant and our intermediate solution;

The first step is to to find the number of mols of the titrant used, from which we can get the number of mols of the excess intermediate solution:
<eq>
    n_\text{excess} = V_t \times M_t \times \text{reaction factor}
</eq>

We can then figure out the number of mols initially reacted by subtracting the excess from the total:
<eq>\begin{aligned}
    n_\text{used} &= n_\text{total} - n_\text{excess} \\
    &= V_\text{total} \times \M_s - n_\text{excess}
\end{aligned}</eq>

Because now we have the number of mols being used in the first reaction, we can now use the reaction factor to convert to the number of mols of the original compound:
<eq>
    n_\text{compound} = n_\text{used} \times \text{reaction factor}
</eq>
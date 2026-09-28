---
layout: draft
title: Titration and Back Titration
prerequisites:
    - c-chem-eq
---

### Titration set up
The tools you will use the most in titrations is the **burette**. This is a glass tube that with a valve at the bottom which allows you to slowly add a solution into a container. After you have added solution and closed the burette, you can calculate the amount that you have dispensed by subtracting the before and after amount that you have in the burette. The container that you will drop your solution into is usually an Erlenmeyer flask. Usually:
- **titrant**: the solution that you put inside the burette; and
- **analyte**: the solution that you put inside the Erlenmeyer flask.

We call a solution the analyte is usually cause its information is unknown to us. In order to prepare titration, We will need an **indicator**, which is a special chemical that can tell you when the excess reagent has completely reacted. In any case, when we first open the valve (**stopcock**), a reaction will happen where the solution from the burette is the limiting reactant and the solution inside the flask is the excess reactant. This will continue until we reach an **endpoint**, where all of the solution inside the flask are consumed and the indicator will make the flask change colour. If you keep going, the role of the limiting reactant and excess reactant will change (because from a boarder scope, you have more titrants than the analyte).

So in short, titration is simply a process that we carefully drop an amount of excess reagent until the limiting reagent has completely reacted. You will also need our chemicals to be in an aqueous form so that you can carefully control the flow and stop when you see that the reaction has completely occured. Titration is mostly useful for you to find the number of mols of an unknown sample, from which you can deduct other variables.

### Forward titration
One of the most difficult thing about titration is figuring out the mol of each substance. However, do not panic: most of the time, you are given concentration and the volume of each chemicals. Simply multiply them together to get the number of mols — it is just basic stoichiometry.

Let's say we have a reaction:
\\[
    \text{NaOH} + \text{HCl} \rightarrow \text{NaCl} + \text{H}_2\text{O}
\\]
And let's say the concentration of NaOH is 1M. We will need to find the concentration of a 10 ml sample of HCl. We set up the titration by putting the HCl in Erlenmeyer flask, and put the NaOH into our burette. At the end of the process, we should get the volume of titrant used. So now the process is very straight forward:
- multiply the volume with molarity to get the number of mols;
- from that result, use the equation to get the number of mols of HCl; then
- divide by the volume of HCl to get the concentration of HCl.

So in general, the first step is to the the volume of titrant being used from the volume of the burette (note that the burete will usually have the volume being "inverted" where the top is zero and the bottom is the maximum volume):
<eq>
    V_\text{titrant} = V_\text{final} - V_\text{initial}
</eq>
We can then use stoichiometry to find the number of mols being used:
<eq>
    n_\text{titrant} = V_\text{titrant} \times M_\text{titrant}
</eq>
After that, we can just use the reaction factor from the balanced chemical equation to get the number of mols in the analyte:
<eq>
    n_\text{analyte} = n_\text{titrant} \times \frac{\text{mol analyte}}{\text{mol titrant}}
</eq>
From this step, you can use stoichiometry to find the necessary information of the analyte

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
    &= V_\text{total} \times M_s - n_\text{excess}
\end{aligned}</eq>

Because now we have the number of mols being used in the first reaction, we can now use the reaction factor to convert to the number of mols of the original compound:
<eq>
    n_\text{compound} = n_\text{used} \times \text{reaction factor}
</eq>
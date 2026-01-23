---
layout: chapter
---
## Stoichiometry
Stoichiometry simply means that we are dealing with chemical reactions and the quantitative data from such reactions (like weight, volume, number of atoms, etc...).

<h3 id="sec-c-mole">The mole — the central number of chemistry</h3>
How many items are there in a triplet? $3$. How much is a dozen? $12$. Now we have a new definition:
<eq>
    \text{A mole} = 6.02\times10^{23}
</eq>
Similar to how half a dozen is $0.5\times12=6$, you can tell other scientists that you have a certain number of moles of _something_. Note that a mole is still a quantity and not a unit — you have a mole of something. As a conversion factor, a mole is:
<eq>
    \frac{1\text{mol of item}}{6.02\times10^{23}\text{ items}}
</eq>

A mole of atoms of an element acts as the central unit to convert between different units or elements in a reaction.

**Molar mass** is the mass of $1$ mole of an element while the **formula mass** of a compound is the sum of all atoms in that compound. They are both similar in value but different in the unit: molar mass's unit is usually in grams per mole while formula mass is in the atomic unit, which is $1/12$ the weight of a carbon atom (or about $1$ hydrogen atom). The atomic unit will be abbreviated as "u" throughout this note.

**To calculate the number of moles**, you can see how many times the molar mass you have of the element A:
<eq id="eq-c-mol">
    n = \frac{m\text{ g}}{M\text{ g/mol}}
</eq>

$1$ mole of any gas at **standard temperature and pressure** or **STP** occupies exactly $22.4$ litres. That property only appears for gasses but not liquids or solids. If you want to calculate **the number of moles in a volume of gas**:
<eq id="eq-c-mol-in-gas">
    n = V\text{ L} \times \frac{1\text{mol}}{22.4\text{L}}
</eq>

**Molarity** is the number of moles of the chemical per litre of a solution. It indicates how many moles of the chemical are presented in a litre of a solution — similar to density but in this case, it is the number of atoms over 1 litre of the solutions. Because a solution will include both the chemical and the water, the actual amount of water present in the solution is not $1$ litre — you add water _up to_ $1$L, NOT $1$L _of water_.

**The relationship between a mole and the chemical formula** is in the proportion. For example, the element dihydrogen monoxide<note>Normal people usually called it "water"</note> has the formula H₂O, which states that for every oxygen atom, there are two hydrogen atoms. If you now have a mole of oxygen, you need to double that amount to have two moles of hydrogen in your compound.

<h3 id="sec-c-composition">Composition analysis</h3>
Before calculating anything, it is usually appropriate to know the chemicals you are using. The first thing to realize is that not all atoms are similar in weight; consider a composition of H₂ and O, the O will make up most of the mass in a molecule — this happened because one O elements weight $16$u while a hydrogen atom weights at about $1$u.

An example to determine the **percentage composition** or how much each element takes up the total mass in a water molecule: first calculate how much each element weights in the entire compound:
\\[
    1\text{g H/mol H}\times2=2\text{g H/mol H}_2\text{O}
    \qquad
    16\text{g O/mol O}\times1=16\text{g O/mol H}_2\text{O}
\\]
In this stage, we calculate the weight of individual items that make up our compound. From the formula to create $1$ mole of water, you will need two moles of hydrogen and $1$ mole of oxygen — this is proportional to having 2 atoms of hydrogen and 1 atom of oxygen. Honestly, you could just make this calculation using atomic units instead of grams and it would work about fine but for the sake of accuracy, please refrain from doing so. Anyway. we will now total up the weight of individual elements to get the weight of the entire compound before calculating the percentage:
\\[
    2 + 16 = 18\text{g H}_2\text{O/mol H}_2\text{O}
\\]
\\[
    \%\text{H}
    = \frac{2 \text{g H}}{18 \text{g H}_2\text{O}}\times100
    = 11\%\text{H}
\\]
Despite you need two atoms of hydrogen to build a single molecule, clearly that single hydrogen atom takes up more weight.

The general formula to calculate the **percentage composition** with the mass of an element $m_A$ and the compound's mass $m_{AB}=m_A+m_B$ is:
<eq id="eq-c-percentage-composition">
    \%A = \frac{m_A}{m_{AB}}\times100\%
</eq>

To calculate an **empirical formula**, we start by pretending we have $100$g of the substance: $11$g of that substance would be hydrogen and $89$g would be oxygen. We now divide each of those numbers by the molar mass to obtain the number of moles in that mass:
\\[
    11\cancel{\text{g H}}
    \frac{1\text{mol H}}{1\cancel{\text{g H}}}
    = 11\text{mol H}
    \qquad
    89\cancel{\text{g O}}
    \frac{1\text{mol O}}{16\cancel{\text{g O}}}
    = 5.5625\text{mol O}
\\]
Then divide them by the smallest factor (in this case $5.5625$) to get the ratio between elements:
\\[ 11/5.5625=1.977 \\]
Because of the estimations in our equation, it is appropriate to assume that it is 2 moles of hydrogen for every oxygen atom or H₂0.

If you were to simplify the process of calculating **empirical formula** into an equation, define the formula A<sub>x</sub>B<sub>y</sub> and $n_A$ is the molar mass of A, we have the ratio:
<eq>
    x:y
    = \frac{\%A}{n_A} : \frac{\%B}{n_B}
    = m_A : m_B
</eq>

### Chemical equations
A chemical equation usually indicates the proportion of the chemicals that participate in a reaction, essentially showing the mole of particles you need.
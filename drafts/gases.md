---
layout: draft
title: Gases
---

### Volume, pressure, and temperature
The **volume** $V$ of a gas is simply the space that it occupies. However, because a gas goes everywhere, we will put it in a container and the volume of the container will be the volume of that gas. We also know that, by extension, the surface area of the gas's container is the surface area of the gas "blob" itself.

The **pressure** $P$ is the force exerted in a unit of of area. You must understand that inside a gas, molecules are flying around, constantly bumping to each other and the wall of the container. We also notice that according to Newton's Third Law, we have:
<eq>\begin{aligned}
    &F_\text{gas to container} = F_\text{container to gas} \quad\text{and}\quad A_\text{gas} = A_\text{container} \\
    \Rightarrow
    &P_\text{gas to container} = P_\text{container to gas}
\end{aligned}</eq>
Because of that, we can simply measure deduct the pressure _from_ a gas by measure the pressure we put _on_ the gas itself.

The **temperarure** $T$ measures the average kinetic energy of something. Because the tiny molecules in our gas are flying around, they are carrying energy. By averaging that out, we can obtain the temperature. You should also realize that the molecules in a gas usually have more kinetic energy those in a solid; this is because there are more total kinetic energy and less molecules to average out the sum.

### Ideal gas
The interaction between the molecules in a gas are very complex. However, when we put two specific assumptions, their interactions suddenly become much more simpler. Therefore, chemists came up with an **ideal gas**, which has two basic characteristics:
- the volume of a molecule is negligible; and
- the forces between the molecules are negligible.

The word "negligible" is doing some heavy lifting here. When you compare the size of a molecule to a 1 L container, the containers are obviously so big that it can hold trillions of molecules. Therefore, the size of each individual molecules are "negligible". Secondly, just like in physics, the force between the molecules are so small compared to the grand scheme of the system; just like there are still gravitational attraction between you and your crush, it is still a lot smaller compared to the actual gravitational pull of the Earth.

One spectacular failing point of the ideal gas assumption is when you reduce the volume to a very small number. In such a tiny space, the size of a molecule will become at least noticeable compared to the volume of the entire space. Moreover, because the space is so small, a tiny force can easily push a molecule half way across our space. This is also one of the reason why you always hear scientists say the very tiny world are very different from our current scale.

So if all of those properties are satisfied, we have the **ideal gas equation**:
<eq>
    PV = nRT \Leftrightarrow R = \frac{PV}{nT}
</eq>
where:
- $P$ is the pressure;
- $V$ is the volume;
- $n$ is the number of molecules;
- $R$ is the ideal gas constant; and
- $T$ is the temperature.

This equation can easily manipulated to your liking but one of the most used variation is when you take a snapshot of a gas "before" and "after state, facilitated by the fact that $R$ is a constant:
<eq>
    \frac{P_1V_1}{n_1T_1} = \frac{P_2V_2}{n_2T_2}
</eq>

What is the significance of the equation above? Well... let's say you have a container and a gas where you can control all of the variable above. If you keep the number of molecules and the temperature constant ($n_1 = n_2$ and $T_1 = T_2$), this equation will tell you that if you increase the volume, the pressure will be decreased:
<eq>
    \frac{P_1V_1}{\cancel{n_1}\cancel{T_1}} = \frac{P_2V_2}{\cancel{n_2}\cancel{T_2}}
    \Rightarrow P_1V_1 = P_2V_2
</eq>

And another equation to tell you that if you increase the pressure, the temperature will increase:
<eq>
    \frac{P_1\cancel{V_1}}{\cancel{n_1}T_1} = \frac{P_2\cancel{V_2}}{\cancel{n_2}T_2}
    \Rightarrow \frac{P_1}{T_1} = \frac{P_2}{T_2}
</eq>

When solving excercises dealing with ideal gases, it is simply about trying to figure out which variable will remain the same before and after the change.

Note that if we make sure $\frac{RT}{P}$ is constant (by holding temperature and pressure), we can determine the number of molecules in a gas from its volume. Therefore, chemists defined the condition where it is 1 atm pressure and 0&deg; celcius as **standard temperature and pressure** or **STP**<note>There are many different STP conditions and this is the one that the Author familiar with.</note>. With such STP, we can derive the a simple constant used to quickly convert between volume and the number of mols:
<eq>\begin{aligned}
    PV &= nRT \\
    \Leftrightarrow V &= n\frac{RT}{V} \\
    \Leftrightarrow V &= 22.4 \frac{\text{L}^2}{mol} \times n
\end{aligned}</eq>
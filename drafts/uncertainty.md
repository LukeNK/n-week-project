---
layout: draft
title: Uncertainty in Measurement
prerequisites:
    - p-sigfig
---

The way presented here is not the only way to handle uncertainty. However, this is what the Author knows and it is one of the famous standard way to deal with uncertainty calculation.

### Measurement
When you measure something, you will introduce some uncertainty in your calculation. Uncertainty is just a way for you to tell other scientists that "hey, the measurement I made may fall into this range of numbers." So for example, if the Author report his height as:
\\[
    1.70 \pm 0.25 m
\\]
That means the Author could be as tall as 1.95 m or as short as 1.45 m. However, you need to make an appropriate justification for the uncertainty that you get. So therefore, we will start with how uncertainty starts: from measurements.

#### Reading uncertainty
When you read a value of a mechanical scale, you will be off by a tiny amount because there are gaps between the divisions. Take <a href="#fig-p2"></a> for example.
<figure>
    <img src="{{ site.url }}/figures/p/2.png" style="max-height: 15rem;">
    <figcaption>Reading from a ruler</figcaption>
</figure>

There is a gap between the two lines of smallest division (1cm). Therefore, you will need to report that you have "guessed" the number between the gaps using uncertainty. That is why it is appropriate to state the **reading uncertainty** is:
- 1/4 of the smallest division if the distance between the divisions is small; else
- 1/10 of the smallest division otherwise.

That would be the end for most of the scales but for rulers, there is also one special rule: you will technically need to read the uncertainty from two different places on a ruler: the start and the end. Despite how careful you are at aligning the start, there is also a physical uncertainty. Therefore, the **reading uncertainty for rulers** is:
<eq>
    2 \times (\frac{1/4}\text{the smallest division}) = \frac{1}{2}\text{the smallest division}
</eq>

#### Physical uncertainty
If you were to measure the someone's height, there is an uncertainty comes from the fact that hair is fluffy which adds a few milimeters to their height. Or if you are trying to measure the diameter of a circle, you may misplace the ruler so that your measurement is a bit smaller than the actual diameter. Of course, you might try to shave everybody's hair from the first example but for an obvious reason, that is not available, so you would accept that as a physical uncertainty.

**Physical uncertainty** come from the properties of the measurement or the thing you are trying to measure.

Another possible physical uncertainty comes from using stopwatches. Human's reaction time is about 0.15 seconds, so if you are using a stopwatch to measure time, it is best to report it as your uncertainty.

#### Instrumental uncertainty
A lot of instruments will report that they have a small uncertainty, which you can refer from the user manual. Moreover, this also applies to digital measurement: a digital ruler that can report 1.543 m means there is an uncertainty of ± 0.001 m. So for instrumental uncertainty, you can just read the manual.

### Assumptions
When you say things like "neglect the effect air resistance," this is where you should account for them. Of course, it is up to your judgement to decide the value of uncertainty in this case. However, it is best to avoid taking measurement directly from experiments where you need to make assumptions.

### Propagation
If we have measurements so that they are recorded as:
<eq>
    A\pm\delta A
</eq>
Then this is the **fractional uncertainty**:
<eq>
    \frac{\delta A}{A}
</eq>
And this is the **percent uncertainty**, which tells you how far off you are in your measurements:
<eq>
    \frac{\delta A}{A} \times 100 \%
</eq>

So when we do math operations with uncertainty, we are combining the uncertainties of many independent measurements. Let's start with **addition/substraction**. Note that regardless of the operations, we are still *adding* the uncertainties inside the square root.
<eq>
    A + B - C \Rightarrow \sqrt{(\delta A)^2 + (\delta B)^2 + (\delta C)^2}
</eq>

Similarly, we have **multiplication/division**. Note that here, we are using fractional uncertainty in our calculation.
<eq>\begin{aligned}
    F &= \frac{A \times B}{C} \\\\\\
    \Rightarrow \frac{\delta F}{F} &= \sqrt{(\frac{\delta A}{A})^2 + (\frac{\delta B}{B})^2 + (\frac{\delta C}{C})^2} \\\\\\
    \Leftrightrrow \delta F &= \frac{AB}{C}\sqrt{(\frac{\delta A}{A})^2 + (\frac{\delta B}{B})^2 + (\frac{\delta C}{C})^2}
\end{aligned}</eq>

As for **composite function**, we will need to take the derivative. This is because the uncertainty is simply indicate how "off" you are, so when it is suplied into a fuction, the uncertainty needs to scale at the same rate as the value.
<eq>\begin{aligned}
    \frac{\delta F}{\delta A} &= F'(A) \qquad\text{definition of derivative} \\\\\\
    \Rightarrow \delta F &= \delta A \times F'(A)
\end{aligned}</eq>

### Significant figures
Surprisingly, the rule to keep track of the significant figures also change when you have uncertainty along with your number. In fact, it makes everything easier! Let's start with the number of sigfigs in the uncertainty:
- If the first digit is 1 or 2, round to 1 significant figures; else
- round to 1 significant figure.

Then, the number of decimals places in your value should match the number of decimal places in your uncertainty. That is why when you take measurements with uncertainty, you do not have to keep track of the significant figures in your calculations.
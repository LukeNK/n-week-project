---
layout: draft
title: Kinematics
prerequisites:
    - m-vector-intro
---

### Measurements of kinematics
Let's start with defining the basic: an object with have a **position**. For example, you are (hopefully) reading this in a comfy place, so that is your position in a space. However, that description is not specific enough for physics: we will need to determine two things to describe a position: your reference point and how far you are from that reference point. So we can define your location as "1 meter to the North of your homework" and that will make it appropriate for our calculation. Note that this principle of relativity will "stack", which means other definitions based on position will also be relative to something. In this chapter, we will define position as a vector relative to the homework:
<eq>
    \vec{p} = \text{how far you are from the homework}
</eq>

If you move to a differenct place (change of position), it is called **displacement**. Note that the displacement does not concern about the _path_ you moved, but about the start and the end. So let's say you decide to move to the homework but then exit to your kitchen, and your new position is 11 meters to the South of the homework, then your displacement can be calculated with your initial position $p_i$ and final position $p_f$
<eq>
    \vec{d} = \delta p = \vec{p_f} - \vec{p_i}
</eq>

You should get your displacement as 10 meters to the South. You should also notice that there is another layer of relativity here: regardless of where you are in your space, you can still follow the instruction "move 10 meters to the South". So displacement is simply describe the difference between your old and new position, and it does not concern about where is your start point. Moreover, what if you throw your pile of homework out of the window (10 meters to the North)? From your perspective, it is the homework that is moving; from the homework's perspective, it is you and the world that is moving.

The SI unit of position and displacement is basically the measurement of a length, so we use meters.

To tell how fast you are moving from one position to another, you will need to time your movement. If you take 10 seconds to move the same distance compared to 50 second when you are not hungry, that means you are moving faster. That is what **velocity** indicates: the displacement over a unit of time. So in short, how long it takes you to change your position is the velocity:
<eq>
    \vec{v} = \frac{d}{t} = \frac{\vec{p_f} - \vec{p_i}}{t_v}
</eq>

So you should get 1 m/s for your velocity. This is just another way to confirm that velocity is now much we have moved in one second. If you have a bigger number, that means in the same time span, your position will change more.

If we want to describe the change in our velocity, we will use **acceleration**. Before you started moving, you were sitting at 0 m/s, and after a second, you were moving at 1 m/s. So we can calculate your acceleration within that timespan using:
<eq>
    \vec{a} = \frac{\delta v}{t_a} = \frac{\vec{v_f} - \vec{v_i}}{t_a}
</eq>

So your acceleration should be $1\text{m}\text{s}^{-2}$. Notice that we have been very careful to separate the time it takes to move $t_v$ with the time it takes to accelerate $t_a$. The time it takes for you to get to a destination is different from the time it takes you to get to that velocity. For example, a car can get from 0 to 100 km/h in less than 3 seconds, but that car still needs 10 hours to travel 1000 km from Vancouver to Calgary. However, in most textbooks, you will need to make that distinction by yourselves; in the next section, you will also need to consider what is time actually refer to: the time between the positions of concern.

The direction of acceleration can be a bit of a concern, so rather than thinking about a direction, just pick a possible and a negative side. So if I have up is possitive,  my velocity is $10\text{m/s}$, and the gravitational acceleration is $-9.81\text{m}\text{s}^{-2}$, I know that the acceleration is _against_ my velocity, which will eventually turn my velocity to negative (therefore making velocity go _with_ my acceleration). Therefore, the main question you can ask yourselves is: is my acceleration with or against my velocity?

### Kinematics equations
In all of these basic kinematics equation, we assume one important thing: the acceleration $\vec{a}$ never change. Because acceleration is the change in velocity, you can get the new velocity after a time $t$ has passed:
<eq>
    \vec{v} = \vec{v_i} + \vec{a}t
</eq>

Because the acceleration never change, we can safely assume that half of the time, the velocity is below the average velocity, and the other half of time, it is above the average. Therefore, we can get the displacement with:
<eq>
    \vec{d} = \vec{v_{avg}}\cdot t = \frac{\vec{v_i} + \vec{v_f}}{2}t
</eq>

If we combine the two equation above by setting $\vec{v_f} = \vec{v_i} + \vec{a}t$, we will have another way to solve for the displacement:
<eq>
    \vec{d} = \vec{v_i}t + \frac{1}{2}\vec{a}t^2
</eq>

In case you do not have time (puns intended), you do have this particular equation of kinematics that does not require $t$:
<eq>
    2\vec{a}\vec{d} = \vec{v_f}^2 - \vec{v_i}^2
</eq>

In kinematics exercises, you will need to pick two points in the journey that you have the most information. They are usually the start and the end, but they could be two different points that the question give you.

<!-- ### Graph of kinematics functions -->
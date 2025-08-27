
## Vectors in coordinate space
_If you are reading this section with the image of an arrow, then this is a chapter for you. If you are seeking for a tuple or even more, then this section will be a brief primer for that._ This chapter does not concern about the correct definitions of things but rather focusing on making you understand the concepts as well as the connection between each level of visualization.

This chapter will walk the reader through three seemingly different ways to imagine a vector, each of them the Author encountered in different grade highschool<note>Vietnamese highschool system has 3 grades: 10 to 12</note>. However, teachers rarely had the time to recall the old concepts before moving on to the main lesson, so this chapter is that bridge that the Author did not have.

### Vectors in geometry
<figure>
    <img src="{{ site.url }}/figures/m/1.jpeg">
    <figcaption>3 points with vectors between them</figcaption>
</figure>
The first intuition to get is the fact that a vector is simply an instruction to move from one place (point) to another. In <a href="#fig-m1"></a>, we also notice that even if we move from A to B then to C, it is still end up as if we moved directly from A to C. Therefore, we can represent **vector addition** with this:
<eq> \vec{AB} + \vec{BC} = \vec{AC} </eq>
A good intuition is simply to connect the vector head-to-tail — we most get to the point B first before we continue our journey from B to C. However, we must remember that it is not the destination that matters<note>As the saying goes: "It is not the destination but the journey that matters"</note>, but the length and the direction — it just happen that if you started from a point and ended up at the same terminal point, then you must have gone the same direction and length.

We also notice that there are two directions between two points that are opposite from each other, therefore **opposite vectors** can be represented with:
<eq id="eq-m3"> \vec{AB} = -\vec{BA} </eq>
With that being said, we can understand that **subtracting** a vector is the adding the flipped vectors:
<eq>
    \vec{AB} - \vec{CB}
    = \vec{AB} + \vec{BC}
    = \vec{AC}
</eq>
If after all of the instruction, we come back to our starting place, we call it a **null-vector**:
<eq>
    \vec{AB} + \vec{BC} + \vec{CA}
    = \vec{AA}
    = \vec{0}
</eq>


In case we want to add two vectors with the same initial point, we can use the **parallelogram laws**. Recall that a parallelogram is a shape with the facing sides are of equal length, therefore a parallelogram ABCD will have $AD = BC$. So if we have two vectors $\vec{AB}$ and $\vec{AD}$ that we want to add, we can construct a parallelogram with the vectors as two consective sides:
<figure>
    <img src="{{ site.url }}/figures/m/4.png">
    <figcaption>A parallelogram from $\vec{AB}$ and $\vec{AD}$</figcaption>
</figure>
<eq>
    \vec{AB} + \vec{AD}
    = \vec{AB} + \vec{BC}
    = \vec{AC}
</eq>

If instead of determine a set start and end for our vector, we can set it to be using an arbitrary name (commonly with a lower case letter) like $\vec{a}$.

From <a href="#eq-m3"></a>, we can see that $ \vec{AB} = -1\times\vec{BC} $, therefore a **multiple of a number with a vector** will return a scaled version of that vector. If we have a midpoint M of AC, what we get is the fact that AM is parallel to AC**:
<eq> \vec{AM}&par;\vec{AC} &hArr; \vec{AM} = k\cdot\vec{AC}</eq>
In this case, $k=1/2$.


### Vectors and coordinates
<h4>General intuition</h4>
<figure>
    <img src="{{ site.url }}/figures/m/2.jpg">
    <figcaption>Vectors in coordinate system, courtesy of BCCampus' Pressbooks</figcaption>
</figure>
Continuing with the section above: what if we give each point a coordinate? Consider the axis Ox, we can define a **unit vector** by giving the length of 1 for $\vec{i}$; we define similar with Oy and $\vec{j}$. We can define any vector in the Oxy system with <a href="#fig-m2"></a>. Since a vector is an instruction to move from one point to another, we can subtract their coordinates to yield that instruction. In the image above<note>The representation of vectors using upper or lower case depends on culture, so be mindful that for this specific image, a vector without a clear head or tail will take an upper case letter. </note>, it is:
<eq>
    A_x = \Delta x = x_e - x_b \\\\\\
    A_y = \Delta y = y_e - y_b
</eq>
This works because at the end of the day, the head of the result vector is the head-to-tail addition of the two unit vectors. This is the **Cartesian coordinate system**.

In a coordinate system, we rarely concern about the coordinate of the initial point — we always assume that it is the origin. Therefore, a vector is an instruction of how to _move_; it is an instruction to walk a head 10 steps but the reader could "execute" that order from anywhere: 10 steps in an empty area or 10 steps into a wall inside their home. If the intuition in geometry is a direction to "walk from school to home", this will be "walk ahead for 1km". This should come as natural if you think of real number: $+10$ is simply to tell you walk along the number line 10 numbers and $-5$ is walk backward — to calculate $10+(-5)$ is simply to reach 10 first and go back 5, but you still represent them with the origin at 0 when they stand alone (<a href="#fig-m3"></a>)
<figure>
    <img src="{{ site.url }}/figures/m/3.png">
    <figcaption>The number line of $10-5$ which is simply an axis in the Oxy plane</figcaption>
</figure>

Another way to describe vectors is by using a magnitude and a direction, which is a familiar way for physicists to describe forces, displacement, etc... In fact, you are probably using it to describe things in your daily life: you will say "throw the ball 45 degree to the air". This is the basic of **polar coordinate system**: a point defined by a distance from a reference point, and an angle measured from a reference line.

<h4>Math on vectors</h4>
Since vectors in _most_ coordinate system can be break down into unit vectors (each axes component), we can represent vectors like this:
<eq>
    \vec{a}
    = x_a\vec{i} + y_a\vec{j}
    = (x_a, y_a)
</eq>

We can further break down the **components** of the vector into x and y, and calculate them individually as if we are working with two number lines. Therefore, **addition** and **subtraction** by doing the math on each axis:
<eq>
    \vec{a} + \vec{b}
    = (x_a + x_b, y_a + y_b)
</eq>

In the case of having an angle between two vectors, you can use the cosine law to find the resultant vector:
<eq>
    c^2 = a^2 + b^2 + 2ab\cos{\theta}
</eq>The proof is left as an exercise for the reader.
<figure>
    <img src="{{ site.url }}/figures/m/5.png" alt="">
    <figcaption>The formula of vector addition is similar to the cosine law, because the relationship $\theta + \alpha = 180&deg;$</figcaption>
</figure>

<h4>Dot product</h4>

### Ordered list of number
In sections above, we represented vectors as a list of numbers, forming a coordinates. What if we do not use a coordinate system and assign a different meaning to vectors? This is the very foundation of vector: it is a list of numbers in order. We just happen to use a coordinate plane to visualize them to ease the introduction to vectors.
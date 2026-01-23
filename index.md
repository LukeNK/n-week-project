---
layout: full
chapters:
    math:
        - logic-proof
        - set
        - sigfig
        - imaginary-number
        - permutation-combination
        - limit
        - derivative
        - integral
    chemistry:
        - useful
        - stoichiometry
        - electron-config
    physics:
        - mecanical-fwpe
        - braket
        - qubit
        - entangle
---
{% comment %}
    https://stackoverflow.com/questions/71475643/include-another-page-with-jekyll-without-displaying-front-matter
{% endcomment %}

{% for subject in page.chapters %}
# {{ subject[0] | capitalize }}
    {% for chapter in subject[1] %}
        {% assign sub = subject[0] | slice: 0, 1 %}
        {% assign path = "_" |  append: sub | append: "/"  %}
        {% assign path = path | append: chapter | append: ".md" %}
    {% capture text %}
{% include_relative {{ path }} %}
    {% endcapture %}
    {{ text | split: "---" | last }}
    {% endfor %}
{% endfor%}
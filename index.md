---
layout: full
chapters:
    math:
        - all
        - calc
    chemistry:
        - all
    physics:
        - all
---
{% for subject in page.chapters %}
# {{ subject[0] | capitalize }}
    {% for chapter in subject[1] %}
        {% assign sub = subject[0] | slice: 0, 1 %}
        {% assign path = "chapters/" |  append: sub | append: "/"  %}
        {% assign path = path | append: chapter | append: ".md" %}
{% include_relative {{ path }} %}
    {% endfor %}
{% endfor%}
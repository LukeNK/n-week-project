---
layout: draft
---
{% for page in site.pages %}
    {% assign ext = page.name | split: "." | last%}
    {% if ext == "md" %}
        {% if page.layout == "draft" and page.name != "draft.md" %}
            {% include_relative {{ page.path }} %}
        {% endif %}
    {% endif %}
{% endfor %}
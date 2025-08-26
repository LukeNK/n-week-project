---
layout: excerpt
---
{% for page in site.static_files %}
    {% if page.extname == ".md" %}
        {% assign dir = page.path | slice: 1, 6 %}
        {% if dir == "drafts" %}
            {% include_relative {{ page.path }} %}
        {% endif %}
    {% endif %}
{% endfor %}
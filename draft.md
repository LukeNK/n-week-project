---
layout: draft
---
{% for page in site.pages %}
    {% assign ext = page.name | split: "." | last%}
    {% if ext == "md" %}
        {% if page.layout == "draft" and page.name != "draft.md" %}
            {% capture text %}
{% include_relative {{ page.path }} %}
            {% endcapture %}
            {% if page.title %}
## {{ page.title }}
            {% endif %}
            {{ text | split: "---" | first }}
            {{ text | split: "---" | last }}
<hr>
        {% endif %}
    {% endif %}
{% endfor %}
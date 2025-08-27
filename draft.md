---
layout: excerpt
---
{% for page in site.static_files %}
    {% if page.extname == ".md" %}
        {% assign dir = page.path | slice: 1, 6 %}
        {% if dir == "drafts" %}
{% include_relative {{ page.path }} %}

<hr>
        {% endif %}
    {% endif %}
{% endfor %}
<p>Draft content for <i>N-week-project</i> by LukeNK</p>
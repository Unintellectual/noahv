---
title: Research
layout: base.html
---

<h1>Research</h1>
<ul>
  {% for topic in collections.research %}
    {% if "research/" in topic.inputPath and "index.md" not in topic.inputPath %}
      <li>
        <a href="{{ topic.url }}">{{ topic.data.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>

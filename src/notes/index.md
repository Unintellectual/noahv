---
title: Notes
layout: base.html
---

<h1>Notes</h1>
<ul>
  {% for note in collections.notes %}
    {% if "notes/" in note.inputPath and "index.md" not in note.inputPath %}
      <li>
        <a href="{{ note.url }}">{{ note.data.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>


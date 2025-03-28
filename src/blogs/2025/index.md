---
title: 2025 
layout: base.html
---

<h1>2025 Blogs</h1>

<ul>
  {% for post in collections.blogs %}
    {% if "blogs/2025/" in post.inputPath and "index.md" not in post.inputPath %}
      <li>
        <a href="{{ post.url }}">{{ post.data.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>

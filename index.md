---
layout: main
title: Home
---

# Post by category
<ul>
{% for post in site.categories.animation %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

# Post by tag
<ul>
{% for post in site.tags.animation %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

# Post by collection
<ul>
{% for post in site.animation %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

{% for category in site.categories %}
{{ category | jsonify }}
{% endfor %}

{{ page.next | jsonify }}

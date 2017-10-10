---
order: 10
title: "Custom Sidebar Widget"
nav: "sidebar-widget"
ghost-docs: "true"
type: "ghost-docs"

---
You can customize the widget sidebar as you wish, just create comment block to hide the widget. 

Follow this step below to customize the widget.
* Open `partials/sidebar.hbs` file located in this theme-name’s directory, e.g.`content/themes/theme-name` directory.

{% raw %}
```handlebars
<aside class="o-grid__sidebar c-main-content__sidebar">
   
   {{> "widget-author"}}
   
   {{> "widget-category"}}
   
   {{> "widget-resent-post"}}
   
   {{> "widget-tags"}}
   
   {{> "widget-facebook-page"}}
    
</aside>
```
{% endraw %}

* Create comment block to hide widget that you don't want, e.g: To hide the `widget author`, just create comment block like this
{% raw %}
```handlebars
   {{> "widget-author"}}
```
{% endraw %}

to

{% raw %}
```handlebars
   {{!-- {{> "widget-author"}} --}} 
```
{% endraw %}

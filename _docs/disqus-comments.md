---
order: 8
title: "Disqus Comments"
nav: "disqus-comments"
ghost-docs: "true"
type: "ghost-docs"

---
This theme comes with Disqus comments disabled.

To use Disqus for commenting, just `uncomment` this block code with remove {% raw %} `{{!--` before and `--}}` {% endraw %} after code block. The only thing you need to change is `theme-demo-id`, then should be replaced with your own `disqus-shortname-id`

If you still confused, follow the steps below:

* Create a free [Disqus](http://disqus.com/) account and follow the steps to [install Disqus on a website](https://disqus.com/admin/create/). 
* Open `partials/disqus-comments.hbs` file located in this theme-name’s directory, e.g.`content/themes/theme-name` directory.

{% raw %}
```handlebars
<section class="c-single-post__comments">
    <div id="disqus_thread"></div>
    <script>
        var disqus_config = function () {
            this.page.url = '{{url absolute="true"}}';
            this.page.identifier = 'ghost-{{comment_id}}';
        };
        (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://theme-demo-id.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
    </script>
</section>
```
{% endraw %}

* Change the `theme-demo-id` value for the `disqus-shortname-id` source to match your Disqus account shortname.
```handlebars
 s.src = 'https://theme-demo-id.disqus.com/embed.js';
 ```

* So, if your Disqus shortname is `yourname`, the final code above should be
```handlebars
s.src = 'https://yourname.disqus.com/embed.js';
```

## Adding Comment Count Links on Home Page or Single Page
To display the comment count for each page with comments, on home page or single page. We use code snippet which displays the number of comments for pages with Disqus embedded.

![count-link](/assets/images/count-link.png){:class="c-img-center"}

* Open `partials/disqus-comments-sync.hbs` file located in this theme-name’s directory, e.g.`content/themes/theme-name` directory.
```handlebars
<script id="dsq-count-scr" src="//theme-demo-id.disqus.com/count.js" async></script>
```
* Change the shortname variable from `theme-demo-id` to whatever the shortname is of the forum you're using. Your shortname can also be found on your forum's Admin > Settings > General page.
* So, if your Disqus shortname is `yourname`, the final code above should be
```handlebars
<script id="dsq-count-scr" src="//yourname.disqus.com/count.js" async></script>
```

That’s all you need to setup Disqus from the theme side. If you get any issue regarding that comments are unable to load. First, make sure you have [registered your website with Disqus (Step 1)](https://help.disqus.com/customer/portal/articles/466182-publisher-quick-start-guide)

And also check [Disqus troubleshooting guide](https://help.disqus.com/customer/portal/articles/472007-i-m-receiving-the-message) if you still have issues.

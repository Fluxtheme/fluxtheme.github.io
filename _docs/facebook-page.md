---
order: 14
title: "Facebook Page Widget"
nav: "facebook-page"
ghost-docs: "true"
type: "facebook"

---
To activate Facebook page on your blog widget, open `partials/widget-facebook-page.hbs` file located in this theme-name’s directory, e.g.`content/themes/theme-name` directory. Replace `https://www.facebook.com/fluxtheme` with your own Facebook page address

```handlebars
<section class="c-sidebar-widget">
    <div class="c-facebook-page">
       <h2 class="c-widget-title">Follow Us</h2>
        <div class="fb-page" data-href="https://www.facebook.com/Fluxtheme" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/Fluxtheme" class="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/Fluxtheme">FluxTheme</a>
            </blockquote>
        </div>
    </div>
</section>
```
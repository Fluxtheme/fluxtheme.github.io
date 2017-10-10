---
order: 11
title: "Social Media Links"
nav: "social-media-links"
ghost-docs: "true"
type: "ghost-docs"

---
Social media links are placed in different places (files), e.g:

- `partials/social-profiles.hbs`
- `partials/widget-social.hbs`

Ghost 0.8.0 supports adding Facebook and Twitter profile URLs from the admin panel, go to `Settings > General` and add your URLs, and this will update the Facebook and Twitter URLs in the locations mentioned above, other social media URLs you can add it from the files.

![social-accounts](/assets/images/social-accounts.png){:class="c-img-center"}

For using other social accounts, this theme is using Font Awesome Icons, which contains very simple and clean icons. Here you can find a list of the social media icons to use:

Google Plus
```handlebars
<a class="c-social-links__icon" href="#"><i class="fa fa-google-plus"></i></a>
```
Pinterest
```handlebars
<a class="c-social-links__icon" href="#"><i class="fa fa-pinterest"></i></a>
```
Instagram
```handlebars
<a class="c-social-links__icon" href="#"><i class="fa fa-instagram"></i></a>
```
SoundCloud
```handlebars
<a class="c-social-links__icon" href="#"><i class="fa fa-soundcloud"></i></a>
```
Tumblr
```handlebars
<a class="c-social-links__icon" href="#"><i class="fa fa-tumblr"></i></a>
```
Youtube
```handlebars
<a class="c-social-links__icon" href="#"><i class="fa fa-youtube"></i></a>
```

To edit or update other excisted social links, let’s take an example from `partials/social-profiles.hbs` file, for example, the Instagram code block:
```handlebars
<div class="c-social-links">

    <a class="c-social-links__icon" href="#"><i class="fa fa-google-plus"></i></a>

    <a class="c-social-links__icon" href="#"><i class="fa fa-pinterest"></i></a>

    <a class="c-social-links__icon" href="#"><i class="fa fa-instagram"></i></a>
            
</div>
```
The code above contains the ICON code from the above list, the social media link (a) within a list code block.

Next, replace your Instagram full URL with the link href value so if your Instagram URL is:
`https://www.instagram.com/ghost/`
the new code will be:
```handlebars
<div class="c-social-links">

    <a class="c-social-links__icon" href="#"><i class="fa fa-instagram"></i></a>
            
</div>
```
If you want to completly remove Instagram, you can delete all the code block, the a and the icon.

This concept is applied to all the custom icon list available in the 3 social media places.

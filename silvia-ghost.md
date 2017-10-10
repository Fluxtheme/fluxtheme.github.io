---
layout: docs-silvia
title: Silvia Ghost Theme
description: Current Version 1.0.0 - 26 August 2017
permalink: /docs/silvia-ghost/
---


## Introduction

First of all, Thank you so much for purchasing this theme and for being my loyal customer. You are awesome! 
You are entitled to get free lifetime updates to this product + exceptional support from the author directly.

This documentation is to help you regarding each step of customization. Please go through the documentation carefully to understand how this theme is made and how to edit this properly. Basic HTML and CSS knowledge is required to customize this theme. You may learn basics here, here and here.

## Requirements

You will need the following sofwares to customize this theme.

1. Code Editing Software (eg: Atom, Brackets or Notepad)
2. Web Browser for testing (eg: Google Chrome or Mozilla Firefox)
3. FTP Tool to upload files to Server (eg: FileZilla)

> Be careful while editing the theme. If not edited properly, the design layout may break completely. 
No support is provided for faulty customization.

## Getting Started

## How to Install Ghost

## How to Install Theme

> If you don't already have a theme, check out the Ghost themes section of this site.

You are able to upload, activate, and delete a Ghost theme in the admin section of your Ghost blog. You can also drop the theme into the Ghost files manually. It is recommended to upload through the Ghost admin, but here is how to do both anyway:

### Upload through admin

- Log into the admin section of your Ghost blog yourblog.com/ghost.
- Select `Design` from the left hand side of your admin area and scroll to the very bottom.
- Click on the `Upload a Theme` green button.
- An upload box will open, then choose the theme (silvia.zip) within the downloaded package.

> Note: Your theme must be in zip format at this time, so if your theme is a folder, you must re-zip it.

- Once uploaded, click on `Activate now` button to activate the theme immediately or Close if you want to activate it later.

### Upload manually

- Unzip your theme if needed. If you are using the command line, here is the command for that:
```bash
unzip /path/to/downloaded/silvia.zip
```
- Copy the new theme into Ghost theme directory `ghost/content/themes/`. Again, if you are using the command line:
```bash
sudo cp -R /path/to/theme/folder /path/to/ghost/content/themes/.
```
- Restart your Ghost blog
- In a web browser, navigate to your ghost website's settings:
```bash
http://your_url.com/ghost/settings/general/
```
- Scroll down to the bottom to see a full list of all your themes.
- Click on `Activate` next to the theme you want to activate and it will be activated!

## Static Pages

A static page is a page that you want to separate from your normal post content. The most popular examples of a static page are a contact page and an about page. These pages you want to be static so they do not show up in your post feed.

In order to create a static page you create a new post, just like you would any other post. Once you have opened up the new post, there is a cog wheel icon next to where it says `“Save Draft”` or `“Update Post”` depending on if you have published the post or not. Click on that cog, and check the `“Turn this post into a static page”` box. This will convert your post to a static page.

![static-pages](/assets/images/static-pages.png){:class="img"}

## Navigation

You can add, edit, delete and reorder menu links on your Ghost blog, directly from the navigation tool within the blog admin area, located at `Design` from the left hand side of your admin area.

![navigation](/assets/images/navigation.png){:class="img"}

To include a static page on your navigation menu, first, type the name of the page as you’d like it to appear on your menu in the label field.

![add-navigation](/assets/images/add-navigation.png){:class="img"}

Next, click inside the URL field of the menu item. The blog URL will auto-populate with `http://yourdomain.com/`. You will need to add in the page slug after the final `/`. Once satisfied with your page link, click the blue Save button to add the page to the navigation menu.

## Disqus Comments

Silvia Theme comes with Disqus comments enabled.

Open `partials/disqus.hbs` file, and change the `silviatheme-demos` value for the `disqus_shortname` variable to match your Disqus account shortname.
```bash
var disqus_shortname = "silviatheme-demos";
```

So, if your Disqus shortname is `yourname`, the final code above should be
```bash
var disqus_shortname = "yourname".
```

That’s all you need to setup Disqus from the theme side. If you get any issue regarding that comments are unable to load. First, make sure you have [registered your website with Disqus (Step 1)](https://help.disqus.com/customer/portal/articles/466182-publisher-quick-start-guide)

And also check [Disqus troubleshooting guide](https://help.disqus.com/customer/portal/articles/472007-i-m-receiving-the-message) if you still have issues.

## Instagram

The Instagram feed is working using [Instafeed.js](http://instafeedjs.com/) to show the photos.

First, you will need to get your account `userId` and `accessToken` from the following URLs:

userId: [smashballoon.com/instagram-feed/find-instagram-user-id](https://smashballoon.com/instagram-feed/find-instagram-user-id/)
accessToken: [instagram.pixelunion.net](http://instagram.pixelunion.net/)
Second, open the `assets/js/instagram.js` file and replace the `userId` and `accessToken` values.
```javascript
var instagramFeed = new Instafeed({
  get: 'user',
  limit: 9,
  resolution: 'standard_resolution',
  userId: '',
  accessToken: ''
});
```
You can control how much images to show by changing the `limit` number. Theme default is set to `9` images.

## Posts Per Page

With Ghost 1.0, the [“Posts per page”](https://themes.ghost.org/docs/packagejson#section--config-posts_per_page-) setting is now part of the theme. The config purpose is to control how many posts to show per page from the `package.json` file like this:
```json
"config": {
  "posts_per_page": 12
}
```
Silvia theme default value is set to 12 posts per page.

## Related Posts

Related posts will be visible on the single post page when there are similar posts with similar tags, and will be hidden otherwise.

You will need to enable the Public Api from Ghost admin. Go to `Settings > Labs` and check the *Public Api* mark to enable it.

![public-api](/assets/images/public-api.png){:class="img"}

## Subscribe Form

Subscribers can be enabled via a checkbox on the Labs page, in your Ghost admin panel:

![subscriber](/assets/images/subscriber.png){:class="img"}

You can read more about [Subscribers](http://support.ghost.org/subscribers-beta/)

## Social Media Links

Social media links are placed in different places (files):

- `partials/social-profiles.hbs`
- `partials/sidebar/widget-social.hbs`

Ghost 0.8.0 supports adding Facebook and Twitter profile URLs from the admin panel, go to `Settings > General` and add your URLs, and this will update the Facebook and Twitter URLs in the locations mentioned above, other social media URLs you can add it from the files.

The theme is using Font Awesome Icons, which contains very simple and clean icons. Here you can find a list of the social media icons to use:
```html
<a class="c-social-links__icon" href="#"><i class="fa fa-google-plus"></i></a>
```
```html
<a class="c-social-links__icon" href="#"><i class="fa fa-pinterest"></i></a>
```
```html
<a class="c-social-links__icon" href="#"><i class="fa fa-envelope"></i></a>
```

## Update Favicon

The favicon in Ghost 1.0 could be changed from the Blog settings from the Publication icon section.

![favicon](/assets/images/favicon.png){:class="img"}

## Theme Development

If you are a developer and need to do customization work, the theme is using PostCSS and Gulp, the popular automation tool. This improves the development flow and making it much faster.

This is the step by step to customize the theme

1. Before beginning to customize the theme, you should unzip `silvia.zip` theme file to `/content/themes/` directory
2. Open a shell and navigate to `/content/themes/silvia` directory that contains theme's `package.json`.
3. Install a package by running
```bash
npm install
```
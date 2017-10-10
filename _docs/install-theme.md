---
order: 2
title: "How To Install Theme"
nav: "install-theme"
ghost-docs: "true"
type: "ghost-docs"
---
> If you don't already have a theme, check out the Ghost themes section of this site.

You are able to upload, activate, and delete a Ghost theme in the admin section of your Ghost blog. You can also drop the theme into the Ghost files manually. It is recommended to upload through the Ghost admin, but here is how to do both anyway:

### Upload through admin

- Log into the admin section of your Ghost blog `yourblog.com/ghost`.
- Select `Design` from the left hand side of your admin area and scroll to the very bottom.
- Click on the `Upload a Theme` green button.
- An upload box will open, then choose the theme (theme-name.zip) within the downloaded package.

> Note: Your theme must be in `zip` format at this time, so if your theme is a folder, you must re-zip it.

![upload-theme](/assets/images/upload-theme.png){:class="c-img-center"}

- Once uploaded, click on `Activate now` button to activate the theme immediately or Close if you want to activate it later.

### Upload manually

- Unzip your theme if needed. If you are using the command line, here is the command for that:
```bash
unzip /path/to/theme/theme-name.zip
```
- Copy the new theme into Ghost theme directory `ghost/content/themes/`. Again, if you are using the command line:
```bash
sudo cp -R /path/to/theme/theme-name /path/to/ghost/content/themes/.
```
- Restart your Ghost blog
```bash
ghost restart
```
- In a web browser, navigate to your ghost website's settings:
```bash
http://your-blog.com/ghost/#/settings/design
```
- Scroll down to the bottom to see a full list of all your themes.
- Click on `Activate` next to the theme you want to activate and it will be activated!

## Enable the Public API

Public API is important for some functionality like search, tags page, and subscribe form to work properly. You can enable the Public API from Ghost admin. Go to `Labs > Beta features` section and check the `Public API` mark to enable it.

![public-api](/assets/images/public-api.png){:class="c-img-center"}

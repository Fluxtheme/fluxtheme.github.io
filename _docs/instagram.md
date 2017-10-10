---
order: 15
title: "Instagram"
nav: "instagram"
ghost-docs: "true"
type: "instagram"

---
The Instagram feed is working using [Instafeed.js](http://instafeedjs.com/) to show the photos.

First, you will need to get your account `userId` and `accessToken` from the following URLs:

* UserId: [smashballoon.com/instagram-feed/find-instagram-user-id](https://smashballoon.com/instagram-feed/find-instagram-user-id/)
* AccessToken: [instagram.pixelunion.net](http://instagram.pixelunion.net/)
* Open the `partials/instafeed-js.hbs` file and replace the `userId` and `accessToken` values.
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

> If you want to hide Instagram feed on your blog, Just create comment block on this script code like this

{% raw %}
```javascript
{{!-- create comment block to hide Instagram feed
<script type="text/javascript">
    var userFeed = new Instafeed({
    get: 'user',
    limit: 12,
    userId: '4209199xxx',
    accessToken: '4209199386.1677ed0.e30dca82120c4ff1912bca8019xxxxxx',
    });
    userFeed.run();
</script>
--}}
```
{% endraw %}
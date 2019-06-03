### UserChrome.js, userChrome.css & userContent.css

Mozilla Firefox stores (by default) [your data in your profile folder](https://support.mozilla.org/kb/profiles-where-firefox-stores-user-data). Inside that folder you can create a folder named chrome, and place the following files in it:

```css
Firefox\Profiles\8dd4f6j.default\chrome\
    NewTab_custom-page.uc.js
    userChrome.css
    userChrome.xml
    userContent.css
```


### What are the files for?

* `userChrome.xml` - Allows `*.uc.js` files placed in your chrome folder to run in your Firefox browser. That said, it enables [some functionality](https://www.userchrome.org/what-is-userchrome-js.html) that's unavailable to add-ons/extensions, like opening a custom search field locally in each new tab.
* `userChrome.css` - The file can change the appearance of the user interface and apply [XML/XBL bindings to elements](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XBL).
* `userContent.css` - Basically spoken it can change the appearance of any web sites, and some internal pages like _about:newtab_.


### Limitations

The files do not allow you to run user scripts on web pages, for this case you need a script engine like [Violentmonkey](https://addons.mozilla.org/firefox/addon/violentmonkey/).


### HowTo setup

* Enter `about:support` into your Firefox's address bar, then click the `Open Folder` button which launches a file manager window with your current Firefox profile folder.
* In case you downloaded a .zip package which contains a pre-made configuration, extract it into your Firefox profile folder, it will create the chrome folder (if the file structure in the .zip package is correct). You will see the `userContent.css`, `userChrome.css`, and `userChrome.xml` inside the `chrome` folder.


**A restart is required for the change to take effect**!


## Examples

For userChrome.js
* [dupontjoy collection](https://github.com/dupontjoy/userChrome.js-Collections-)
* [ardiman's collection](https://github.com/ardiman/userChrome.js)

For userContent.css
* [Userstyles.org](https://userstyles.org/) or [r/userstyles](https://www.reddit.com/r/userstyles/)

For userChrome.css
* [UserChrome-Tweaks](https://github.com/Timvde/UserChrome-Tweaks)
* [userChrome.org](https://www.userchrome.org/)
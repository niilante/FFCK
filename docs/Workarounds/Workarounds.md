## Workarounds 

The list, is a small overview in case you suffered from an "config problem". 

I do not use these workarounds myself that's why they are not included in the user.js file, but they are worth to be mentioned, because some people might find them useful or they are affected by bug x.

### Single monitor users only
See [here](https://hub.displaycal.net/forums/topic/any-idea-whats-wrong-with-my-chrome/) for more details.

* `user_pref("gfx.color_management.enablev4", true);`
* `user_pref("gfx.color_management.mode", 1);`


### Disable alt+key behavior
* `user_pref("ui.key.menuAccessKeyFocuses", false);`


###  Irrelevant in terms of privacy (optional)
* `user_pref("excludeFlashFonts", true);`
* `user_pref("excludeJsFonts", true);`
* `user_pref("privacy.cpd.siteSettings", false);`
* `user_pref("privacy.cpd.passwords", true);`
* `user_pref("privacy.cpd.openWindows", true);`


### Linux only
* `user_pref("widget.content.gtk-theme-override", "Breeze");`


### Only in case you use e.g. GreasyMonkey
* `user_pref("extensions.greasemonkey.stats.optedin", false);`
* `user_pref("extensions.greasemonkey.stats.url", "");`


### Sync + example how to configure it per-extension: services.sync.prefs.<SETTING>
* `user_pref("services.sync.ui.hidden", true);`


### Loopback Bug
* Bug on non-Unix machines, see [here](https://bugzilla.mozilla.org/show_bug.cgi?id=100154).


### Wifi (Captive Portal)
* `user_pref("network.captive-portal-service.enabled", true);`
* `user_pref("network.trr.wait-for-portal", true);`


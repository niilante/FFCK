## Workarounds

This list is a small overview in case you suffered from any "config problem".

I do not use these workarounds myself because security reasons and while I'm often not affected, that's why they are not included in the user.js file, but they are worth to be mentioned, because some people might find them useful or they are affected by bug/problem x.

* [Workarounds](#workarounds)
  * [Single monitor users only](#single-monitor-users-only)
  * [Disable alt+key behaviour](#disable-altkey-behaviour)
  * [Linux only (_some tweaks_)](#linux-only-some-tweaks)
  * [Disable GreasyMonkey telemetry](#disable-greasymonkey-telemetry)
  * [Sync + example how to configure it per-extension: services.sync.prefs.<SETTING>](#sync--example-how-to-configure-it-per-extension-servicessyncprefssetting)
  * [Loopback Bug](#loopback-bug)
  * [Wifi (Captive Portal) -> On Android, the captive portal is handled by the OS itself!](#wifi-captive-portal---on-android-the-captive-portal-is-handled-by-the-os-itself)
  * [Persistent drop-down menu (in case you are affected)](#persistent-drop-down-menu-in-case-you-are-affected)
  * [MaCOS (I don't support it because I can't test it)](#macos-i-dont-support-it-because-i-cant-test-it)
* [Compressing the profile database to "gain some speed"](#compressing-the-profile-database-to-gain-some-speed)
* [Old about:config interface](#old-aboutconfig-interface)
* [I can't disable the "new tab" features on mobile, what can I do?](#i-cant-disable-the-new-tab-features-on-mobile-what-can-i-do)
* [Avoid getting "From this website" suggestions for login fields](#avoid-getting-from-this-website-suggestions-for-login-fields)
* [Temporary Containers creates thousands of user IDs and folders which waste my space, what can I do?](#temporary-containers-creates-thousands-of-user-ids-and-folders-which-waste-my-space-what-can-i-do)
* [Mozilla removed (since FF 71+) the site specific user-agent override option](#mozilla-removed-since-ff-71-the-site-specific-user-agent-override-option)
* [Stutters in fullscreen occur, especially on higher resolutions (1080p+)](#stutters-in-fullscreen-occur-especially-on-higher-resolutions-1080p)
* [Copy & Paste in Google Docs or Sheets does not work](#copy--paste-in-google-docs-or-sheets-does-not-work)
* [How do I disable the black scrollbar and it's background](#how-do-i-disable-the-black-scrollbar-and-its-background)
* [Tearing when WebRender is enabled](#tearing-when-webrender-is-enabled)
* [Multiple bookmark toolbar rows](#multiple-bookmark-toolbar-rows)
* [Remove the tab bar in Firefox 75+ via CSS](#remove-the-tab-bar-in-firefox-75-via-css)


### Single monitor users only
See [here](https://hub.displaycal.net/forums/topic/any-idea-whats-wrong-with-my-chrome/) for more details.

* `user_pref("gfx.color_management.enablev4", true);`
* `user_pref("gfx.color_management.mode", 1);`


### Disable alt+key behaviour
* `user_pref("ui.key.menuAccessKeyFocuses", false);`


### Linux only (_some tweaks_)
* `user_pref("widget.content.gtk-theme-override", "Breeze");`
* `user_pref("gfx.downloadable_fonts.keep_color_bitmaps", false);`
* `user_pref("layout.selection.caret_style", 0);`
* `user_pref("network.tcp.keepalive.probe_count", 4);`
* `user_pref("media.cubeb.sandbox", true);`
* `user_pref("media.audioipc.stack_size", 262144);`
* `user_pref("network.tcp.keepalive.retry_interval", 1);`


### Disable GreasyMonkey telemetry
* `user_pref("extensions.greasemonkey.stats.optedin", false);`
* `user_pref("extensions.greasemonkey.stats.url", "");`


### Sync + example how to configure it per-extension: services.sync.prefs.<SETTING>
* `user_pref("services.sync.ui.hidden", true);`


### Loopback Bug
* Bug on non-Unix machines, see [here](https://bugzilla.mozilla.org/show_bug.cgi?id=100154).


### Wifi (Captive Portal) -> On Android, the captive portal is handled by the OS itself!
* `user_pref("network.captive-portal-service.enabled", true);`
* `user_pref("network.trr.wait-for-portal", true);`
* `user_pref("network.captive-portal-service.backoffFactor", "5.0");`


### Persistent drop-down menu (in case you are affected)
* `user_pref("ui.popup.disable_autohide", false);`
* `user_pref("devtools.command-button-noautohide.enabled", false);`
* `user_pref("devtools.command-button-noautohide.enabled", false);`


### MaCOS (I don't support it because I can't test it)
* `user_pref("accessibility.tabfocus_applies_to_xul", false);`
* `user_pref("accessibility.tabfocus", 7);`
* `user_pref("accessibility.typeaheadfind.prefillwithselection", false);`
* `user_pref("alerts.useSystemBackend", true);`
* `user_pref("browser.drag_out_of_frame_style", 1);`
* `user_pref("devtools.recordreplay.enabled", true);`
* `user_pref("devtools.recordreplay.enableRewinding", true);`
* `user_pref("dom.ipc.useNativeEventProcessing.content", false);`
* `user_pref("dom.w3c_touch_events.enabled", 0);`
* `user_pref("font.minimum-size.th", 10);`
* `user_pref("gfx.canvas.azure.backends", "skia");`
* `user_pref("gfx.compositor.glcontext.opaque", false);`
* `user_pref("gfx.content.azure.backends", "skia");`
* `user_pref("gfx.font_rendering.coretext.enabled", false);`
* `user_pref("gfx.hidpi.enabled", 2);`
* `user_pref("gl.multithreaded", true);`
* `user_pref("intl.allow-insecure-text-input", false);`
* `user_pref("layers.omtp.enabled", false);`
* `user_pref("layout.css.devPixelsPerPx", "-1.20");`
* `user_pref("mousewheel.enable_pixel_scrolling", true);`
* `user_pref("mousewheel.with_meta.action.override_x", -1);`
* `user_pref("mousewheel.with_meta.action", 1);`
* `user_pref("mousewheel.with_meta.delta_multiplier_x", 100);`
* `user_pref("mousewheel.with_meta.delta_multiplier_y", 100);`
* `user_pref("mousewheel.with_meta.delta_multiplier_z", 100);`
* `user_pref("network.protocol-handler.external.help", false);`
* `user_pref("ui.key.saveLink.shift", false);`
* `user_pref("ui.panel.default_level_parent", false);`
* `user_pref("ui.scrollToClick", 0);`
* `user_pref("webgl.1.allow-core-profiles", false);`


## Compressing the profile database to "gain some speed"
* This tip is basically what [speedyfox](https://www.crystalidea.com/speedyfox) does by default, it will vacuum the database, however other tools like CCleaner or Firefox itself does do similar thing except that they don't vacuum all database files, they basically only vacuum selected database files. Firefox vacuums every 30 days your database (by default). However, you can get an "boost" by optimizing all files via:


```bash
`for f in `find . -name '*.sqlite'`; do echo Vacuuming $f; sqlite3 "$f" vacuum; done`
```


## Old about:config interface
Since Firefox 71+ the new about:config interface is enabled by default, in order to revert it you can use `chrome://global/content/config.xul`. It's unclear when Mozilla removed the fallback method.


## I can't disable the "new tab" features on mobile, what can I do?
You could work with `policies.json`, it's fully explained over [here](https://support.mozilla.org/en-US/kb/customizing-firefox-using-policiesjson). Create `policies.json` under `distribution/policies.json` and then you can add your own policies.

```json
{
  "policies": {
    "OverrideFirstRunPage": "",
    "OverridePostUpdatePage": ""
  }
}
```

## Avoid getting "From this website" suggestions for login fields
Both flags need to set to `false` to avoid send additional login information e.g. on Google Login ["From this website"](https://s19.directupload.net/images/191217/ph3zwi6x.jpg).

```JavaScript
signon.includeOtherSubdomainsInLookup
signon.showAutoCompleteOrigins
```

## Temporary Containers creates thousands of user IDs and folders which waste my space, what can I do?
As [mentioned here](https://www.reddit.com/r/firefox/comments/ebiapo/temporary_containers_extension_created_1600/) TC might "spam" your SSD/HDD with folders, ID's and _useless_ content, this is "by design" and depending on your TC settings. A workaround is to enable this:


![TC](https://user-images.githubusercontent.com/727123/71289269-a9299d80-2364-11ea-89ac-f71137574a11.png "TC options to prevent storage spam 1")


## Mozilla removed (since FF 71+) the site specific user-agent override option
[User-Agent Switcher revived](https://addons.mozilla.org/en-US/firefox/addon/custom-user-agent-revived/) might be an option (_per-site/domain basis_).


## Stutters in fullscreen occur, especially on higher resolutions (1080p+)
Try to toggle `gfx.direct3d11.use-double-buffering` to `false` (default true) and see if that helps.


## Copy & Paste in Google Docs or Sheets does not work
Set `dom.event.clipboardevents.enabled` back to `true`.


## How do I disable the black scrollbar and it's background
You can [adjust](https://github.com/endeavoursc/firefox-overlay-scrollbars-win10) the [scrollbar color](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color). The easiest method might be using yet another addon like e.g. [Scrollantana](https://addons.mozilla.org/fr/firefox/addon/scrolantana/) if you don't like it use userChrome.css.

* `widget.disable-dark-scrollbar` true
* `layout.css.scrollbar-color.enabled` false


## Tearing when WebRender is enabled
When you use G-Sync and WebRender you might get [tearing](https://www.testufo.com/chase#background=404040&leading=ffffff&trailing=00ffff&distance=32&pps=960&height=-1), this was fixed in the latest Nightly (will be fixed in 74.0 stable). As workaround you can disable G-Sync or use `gfx.webrender.force-disabled` `true`.


## Multiple bookmark toolbar rows
```css
#PersonalToolbar {max-height: unset !important}

#PlacesToolbar > hbox:first-child {display: block}

#PlacesToolbarItems {display: flex; flex-wrap: wrap}
```

## Remove the tab bar in Firefox 75+
```css
#tabbrowser-tabs { visibility: collapse !important; }
```

## Remove the Mic Icon in Firefox 75+
```css
#webrtcIndicator {
  display: none;
}
```

## Scrolbar Tweak
[![Tweaked Scrollbar on the left side, default on the right-side](hhttps://preview.redd.it/33h1682lg3351.png?width=743&auto=webp&s=6a539319f7c75d1b5463eb49bfc1a541748c41bb)](https://preview.redd.it/33h1682lg3351.png?width=743&auto=webp&s=6a539319f7c75d1b5463eb49bfc1a541748c41bb)
Create a `userContent.css` with the following content:
```css
:root{ scrollbar-face-color: rgb(100,100,100); /* Firefox 63 compatibility / scrollbar-track-color: rgb(33,38,48); / Firefox 63 compatibility */ scrollbar-color: rgb(100,100,100) rgb(28,28,28); scrollbar-width: thin; }
```

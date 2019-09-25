## Workarounds 

The list, is a small overview in case you suffered from an "config problem". 

I do not use these workarounds myself that's why they are not included in the user.js file, but they are worth to be mentioned, because some people might find them useful or they are affected by bug x.

### Single monitor users only
See [here](https://hub.displaycal.net/forums/topic/any-idea-whats-wrong-with-my-chrome/) for more details.

* `user_pref("gfx.color_management.enablev4", true);`
* `user_pref("gfx.color_management.mode", 1);`


### Disable alt+key behavior
* `user_pref("ui.key.menuAccessKeyFocuses", false);`


### Linux only
* `user_pref("widget.content.gtk-theme-override", "Breeze");`
* `user_pref("gfx.downloadable_fonts.keep_color_bitmaps", false);`
* `user_pref("layout.selection.caret_style", 0);`
* `user_pref("network.tcp.keepalive.probe_count", 4);`
* `user_pref("media.cubeb.sandbox", true);`
* `user_pref("media.audioipc.stack_size", 262144);`
* `user_pref("network.tcp.keepalive.retry_interval", 1);`


### GreasyMonkey (telemetry)
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
* `user_pref("mousewheel.with_meta.action", 1);`
* `user_pref("mousewheel.with_meta.action.override_x", -1);`
* `user_pref("mousewheel.with_meta.delta_multiplier_x", 100);`
* `user_pref("mousewheel.with_meta.delta_multiplier_y", 100);`
* `user_pref("mousewheel.with_meta.delta_multiplier_z", 100);`
* `user_pref("gfx.hidpi.enabled", 2);`
* `user_pref("gfx.font_rendering.coretext.enabled", false);`
* `user_pref("gfx.content.azure.backends", "skia");`
* `user_pref("gfx.canvas.azure.backends", "skia");`
* `user_pref("gfx.compositor.glcontext.opaque", false);`
* `user_pref("accessibility.tabfocus", 7);`
* `user_pref("accessibility.tabfocus_applies_to_xul", false);`
* `user_pref("ui.scrollToClick", 0);`
* `user_pref("accessibility.typeaheadfind.prefillwithselection", false);`
* `user_pref("devtools.recordreplay.enabled", true);`
* `user_pref("devtools.recordreplay.enableRewinding", true);`
* `user_pref("network.protocol-handler.external.help", false);`
* `user_pref("layout.css.devPixelsPerPx", "-1.20");`
* `user_pref("dom.ipc.useNativeEventProcessing.content", false);`
* `user_pref("browser.drag_out_of_frame_style", 1);`
* `user_pref("ui.key.saveLink.shift", false);`
* `user_pref("font.minimum-size.th", 10);`
* `user_pref("ui.panel.default_level_parent", false);`
* `user_pref("mousewheel.enable_pixel_scrolling", true);`
* `user_pref("gl.multithreaded", true);`
* `user_pref("webgl.1.allow-core-profiles", false);`
* `user_pref("alerts.useSystemBackend", true);`
* `user_pref("dom.w3c_touch_events.enabled", 0);`
* `user_pref("intl.allow-insecure-text-input", false);`
* `user_pref("layers.omtp.enabled", false);`


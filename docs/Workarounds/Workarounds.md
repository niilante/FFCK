// - Workaround for single monitor users -
// See here: https://hub.displaycal.net/forums/topic/any-idea-whats-wrong-with-my-chrome/
user_pref("gfx.color_management.enablev4", true);
user_pref("gfx.color_management.mode", 1);


// Disable alt+key behav.
user_pref("ui.key.menuAccessKeyFocuses", false);


// Irrelevant in terms of privacy
user_pref("excludeFlashFonts", true); // Firefox >= 52
user_pref("excludeJsFonts", true); // Firefox >= 52
user_pref("privacy.cpd.siteSettings", false);
user_pref("privacy.cpd.passwords", true);
user_pref("privacy.cpd.openWindows", true);


// Linux
user_pref("widget.content.gtk-theme-override", "Breeze");


// Only in case you use e.g. GreasyMonkey
user_pref("extensions.greasemonkey.stats.optedin", false);
user_pref("extensions.greasemonkey.stats.url", "");



// Sync + example how to configure it per-extension: `services.sync.prefs.<SETTING>`
user_pref("services.sync.ui.hidden", true);


// Loopback 
// Bug on non-Unix machines
// https://bugzilla.mozilla.org/show_bug.cgi?id=100154


// Wifi (Captive Portal)
user_pref("network.captive-portal-service.enabled", true); //enable on mobile (Wifi) (part of Network Detection)
user_pref("network.trr.wait-for-portal", true); //enable on mobile (Wifi)
/////////////////////////////////////////////
//// === PaleMoon SPECIFIC ===           ////
/// === Author: Moonchild, CHEF-KOCH === ////
/////////////////////////////////////////////

/*
    Full list maintained by Moonchild: https://forum.palemoon.org/viewtopic.php?f=24&t=3357
    If you have issues or questions about any of these, please use the official PaleMoon forums !!
    See also: 
    https://www.palemoon.org/commander.shtml
*/


/* 
    Outdated
    ========
    browser.allTabs.previews
    browser.tabs.onTop
    browser.tabs.autoHide
*/


user_pref("network.http.accept.default", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0."); //prevent downloading images as webp
// 3201: (v25.6+) disable canvas fingerprinting
   // user_pref("canvas.poisondata", true);
// 3202: (v25.2+) control HSTS
   // If editing this in about:config PM needs to be fully closed and then restarted
   // NOTE: This is a trade-off between privacy vs security. HSTS was designed to increase
   // security to stop MiTM attacks but can also be misused as a fingerprinting vector, by
   // scrapping previously visited sites. Recommended: security over privacy. Your choice.
user_pref("network.stricttransportsecurity.enabled", true);
// 3203: (v25.0+) controls whether to ignore an expired state of stapled OCSP responses
   // If set to true, breaks with RFC6066 (like Firefox) and ignores the fact that stapled
   // OCSP responses may be expired. If false (the default) aborts the connection.
   // user_pref("security.ssl.allow_unsafe_ocsp_response", false);
   // 3204: (v25.6+) Controls whether to completely ignore "autocomplete=off" on login fields
   // user_pref("signon.ignoreAutocomplete", false);
// 3205: (v26.0+) read Moonchild's description on the PaleMoon forum thread linked above
   // user_pref("dom.disable_beforeunload", true); // [boolean] Controls whether to disable the use of events when unloading a page (navigating away). "onunload" is regularly used to prevent you from losing work if you accidentally try to navigate away from a site with unsaved changes to e.g. a post. It is also abused by websites trying to prevent you from easily leaving their site with the infamous "offer on the way out the door" pop-ups. This pref will control both scenarios (good and bad) so use with caution.
   
user_pref("media.autoplay.allowscripted", false); // [boolean] Disables HTML5 autoloading on videos 
//user_pref("browser.padlock.shown", true); // [boolean] Controls display of the padlock for secure sites.
//user_pref("browser.padlock.style", ""); // Defines where the padlock icon is shown
//user_pref("browser.padlock.urlbar_background", ""); // Address bar shading preference
//user_pref("browser.sessionstore.exactPos", false); // [boolean] Defines whether the restored browser session window is displayed at the same location when it was terminated in the last session.
//user_pref("browser.sessionstore.max_concurrent_tabs", 3); // The number of tabs concurrently restored from a session. Accepted values are 1 to 10.
//user_pref("browser.tabs.resize_immediately", false);  // [boolean] Defines whether tabs resize immediately on the Tab Bar when tabs are closed.
//user_pref("browser.urlbar.rss", false); // [boolean] Defines whether an RSS indicator is displayed in the address bar.
//user_pref("lightweightThemes.animation.enabled", false); // [boolean] Defines whether animated lightweight themes (Personas) are allowed or not.
//user_pref("prompts.tab_modal.focusSwitch", false); // [boolean] Controls whether modal dialogs on web pages switch foxues to the tab the dialog is presented on (e.g. JavaScript alerts).
user_pref("signon.ignoreAutocomplete", false); // [boolean] Defines whether autocomplete="off" is ignored by Pale Moon.
//user_pref("spellchecker.dictionary.override", ""); // Sets a preferred language for spellchecking, overides document/element languages. The entry does not exist by default.
//user_pref("security.ssl.allow_unsafe_ocsp_response, false); // [boolean] Controls whether to ignore an expired state of stapled OCSP responses. If set to true, breaks with RFC6066 (like Firefox) and ignores the fact that stapled OCSP responses may be expired. If false (the default) aborts the connection. The entry does not exist by default.. 

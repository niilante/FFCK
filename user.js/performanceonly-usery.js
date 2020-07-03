//
//  ==============================
//  Performanceonly-user.js by CHEF-KOCH
//  ==============================
//      Version 77.0.0
//      FIXME: Please see FIXME entries
//      Linux users MUST set `MOZ_ENABLE_WAYLAND=1` in the environment path.
//
// Benchmarking Mozilla's Firefox Performance Over The Past Two Years (Firefox 57 To 73 Alpha)
// https://www.phoronix.com/scan.php?page=article&item=mozilla-firefox-2019&num=1
// The Firefox + Chrome Web Browser Performance Impact From Intel's JCC Erratum Microcode Update
// https://www.phoronix.com/scan.php?page=article&item=jcc-firefox-chrome&num=1
//
// Report performance problems:
// https://developer.mozilla.org/docs/Mozilla/Performance/Reporting_a_Performance_Problem
//
// Extension performance test:
// https://profiler.firefox.com/
// https://browserbench.org/Speedometer2.0/


// FF Performance Dashboard
// https://arewefastyet.com/

// Discussion & explanation what "performance" really covers
// https://github.com/CHEF-KOCH/FFCK/issues/34

// Disable welcome warnings
user_pref("general.warnOnAboutConfig", false);
user_pref("browser.aboutConfig.showWarning", false);


// Tab Animations
user_pref("toolkit.cosmeticAnimations.enabled", false);
user_pref("ui.prefersReducedMotion", 1); //hidden


// Disable default Browser Check on Startup
user_pref("browser.shell.checkDefaultBrowser", false);


// Linux
// Enable dmabuf
user_pref("widget.wayland-dmabuf-vaapi.enabled", true);
// Enable hardware video decoding
// https://mastransky.wordpress.com/2020/06/03/firefox-on-fedora-finally-gets-va-api-on-wayland/
user_pref("gfx.webrender.enabled", true);
// https://www.bleepingcomputer.com/news/security/firefox-57-brings-better-sandboxing-on-linux
// https://codelab.wordpress.com/2017/12/11/firefox-drops-alsa-apulse-to-the-rescue
user_pref("security.sandbox.content.syscall_whitelist", 16);
user_pref("security.sandbox.content.read_path_whitelist", "/sys/"); // FIXME:

// Hardware video acceleration
// https://bugzilla.mozilla.org/show_bug.cgi?id=1619523
// https://bugzilla.mozilla.org/show_bug.cgi?id=1210726


// GTK themes
user_pref("browser.display.use_system_colors", false);
user_pref("widget.content.gtk-theme-override", "Breeze: light");


// Wayland PWC
user_pref("gfx.webrender.max-partial-present-rects", 64);
//user_pref("gfx.webrender.debug.profiler" true);

// Windows
// YouTube performance
// https://webcompat.com/
// https://community.amd.com/thread/218278
// WebRender
user_pref("gfx.webrender.all", true);


// AVIF (the AV1 Image File Format)
// https://github.com/AOMediaCodec/av1-avif/tree/master/testFiles
user_pref("image.avif.enabled", true);


// Allow userChrome.css to load
user_pref("legacyUserProfileCustomizations.stylesheets", true);


// Networking
user_pref("network.connectivity-service.enabled", false);
user_pref("browser.tabs.showSingleWindowModePrefs", true);
user_pref("network.http.max-connections", 48);
user_pref("network.http.max-connections-per-server", 16);
user_pref("network.http.max-persistent-connections-per-proxy", 8);
user_pref("network.http.max-persistent-connections-per-server", 4);
user_pref("network.http.pipelining", true);
user_pref("network.http.pipelining.maxrequests", 100);
user_pref("network.http.proxy.pipelining", true);
user_pref("network.http.request.timeout", 300;
user_pref("nglayout.initialpaint.delay", 0); //Amount of time the browser waits before it acts on information it receives.

// WebRenderer
// https://bugzilla.mozilla.org/show_bug.cgi?id=1010527#c29
// https://bugzilla.mozilla.org/show_bug.cgi?id=1580595


// Disable all (gif) animations (requires html video autoplay to be disabled)
// https://support.mozilla.org/en-US/kb/block-autoplay
user_pref("image.animation_mode", "none");


// Unlock 120 instead of 60 FPS
// https://bugzilla.mozilla.org/show_bug.cgi?id=1614212
// https://bugzilla.mozilla.org/show_bug.cgi?id=1560090
user_pref("layout.frame_rate", 120);


// LastPass + Bitwarden Performance impact
// FIXME:
// https://github.com/bitwarden/browser/issues/1070
// https://addons.mozilla.org/en-US/firefox/addon/keepassxc-browser/
// Use KeePass


// RAM
// https://bugzilla.mozilla.org/enter_bug.cgi?product=Core&component=Memory%20Allocator
// FIXME:
// https://profiler.firefox.com/docs/#/./guide-remote-profiling
// https://wiki.archlinux.org/index.php/Firefox/Profile_on_RAM
// RAMDISK?!
// https://support.mozilla.org/kb/accessibility-services#w_should-i-disable-firefox-accessibility-service
// FIXME: user_pref("browser.cache.memory.capacity", 0);
// FIXME: user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
// FIXME: user_pref("media.memory_cache_max_size", 46385);
user_pref("browser.cache.memory.enable", true);
user_pref("permissions.memory_only", false);



// Safe Browsing (disabled)
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");


// DNS (untouched)
// https://bugzilla.mozilla.org/show_bug.cgi?id=1626958
// DNSCrypt, Unbound, etc.


// Prevent Firefox from using your GPU
user_pref("gfx.direct2d.disabled", false);
// user_pref("gfx.webrender.all", false);
// user_pref("gfx.webrender.force-disabled", true);
// user_pref("layers.acceleration.disabled", true);
user_pref("layers.acceleration.disabled", false);
// user_pref("layers.gpu-process.enabled", false);
// user_pref("layers.gpu-process.enabled", false);
// user_pref("webgl.disable", true);


// Media (Video Performance)
user_pref("media.media-capabilities.enabled", true);


// Blocklist
user_pref("extensions.blocklist.enabled", true);
user_pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/");


// Session information record
//user_pref("browser.sessionstore.interval", 600000);
user_pref("browser.sessionstore.resume_from_crash", false);


// Mouse (lag)
// FIXME:
// user_pref("ui.context_menus.after_mouseup", true);
user_pref("general.smoothScroll.lines.durationMaxMS", 400);
user_pref("general.smoothScroll.lines.durationMinMS", 210);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 400);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 400);
user_pref("general.smoothScroll.other.durationMaxMS", 400);
user_pref("general.smoothScroll.other.durationMinMS", 200);
user_pref("general.smoothScroll.pages.durationMaxMS", 400);
user_pref("general.smoothScroll.pages.durationMinMS", 200);
user_pref("mousewheel.acceleration.start", 0); //-1
user_pref("mousewheel.default.delta_multiplier", 175);
// Default Mouse click on URL bar's behavior
// user_pref("browser.urlbar.clickSelectsAll", true); // https://bugzilla.mozilla.org/show_bug.cgi?id=1621570
user_pref("browser.urlbar.doubleClickSelectsAll", false);
//user_pref("layout.word_select.stop_at_punctuation", true);
// Disable smooth scrolling
user_pref("mousewheel.min_line_scroll_amount", 50);
user_pref("general.smoothScroll", false);
user_pref("general.smoothScroll.page", false);
user_pref("image.mem.min_discard_timeout_ms", 2200000000);
user_pref("toolkit.scrollbox.smoothScroll", false);


// Hardware acceleration
// OpenGL OMTC
// Test: https://testdrive-archive.azurewebsites.net/performance/fishietank/
user_pref("layers.acceleration.force-enabled", true);
user_pref("media.hardware-video-decoding.enable", true);
user_pref("media.hardware-video-decoding.force-enabled", true);


// Fingerprinting (disabled)
// Regressions: reduce animation smoothness, ram consumption etc.
user_pref("dom.battery.enabled", false);
user_pref("gfx.direct2d.disabled", false);
user_pref("layers.acceleration.disabled", false);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", false);
user_pref("privacy.resistFingerprinting.letterboxing", false);
user_pref("privacy.resistFingerprinting", false);
user_pref("privacy.trackingprotection.fingerprinting.annotate.enabled", false);


// FPI
user_pref("privacy.firstparty.isolate.block_post_message", false);
user_pref("privacy.firstparty.isolate.restrict_opener_access", false);
user_pref("privacy.firstparty.isolate", false);


// Permissions (always ask first)
user_pref("permissions.default.xr", 0);


// DOM
user_pref("dom.webaudio.enabled", true);
user_pref("dom.vr.enabled", true);


// Media
user_pref("media.navigator.enabled", false);
user_pref("media.media-capabilities.enabled", true);


// DirectX
// https://bugzilla.mozilla.org/show_bug.cgi?id=1608485
user_pref("gfx.direct3d11.use-double-buffering", false);


// Pocket
user_pref("extensions.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstorie", false);


// IPC Process Count
// user_pref("browser.preferences.defaultPerformanceSettings.enabled", false); // automatically set to false once you trigger dom.ipc.processCount
user_pref("dom.ipc.processCount" -1);


// Accelerated Azure Canvas
// Demo: http://js1k.com/2016-elemental/demo/2445
user_pref("gfx.canvas.azure.accelerated", true);


// Disk cache
// http://kb.mozillazine.org/Browser.cache.memory.enable
user_perf("browser.cache.disk.enable", false); //default
user_pref("browser.cache.memory.enable", true); //default
user_pref("browser.cache.memory.capacity", 750000);
//user_pref("browser.cache.memory.capacity", -1); // FIXME: Math: 41297 - (41606 / (1 + ((RAM / 1.16) ^ 0.75))


// Vacuum SQLite Database
// FIXME: included in indexdbv2?


// Fonts
// DPI value
user_pref("layout.css.dpi", 0); // FIXME:
//user_pref("layout.css.devPixelsPerPx", FIXME: ) // System DPI divided by 96
user_pref("layout.css.devPixelsPerPx", 1.5);


// Hide title bar and window border
user_pref("browser.tabs.drawInTitlebar", true);


// Touchscreen gestures
user_pref("dom.w3c_touch_events.enabled", 2);


// Additional media codecs
user_pref("media.mediasource.ignore_codecs", true);
user_pref("media.av1.enabled", true);


// Fullscreen warning
user_pref("full-screen-api.warning.timeout", 0);


// WebRTC audio post processing
user_pref("media.getusermedia.aec_enabled", false); // Acoustic Echo Cancellation
user_pref("media.getusermedia.agc_enable", false); // Automatic Gain Control
user_pref("media.getusermedia.noise_enabled", false); //Noise suppression


// Ion/JIT (enabled)
user_pref("javascript.options.ion", true);
user_pref("javascript.options.baselinejit", true);
user_pref("javascript.options.jit_trustedprincipals", true);


// Disable Suggestions (no results and no drop down in URL bar)
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.maxRichResults", 0);
user_pref("browser.formfill.enable", false);


// RFP
// FIXME:


// Screensharing
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);


// Avoid blank pages
user_pref("browser.startup.blankWindow", false);


// Number of CPU Cores
// FIXME: user_pref("dom.maxHardwareConcurrency", 6)


// Disable NewTab Stream
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false)
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);


// Disable Containers + UI
user_pref("privacy.userContext.ui.enabled", false);


// Update Checks (disabled)
//user_pref("extensions.update.enabled", false); //FIXME:
user_pref("app.update.auto", false);
user_pref("browser.search.update", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.systemAddon.update.enabled", false);
user_pref("extensions.systemAddon.update.url", "");
user_pref("extensions.update.autoUpdateDefault", false);


// Media Autoplay
user_pref("media.autoplay.default", 5);
user_pref("media.autoplay.enabled.user-gestures-needed", false);


// UI
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);


// Disable Windows jumplist
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);


// Telemetry
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.send_pings.require_same_host", true);
user_pref("browser.send_pings", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);


// Web Notification
// FIXME:

// HTTPS Performance
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode.upgrade_loca", true);


// Reports
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");


// Favicons
user_pref("browser.shell.shortcutFavicons", false);
user_pref("browser.chrome.site_icons", false);
// user_pref("alerts.showFavicons", false); // should be default

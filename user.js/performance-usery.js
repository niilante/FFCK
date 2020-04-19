//
//  ==============================
//  Performance-only.js by CHEF-KOCH
//  ==============================
//      Version 76.0.0
//      FIXME: Networking, DNS, Password Manager, RAM
//      Linux users MUST set MOZ_ENABLE_WAYLAND=1 set in the environment path.
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


// Disable welcome warnings
user_pref("general.warnOnAboutConfig", false);
user_pref("browser.aboutConfig.showWarning", false);


// Linux
// Enable dmabuf
user_pref("widget.wayland-dmabuf-webgl.enabled", true);
user_pref("widget.wayland-dmabuf-webgl.enabled true widget.wayland-dmabuf-textures.enabled", true);
// Enable hardware video decoding
user_pref("widget.wayland - dmabuf - vaapi.enabled", true);
// https://www.bleepingcomputer.com/news/security/firefox-57-brings-better-sandboxing-on-linux
// https://codelab.wordpress.com/2017/12/11/firefox-drops-alsa-apulse-to-the-rescue
user_pref("security.sandbox.content.syscall_whitelis", 16);
user_pref("security.sandbox.content.read_path_whitelist", "/sys/"); // FIXME:

// GTK themes
user_pref("browser.display.use_system_colors", false);
user_pref("widget.content.gtk-theme-override", "Breeze: light");




// Windows
// YouTube performance
// https://webcompat.com/
// https://community.amd.com/thread/218278
// WebRender
user_pref("gfx.webrender.all", true);


// WebRenderer
// https://bugzilla.mozilla.org/show_bug.cgi?id=1010527#c29
// https://bugzilla.mozilla.org/show_bug.cgi?id=1580595


// Unlock 120 instead of 60
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


// Safe Browsing
// FIXME:


// DNS
// https://bugzilla.mozilla.org/show_bug.cgi?id=1626958


// Prevent Firefox from using your GPU
// user_pref("gfx.direct2d.disabled", true);
// user_pref("gfx.webrender.all", false);
// user_pref("gfx.webrender.force-disabled", true);
// user_pref("layers.acceleration.disabled", true);
// user_pref("layers.gpu-process.enabled", false);
// user_pref("layers.gpu-process.enabled", false);
// user_pref("webgl.disable", true);


// Session information record
//user_pref("browser.sessionstore.interval", 600000);
user_pref("browser.sessionstore.resume_from_crash", false);


// Mouse (lag)
// FIXME:
// user_pref("ui.context_menus.after_mouseup", true);
user_pref("mousewheel.acceleration.start", -1);
// Default Mouse click on URL bar's behavior
user_pref("browser.urlbar.clickSelectsAll", true);
user_pref("browser.urlbar.doubleClickSelectsAll", false);
//user_pref("layout.word_select.stop_at_punctuation", true);
// Disable smooth scrolling
user_pref("mousewheel.min_line_scroll_amount", 45);
user_pref("general.smoothScroll", false);
user_pref("general.smoothScroll.page", false);
user_pref("image.mem.min_discard_timeout_ms", 2200000000);

// Hardware acceleration
// OpenGL OMTC
// Test: https://testdrive-archive.azurewebsites.net/performance/fishietank/
user_pref("layers.acceleration.force-enabled", true);
user_pref("media.hardware-video-decoding.enable", true);
user_pref("media.hardware-video-decoding.force-enabled", true);


// Fingerprinting
// Regressions: reduce animation smoothness, ram consumption etc.
user_pref("privacy.resistFingerprinting", false);


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
user_perf("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
//user_pref("browser.cache.memory.capacity", -1); // FIXME: Math: 41297 - (41606 / (1 + ((RAM / 1.16) ^ 0.75))


// Vacuum SQLite Database
// FIXME:


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

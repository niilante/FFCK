//
//  TorBrowser-only.js by CHEF-KOCH
//
//      Don't use Firefox forks, except the Tor Browser!
//      This is for Tor Browser Bundle only, do not use it on a normal Firefox version.
//
//      Version 0.08
//
//      TODO: Fix & optimize.
//      TODO: MacOS, Linux & other quirks like backward compatibility.
//      TODO: This will break the "Security Slider" (button with 3 presets).


// The argumentation that you should not touch TB (settings) is stupid.
// Because that would mean that:
//                      - A user installs untrusted addons/extensions.
//                      - A user uses/installs privacy "tweak" extensions which changing the wrong toggles (that's the whole point of a user config, that you don't need it)
//                      - That TB already uses "strongest" settings by default. TB does not use the strongest possible settings to avoid "website breakages". There is no "definition" what that means, for some "font" breakage is already "website breakage".
//                      - The fingerprint argumentation on "extensions" is low, that would mean every other protection mechanism "failed" and you "somehow" expose yourself. I installed uBlock, so what can you do?! Right you can't do bullshit...
//                      - "Guessing" is also possible, I guess you installed either uBO or AdGuard (or use PI-Hole). That does not expose you nor can this be abused, it's not like that an attack could implement solutions for all three scenarios.

// The defaults + security slider "presents" are BS, deal with it.
// There are no compromises in security, just use exclusions and that's it. If there are possible fingerprint vectors on the "exclusion list factor" that this has to be addressed within the browser source code.

// SVG
user_pref("svg.disabled", true); //default on high/highest


// Activity streams
user_pref("browser.library.activity-stream.enabled", false);
user_pref("startup.homepage_welcome_url.additional", ""); // default
user_pref("startup.homepage_welcome_url", ""); // default


// Startup page
user_pref("browser.startup.page", 0);
user_pref("browser.newtabpage.enabled", false);


// HTML5 Beacons
user_pref("beacon.enabled", false); // default true


// Disallow font downloads
user_pref("browser.display.use_document_font", 0);
user_pref("layout.css.font-loading-api.enable", false);
user_pref("gfx.downloadable_fonts.enabled", false);


// History sniffing
user_pref("places.history.enabled", false);
user_pref("privacy.history.custom", true); // false on lower slider settings


// Disk Cache
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk_cache_ssl", false);
user_pref("browser.cache.offline.enable", false);
// user_pref("media.cache_size ", 0);


// Referer
user_pref("network.http.referer.XOriginPolic", 0); // default
user_pref("network.http.sendRefererHeader", 0); // 2 default


// HSTS
user_pref("privacy.clearOnShutdown.siteSettings", true); // false default


// ONION workaround for SSL/TLS
// The settings are strange but needed for ONION
// FIXME:
// best would be true ...
user_pref("security.ssl.require_safe_negotiation", false); // default
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", false); // default
//user_pref("security.mixed_content.upgrade_display_content", true); // default false
user_pref("security.cert_pinning.enforcement_leve", 2); // default


// Display fonts
user_pref("browser.display.use_document_fonts", 1); // default
user_pref("layout.css.font-loading-api.enabled", true); // default
user_pref("font.blacklist.underline_offset", "FangSong,Gulim,GulimChe,MingLiU,MingLiU-ExtB,MingLiU_HKSCS,MingLiU-HKSCS-ExtB,MS Gothic,MS Mincho,MS PGothic,MS PMincho,MS UI Gothic,PMingLiU,PMingLiU-ExtB,SimHei,SimSun,SimSun-ExtB,Hei,Kai,Apple LiGothic,Apple LiSung,Osaka"); // default
user_pref("gfx.font_rendering.graphite.enabled", true); // false
user_pref("gfx.font_rendering.opentype_svg.enabled", false);


// Click-to-Play
user_pref("plugins.click_to_play", true); // default
user_pref("plugin.default.stat", 0); // 1 default, TB "strongest" settings still allows CtP
user_pref("plugin.default.stat", false); // default true
user_pref("media.autoplay.enabled", false); // default true
user_pref("media.autoplay.default", 1); // default
user_pref("media.autoplay.allow-muted", false); // default true
user_pref("media.autoplay.enabled.user-gestures-needed", false); // default true


// VR
user_pref("dom.vr.webxr.enabled", false); // default false


// GPU
user_pref("gfx.direct2d.disabled", true); // default false
user_pref("layers.acceleration.disabled", true); // default false
user_pref("media.hardware-video-decoding.enabled", false); // default true


// Health
user_pref("datareporting.healthreport.about.reportUrl", "data:text/plain,");
user_pref("datareporting.healthreport.about.reportUrlUnified", "data:text/plain,");
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);


// Ping
user_pref("browser.ping-centre.telemetry", false); // default true
user_pref("browser.ping-centre.production.endpoint", ""); // default "https://tiles.services.mozilla.com/v3/links/ping-centre"
user_pref("browser.ping-centre.staging.endpoint", ""); // default "https://onyx_tiles.stage.mozaws.net/v3/links/ping-centre"


// ToolK
user_pref("toolkit.coverage.endpoint.base", ""); // default "https://coverage.mozilla.org"



// OCSP
// https://badssl.com
user_pref("security.OCSP.enabled", 1); // default


// OCSP.Stapling
user_pref("security.ssl.enable_ocsp_stapling", true); // default
user_pref("security.ssl.enable_ocsp_must_staple", true); // default


// Icons (enable the warning signals)
user_pref("security.insecure_connection_icon.enabled", true); // default false
user_pref("security.insecure_connection_icon.pbmode.enabled", true); // default false
user_pref("security.insecure_connection_text.enabled", true); // default false
user_pref("security.insecure_connection_text.pbmode.enabled", true); // default false


// Isolation
// A.K.A placebo
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts", true);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
user_pref("privacy.resistFingerprinting.jsmloglevel", "Warn");
user_pref("privacy.resistFingerprinting.letterboxing", true);
user_pref("privacy.resistFingerprinting.reduceTimerPrecision.jitter", true);
user_pref("privacy.resistFingerprinting.reduceTimerPrecision.microseconds", 750); // 1000


// Dev tools
user_pref("devtools.appmanager.enabled", false);
user_pref("devtools.debugger.chrome-debugging-host", "127.0.0.1");
user_pref("devtools.onboarding.telemetry.logged", true);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.webide.enabled", false);


// Last update timer
// Enforce fake values?!
user_pref("app.update.lastUpdateTime.addon-background-update-timer", 1573836940);
user_pref("app.update.lastUpdateTime.background-update-timer", 1573836700);
user_pref("app.update.lastUpdateTime.blocklist-background-update-timer", 1573837060);
user_pref("app.update.lastUpdateTime.browser-cleanup-thumbnails", 1573836460);
user_pref("app.update.lastUpdateTime.search-engine-update-timer", 1573836460);
user_pref("app.update.lastUpdateTime.services-settings-poll-changes", 1573836820);
user_pref("app.update.lastUpdateTime.xpi-signature-verification", 1573837180);


// Clipboard Events
user_pref("dom.event.clipboardevents.enabled", false); // default true


// Spec. loading
user_pref("network.http.speculative-parallel-limi", 4); // default 6 (Onion workaround)


// EME
user_pref("browser.eme.ui.enabled", false);
user_pref("media.cache_size", 0);
user_pref("media.eme.apiVisible", false);
user_pref("media.eme.enabled", false);
user_pref("media.gmp-eme-adobe.enabled", false);
user_pref("media.gmp-eme-adobe.visible", false);
user_pref("media.gmp-manager.lastCheck", 1573836804);
user_pref("media.gmp-manager.updateEnabled", false);
user_pref("media.gmp-manager.url.override", "data:text/plain,");
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.gmp.storage.version.observed", 1);
user_pref("media.hardware-video-decoding.failed", false);
user_pref("media.navigator.enabled", false);
user_pref("media.peerconnection.enabled", false); //WebRTC - default false
user_pref("media.video_stats.enabled", false);
user_pref("media.webaudio.enabled", false);
user_pref("media.webspeech.synth.enabled", false);


// PDF
// Beyond me why you want to display PDF in the browser and trigger canvas,
// just download it and use offline tools like SumatraPDF which are fully offline.
// The whole stuff can be fixed in PDFJS lib, but nope, just add more flags to workaround something which isn't broken.
// Only possible "hole" are canvas anyway, rest was already fixed.
user_pref("pdfjs.disabled", true); // default false
user_pref("pdfjs.disableAutoFetch", false); // default
user_pref("pdfjs.disableFontFace", false); // default
user_pref("pdfjs.disablePageLabels", false); // default
user_pref("pdfjs.disableRange", false); // default
user_pref("pdfjs.disableStream", false); // default


// Default fonts
user_pref("font.default.lo", "Noto Sans Lao");
user_pref("font.default.my", "Noto Sans Myanmar");
user_pref("font.default.x-western", "sans-serif");
user_pref("font.name-list.cursive.ar", "Noto Naskh Arabic, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.cursive.he", "Noto Sans Hebrew, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.cursive.x-cyrillic", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.cursive.x-unicode", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.cursive.x-western", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.fantasy.ar", "Noto Naskh Arabic, Tinos, Georgia,  Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.fantasy.el", "Tinos, Georgia,  Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.fantasy.he", "Noto Sans Hebrew, Tinos, Georgia,  Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.fantasy.x-cyrillic", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.fantasy.x-unicode", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.fantasy.x-western", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.ar", "Noto Naskh Arabic, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.el", "Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.he", "Noto Sans Hebrew, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.ja", "Noto Sans JP Regular, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.ko", "Noto Sans KR Regular, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.th", "Noto Sans Thai, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-armn", "Noto Sans Armenian, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-beng", "Noto Sans Bengali, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-cyrillic", "Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-devanagari", "Noto Sans Devanagari, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-ethi", "Noto Sans Ethiopic, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-geor", "Noto Sans Georgian, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-gujr", "Noto Sans Gujarati, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-guru", "Noto Sans Gurmukhi, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-khmr", "Noto Sans Khmer, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-knda", "Noto Sans Kannada, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-mlym", "Noto Sans Malayalam, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-orya", "Noto Sans Oriya, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-sinh", "Noto Sans Sinhala, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-tamil", "Noto Sans Tamil, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-telu", "Noto Sans Telugu, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-tibt", "Noto Sans Tibetan, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-unicode", "Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.x-western", "Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.zh-CN", "Noto Sans SC Regular, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.zh-HK", "Noto Sans TC Regular, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.monospace.zh-TW", "Noto Sans TC Regular, Cousine, Courier, Courier New, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.ar", "Noto Naskh Arabic, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.el", "Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.he", "Noto Sans Hebrew, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.ja", "Noto Sans JP Regular, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.ko", "Noto Sans KR Regular, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.th", "Noto Sans Thai, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-armn", "Noto Sans Armenian, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-beng", "Noto Sans Bengali, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-cyrillic", "Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-devanagari", "Noto Sans Devanagari, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-ethi", "Noto Sans Ethiopic, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-geor", "Noto Sans Georgian, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-gujr", "Noto Sans Gujarati, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-guru", "Noto Sans Gurmukhi, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-khmr", "Noto Sans Khmer, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-knda", "Noto Sans Kannada, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-mlym", "Noto Sans Malayalam, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-orya", "Noto Sans Oriya, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-sinh", "Noto Sans Sinhala, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-tamil", "Noto Sans Tamil, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-telu", "Noto Sans Telugu, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-tibt", "Noto Sans Tibetan, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-unicode", "Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.x-western", "Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.zh-CN", "Noto Sans SC Regular, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.zh-HK", "Noto Sans TC Regular, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.sans-serif.zh-TW", "Noto Sans TC Regular, Arimo, Arial, Verdana, Noto Naskh Arabic, Noto Sans Armenian, Noto Sans Bengali, Noto Sans Buginese, Noto Sans JP Regular, Noto Sans KR Regular, Noto Sans SC Regular, Noto Sans TC Regular, Noto Sans Canadian Aboriginal, Noto Sans Cherokee, Noto Sans Devanagari, Noto Sans Ethiopic, Noto Sans Georgian, Noto Sans Gujarati, Noto Sans Gurmukhi, Noto Sans Hebrew, Noto Sans Kannada, Noto Sans Khmer, Noto Sans Lao, Noto Sans Malayalam, Noto Sans Mongolian, Noto Sans Myanmar, Noto Sans Oriya, Noto Sans Sinhala, Noto Sans Tamil, Noto Sans Telugu, Noto Sans Thaana, Noto Sans Thai, Noto Sans Tibetan, Noto Sans Yi, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.ar", "Noto Naskh Arabic, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.el", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.he", "Tinos, Georgia, Noto Sans Hebrew, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.ja", "Noto Sans JP Regular, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.ko", "Noto Sans KR Regular, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.th", "Noto Serif Thai, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-armn", "Noto Serif Armenian, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-beng", "Noto Sans Bengali, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-cyrillic", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-devanagari", "Noto Sans Devanagari, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-ethi", "Noto Sans Ethiopic, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-geor", "Noto Sans Georgian, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-gujr", "Noto Sans Gujarati, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-guru", "Noto Sans Gurmukhi, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-khmr", "Noto Serif Khmer, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-knda", "Noto Sans Kannada, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-mlym", "Noto Sans Malayalam, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-orya", "Noto Sans Oriya, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-sinh", "Noto Sans Sinhala, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-tamil", "Noto Sans Tamil, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-telu", "Noto Sans Telugu, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-tibt", "Noto Sans Tibetan, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-unicode", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.x-western", "Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.zh-CN", "Noto Sans SC Regular, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.zh-HK", "Noto Sans TC Regular, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name-list.serif.zh-TW", "Noto Sans TC Regular, Tinos, Georgia, Noto Serif Armenian, Noto Serif Khmer, Noto Serif Lao, Noto Serif Thai");
user_pref("font.name.cursive.ar", "Noto Naskh Arabic");
user_pref("font.name.cursive.el", "Tinos, Georgia");
user_pref("font.name.cursive.he", "Noto Sans Hebrew");
user_pref("font.name.cursive.x-cyrillic", "Tinos, Georgia");
user_pref("font.name.cursive.x-unicode", "Tinos, Georgia");
user_pref("font.name.cursive.x-western", "Tinos, Georgia");
user_pref("font.name.fantasy.ar", "Noto Naskh Arabic");
user_pref("font.name.fantasy.el", "Tinos, Georgia");
user_pref("font.name.fantasy.he", "Noto Sans Hebrew");
user_pref("font.name.fantasy.x-cyrillic", "Tinos, Georgia");
user_pref("font.name.fantasy.x-unicode", "Tinos, Georgia");
user_pref("font.name.fantasy.x-western", "Tinos, Georgia");
user_pref("font.name.monospace.ar", "Noto Naskh Arabic");
user_pref("font.name.monospace.el", "Tinos, Georgia");
user_pref("font.name.monospace.he", "Noto Sans Hebrew");
user_pref("font.name.monospace.ja", "Noto Sans JP Regular");
user_pref("font.name.monospace.ko", "Noto Sans KR Regular");
user_pref("font.name.monospace.my", "Noto Sans Myanmar");
user_pref("font.name.monospace.th", "Noto Sans Thai");
user_pref("font.name.monospace.x-armn", "Noto Sans Armenian");
user_pref("font.name.monospace.x-beng", "Noto Sans Bengali");
user_pref("font.name.monospace.x-cyrillic", "Cousine, Courier, Courier New");
user_pref("font.name.monospace.x-devanagari", "Noto Sans Devanagari");
user_pref("font.name.monospace.x-ethi", "Noto Sans Ethiopic");
user_pref("font.name.monospace.x-geor", "Noto Sans Georgian");
user_pref("font.name.monospace.x-gujr", "Noto Sans Gujarati");
user_pref("font.name.monospace.x-guru", "Noto Sans Gurmukhi");
user_pref("font.name.monospace.x-khmr", "Noto Sans Khmer");
user_pref("font.name.monospace.x-knda", "Noto Sans Kannada");
user_pref("font.name.monospace.x-mlym", "Noto Sans Malayalam");
user_pref("font.name.monospace.x-orya", "Noto Sans Oriya");
user_pref("font.name.monospace.x-sinh", "Noto Sans Sinhala");
user_pref("font.name.monospace.x-tamil", "Noto Sans Tamil");
user_pref("font.name.monospace.x-telu", "Noto Sans Telugu");
user_pref("font.name.monospace.x-tibt", "Noto Sans Tibetan");
user_pref("font.name.monospace.x-unicode", "Cousine, Courier, Courier New");
user_pref("font.name.monospace.x-western", "Cousine, Courier, Courier New");
user_pref("font.name.monospace.zh-CN", "Noto Sans SC Regular");
user_pref("font.name.monospace.zh-HK", "Noto Sans TC Regular");
user_pref("font.name.monospace.zh-TW", "Noto Sans TC Regular");
user_pref("font.name.sans-serif.ar", "Noto Naskh Arabic");
user_pref("font.name.sans-serif.el", "Arimo, Arial, Verdana");
user_pref("font.name.sans-serif.he", "Noto Sans Hebrew");
user_pref("font.name.sans-serif.ja", "Noto Sans JP Regular");
user_pref("font.name.sans-serif.ko", "Noto Sans KR Regular");
user_pref("font.name.sans-serif.th", "Noto Sans Thai");
user_pref("font.name.sans-serif.x-armn", "Noto Sans Armenian");
user_pref("font.name.sans-serif.x-beng", "Noto Sans Bengali");
user_pref("font.name.sans-serif.x-cyrillic", "Arimo, Arial, Verdana");
user_pref("font.name.sans-serif.x-devanagari", "Noto Sans Devanagari");
user_pref("font.name.sans-serif.x-ethi", "Noto Sans Ethiopic");
user_pref("font.name.sans-serif.x-geor", "Noto Sans Georgian");
user_pref("font.name.sans-serif.x-gujr", "Noto Sans Gujarati");
user_pref("font.name.sans-serif.x-guru", "Noto Sans Gurmukhi");
user_pref("font.name.sans-serif.x-khmr", "Noto Sans Khmer");
user_pref("font.name.sans-serif.x-knda", "Noto Sans Kannada");
user_pref("font.name.sans-serif.x-mlym", "Noto Sans Malayalam");
user_pref("font.name.sans-serif.x-orya", "Noto Sans Oriya");
user_pref("font.name.sans-serif.x-sinh", "Noto Sans Sinhala");
user_pref("font.name.sans-serif.x-tamil", "Noto Sans Tamil");
user_pref("font.name.sans-serif.x-telu", "Noto Sans Telugu");
user_pref("font.name.sans-serif.x-tibt", "Noto Sans Tibetan");
user_pref("font.name.sans-serif.x-unicode", "Arimo, Arial, Verdana");
user_pref("font.name.sans-serif.x-western", "Arimo, Arial, Verdana");
user_pref("font.name.sans-serif.zh-CN", "Noto Sans SC Regular");
user_pref("font.name.sans-serif.zh-HK", "Noto Sans TC Regular");
user_pref("font.name.sans-serif.zh-TW", "Noto Sans TC Regular");
user_pref("font.name.sans.my", "Noto Sans Myanmar");
user_pref("font.name.serif.ar", "Noto Naskh Arabic");
user_pref("font.name.serif.el", "Tinos, Georgia");
user_pref("font.name.serif.he", "Noto Sans Hebrew");
user_pref("font.name.serif.ja", "Noto Sans JP Regular");
user_pref("font.name.serif.ko", "Noto Sans KR Regular");
user_pref("font.name.serif.my", "Noto Sans Myanmar");
user_pref("font.name.serif.th", "Noto Serif Thai");
user_pref("font.name.serif.x-armn", "Noto Serif Armenian");
user_pref("font.name.serif.x-beng", "Noto Sans Bengali");
user_pref("font.name.serif.x-cyrillic", "Tinos, Georgia");
user_pref("font.name.serif.x-devanagari", "Noto Sans Devanagari");
user_pref("font.name.serif.x-ethi", "Noto Sans Ethiopic");
user_pref("font.name.serif.x-geor", "Noto Sans Georgian");
user_pref("font.name.serif.x-gujr", "Noto Sans Gujarati");
user_pref("font.name.serif.x-guru", "Noto Sans Gurmukhi");
user_pref("font.name.serif.x-khmr", "Noto Serif Khmer");
user_pref("font.name.serif.x-knda", "Noto Sans Kannada");
user_pref("font.name.serif.x-mlym", "Noto Sans Malayalam");
user_pref("font.name.serif.x-orya", "Noto Sans Oriya");
user_pref("font.name.serif.x-sinh", "Noto Sans Sinhala");
user_pref("font.name.serif.x-tamil", "Noto Sans Tamil");
user_pref("font.name.serif.x-telu", "Noto Sans Telugu");
user_pref("font.name.serif.x-tibt", "Noto Sans Tibetan");
user_pref("font.name.serif.x-unicode", "Tinos, Georgia");
user_pref("font.name.serif.x-western", "Tinos, Georgia");
user_pref("font.name.serif.zh-CN", "Noto Sans SC Regular");
user_pref("font.name.serif.zh-HK", "Noto Sans TC Regular");
user_pref("font.name.serif.zh-TW", "Noto Sans TC Regular");



// Default overwrites
// Pretending to use an older (vulnerable) Tor Browser might helps to fool websites?!
user_pref("browser.startup.homepage_override.buildID", "20190402020101");
user_pref("browser.startup.homepage_override.mstone", "68.2.0"); //ignore
user_pref("browser.startup.homepage_override.torbrowser.version", "9.0.1");
user_pref("distribution.iniFile.exists.appversion", "68.2.0");
user_pref("extensions.activeThemeID", "default-theme@mozilla.org");
user_pref("extensions.blocklist.lastModified", "Fri, 15 Nov 2019 07:50:24 GMT");
user_pref("extensions.blocklist.pingCountTotal", 0);
user_pref("extensions.blocklist.pingCountVersion", 0);
user_pref("extensions.lastAppBuildId", "20200402050101");
user_pref("extensions.lastAppVersion", "68.2.0");
user_pref("extensions.lastPlatformVersion", "68.2.0");
user_pref("extensions.lastTorBrowserVersion", "9.0.4");
user_pref("extensions.torbutton.lastBrowserVersion", "9.0.4");
user_pref("extensions.torbutton.lastUpdateCheck", "1573836430.555");
//user_pref("extensions.torbutton.use_nontor_proxy", false);
user_pref("gfx.crash-guard.wmfvpxvideo.appVersion", "68.2.0");
user_pref("gfx.crash-guard.wmfvpxvideo.deviceID", "0x1c03");
user_pref("gfx.crash-guard.wmfvpxvideo.driverVersion", "26.21.14.4120");
user_pref("browser.startup.lastColdStartupCheck", "1573836431");
user_pref("media.gmp-manager.buildID", "20200402050101");
user_pref("places.history.expiration.transient_current_max_pages", "112348");
user_pref("sanity-test.driver-version", "26.21.14.4120");
//user_pref("sanity-test.version", "20190402020101");
user_pref("security.sandbox.content.tempDirSuffix", "{7ca12269-9ebb-4dc5-8d32-2e274262e2eb}"); // FIXME: linux problem?!
user_pref("security.sandbox.plugin.tempDirSuffix", "{b8450ff5-4717-4aaa-b59b-a55890c634de}"); // FIXME: borked?
user_pref("services.settings.last_etag", "1573804224556");
user_pref("toolkit.telemetry.cachedClientID", "f9e80444-363a-4eac-a7c2-d34aff3c4eae");


// Extensions
//HTTPS-E was always BS, block HTTP instead (by default)
user_pref("devtools.webextensions.https-everywhere-eff@eff.org.enabled", false);
user_pref("extensions.autoDisableScopes", 0);
user_pref("extensions.bootstrappedAddons", "{}");
user_pref("extensions.checkCompatibility.4.*", false);
user_pref("extensions.databaseSchema", 31);
user_pref("extensions.enabledAddons", "https-everywhere%40eff.org:3.1.4,%7B73a6fe31-595d-460b-a920-fcc0f8843232%7D:2.6.6.1,torbutton%40torproject.org:1.5.2,ubufox%40ubuntu.com:2.6,tor-launcher%40torproject.org:0.1.1pre-alpha,%7B972ce4c6-7e08-4474-a285-3208198ce6fd%7D:17.0.5");
user_pref("extensions.enabledItems", "langpack-en-US@firefox.mozilla.org:,{73a6fe31-595d-460b-a920-fcc0f8843232}:1.9.9.57,{e0204bd5-9d31-402b-a99d-a6aa8ffebdca}:1.2.4,{972ce4c6-7e08-4474-a285-3208198ce6fd}:3.5.8");
user_pref("extensions.enabledScopes", 1);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.getAddons.databaseSchema", 5);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.hotfix.id", "");
user_pref("extensions.htmlaboutaddons.discover.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false); // default
user_pref("extensions.pendingOperations", false);
user_pref("extensions.systemAddonSet", "{ "schema": 1, "addons": {} }");
user_pref("extensions.torbutton.noscript_inited", true);
user_pref("extensions.torbutton.pref_fixup_version", 1);
user_pref("extensions.torbutton.security_slider_migration", 1);
user_pref("extensions.torbutton.security_slider", 2); // enforce mild but usable strong defaults
user_pref("extensions.torlauncher.default_bridge_type", "");
user_pref("extensions.torlauncher.prompt_at_startup", false);
user_pref("extensions.torlauncher.should_remove_meek_helper_profiles", false);
user_pref("extensions.torlauncher.torrc_fixup_version", 2);
user_pref("extensions.ui.lastCategory", "addons://list/plugin");
user_pref("extensions.webextensions.uuids", "{"https - everywhere - eff@eff.org":"27887d0c - d485 - 4a7b - 8814 - 6ae68e618dc6","{ 73a6fe31 - 595d - 460b - a920 - fcc0f8843232 } ":"ddfeff98 - ea12 - 4472 - ae77 - e9272beb3776","onboarding@mozilla.org":"fce2af8c - d371 - 41b7 - ac9c - 02ce2d130f9e","default -theme@mozilla.org":"af5ffc7e - bbd1 - 4225 - 9163 - 44c5d749d995","ddg@search.mozilla.org":"e9b18615 - 9890 - 442f - b185 - 10f751b34ec8","ddg - onion@search.mozilla.org":"f2f0d1b0 - 9664 - 4978 - a8b6 - 1982dbd0134c","google@search.mozilla.org":"d2282779 - 70dc - 4cc4 - a6e5 - f7d10ed97b43","yahoo@search.mozilla.org":"3f238b44 - 9b8e - 48d0 - b762 - 91bec44270bb","twitter@search.mozilla.org":"8ee60cfc - edb5 - 46f6 - b9b6 - 7d547b72e6d9","wikipedia@search.mozilla.org":"5c01f5cf - ecf4 - 47a2 - 8501 - 6b58564b7f12","disconnect@search.mozilla.org":"696c00a5 - 4c02 - 4f62 - 83d7 - 38b985d0212d","youtube@search.mozilla.org":"d211fdd7 - 735f - 403c - bb76 - 2d6ecde022b9","startpage@search.mozilla.org":"46e4d665 - 3e7b - 4314 - a3ff - 4b955ca3091b"}");


// DNS-over-HTTPS
// DoH will fail with Onion/VPN due to "leak protection" + OCSP 1 (needs 0)
user_pref("network.trr.mode", 0);
user_pref("network.trr.uri", "https://mozilla.cloudflare-dns.com/dns-query");
user_pref("network.trr.bootstrapAddress", "");


// Wifi
user_pref("network.trr.wait-for-portal", false);
user_pref("network.captive-portal-service.enabled", false);


// Pocket, Screenshot and other bloatware
user_pref("extensions.pocket.enabled", false); // default
user_pref("extensions.screenshots.upload-disabled", false); // default
user_pref("extensions.screenshots.disabled", true); // default false


// Auto formfill
user_pref("browser.formfill.enable", false); // default
user_pref("extensions.formautofill.addresses.enabled", false); // default true
user_pref("extensions.formautofill.creditCards.enabled", false); // default true
user_pref("extensions.formautofill.heuristics.enabled", false); // default true
user_pref("signon.autofillForms", false);
user_pref("signon.importedFromSqlite", true);
user_pref("signon.rememberSignons", false);

// Geo
user_pref("permissions.default.geo", 2); // default 0


// WebGL
user_pref("webgl.disable-extensions", true); // default
user_pref("webgl.min_capability_mode", true); // default false
user_pref("webgl.disable-fail-if-major-performance-caveae", true); // default
user_pref("webgl.enable-debug-renderer-info", true); // default false
user_pref("webgl.disabled", true); // default false
user_pref("webgl.enable-webgl2", true); // default false
user_pref("webgl.cgl.multithreaded", false); // default false
user_pref("webgl.dxgl.enabled", false); // default false


// DOM + Timing
user_pref("dom.enable_performance_navigation_timing", false); // default true
user_pref("dom.archivereader.enabled", false);
user_pref("dom.enable_performance", false);
user_pref("dom.enable_resource_timing", false);
user_pref("dom.enable_user_timing", false);
user_pref("dom.event.highrestimestamp.enabled", true);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.indexedDB.enabled", false);
user_pref("dom.maxHardwareConcurrency", 1);
user_pref("dom.mozTCPSocket.enabled", false);
user_pref("dom.network.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.securecontext.whitelist_onions", true);
user_pref("dom.w3c_touch_events.enabled", 0);
user_pref("dom.webaudio.enabled", false);


// U2F
user_pref("security.webauth.u2f", true); // default


// IPv6
user_pref("network.dns.disableIPv6", false); // default


// Safe-Browsing
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");


user_pref("media.mediasource.experimental.enabled", false);
user_pref("app.update.badge", true);
user_pref("app.update.promptWaitTime", 3600);
user_pref("app.update.staging.enabled", false);
user_pref("browser.cache.disk.amount_written", 0);
user_pref("browser.cache.disk.capacity", 1048576);
user_pref("browser.cache.disk.filesystem_reported", 1);
user_pref("browser.contentblocking.category", "standard");
user_pref("browser.disableResetPrompt", true);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.manager.retention", 1);
user_pref("browser.download.manager.scanWhenDone", false);
user_pref("browser.download.panel.shown", true);
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("browser.laterrun.bookkeeping.sessionCount", 1);
user_pref("browser.laterrun.enabled", true);
user_pref("browser.launcherProcess.enabled", true);
user_pref("browser.link.open_newwindow.restriction", 0);
user_pref("browser.migration.version", 81);
user_pref("browser.newtabpage.directory.ping", "data:text/plain,");
user_pref("browser.newtabpage.directory.source", "data:text/plain,");
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.newtabpage.preload", false);
user_pref("browser.newtabpage.remote", false);
user_pref("browser.newtabpage.storageVersion", 1);
user_pref("browser.onboarding.seen-tourset-version", 4);
user_pref("browser.onboarding.tour-type", "new");
user_pref("browser.pageActions.persistedActions", "{"version":1,"ids":["bookmark","pinTab","bookmarkSeparator","copyURL","emailLink","addSearchEngine","shareURL"],"idsInUrlbar":["bookmark"]}");
user_pref("browser.pagethumbnails.storage_version", 3);
user_pref("browser.places.importBookmarksHTML", false);
user_pref("browser.pocket.api", "");
user_pref("browser.pocket.enabled", false);
user_pref("browser.pocket.site", "");
user_pref("browser.privatebrowsing.autostart", true);
user_pref("browser.reader.detectedFirstArticle", true);
user_pref("browser.rights.3.shown", true);
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.defaultenginename", "data:text/plain,browser.search.defaultenginename=DuckDuckGo");
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.order.extra.1", "DuckDuckGo");
user_pref("browser.search.order.extra.2", "YouTube");
user_pref("browser.search.region", "US");
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.update", false);
user_pref("browser.selfsupport.enabled", false);
user_pref("browser.selfsupport.url", "");
user_pref("browser.send_pings", false);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.syncPromoViewsLeftMap", "{\"addons\":0, \"passwords\":0, \"bookmarks\":0}");
user_pref("browser.uiCustomization.state", "{"placements":{"widget - overflow - fixed - list":[],"nav - bar":["back - button","forward - button","stop - reload - button","urlbar - container","torbutton - button","security - level - button","new- identity - button","downloads - button","fxa - toolbar - menu - button"],"toolbar - menubar":["menubar - items"],"TabsToolbar":["tabbrowser - tabs","new- tab - button","alltabs - button"],"PersonalToolbar":["personal - bookmarks"],"PanelUI - contents":["home - button","edit - controls","zoom - controls","new- window - button","save - page - button","print - button","bookmarks - menu - button","history - panelmenu","find - button","preferences - button","add - ons - button","developer - button"],"addon - bar":["addonbar - closebutton","status - bar"]},"seen":["developer - button","https - everywhere - eff_eff_org - browser - action","_73a6fe31 - 595d - 460b - a920 - fcc0f8843232_ - browser - action"],"dirtyAreaCache":["PersonalToolbar","nav - bar","TabsToolbar","toolbar - menubar"],"currentVersion":16,"currentTorVersion":1,"newElementCount":1}");
user_pref("browser.uitour.enabled", false);
user_pref("browser.urlbar.placeholderName", "DuckDuckGo");
user_pref("browser.usedOnWindows10", true);
user_pref("browser.zoom.siteSpecific", false);
user_pref("device.sensors.enabled", false);
user_pref("distribution.iniFile.exists.value", false);
user_pref("experiments.enabled", false);
user_pref("fission.autostart", false);
user_pref("general.appname.override", "Netscape");
user_pref("general.appversion.override", "5.0 (Windows)");
user_pref("general.buildID.override", "20100101");
user_pref("general.oscpu.override", "Windows NT 6.3");
user_pref("general.platform.override", "Win32");
user_pref("general.productSub.override", "20100101");
user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.3; rv:68.0) Gecko/20100101 Firefox/68.0");
user_pref("general.useragent.vendor", "");
user_pref("general.useragent.vendorSub", "");
user_pref("general.warnOnAboutConfig", false);
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("gfx.crash-guard.status.wmfvpxvideo", 2);
user_pref("gfx.downloadable_fonts.fallback_delay", -1);
user_pref("intl.accept_charsets", "iso-8859-1,*,utf-8");
user_pref("intl.accept_languages", "en-us, en");
user_pref("intl.charset.default", "windows-1252");
user_pref("intl.charsetmenu.browser.cache", "UTF-8");
user_pref("javascript.options.asmjs", false);
user_pref("javascript.options.baselinejit", false);
user_pref("javascript.options.ion", false);
user_pref("javascript.options.native_regexp", false);
user_pref("javascript.use_us_english_locale", true);
user_pref("layers.mlgpu.sanity-test-failed", false);
user_pref("mathml.disabled", true); // FIXME:
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.cookie.lifetime.days", 1);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.gio.supported-protocols", "");
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
user_pref("network.http.connection-retry-timeout", 0);
user_pref("network.http.max-persistent-connections-per-proxy", 256);
user_pref("network.http.pipelining.aggressive", true);
user_pref("network.http.pipelining.max-optimistic-requests", 3);
user_pref("network.http.pipelining.maxrequests", 12);
user_pref("network.http.pipelining.read-timeout", 60000);
user_pref("network.http.pipelining.reschedule-timeout", 15000);
user_pref("network.http.pipelining.ssl", true);
user_pref("network.http.pipelining", true);
user_pref("network.http.proxy.pipelining", true);
user_pref("network.http.referer.hideOnionSource", true);
user_pref("network.http.spdy.enabled.http2", false);
user_pref("network.http.spdy.enabled.http2draft", false);
user_pref("network.http.spdy.enabled.v2", false);
user_pref("network.http.spdy.enabled.v3-1", false);
user_pref("network.http.spdy.enabled.v3", false);
user_pref("network.http.spdy.enabled", false);
user_pref("network.jar.block-remote-files", true);
user_pref("network.manage-offline-status", false);
user_pref("network.predictor.enabled", false);
user_pref("network.protocol-handler.external-default", false);
user_pref("network.protocol-handler.external.mailto", false);
user_pref("network.protocol-handler.external.news", false);
user_pref("network.protocol-handler.external.nntp", false);
user_pref("network.protocol-handler.external.snews", false);
user_pref("network.protocol-handler.warn-external.mailto", true);
user_pref("network.protocol-handler.warn-external.news", true);
user_pref("network.protocol-handler.warn-external.nntp", true);
user_pref("network.protocol-handler.warn-external.snews", true);
user_pref("network.proxy.no_proxies_on", "");
user_pref("network.proxy.socks_port", 9150);
user_pref("network.proxy.socks_remote_dns", true);
user_pref("network.proxy.socks", "127.0.0.1");
user_pref("network.proxy.type", 1);
user_pref("network.security.ports.banned", "139,445,9050,9051,9150,9151");
user_pref("pdfjs.enabledCache.state", true);
user_pref("pdfjs.migrationVersion", 2);
user_pref("pdfjs.previousHandler.alwaysAskBeforeHandling", true);
user_pref("pdfjs.previousHandler.preferredAction", 4);
user_pref("permissions.memory_only", true);
user_pref("plugin.disable_full_page_plugin_for_types", "application/pdf");
user_pref("plugin.disable", true);
user_pref("plugin.expose_full_path", false);
user_pref("plugin.state.flash", 1);
user_pref("plugins.click_to_play", true);
user_pref("plugins.hide_infobar_for_missing_plugin", true);
user_pref("plugins.hideMissingPluginsNotification", true);
user_pref("privacy.sanitize.pending", "[{"id":"newtab-container","itemsToClear":[],"options":{}}]"); // FIXME:
user_pref("privacy.suppressModifierKeyEvents", true);
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("privacy.use_utc_timezone", true);
user_pref("reader.parse-on-load.enabled", false); // default true
user_pref("sanity-test.advanced-layers", true);
user_pref("sanity-test.device-id", "0x1c03"); // FIXME:
user_pref("sanity-test.running", false);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.enable_tls_session_tickets", false);
user_pref("security.family_safety.mode", 0);
user_pref("security.nocertdb", true);
user_pref("security.pki.sha1_enforcement_level", 2);
user_pref("security.ssl.disable_session_identifiers", true);
user_pref("security.ssl.enable_false_start", true);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.tls.unrestricted_rc4_fallback", false);
user_pref("security.tls.version.max", 3);
user_pref("services.blocklist.pinning.checked", 1573836818);
user_pref("services.blocklist.update_enabled", false);
user_pref("services.settings.clock_skew_seconds", 5);
user_pref("services.settings.last_update_seconds", 1573836818);
user_pref("services.settings.main.hijack-blocklists.last_check", 1573836818);
user_pref("services.settings.main.language-dictionaries.last_check", 1573836818);
user_pref("services.settings.main.sites-classification.last_check", 1573836818);
user_pref("services.settings.security.onecrl.checked", 1573836818);
user_pref("services.sync.engine.addons", false);
user_pref("services.sync.engine.prefs", false);
user_pref("services.sync.engine.tabs", false);
user_pref("services.sync.ui.hidden", true);
user_pref("social.directories", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.whitelist", "");
user_pref("startup.homepage_override_url", "https://blog.torproject.org/category/tags/tor-browser");
user_pref("svg.in-content.enabled", true);
user_pref("toolkit.startup.last_success", 1573835485);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("ui.osk.debug.keyboardDisplayReason", "IKPOS: Touch screen not found.");
user_pref("ui.use_standins_for_native_colors", true);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.min_capability_mode", true);
user_pref("xpinstall.whitelist.add.36", "");
user_pref("xpinstall.whitelist.add", "");
user_pref("accessibility.force_disabled", 1); // default 0
user_pref("mousewheel.min_line_scroll_amount", 15); //default 5
user_pref("browser.tabs.drawInTitlebar", true); //default

// Does not exist in TB
//user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
//user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.feature", false);
//user_pref("browser.newtabpage.activity-stream.feeds.telemetr", false);
//user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
//user_pref("browser.newtabpage.activity-stream.telemetry", false);
//user_pref("browser.pagethumbnails.capturing_disable", true);
//user_pref("camera.control.autofocus_moving_callback.enabled", false);
//user_pref("camera.control.face_detection.enabled", false);
//user_pref("dom.enable_performance_navigation_timing", false);
//user_pref("media.audio_data.enabled", false);
//user_pref("security.identityblock.show_extended_validation", false);
//user_pref("security.secure_connection_icon_color_gray", false);
//user_pref("toolkit.coverage.opt-out", "");
//user_pref("toolkit.telemetry.coverage.opt-out", "");
//user_pref("media.mediasource.ignore_codecs", false);


// uBO rules
// Block local access
//||10.^$important,third-party
//||127.0.^$important,third-party
//||172.26.^$important,third-party
//||192.168.^$important,third-party
//||localhost^$important,third-party
// uBO
// Block router GUI
//||asus.box^$important,third-party
//||easy.box^$important,third-party
//||fritz.box^$important,third-party
//||giga.cube^$important,third-party
//||speedport.ip^$important,third-party

// Debug
user_pref("extensions.torbutton.loglevel",4);
user_pref("extensions.torbutton.logmethod",1);


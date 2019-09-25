//
//  Hardening only .js by CHEF-KOCH
// 
//      Newer than user.js! There are differences (on purpose)!
//
//      Version 0.60
//
//      Todo: TLS, DoH, encryption and some other things. 
// 


// Preferences
user_pref("accessibility.force_disabled", 1);
user_pref("browser.download.autohideButton", false);
user_pref("browser.download.panel.shown", true);
// user_pref("browser.pageActions.persistedActions", "{\"version\":1,\"ids\":[\"bookmark\",\"bookmarkSeparator\",\"copyURL\",\"emailLink\",\"addSearchEngine\",\"pinTab\"],\"idsInUrlbar\":[]}"); // Disable bookmark button
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.uidensity", 1);
user_pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");
user_pref("findbar.highlightAll", true);
user_pref("general.autoScroll", false);
user_pref("general.smoothScroll", false);
user_pref("general.warnOnAboutConfig", false);
user_pref("security.secure_connection_icon_color_gray", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Search Bar
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.update", false);
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.maxRichResults", 0);
user_pref("browser.urlbar.placeholderName", "DuckDuckGo");
user_pref("browser.urlbar.quantumbar", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.searches", false);

// Local Data Storage
user_pref("browser.bookmarks.max_backups", 0);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.formfill.enable", false);
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.privatebrowsing.autostart", true);
user_pref("browser.sessionstore.max_tabs_undo", 0);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("extensions.privatebrowsing.notification", true);
user_pref("signon.autofillForms", false);
user_pref("signon.rememberSignons", false); // KeePass
user_pref("startup.homepage_override_url", "");
user_pref("startup.homepage_welcome_url", "");

// Network Stack
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("network.cookie.cookieBehavior", 0);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.referer.spoofSource", false);
user_pref("network.http.referer.trimmingPolicy", 0);
user_pref("network.http.referer.XOriginPolicy", 1);
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.trr.bootstrapAddress", "");
user_pref("network.trr.mode", 0); // Use OS wide DNS systems instead, Unbound or DNSCryptv2

// Device Fingerprinting
user_pref("beacon.enabled", false);
user_pref("browser.search.geoip.url", "");
user_pref("dom.battery.enabled", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("general.useragent.override", "Mozilla/5.0 (X11; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0");
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("media.eme.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.resistFingerprinting", false); // true is you like RP, it breaks too much
user_pref("privacy.trackingprotection.cryptomining.enabled", false);
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.fingerprinting.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false); // we only have telemetry when TP is enabled in the session
user_pref("webgl.disabled", true);

// Firefox Updates (disabled)
user_pref("app.update.auto", false);
user_pref("extensions.systemAddon.update.enabled", false);
user_pref("extensions.systemAddon.update.url", "");
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("extensions.update.enabled", false);

// Firefox Telemetry
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("datareporting.healthreport.infoURL", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.firstRunURL", "");
user_pref("permissions.manager.defaultsUrl", "");
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

// Disable Specific Firefox Features
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.getAddons.discovery.api_url", "");
user_pref("extensions.htmlaboutaddons.discover.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.screenshots.disabled", true);
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("extensions.webservice.discoverURL", "");
user_pref("identity.fxaccounts.auth.uri", "");
user_pref("identity.fxaccounts.enabled", false);
user_pref("identity.fxaccounts.pairing.enabled", false);
user_pref("identity.fxaccounts.remote.pairing.uri", "");
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-gmpopenh264.visible", false);
user_pref("media.gmp-manager.url", "");
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("webchannel.allowObject.urlWhitelist", "");

// Safe Browsing
user_pref("browser.safebrowsing.allowOverride", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.reportPhishURL", "");

// Blocklist
user_pref("extensions.blocklist.enabled", false);
user_pref("extensions.blocklist.url", "");
user_pref("services.blocklist.addons.collection", "");
user_pref("services.blocklist.bucket", "");
user_pref("services.blocklist.gfx.collection", "");
user_pref("services.blocklist.pinning.bucket", "");
user_pref("services.blocklist.pinning.collection", "");
user_pref("services.blocklist.pinning.enabled", false);
user_pref("services.blocklist.plugins.collection", "");
user_pref("services.settings.default_bucket", "");
user_pref("services.settings.security.onecrl.bucket", "");
user_pref("services.settings.security.onecrl.collection", "");
user_pref("services.settings.server", "");

// Other stuff
user_pref("browser.download.forbid_open_with", true);
// user_pref("dom.webaudio.enabled", false);
user_pref("gfx.font_rendering.graphite.enabled", false);
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
user_pref("svg.disabled", true);
// user_pref("mathml.disabled", true); // Disable math markup language
user_pref("network.dnsCacheEntries", 200);
user_pref("network.IDN_show_punycode", true);
// user_pref("javascript.options.asmjs", false);
// user_pref("javascript.options.baselinejit", false);
// user_pref("javascript.options.ion", false);
// user_pref("javascript.options.wasm", false);


// Optional params (as per own needs)
// "browser.uiCustomization.state" 
// "extensions.webextensions.uuids"

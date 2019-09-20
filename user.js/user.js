// Disable alt-key menu bar showing behavior
user_pref("ui.key.menuAccessKeyFocuses", false);
// Disable .webp
user_pref("image.webp.enabled", false);
user_pref("image.http.accept", "*/\*");
user_pref("network.http.accept-encoding.secure", "gzip, deflate, br");
// Full screen API
user_pref("full-screen-api.transition-duration.enter", 0 0);
user_pref("full-screen-api.transition-duration.leave", 0 0);
user_pref("toolkit.cosmeticAnimations.enabled", false); //problematic
user_pref("browser.fullscreen.animate", false); //removed
user_pref("full-screen-api.transition.timeout", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("dom.push.enabled", false);
user_pref("full-screen-api.warning.delay", 0);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
// - Workaround for single monitor users -
// See here: https://hub.displaycal.net/forums/topic/any-idea-whats-wrong-with-my-chrome/
//user_pref("gfx.color_management.enablev4", true);
//user_pref("gfx.color_management.mode", 1);
user_pref("media.gpu-process-decoder", true); // Do not (!) change otherwise YT 60fps videos might freeze/stutter
user_pref("gfx.webrender.force-disabled", true); //Workaround for FF69 stutter + responsive issue
user_pref("gfx.color_management.mode", 0); //Default: 2
user_pref("layout.frame_rate.precise", true); //Disable in case you have scrolling issues
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("browser.urlbar.quantumbar", true);
user_pref("app.update.auto", false);
user_pref("gfx.content.azure.accelerated", true);
user_pref("gfx.canvas.azure.accelerated", true);
user_pref("reader.parse-on-load.enabled", false);
user_pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts", false);
user_pref("browser.search.context.loadInBackground", true);
user_pref("dom.ipc.processPriorityManager.enabled", true);
user_pref("font.name.serif.x-unicode", "Bitstream Vera Sans");
user_pref("font.name.serif.x-western", "Bitstream Vera Sans");
user_pref("browser.tabs.loadBookmarksInBackground", true);
user_pref("privacy.resistFingerprinting.letterboxing", false);
//user_pref("privacy.resistFingerprinting.letterboxing.dimensions", "1280x720");
user_pref("browser.tabs.insertAfterCurrent", true);
user_pref("browser.tabs.unloadOnLowMemory", true);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("stoolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("security.identitypopup.recordEventElemetry", false);
user_pref("security.certerrors.recordEventTelemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", false);
user_pref("browser.in-content.dark-mode", true); //https://overdodactyl.github.io/ShadowFox/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // Workaround for userChrome.css not loading
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("alerts.showFavicons", true);
user_pref("browser.backspace_action", 0); //2
user_pref("extensions.shield-recipe-client.first_run", false);
user_pref("extensions.shield-recipe-client.user_id", "14a0a78f-38a0-4468-bddd-d482c8950b3c");
user_pref("alerts.useSystemBackend", true);
user_pref("app.normandy.remotesettings.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("app.update.enabled", true);
user_pref("beacon.enabled", false);
user_pref("browser.bookmarks.max_backups", 0); //3-5 suggestion
user_pref("browser.cache.disk.enable", false);
user_pref("browser.disableResetPrompt", true);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.sessionstore_max_tabs_undo", 0); //1=last closed window
user_pref("browser.casting.enabled", false);
user_pref("browser.chrome.errorReporter.submitUrl", "");
user_pref("captivedetect.canonicalURL", "");
user_pref("browser.contentblocking.cryptomining.preferences.ui.enabled", true);
user_pref("browser.contentblocking.fingerprinting.preferences.ui.enabled", true);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.display.use_document_fonts", 0);
user_pref("browser.download.folderList", 2);
user_pref("browser.download.forbid_open_with", false);
user_pref("browser.download.manager.retention", 0);
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.fixup.hide_user_pass", true);
user_pref("dom.disable_open_during_load", true);
user_pref("browser.formfill.enable", false);
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);
user_pref("browser.library.activity-stream.enabled", false);
user_pref("full-screen-api.enabled", false);
user_pref("browser.formfill.expire_days", 0);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.launcherProcess.enabled", true);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtab.url", "about:blank");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "");
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.onboarding", "{}");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.config", "{}");
user_pref("browser.newtabpage.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.filterAdult", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", true);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-streamasrouterExperimentEnabled", false);
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "data:text/plain,{}");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.passwords.enabled", false);
user_pref("browser.offline-apps.notify", true);
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("browser.pingcentre.telemetry", false);
user_pref("browser.pocket.enabled", false);
user_pref("browser.privatebrowsing.autostart", true); //start in PBM
user_pref("browser.privatebrowsing.searchUI", false);
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("geo.provider.use_corelocation", false);
user_pref("browser.search.region", "US");
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.update", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("browser.security.newcerterrorpage.enabled", true);
user_pref("browser.selfsupport.url", "");
user_pref("browser.startup.page", 3); //0 for blank
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.loadDivertedInBackground", true);
user_pref("browser.urlbar.clickSelectsAll", true);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("browser.urlbar.doubleClickSelectsAll", false);
user_pref("dom.popup_allowed_events", "change click dblclick mouseup notificationclick reset submit"); //click dblclick
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.send_pings.require_same_host", true);
user_pref("browser.send_pings", false);
user_pref("network.dns.disableIPv6", false);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.shell.shortcutFavicons", false);
user_pref("network.http.spdy.enabled.deps", false);
user_pref("network.http.spdy.enabled.http2", false);
user_pref("network.http.spdy.websockets", false);
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.altsvc.oe", false);
user_pref("browser.ssl_override_behavior", 1);
user_pref("network.http.altsvc.enabled", false);
user_pref("browser.startup.homepage_override.buildID", "20100101");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.tabs.drawInTitlebar", true);
user_pref("browser.uitour.enabled", false);
user_pref("browser.urlbar.autocomplete.enabled", false);
user_pref("network.http.referer.trimmingPolicy", 0);
user_pref("network.http.sendRefererHeader", 1);
user_pref("security.insecure_connection_icon.enabled", true);
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("browser.urlbar.autoFill.typed", false);
user_pref("browser.urlbar.oneOffSearches", false);
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.maxRichResults", 0);
user_pref("network.http.referer.XOriginPolicy", 1);
user_pref("browser.urlbar.filter.javascript", true);
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);
user_pref("browser.urlbar.matchBuckets", "suggestion:4,general:5"); //general:5,suggestion:Infinity
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("camera.control.autofocus_moving_callback.enabled", false);
user_pref("camera.control.face_detection.enabled", false);
user_pref("canvas.capturestream.enabled", false);
user_pref("clipboard.autocopy", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.force-local", true);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.onboarding.telemetry-logged", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.webide.enabled", false);
user_pref("dom.allow_cut_copy", false);
user_pref("dom.archivereader.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("dom.enable_user_timing", false);
user_pref("dom.event.clipboardevents.enabled", true);
user_pref("dom.flyweb.enabled", false);
user_pref("dom.forms.autocomplete.formautofill", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled",	false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.ipc.processCount", 64);
user_pref("dom.disable_beforeunload", true);
user_pref("dom.media.autoplay.autoplay-policy-api", true);
user_pref("media.block-autoplay-until-in-foreground", true);
user_pref("dom.mozTCPSocket.enabled", false);
user_pref("dom.network.enabled", false);
user_pref("network.trr.skip-AAAA-when-not-supported", true);
user_pref("network.trr.wait-for-A-and-AAAA", true);
user_pref("dom.telephony.enabled", false);
user_pref("dom.vibrator.enabled", false);
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.webnotifications.serviceworker.enabled", false);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.toolbar", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.event.contextmenu.enabled", false);
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.personalbar", true);
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.vr.enabled", false);
user_pref("dom.disable_window_open_feature.close", true);
user_pref("experiments.activeExperiment", false);
user_pref("dom.webaudio.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.requireuserinteraction", true);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("gfx.direct2d.disabled", false);
user_pref("extensions.autoDisableScopes", 14);
user_pref("extensions.CanvasBlocker@kkapsner.de.whiteList", "");
user_pref("extensions.allowPrivateBrowsingByDefault", false);
user_pref("extensions.blocklist.enabled", true);
user_pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/");
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.fxmonitor.enabled", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.shield-recipe-client.api_url", "");
user_pref("extensions.screenshots.disabled", true);
user_pref("gfx.downloadable_fonts.woff2.enabled", false);
user_pref("full-screen-api.warning.delay", 0);
user_pref("extensions.update.autoUpdateDefault", true);
user_pref("general.warnOnAboutConfig", false);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("extensions.webextensions.restrictedDomains", "");
user_pref("extensions.screenshots.upload-disabled", true);
user_pref("font.system.whitelist", "");
user_pref("extensions.systemAddon.update.url", "");
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("extensions.systemAddon.update.enabled", false);
user_pref("extensions.update.enabled", true);
user_pref("general.autoScroll", true);
user_pref("media.media-capabilities.enabled", true);
user_pref("geo.enabled", false);
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
user_pref("gfx.font_rendering.graphite.enabled", false);
user_pref("layers.acceleration.disabled", false);
user_pref("layout.spellcheckDefault", 2);
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.enabled", true);
user_pref("intl.accept_languages", "en-US, en"); //def. displays websites in
user_pref("intl.charset.fallback.utf8_for_file", false);
user_pref("intl.locale.matchOS", false);
user_pref("intl.locale.requested", "en-US"); //def. FF language
user_pref("javascript.options.asmjs", false);
user_pref("javascript.options.asyncstack", false);
user_pref("javascript.options.wasm", false);
user_pref("javascript.use_us_english_locale", true);
user_pref("keyword.enabled", false);
user_pref("keyword.URL", "");
user_pref("html5.offmainthread", true);
user_pref("layers.acceleration.force-enabled", true);
user_pref("layers.async-video.enabled", true);
user_pref("intl.regional_prefs.use_os_locales", false);
user_pref("layers.offmainthreadcomposition.async-animations", true);
user_pref("layers.offmainthreadcomposition.enabled", true);
user_pref("layers.omtp.paint-workers", 4);
user_pref("layout.css.servo.enable", true);
user_pref("layout.css.visited_links_enabled", false);
user_pref("loop.logDomains", false);
user_pref("media.autoplay.allow-muted", false);
user_pref("media.autoplay.blackList-override-default", true);
user_pref("media.autoplay.block-webaudio", true);
user_pref("media.autoplay.blocked", 1);
user_pref("media.autoplay.default", 5);
user_pref("media.av1.use-dav1d", true);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-manager.url", "");
user_pref("media.navigator.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.navigator.video.enabled", false);
user_pref("network.http.referer.defaultPolicy.pbmode", 2);
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.videocontrols.picture-in-picture.enabled", true);
user_pref("media.webspeech.recognition.enable", false);
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);
user_pref("network.http.referer.defaultPolicy", 3);
user_pref("media.wmf.deblacklisting-for-telemetry-in-gpu-process", false);
user_pref("middlemouse.contentLoadURL", false);
user_pref("mmedia.autoplay.enabled.user-gestures-needed", false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.cookie.lifetimePolicy", 0); 
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.dns.blockDotOnion", true);
user_pref("network.dns.disablePrefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.http.keep-alive.timeout", 45);
user_pref("network.http.referer.spoofSource", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.IDN_show_punycode", true);
user_pref("network.jar.open-unsafe-types", false);
user_pref("network.allow-experiments", false);
user_pref("network.manage-offline-status", false);
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1", false);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.protocol-handler.expose-all", true);
user_pref("network.protocol-handler.expose.about", true);
user_pref("network.protocol-handler.expose.blob", true);
user_pref("network.protocol-handler.expose.chrome", true);
user_pref("network.protocol-handler.expose.data", true);
user_pref("network.protocol-handler.expose.file", true);
user_pref("network.protocol-handler.expose.ftp", true);
user_pref("network.protocol-handler.expose.http", true);
user_pref("network.protocol-handler.expose.https", true);
user_pref("network.protocol-handler.expose.javascript", true);
user_pref("network.protocol-handler.expose.moz-extension", true);
user_pref("network.protocol-handler.external.about", false);
user_pref("network.protocol-handler.external.blob", false);
user_pref("network.protocol-handler.external.chrome", false);
user_pref("network.protocol-handler.external.data", false);
user_pref("network.protocol-handler.external.file", false);
user_pref("network.protocol-handler.external.ftp", false);
user_pref("network.protocol-handler.external.http", false);
user_pref("network.protocol-handler.external.https", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("network.protocol-handler.external.javascript",	false);
user_pref("network.protocol-handler.external.moz-extension", false);
user_pref("network.protocol-handler.external.ms-windows-store", false);
user_pref("browser.taskbar.previews.enable", false);
user_pref("network.protocol-handler.warn-external-default", true);
user_pref("network.proxy.socks_remote_dns", true);
user_pref("browser.taskbar.lists.enabled", false);
user_pref("network.ftp.enabled", false);
user_pref("network.gio.supported-protocols", "");
user_pref("network.file.disable_unc_paths", false);
//user_pref("network.captive-portal-service.enabled", true); //enable on mobile (Wifi)
//user_pref("network.trr.wait-for-portal", true); //enable on mobile (Wifi)
user_pref("network.trr.early-AAAA", false);
user_pref("network.trr.mode", 3); //2, if problems
user_pref("network.trr.uri", https://doh.securedns.eu/dns-query); //example
user_pref("network.trr.bootstrapAddress", 146.185.167.43); //SecureDNS (example)
user_pref("network.security.esni.enabled", true);
//user_pref("network.trr.resolvers", ""); // Full list here: https://github.com/curl/curl/wiki/DNS-over-HTTPS
user_pref("network.stricttransportsecurity.preloadlist", true);
user_pref("pdfjs.disabled", true);
user_pref("places.history.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("plugin.state.flash", 0);
user_pref("plugin.state.java", 0);
user_pref("plugin.state.libgnome-shell-browser-plugin", 0);
user_pref("plugins.update.notifyUser", true);
user_pref("preference security.enterprise_roots.enabled", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.openWindows", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.firstparty.isolate.restrict_opener_access", true);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("dom.indexedDB.enabled", true);
user_pref("privacy.sanitize.timeSpan", 0);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);
user_pref("permissions.default.shortcuts", 2);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("mathml.disabled", true);
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("privacy.window.maxInnerHeight", 900);
user_pref("privacy.window.maxInnerWidth", 1600);
user_pref("security.ask_for_password", 2);
user_pref("security.block_script_with_wrong_mime", true);
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.certerrors.permanentOverride", false);
user_pref("security.csp.enable_violation_events", false);
user_pref("security.csp.enable", true);
user_pref("security.data_uri.block_toplevel_data_uri_navigations", true);
user_pref("security.dialog_enable_delay", 500);
user_pref("security.fileuri.strict_origin_policy", true);
user_pref("security.insecure_field_warning.contextual.enabled", true);
user_pref("security.insecure_password.ui.enabled", true);
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.block_object_subrequest", true);
user_pref("security.OCSP.enabled", 1);
user_pref("security.OCSP.require", true);
user_pref("security.OCSP.timeoutMilliseconds.hard", 10000);
user_pref("security.OCSP.timeoutMilliseconds.soft", 2500);
user_pref("security.password_lifetime", 10);
user_pref("security.pki.sha1_enforcement_level", 1);
user_pref("security.sri.enable", true);
user_pref("security.ssl.disable_session_identifiers", true);
user_pref("security.ssl.enable_false_start", false);
user_pref("security.ssl.enable_ocsp_must_staple", true);
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.ssl3.dhe_dss_aes_128_sha", false);
user_pref("security.ssl3.dhe_dss_aes_256_sha", false);
user_pref("security.ssl3.dhe_dss_camellia_128_sha", false);
user_pref("security.ssl3.dhe_dss_camellia_256_sha", false);
user_pref("security.ssl3.dhe_dss_des_ede3_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.dhe_rsa_camellia_128_sha", false);
user_pref("security.ssl3.dhe_rsa_camellia_256_sha", false);
user_pref("security.ssl3.dhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_aes_256_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_null_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdh_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdh_rsa_aes_256_sha", false);
user_pref("security.ssl3.ecdh_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_rsa_null_sha", false);
user_pref("security.ssl3.ecdh_rsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256", true);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", true);
user_pref("security.ssl3.ecdhe_ecdsa_chacha20_poly1305_sha256", true);
user_pref("security.ssl3.ecdhe_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_null_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256", true);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", true);
user_pref("security.ssl3.ecdhe_rsa_chacha20_poly1305_sha256", true);
user_pref("security.ssl3.ecdhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_rsa_null_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_1024_rc4_56_sha", false);
user_pref("security.ssl3.rsa_aes_128_sha", true);
user_pref("security.ssl3.rsa_aes_256_sha", true);
user_pref("security.ssl3.rsa_camellia_128_sha", false);
user_pref("security.ssl3.rsa_camellia_256_sha", false);
user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_fips_des_ede3_sha", false);
user_pref("security.ssl3.rsa_null_md5", false);
user_pref("security.ssl3.rsa_null_sha", false);
user_pref("security.ssl3.rsa_rc2_40_md5", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_rc4_40_md5", false);
user_pref("security.ssl3.rsa_seed_sha", false);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.tls.unrestricted_rc4_fallback", false);
user_pref("security.tls.version.fallback-limit", 4);
user_pref("security.tls.version.max", 4);
user_pref("security.tls.version.min", 3);
user_pref("security.xpconnect.plugin.unrestricted", false);
user_pref("browser.cache.memory.enable", false);
user_pref("permissions.memory_only", true);
user_pref("browser.cache.memory.capacity", 0);
user_pref("services.blocklist.update_enabled", true);
user_pref("shumway.disabled", true);
user_pref("signon.autofillForms.http", false);
user_pref("signon.autofillForms", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("signon.formlessCapture.enabled", true);
user_pref("signon.rememberSignons", false);
user_pref("startup.homepage_override_url", "");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrping.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstshutdownping.enabled", false);
user_pref("toolkit.telemetry.hybridcontent.enabled", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("toolkit.telemetry.shutdownpingsender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
user_pref("toolkit.telemetry.debugSlowSql", false);
user_pref("toolkit.telemetry.updateping.enabled", false);
user_pref("toolkit.winRegisterApplicationRestart", false);
user_pref("urlclassifier.features.cryptomining.blacklistTables", "base-cryptomining-track-digest256");
user_pref("urlclassifier.features.cryptomining.whitelistTables", "mozstd-trackwhite-digest256");
user_pref("urlclassifier.features.fingerprinting.blacklistTables", "base-fingerprinting-track-digest256");
user_pref("urlclassifier.features.fingerprinting.whitelistTables", "mozstd-trackwhite-digest256");
user_pref("webgl.disable-extensions", false);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
user_pref("webgl.disabled", false);
user_pref("webgl.enable-webgl2", true);
user_pref("webgl.min_capability_mode", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("extensions.webcompat-reporter.enabled", false);
//
// Irrelevant in terms of privacy
//user_pref("excludeFlashFonts", true); // Firefox >= 52
//user_pref("excludeJsFonts", true); // Firefox >= 52
user_pref("privacy.cpd.siteSettings", false);
//user_pref("privacy.cpd.passwords", true);
//user_pref("privacy.cpd.openWindows", true);
user_pref("privacy.clearOnShutdown.siteSettings", false);
user_pref("browser.uitour.url", "");
user_pref("browser.sessionstore.resume_from_crash", false);
user_pref("browser.sessionstore.max_windows_undo", 0);
user_pref("breakpad.reportURL", "");
user_pref("extensions.webextensions.userScripts.enabled", true);
user_pref("browser.sessionstore.interval", 60000);
user_pref("ui.caretWidth", 2);
user_pref("media.gmp-provider.enabled", false);
user_pref("view_source.wrap_long_lines", true);
user_pref("privacy.userContext.longPressBehavior", 2);
user_pref("ui.popup.disable_autohide", false);
user_pref("offline-apps.allow_by_default", false);
user_pref("network.http.referer.hideOnionSource", true);
user_pref("privacy.donottrackheader.enabled", false);
user_pref("privacy.donottrackheader.value", 0);
user_pref("media.eme.enabled", false);
//user_pref("layout.css.devPixelsPerPx", 1.25; //macOS Retina
user_pref("media.webspeech.synth.enabled", false);
user_pref("webgl.enable-debug-renderer-info", false);
user_pref("dom.gamepad.enabled", false);
//
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.security.newcerterrorpage.mitm.enabled", true);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.downloads.remote.timeout_ms", 10020);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("urlclassifier.downloadAllowTable", false);
user_pref("urlclassifier.phishTable", false);
user_pref("urlclassifier.malwareTable", false);
user_pref("webgl.vendor-string-override", " ");
user_pref("webgl.renderer-string-override", " ");
user_pref("urlclassifier.downloadBlockTable", false);
user_pref("urlclassifier.trackingTable", false);
user_pref("urlclassifier.trackingWhitelistTable", false);
user_pref("urlclassifier.blockedTable", false);
user_pref("urlclassifier.disallow_completions", false);
user_pref("geo.provider.ms-windows-location", false);
// Linux
//user_pref("widget.content.gtk-theme-override", "Breeze");
user_pref("middlemouse.paste", false);
user_pref("geo.provider.use_gpsd", false);
// Network
user_pref("network.connectivity-service.DNSv4.domain", "");
user_pref("network.connectivity-service.DNSv6.domain", "");
user_pref("network.connectivity-service.IPv4.url", "http://0.0.0.0");
user_pref("network.connectivity-service.IPv6.url", "http://0.0.0.0");
// Only in case you use e.g. GreasyMonkey
//user_pref("extensions.greasemonkey.stats.optedin", false);
//user_pref("extensions.greasemonkey.stats.url", "");
user_pref("browser.sessionhistory.max_entries", 4);
user_pref("browser.tabs.animate", false);
user_pref("print.print_footerleft", "");
user_pref("print.print_footerright", "");
user_pref("print.print_headerleft", "");
user_pref("print.print_headerright", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("dom.serviceWorkers.enabled", true);
user_pref("dom.targetBlankNoOpener.enabled", true);
user_pref("dom.IntersectionObserver.enabled", false);
// Sync + example how to configure it per-extension: services.sync.prefs.<SETTING>
//user_pref("services.sync.ui.hidden", true);
user_pref("identity.fxaccounts.enabled", false);
user_pref("services.sync.prefs.dangerously_allow_arbitrary", false);
user_pref("services.sync.prefs.sync.privacy.fuzzyfox.enabled", false);
user_pref("services.sync.prefs.sync.privacy.fuzzyfox.clockgrainus", false);

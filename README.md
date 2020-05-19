    [][][][][]  []  [][][][] [][][][][] [][][][][]  [][][][][]  []       []
    []              [][]  [] []         []          []      []    []   []
    [][][]      []  [][]  [] [][][]     [][][]      []      []      []
    []          []  []  []   []         []          []      []    []   []
    []          []  []    [] [][][][][] []          [][][][][]  []       [] about:config

    Firefox About:Config Tricks & Hardening (based on kb.mozillazine.org, 12bytes.org, user.js project)

    Speed up and harden your Mozilla Firefox Browser!
                    ==== Introduced by CHEF-KOCH ====


[![Matrix](https://img.shields.io/matrix/cknews:matrix.org.svg?label=CK%27s%20Technology%20News%20-%20Matrix%20Chat&server_fqdn=matrix.org&style=popout)](https://matrix.to/#/#cknews:matrix.org)
![Twitter Follow](https://img.shields.io/twitter/follow/CKsTechNews?style=flat-square)
[![Discord](https://discordapp.com/api/guilds/418256415874875402/widget.png)](https://discord.me/CHEF-KOCH)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)

### Project Overview

This project provides a hardened user.js among some other files which are designed for everyone to drag & drop into his Firefox/Fenix profile folder, this process can (of course) be automated via external scripts/programs and is optional. Please make sure you check the [documents](https://github.com/CHEF-KOCH/FFCK/tree/master/docs) & [FAQ](https://github.com/CHEF-KOCH/FFCK/blob/master/docs/FAQ/FAQ.md).

* **More is not always better** and can lead into problems (website breakage, bugs etc.).
* FFCK project **does hope to provide a middle way between privacy and a _normal_ daily usage habit** without breaking too much.
* FFCK project **does not believe in FUD or claims made-up without evidence**.
* FFCK project **does not explain web standards** or is designed to talk about web security policy mechanism, [Mozilla itself has an entire portal](https://developer.mozilla.org/en-US/) for this.
* FFCK project **does not document each about:config flag**, if you want a documentation, check the [official docs (all.js)](https://hg.mozilla.org/releases/mozilla-release/raw-file/aca7f47aa8dbf8e5858f5d1318317b463b7a94b7/modules/libpref/init/all.js) or [read the given documentation](https://hg.mozilla.org/mozilla-central/file/tip/modules/libpref/init/StaticPrefList.yaml#l687).
* The owner of this project **highly recommended** that you only use the latest stable Firefox version (or for _testing beta_).


### Project Goals

* Harden the browser against known data disclosure or code execution vulnerabilities (see _Security aspect_).
* Harden the browser's encryption (cipher suites, protocols, trusted CAs).
* Limit possibilities to uniquely identify the browser/device using browser fingerprinting.
* Limit the browser from storing anything even remotely sensitive persistently.
* Limit the possibilities to track the user through web analytics.
* Reduce the overall attack surface by disabling various features.
* Still be usable in daily use environment.


### Privacy aspect

Several changes you can make within the Firefox options (and the invisible ones via about:config) might reducing the overall attack surface, they can be tested against several [test pages](https://github.com/CHEF-KOCH/Online-Privacy-Test-Resource-List) to check wherever they work or not. Those pages are mostly PoC pages to prove that certain things can be exploited or are vulnerable, however those changes are highly depending on the settings and Browser version and need to be constantly maintained to adopt new changes which are might coming from the Browser or new web standards itself.


### Security aspect

The project list is _not designed to secure Firefox_, it is designed to bring _as much as privacy (via about:flags changes) as possible_. The project owner does not believe that the configuration increases any security aspect of the Browser itself, there was never a proof given that a about:config really has an impact on the overall security level of each individual config user.

Possible Problems:
* An attacker can use the open source list to find weaknesses (forgotten flags, mistakes or find other strategies to bypass it)
* The Browser itself ignores several flags or the provided options are bugged or entirely broken
* The flags are depending on the Browser source code which basically spoken means that if the source is flawed or doesn't worked as advertised an attacker can find its way around with new a Proof of concept (PoC) which might not even public available.
* About:config changes does not migrate attacks like [MITM](https://en.wikipedia.org/wiki/Man-in-the-middle_attack), data leaks, source code problems, [exploits](https://en.wikipedia.org/wiki/Exploit_(computer_security)), [0day](https://en.wikipedia.org/wiki/Zero-day_(computing)) or other spoofing attacks which might be unknown.

Archiving more security is way harder than trying to build defenses against privacy related attacks because [those two things are not the same](https://www.globalsign.com/en/blog/what-is-the-difference-between-privacy-and-security/) and the philosophy (in my opinion) must be that important problems have to be always addresses by the Browser itself without the need to change some flags/options. Stay away from ["Ultimative Firefox Privacy & Security Guides"](https://www.bestvpn.com/guides/firefox-privacy-security-guide/) those are in 99% of all cases [clickbait](https://en.wikipedia.org/wiki/Clickbait) and are very soon outdated, browser security itself is very very hard to archive if not almost impossible and needs constantly to be monitored.


### What does Firefox (by default) submits?

[Firefox sends more/same stuff back than Chrome does](https://www.privateinternetaccess.com/blog/2020/01/the-firefox-browser-is-a-privacy-nightmare-on-desktop-and-mobile/), I believe this is not needed in an stable environment, that's why all of this was disabled via configuration. You can [review you telemetry data](https://www.zdnet.com/article/firefox-now-shows-what-telemetry-data-its-collecting-about-you/) via `about:preferences#privacy` (`about:telemetry) in the "Firefox Data Collection and Use" section

* [Blacklist](https://searchfox.org/mozilla-central/rev/8affe6e83188787eb61fe0528eeb6eef6081ba06/netwerk/base/nsChannelClassifier.cpp#1225) & [Whitelist](https://searchfox.org/mozilla-central/rev/8affe6e83188787eb61fe0528eeb6eef6081ba06/netwerk/base/nsChannelClassifier.cpp#974) specific stuff
* [Tracker matchlist](https://searchfox.org/mozilla-central/rev/8affe6e83188787eb61fe0528eeb6eef6081ba06/netwerk/base/nsChannelClassifier.cpp#1011)
* [Tracking protection state](https://telemetry.mozilla.org/new-pipeline/dist.html#!cumulative=0&end_date=2017-09-17&keys=__none__!__none__!__none__&max_channel_version=nightly%252F57&measure=FENNEC_TRACKING_PROTECTION_STATE&min_channel_version=null&processType=*&product=Firefox!Fennec&sanitize=1&sort_keys=submissions&start_date=2017-08-02&table=1&trim=1&use_submission_date=0)
* **NO telemetry ping's are sent while in Private Browsing mode**
* [Shavar checks](https://wiki.mozilla.org/Services/TrackingProtection/Shavar_Server_-_Testing)
* Session based telemetry when [TP was enabled](https://feeding.cloud.geek.nz/posts/how-tracking-protection-works-in-firefox/)
* [Ads](https://mozilla.github.io/tracking-test/ads.html), [Analytic](https://mozilla.github.io/tracking-test/analytics.html), [Social](https://mozilla.github.io/tracking-test/social.html), [Content](https://mozilla.github.io/tracking-test/full.html) & [filter list](https://mozilla.github.io/tracking-test/disconnect.html) specific checks/report/updates...
* [Data Sharing](https://support.mozilla.org/en-US/products/privacy-and-security/no-surprises) for e.g. Firefox ~~Rocket~~ Lite and Firefox ScreenshotGo (Firefox Preview)


### Why I'm still fingerprintable?

Test pages like [Panopticlick](https://panopticlick.eff.org/) have several problems which needs to be addresses and that's why they are not 100% reliable -_in the real-world_.

* The uniqueness of a test pages such as Panopticlick are only relative to how many visitors the test-website had or how many are in the database found. Compared to the real-world it is only a small percentage. This basically means if a lot of e.g. Tor users/browsers visiting the website and you then do your test with Chrome you will be displayed as more unique because the Chrome Browser is more often used (statistically spoken). However, even if such pages testing older Browser clients you will rank higher (more unique) on their database because statistical outdated Browser ID's are way les often used (and tested).
* Randomized fingerprint values are questionable. In fact it does not prevent you from getting fingerprinted at all, the ID itself would more unique because it changes with every single visited page, that means you are overall spoken faster identifiable since no one else was to the same time on the same time with this particular fingerprint. This is also the reason why Tor users getting the same fingerprint because it makes it impossible to identify which user was one which page with which fingerprint (because they are all the same).
* A test pages does not covers every scenario, it is possible that new tricks (unknown ones) are already available on the internet which are (not yet) covered.
* You don't need to hide/fake every possible outcome because that forces a website to develop new techniques to bypass it - as often done e.g. The New York Times detects ad-blockers and each time this got "fixed" it ended up with more trackers & anti-adblock scripts. The goal should be to _swim with the mass_.
* The test page or the results itself can be manipulated to fake the results or to _corrupt_ the database (with wrong results).


### Problematic fingerprinting techniques

Here is the overview of problematic fingerprinting techniques which can compromise your privacy. The list is not complete because not every fingerprinting techniques are still functional or a threat to your privacy because the Browser might already protect your against it, or its addresses in the configuration file in this repository.

* **navigator.mediaDevices.enumerateDevices()** - Can expose you by giving away identifiers of media devices on your client, but mainly a Chrome problem.
* **Resource Timing API Support** - Mostly a Chromium problem but some Browser still allowing RTA, which is a [significant privacy risk](https://www.audero.it/demo/resource-timing-api-demo.html).
* **navigator.mediaDevices.enumerateDevices** - `window.navigator.mediaDevices.enumerateDevices` basically allows a website, without any permission or consent to learn about your device capabilities. See [here](https://bugzilla.mozilla.org/show_bug.cgi?id=1397978) and [here](https://bugzilla.mozilla.org/show_bug.cgi?id=1528042) for more information.
* **navigator.maxTouchPoints** - Allows websites, to access device capability information.
* **[TLS session resumption tracking](https://arxiv.org/abs/1810.07304)** - Advertisers tracking people using TLS session resumption data in order to improve their service and to collect (possible sell) such data.
* **URL tracking parameters** - [Stripping out tracking query string parameters](https://webkit.org/blog/8828/intelligent-tracking-prevention-2-2/) can be done via [scripts](https://greasyfork.org/en/scripts/10096-general-url-cleaner)/[extensions](https://addons.mozilla.org/de/firefox/addon/utm-tracking-token-stripper/) but is still not implemented in Firefox (or any other Browser by default).
* **window.name** - A known [bug in Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=444222), and well [discussed topic](http://www.thespanner.co.uk/2007/09/06/window-name-trick/) which allows passing cookies through `window.name`, as part of a bigger project to keep third-parties from [abusing the first-party storage](https://lists.w3.org/Archives/Public/public-webappsec/2016Jul/thread.html#msg6).
* **HSTS fingerprinting** - [HSTS fingerprinting can also be achieved in first party context](https://webkit.org/blog/8146/protecting-against-hsts-abuse/), this is still an issue in almost all Browsers.
* **speechSynthesis getVoices** - Can expose device information, its clear how often it is used and which website/apps really using it.
* **navigator.connection** - See [here](https://wicg.github.io/netinfo/) for more information, it basically allows websites to read the current network state, and track changes.
* **IPTC Metadata** - Services/Websites like Facebook & Instagram (except [Twitter](https://twitter.com/goodmachine/status/1149984419744235520) use [IPTC Metadata](https://stackoverflow.com/questions/31120222/iptc-metadata-automatically-added-to-uploaded-images-on-facebook) in images to track their users and behavior. Removal instructions (there is no extension or script for it), are explained [here](https://twitter.com/MatthiasEberl/status/1150046677627297797).
* **Keyboard API fingerprinting** - Already semi-controlled via our configuration file, but is still a [problem](https://wicg.github.io/keyboard-map/#privacy). Firefox implemented version of it is less attackable than the one from [Chrome](https://wicg.github.io/keyboard-lock/).
* **Trackability of QUIC connections** - Not really an QUIC problem, it's [connected to](https://svs.informatik.uni-hamburg.de/publications/2019/2019-02-26-Sy-PET_Symposium-A_QUIC_Look_at_Web_Tracking.pdf) pre-fetching data which is (of course) not only a QUIC problem, however it's listed because in case someone uses the protocol he can be tracked (there is only an on/off toggle without any further protection).
* **FP2.js** - fingerprintjs2 and other stuff like UA, Fonts, window.navigator & co. This is "more or less" already migrated but there in our configuration (but not fully).
* **Service workers** - Third-party party [service workers](https://www.w3.org/TR/service-workers/) should be blocked by default. You can also do this with popular web-filtering extensions, disallowing all service workers might break several services/extensions. For WebKit there are [double-key service workers](https://webkit.org/blog/8090/workers-at-your-service/).
* **First-party storage isolation** - Currently the only fully working implemented is integrated in [Tor Browser](https://www.torproject.org/projects/torbrowser/design/#identifier-linkability), Firefox own isolation mechanism (FPI) e.g. isolates the [DNS cache](https://www.theregister.co.uk/2018/10/19/tls_handshake_privacy/).
* **Ultra-Sonic device tracking** - Audio context data can be blocked to prevent [advertisements](https://www.wired.com/2017/05/hundreds-apps-can-listen-beacons-cant-hear/)/[websites](https://thehackernews.com/2017/05/ultrasonic-tracking-signals-apps.html) to expose/deanonymize user traffic. Firefox already protects you against it (see config) but does not prevent cross-device tracking because its still possible to draw connections by between devices playing and listening for ultrasonic sounds.
* **Tracking of Zoom Levels** - [This](https://github.com/0xSobky/HackVault/wiki/z00mtrack:-User-Tracking-via-The-Browser-Zoom-Levels) is already been "solved" but some fingerprinting websites still showing correct results (_needs more work, same like USDT?_)
* **eTag and cached scripts tracking** - [This](https://www.chromium.org/Home/chromium-security/client-identification-mechanisms) still seems to be an [issue for Chrome/Firefox](http://lucb1e.com/rp/cookielesscookies/). Extensions like [SecretAgent](https://www.dephormation.org.uk/index.php?page=81) can overwrite `ETag` to [prevent such tracking](https://nodpi.org/forum/index.php/topic,4418.msg51737.html#msg51737).
* **navigator.sendBeacon** - This is [not exclusively used for tracking](https://developer.mozilla.org/de/docs/Web/API/Navigator/sendBeacon), the problem is that disabling it will break websites. However the Beacon API can be disabled (or parts of it, which we already did).


### Overdramatizing the "importance" of font fingerprinting tracking

This gets a special place here, apparently there is a lot of misinformation regarding font "tracking". Here are the official documents to cover the technical aspect and how its been implemented:

* [W3C spec for how font matching should happen](https://drafts.csswg.org/css-fonts/#font-style-matching)
* [Chromium docs for font matching](https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/platform/fonts/README.md#Font-Matching)
* [System level implementation for determining system fonts](https://cs.chromium.org/chromium/src/third_party/blink/renderer/platform/fonts/skia/font_cache_skia.cc), [font_cache_mac.mm](https://cs.chromium.org/chromium/src/third_party/blink/renderer/platform/fonts/mac/font_cache_mac.mm), [font_cache_linux.cc](https://cs.chromium.org/chromium/src/third_party/blink/renderer/platform/fonts/linux/font_cache_linux.cc) & [font_cache_android.cc](https://cs.chromium.org/chromium/src/third_party/blink/renderer/platform/fonts/android/font_cache_android.cc).
* Other stuff info provided in our [reference chart](https://github.com/CHEF-KOCH/FFCK/blob/master/docs/Ref/Reference.md).


One (of many) popular deployed libs that uses font-based fingerprinting, you see such scripts on various websites.
* [fingerprint.js](https://cdn.tinypass.com/api/libs/fingerprint.js)


Some real background:

* Anti font-fingerprinting was officially introduced since [Firefox 52](https://bugzilla.mozilla.org/show_bug.cgi?id=1121643) (stable).
* [Font fingerprinting is not a security risk](https://www.bamsoftware.com/papers/fontfp.pdf), it's a privacy concern/problem and nothing more. Making things up ala "Website knows who I'm because they know my fonts" is [nothing but horse shit](https://www.aepd.es/media/estudios/estudio-fingerprinting-huella-digital-EN.pdf) (_I'm terrible sorry to say it this way_).
* Detecting and even tracking fonts don't expose your as a person. The bits on information which are been send by popular "fingerprinting scripts" are not enough to expose ["important information"](https://www.doc.ic.ac.uk/~maffeis/331/EffectivenessOfFingerprinting.pdf), the overall effectiveness is questionable - just because you assume/know I use e.g. "Arial" as font does not mean there are automatically exploits or methods which "somehow" can compromise me and even if there are some, they need to bypass additional Browser/OS protection mechanism first.
* Font tracking requires JavaScript.
* Font tracking is depending (so far) on  third-party resources/scripts/CDNs etc. Blocking them is already enough and a good counter-measurement, because disabling JavaScript might only breaks the website.
* The tracking website can get the list of [fonts available on your (local) system](https://bugzilla.mozilla.org/show_bug.cgi?id=732096) on in Safari this is [hard coded](https://trac.webkit.org/changeset/225641/webkit), under Firefox we control/"block" it via configuration or enable Firefox own "tracking protection mechanism". There are tons of extensions to fake the read-out, randomize or pre-set zero or xyz fonts so that the [detection](https://browserleaks.com/fonts#further-reading) gets wrong results in case you like to fine configure it.
* Rendering in applications/browsers on e.g. Windows is done in `User mode`, which got [fixed](https://www.blackhat.com/docs/us-16/materials/us-16-Weston-Windows-10-Mitigation-Improvements.pdf) after [7 years](https://archive.is/M6CEX). Before that it was running in [`kernel mode`](https://cansecwest.com/slides/2013/Analysis%20of%20a%20Windows%20Kernel%20Vuln.pdf).
* Privilege escalation is a security problem, so why isn't it not connected to a "security" topic (according to you)? Privilege escalation is a problem which does not ("only") affects fonts (rendering software/engines). The [software needs to be fixed](https://security.stackexchange.com/questions/91347/how-can-a-font-be-used-for-privilege-escalation) and not the fonts, this already happened in LibreOffice, MSOffice, Windows and many other systems and applications.
* Fonts (even Google fonts are [open source](https://developers.google.com/fonts/)) do nothing, the fonts are on your system (pre-installed or you can manually install them), or in Googles case on their servers and do nothing on their own. They don't magically track you, again they do nothing. However, whenever e.g. Google decides to "improve" their website/fonts/services they add beacons/"trackers" on website X, this is not an "font exclusive" problem. Saying "You can be identified through", is wrong, I can't be identified, certain things at best can be detected but not me as a person. This is mostly coming from websites which like to dramatize something. The website with "tracking" code (needs JavaScript) tracks you but the fonts are harmless (unless they are replaced, manipulated etc.) but we assume in this case they are the original ones. The tracking part comes from third-party scripts so that [Google knows which website integrated their fonts](https://webmasters.stackexchange.com/questions/60464/are-there-privacy-considerations-in-using-google-web-fonts), this ["only" collects metadata](https://stackoverflow.com/questions/10977593/can-google-track-me-if-i-use-google-web-fonts). There [aren't any secrets and it's well documented](https://developers.google.com/fonts/faq?hl=en#what-does-using-the-google-fonts-api-mean-for-the-privacy-of-my-users). I picked Google (not to defend them) but because most websites integrate those fonts, however there are (of course) alternatives like using open source fonts (but this decision is not yours to make, the website owner has to make the choice). However, blocking fonts in general can results in several problems, the better idea here is to black-/whitelist several fonts or create rules with popular extensions to filter them as per own needs or per domain only. There are no security implications using Google or alternative fonts, the privacy aspect might be only relevant when it comes to metadata. I think the web has far greater risks than a "metadata" problem.
* Using Scripts/Extensions - Why? Ask the webmaster/website owner to implement open source fonts if there are privacy concerns. This is often easier than messing around with external tools (which you have to trust), a lot of website owners are not aware of privacy concerns regarding fonts or they simply aren't aware of any alternatives.
* Using extensions to "emulate" web content will (at some point) cause some trouble, it will consume more memory to load stuff at Firefox start and it also does not prevent from websites which getting "crippled". Some extensions addressing it by adding a whitelist mode, this is however also only a "eat or die solution" and at best only a workaround. Emulated or using outdated fonts/resources might be causing additional problems because the website/CDN/hoster might then triggers another script which shows warnings about outdated Browsers/fonts etc. (unless you block such additional extension/browser detection, which we of course did in our configuration).
* Faking, randomizing or emulating fonts can make you more unique. Whenever the website/script detect that there are no fonts or "strange" readings you get a more unique ID back (from e.g. font fingerprinting test pages or trackers).
* Assuming that a website sells data because they detecting e.g. your fonts is FUD, unless it's explicitly mentioned on the website or in case there are additional information/leaks to prove the website wrong. A lot of websites do not sell any information even if there are trackers.
* There are [bug related problems](https://bugzilla.mozilla.org/show_bug.cgi?id=1121643#c84), which might even break font detect/results or affect any tracking measurements.

### Tracking Protection

* The integrated [tracking protection](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Privacy/Tracking_Protection) does not protect you against all "privacy attacks", it is designed primarily to enhance your local privacy from other users on your network or on the same machine. Most people don't like that their history, searches, cookies and temporary files are been deleted because they typically trust their own local machine or the IT admins. The problem here is that this aims to provide some basic protection against remote machines, but not all known attacks.
* Firefox own TP (by default) is not set to the strongest settings because, as explained above, some people want their files or it might only end up with a broken or crippled website.
* Some (official) suggestions listed under [Security best practices](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Security_best_practices) are terrible wrong when in comes to the tracking context, e.g. suggesting to run JavaScript in the same context as the site you are using is an horrible advice. Lots of documentation especially on the security and privacy aspect must be updated, because they give users a lot or misinformation regarding how to harden your Browser against current trackers.
* Using anti-tracking mechanism results in (overall) more tracking because the website tries to bypass it (it's a cat-and-mouse game). Keep in mind that some trackers are also open source and designed to collect only meta data to detect website problems, this is controversial but from a developer perspective which tries to "improve" his site totally legitimate, as of today the integrated tp in Mozilla's browser has no ability to whitelist individual websites/scripts/resources with in its GUI. That been said it's an eat or die solution, because the user has to disable tracking protection (pause it) completely.
* The project does not enable any of Mozilla's "tracking protection" mechanism in the configuration, web-filtering (that what tracking protection basically should be) can be done with other (better) solutions (see suggested extensions). At this point it's still unclear why Mozilla did not work directly with certain known developers together to introduce several "anti-tracking" techniques, which are known to be more effective and controllable than the currently integrated ones.


### How do I switch from Chrome to Firefox?

There are several pages you can read to make your switch easier:

* [Switching to Firefox (reddit.com)](https://old.reddit.com/r/firefox/wiki/switching-to-firefox)
* [Join Firefox (blog.mozilla.org)](https://blog.mozilla.org/firefox/join-firefox/)
* [Switching to Firefox (support.mozilla.org)](https://support.mozilla.org/en-US/kb/switching-chrome-firefox)

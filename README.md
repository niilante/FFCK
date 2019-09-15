    [][][][][]  []  [][][][] [][][][][] [][][][][]  [][][][][]  []       []
    []              [][]  [] []         []          []      []    []   []
    [][][]      []  [][]  [] [][][]     [][][]      []      []      []
    []          []  []  []   []         []          []      []    []   []
    []          []  []    [] [][][][][] []          [][][][][]  []       [] about:config

    Firefox About:Config Tricks & Hardening (based on kb.mozillazine.org, 12bytes.org, user.js project)

    Speed up and harden your Mozilla Firefox Browser!
					==== Introduced by CHEF-KOCH ====


[![Matrix](https://img.shields.io/matrix/cknews:matrix.org.svg?label=CK%27s%20Technology%20News%20-%20Matrix%20Chat&server_fqdn=matrix.org&style=popout)](https://matrix.to/#/#cknews:matrix.org)
![Twitter Follow](https://img.shields.io/twitter/follow/@CKsTechNews.svg?label=Follow%20%40CKsTechNews&style=social)
[![Discord](https://discordapp.com/api/guilds/418256415874875402/widget.png)](https://discord.me/CHEF-KOCH)
[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/CHEF-KOCH)

### Project Overview

This project provides a hardened user.js (and some other files) which are designed for everyone to drag & drop into his Firefox profile folder, the process can of course be automated via scripts/programs.

* **More is not always better** and can lead into problems (website breakage).
* FFCK project **does hope to provide a middle way between privacy and a _normal_ daily usage habit** without breaking too much.
* FFCK project **does not believe in FUD or claims made-up without evidence**.
* FFCK project **does not care about backward-compatibility to older/outdated Browser** versions.
* FFCK project **does not explain web standards** or is designed to talk about web security policy mechanism, [Mozilla itself has an entire portal](https://developer.mozilla.org/en-US/) for this.
* FFCK project is **not a documentation** for each about:config flag.


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

The project list is not designed to secure Firefox, it is designed to bring _as much as privacy (via about:flags changes) as possible_. The project owner does not believe that the configuration increases any security aspect of the Browser, there was never a proof given that a about:config really has an impact on the overall security level of each individual config user.

Possible Problems:
* An attacker can use the open source list to find weaknesses (forgotten flags, mistakes or find other strategies to bypass it)
* The Browser itself ignores several flags or the provided options are bugged or entirely broken
* The flags are depending on the Browser source code which basically spoken means that if the source is flawed or doesn't worked as advertised an attacker can find its way around with new a Proof of concept (PoC) which might not even public available.
* About:config changes does not migrate attacks like [MITM](https://en.wikipedia.org/wiki/Man-in-the-middle_attack), data leaks, source code problems, [exploits](https://en.wikipedia.org/wiki/Exploit_(computer_security)), [0day](https://en.wikipedia.org/wiki/Zero-day_(computing)) or other spoofing attacks which might be unknown.

Archiving more security is way harder than trying to build defenses against privacy related attacks because [those two things are not the same](https://www.globalsign.com/en/blog/what-is-the-difference-between-privacy-and-security/) and the philosophy (in my opinion) must be that important problems have to be always addresses by the Browser itself without the need to change some flags/options. Stay away from ["Ultimative Firefox Privacy & Security Guides"](https://www.bestvpn.com/guides/firefox-privacy-security-guide/) those are in 99% of all cases [clickbait](https://en.wikipedia.org/wiki/Clickbait) and are very soon outdated, browser security itself is very very hard to archive if not almost impossible and needs constantly to be monitored.


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
* **HSTS fingerprinting** - [HSTS fingerprinting can also be achieved in first party contex](https://webkit.org/blog/8146/protecting-against-hsts-abuse/), this is still an issue in almost all Browsers.
* **speechSynthesis getVoices** - Can expose device information, its clear how often it is used and which website/apps really using it. 
* **navigator.connection** - See [here](https://wicg.github.io/netinfo/) for more information, it basically allows websites to read the current network state, and track changes.
* **IPTC Metadata** - Services/Websites like Facebook & Instagram (except [Twitter](https://twitter.com/goodmachine/status/1149984419744235520) use [IPTC Metadata](https://stackoverflow.com/questions/31120222/iptc-metadata-automatically-added-to-uploaded-images-on-facebook) in images to track their users and behaviour. Removal instructions (there is no extension or script for it), are explained [here](https://twitter.com/MatthiasEberl/status/1150046677627297797).
* **Keyboard API fingerprinting** - Already semi-controlled via our configuration file, but is still a [problem](https://wicg.github.io/keyboard-map/#privacy). Firefox implemented version of it is less attackable than the one from [Chrome](https://wicg.github.io/keyboard-lock/). 
* **Trackability of QUIC connections** - Not really an QUIC problem, it's [connected to](https://svs.informatik.uni-hamburg.de/publications/2019/2019-02-26-Sy-PET_Symposium-A_QUIC_Look_at_Web_Tracking.pdf) pre-fetching data which is (of course) not only a QUIC problem, however it's listed because in case someone uses the protocol he can be tracked (there is only an on/off toggle without any urther protection). 
* **FP2.js** - fingerprintjs2 and other stuff like UA, Fonts, window.navigator & co. This is "more or less" already migrated but there in our configuration (but not fully).
* **Service workers** - Third-party party [service workers](https://www.w3.org/TR/service-workers/) should be blocked by default. You can also do this with popular web-filtering extensions, disallowing all service workers might break several services/extensions. For WebKit there are [double-key service workers](https://webkit.org/blog/8090/workers-at-your-service/).
* **First-party storage isolation** - Currently only implemented in [Tor](https://www.torproject.org/projects/torbrowser/design/#identifier-linkability), Firefox own isolation mechanism (FPI) e.g. isolates the [DNS cache](https://www.theregister.co.uk/2018/10/19/tls_handshake_privacy/).
* **Ultra-Sonic device tracking** - Audiocontext data can be blocked to prevent [advertisements](https://www.wired.com/2017/05/hundreds-apps-can-listen-beacons-cant-hear/)/[websites](https://thehackernews.com/2017/05/ultrasonic-tracking-signals-apps.html) to expose/deanonymize user traffic. Firefoy already protects you against it (see config) but does not prevent cros-device tracking because its still possible to draw connections by between devices playing and listening for ultrasonic sounds. 
* **Tracking of Zoom Levels** - [This](https://github.com/0xSobky/HackVault/wiki/z00mtrack:-User-Tracking-via-The-Browser-Zoom-Levels) is already been "solved" but some fingerprinting websites still showing correct results (_needs more work, same like USDT?_)
* **eTag and cached scripts tracking** - [This](https://www.chromium.org/Home/chromium-security/client-identification-mechanisms) still seems to be an [issue for Chrome/Firefox](http://lucb1e.com/rp/cookielesscookies/). Extensions like [SecretAgent](https://www.dephormation.org.uk/index.php?page=81) can overwrite `ETag` to [prevent such tracking](https://nodpi.org/forum/index.php/topic,4418.msg51737.html#msg51737). 
* **navigator.sendBeacon** - This is [not exclusively used for tracking](https://developer.mozilla.org/de/docs/Web/API/Navigator/sendBeacon), the problem is that disabling it will break websites. However the Beacon API can be disabled (or parts of it, which we already did).

### Tracking Protection

* The integrated [tracking protection](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Privacy/Tracking_Protection) does not protect you against all "privacy attacks", it is designed primarily to enhance your local privacy from other users on your network or on the same machine. Most people don't like that their history, searches, cookies and temporary files are been deleted because they typically trust their own local machine or the IT admins. The problem here is that this aims to provide some basic protection against remote machines, but not all known attacks.
* Firefo own tp (by default) is not set to the strongest settings because, as explained above, some people want their files or it might only end up with a broken or crippled website. 
* Some (official) suggestions listed under [Security best practices](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Security_best_practices) are terrible wrong when in comes to the tracking context, e.g. suggesting to run JavaScript in the same context as the site you are using is an horrible advice. Lots of documentation especially on the security and privacy aspect must be updated, because they give users a lot or misinformation regarding how to harden your Browser against current trackers. 
* Using anti-tracking mechansim results in (overall) more tracking because the website tries to bypass it (it's a cat-and-mouse game). Keep in mind that some trackers are also open source and designed to collect only meta data to detect website problems, this is controversial but from a developer perspective which tries to "improve" his site totally legitimate, as of today the integrated tp in Mozilla's browser has no ability to whitelist individual websites/scripts/resources with in its GUI. That been said it's an eat or die solution, because the user has to disable tracking protection (pause it) completely. 
* The project does not enable any of Mozilla's "trackking protection" mechanism in the configuration, web-filtering (that what tracking protection basically should be) can be done with other (better) solutions (see suggested extensions). At this point it's still unclear why Mozilla did not work directly with certain known developers together to introduce several "anti-tracking" techniques, which are known to be more effective and controllable than the currently integrated ones. 


### How do I switch from Chrome to Firefox?

There are several pages you can read to make your switch easier:

* [Switching to Firefox (reddit.com)](https://old.reddit.com/r/firefox/wiki/switching-to-firefox)
* [Join Firefox (blog.mozilla.org)](https://blog.mozilla.org/firefox/join-firefox/)
* [Switching to Firefox (support.mozilla.org)](https://support.mozilla.org/en-US/kb/switching-chrome-firefox)

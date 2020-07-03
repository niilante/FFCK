* [What is the difference between user.js and prefs.js?](#what-is-the-difference-between-userjs-and-prefsjs)
* [Which Referrer extensions do I need?](#which-referrer-extensions-do-i-need)
* [My Firefox update X broke something, is that because of your config?](#my-firefox-update-x-broke-something-is-that-because-of-your-config)
* [Cookies in Private Mode (PBM) vs. “Delete cookies when Firefox closes”](#cookies-in-private-mode-pbm-vs-delete-cookies-when-firefox-closes)
* [Anti-Private Browser mode detection](#anti-private-browser-mode-detection)
* [Why is `resistFingerprinting` disabled?](#why-is-resistfingerprinting-disabled)
* [Why are some flags disabled when I can control them via FF "Settings"?](#why-are-some-flags-disabled-when-i-can-control-them-via-ff-settings)
* [Wont-fix stuff](#wont-fix-stuff)
* [Why are studies & telemetry disabled?](#why-are-studies--telemetry-disabled)
* [Does any of these tweaks really increase my security and how can I check it?](#does-any-of-these-tweaks-really-increase-my-security-and-how-can-i-check-it)
* [Which Telemetry is disabled via user.js?](#which-telemetry-is-disabled-via-userjs)
* [Optional addons to enhance some Firefox functions](#optional-addons-to-enhance-some-firefox-functions)
* [Why is “Safe-browsing” etc disabled, shouldn't that protect me against malware?](#why-is-safe-browsing-etc-disabled-shouldnt-that-protect-me-against-malware)
* [Why aren’t digital Signatures enforced by default to prevent Malware downloads?](#why-arent-digital-signatures-enforced-by-default-to-prevent-malware-downloads)
* [Why does Skype-Web refuse to work in Firefox?](#why-does-skype-web-refuse-to-work-in-firefox)
* [How to workaround the Google’s CAPTCHA problem?](#how-to-workaround-the-googles-captcha-problem)
* [Do I still need Tor Browser even after using a hardened user.js configuration?](#do-i-still-need-tor-browser-even-after-using-a-hardened-userjs-configuration)
* [Why are several Scripts or filter-lists gone after I updated to Firefox 66.0+?](#why-are-several-scripts-or-filter-lists-gone-after-i-updated-to-firefox-660)
* [CanvasBlocker extension Vs. the Firefox integrated solution](#canvasblocker-extension-vs-the-firefox-integrated-solution)
* [Disabling locked toolkit.telemetry.enabled (and others)](#disabling-locked-toolkittelemetryenabled-and-others)
* [Which extensions could I use to reduce the overall tracking behavior?](#which-extensions-could-i-use-to-reduce-the-overall-tracking-behavior)
* [Where does Firefox Multi-Account Containers Extension store its settings?](#where-does-firefox-multi-account-containers-extension-store-its-settings)
* [Is there a master list of all about:config flags (incl. the hidden ones)?](#is-there-a-master-list-of-all-aboutconfig-flags-incl-the-hidden-ones)
* [How to install addons in Mozilla Fenix?](#how-to-install-addons-in-mozilla-fenix)
* [I can’t see any pictures after I used “save image as” option, what can I do?](#i-cant-see-any-pictures-after-i-used-save-image-as-option-what-can-i-do)
* [About:config filtering with Nightly Builds](#aboutconfig-filtering-with-nightly-builds)
* [I’m looking for a specific CSS tweak e.g. to make the context menu dark](#im-looking-for-a-specific-css-tweak-eg-to-make-the-context-menu-dark)
* [Is it possible to downgrade my FF profile?](#is-it-possible-to-downgrade-my-ff-profile)
* [GDrive, GMail, YouTube are slow in Firefox — What can I do?!](#gdrive-gmail-youtube-are-slow-in-firefox--what-can-i-do)
* [Policy Templates](#policy-templates)
* [What are StaticPrefs?](#what-are-staticprefs)
* [Against obfuscation as a "privacy tool"](#against-obfuscation-as-a-privacy-tool)
* [Enabling DoH breaks my VPN connection](#enabling-doh-breaks-my-vpn-connection)
* [Why is `content process limit` not set to 1?](#why-is-content-process-limit-not-set-to-1)
* [Second Profile](#second-profile)
* [Differences between `privacy.trackingprotection.enabled` and `privacy.resistFingerprinting`?](#differences-between-privacytrackingprotectionenabled-and-privacyresistfingerprinting)
* [Can I export a bookmark folder as a .txt file?](#can-i-export-a-bookmark-folder-as-a-txt-file)
* [How do I enable tracking content?](#how-do-i-enable-tracking-content)
* [Address bar design update in FF 77](#address-bar-design-in-ff-77)


## What is the difference between user.js and prefs.js?

* `prefs.js` contains all the changes you have made via options or `about:config`.
* `user.js` is used to override preferences in prefs.js, it does so by (over)writing the preference to `prefs.js`.

**What does it mean?**

If user.js contains `user_pref("browser.xxxxx", "false")`, so will prefs.js after a startup of Firefox.

Some preferences can't be set via user.js, as Firefox sets some preferences after prefs.js is read. Some preferences might also be modified during startup [after prefs.js] .


## Which Referrer extensions do I need?

A list of active maintained referer extension is available over [here](https://gitlab.com/KevinRoebert/ClearUrls/wikis/Similar-Addons). However this is normally up to you, my suggestion is that you combine both Smart Referer and Neat URL because both working different from each another.

* **Neat URL**: This extensions tries to remove various tracking parameters from the URL itself. For example it removes the UTM parameter `example.com/?utm_source=github` - Everything after `?` will be automatically removed because this could sent back to the origin server.
* **Smart Referer**: Smart Referer basically omits the Referer header from HTTP(S) requests unless the request is to the same domain as the page you’re already on. This means that the Referer header normally includes the address of the page you were on before navigating to the current page (_there are some exceptions_). This e.g. protects your from websites which trying to get your browsing habits (history).

Both extensions are a bit different, SR aims to remove the Referer headers from HTTP(S) requests while Neat URL tries to remove the well-known tracking parameters from the URL you visit or clicked.


## My Firefox update X broke something, is that because of your config?

No, but what you could do is to run [mozregression](https://blog.nightly.mozilla.org/2016/10/11/found-a-regression-in-firefox-give-us-details-with-mozregression/) which shows what exactly broke since you updated your [Firefox](https://www.mozilla.org/). The output can be submitted to Mozilla, which helps developers to fix possible problems in further builds.


## Cookies in Private Mode (PBM) vs. “Delete cookies when Firefox closes”

* Private Browsing Mode = Stronger, Regular session cookies are **not written to disk**.
* Delete cookies when Firefox closes = Basically changes the expiration date of persistent cookies (for the current session only). Similar like closing a private window, the cookies getting deleted after closing the window. In a regular browsing session the cookies **are written to disk**.


## Anti-Private Browser mode detection

Some websites [detecting if you’re in an incognito or private browsing mode](https://gist.github.com/jherax/a81c8c132d09cc354a0e2cb911841ff1) e.g. Boston Globe or Washington Post. This can be avoided by [disabling JavaScript](https://www.deviceinfo.me/), however this will cause the website to _break_. The most known workaround is to use [Chrome 76](https://www.blog.google/outreach-initiatives/google-news-initiative/protecting-private-browsing-chrome/) / [Firefox 66+](https://bugzilla.mozilla.org/show_bug.cgi?id=781982) which have a _basic_ protection against this kind of _fingerprinting_. However, pages like Washington Post quickly inspected the Browser source code and found new strategies to bypass the “anti-incognito paywall detection”, that been said [Incognito Mode is not a full privacy system!](https://support.google.com/chrome/answer/95464?co=GENIE.Platform%3DDesktop&hl=en). However, there is no final solution to this topic, as said, news pages adopting the changes and watching the source code but some [external extension](https://github.com/iamadamdev/bypass-paywalls-firefox) or [scripts](https://burles.co/en/) might still working.


## Why is `resistFingerprinting` disabled?

Multiple reasons, some are bug related, others might [break](https://wiki.mozilla.org/Security/Fingerprinting) some _useful_ functions. Another problem is that there is no user-facing documentation about this flag, which makes it hard to track. However, the main arguments are:

* Breaks [time zone](https://old.reddit.com/r/firefox/comments/7tqvpr/privacyresistfingerprinting_timezone/) dection (_by design_)
* [Breaks all extensions that attempt to spoof calls for canvas hash and some that try to block it](https://bugzilla.mozilla.org/show_bug.cgi?id=1602255)
* [Performance problems](https://bugzilla.mozilla.org/show_bug.cgi?id=1394735#c1)
* [Canvas problems](https://bugzilla.mozilla.org/show_bug.cgi?id=1429865)
* [Website problems](https://old.reddit.com/r/firefox/comments/a2wwwl/vimeo_stopped_working_with_firefox_and/)
* [Addon installation problems](https://old.reddit.com/r/firefox/comments/87h2le/privacyresistfingerprinting_prevents_installing/)
* [User agent "problems"](https://old.reddit.com/r/firefox/comments/bro9sk/privacyresistfingerprinting_user_agent/) (_by design_)
* Window resizing [problems](https://bugzilla.mozilla.org/show_bug.cgi?id=1494212) (_by design_)
* .. there are other [bugs](https://bugzilla.mozilla.org/show_bug.cgi?id=1235231), [bugs](https://bugzilla.mozilla.org/show_bug.cgi?id=1449139), [bugs](https://bugzilla.mozilla.org/show_bug.cgi?id=921942) & even more [bugs](https://bugzilla.mozilla.org/show_bug.cgi?id=462743)
* `Mozilla/5.0 (Windows NT 6.1; rv:52.0) Gecko/20100101 Firefox/52.0` is used as user agent for the Tor Browser and is evry common, but be warned [changing the user agent without changing to a corresponding platform will make your browser nearly unique](https://wiki.archlinux.org/index.php/Firefox/Privacy).
* Other important Addon [problems](https://bugzilla.mozilla.org/show_bug.cgi?id=1588916)

What now? Well, since I don't think that "Resist [Fingerprinting](https://wiki.mozilla.org/Security/Fingerprinting)" (RFP) is (_in his current state_) not useful, we use other flags and protection mechanism in order to not fully lose our privacy. A (_good_) VPN and the user.js is in _most_ cases enough. It’s simply impossible to defeat all fingerprinting mechanism without destroying the normal “web surfing fun”.


## Why are some flags disabled when I can control them via FF "Settings"?

Some flags are preset in case you _accidently_ installed addon x e.g. Screenshots. Enforcing to disable e.g. screenshots out-of-the box is usually not needed because if the addon is not installed the toggle simply does nothing.


## Wont-fix stuff

I don’t waste my lifetime and anyone’s else time trying to “fix” something which is protocol specific, this has to be fixed within the Browsers source code or the protocol specification. Disabling everything makes less sense because a) not every site/server might use it b) it might not directly compromise your security or privacy setup c) not every page is exploitable or abuse xyz hole. In most cases exploiting something needs additional steps to make it effective for an attacker to “gain something from it” d) I believe in layer security and not software ‘security’.

* Basically **every connection is disabled**, except for getting **certificate updates** (blacklist).
* **WebRTC** - I disabled it by default, you not need to disable it in uBlock.
* **WebGL is enabled**, the attack surface is practical too low, (except for fingerprinting) and some pages might need it e.g. ShaderToys, Switching to HTML5 is not an option, it also has several fingerprinting problems. That been said, the fingerprint on test pages getting a higher score here, because it’s enabled but there are optional extensions to control it per-site basis.
* **JavaScript will not be entirely disabled** - You can go ahead and do this per-site basis via uBlock or directly via Browser (whitelist).
* **OpenGL/Vulkan related stuff** - OpenGL is partially disabled. There are no known attacks or fingerprint methods on the Vulkan API.
* **Stuff which breaks functionally** such as 'xyz' (e.g. VR, GamePad) based APIs, unless there is evidence that it can be abused in the real-world.
* [Plugin](https://www.fxsitecompat.com/en-CA/docs/2015/plug-in-support-will-be-dropped-by-the-end-of-2016-except-flash/) related questions or things, this includes Java, Adobe Flash and other plugins. If a website needs Flash then stay away from it (however in e.g. China or Korea this is maybe not the best suggestions because the Gov. forces some pages to use e.g. Flash, it’s not a joke!).
* **Reducing any network traffic and memory footprint** is the long term mission in this project. -  I don’t think that any resources should be wasted, if it’s only 1 kB in Memory or 1 kB as network traffic, create a plain text file, store your private address in it and check the file-size, it’s 1KB and this could already expose your true identity.
* **Disabling X reduces attack surface** - Dunno, which dude started this crap (I guess it was me) when I first said this about Flash in a forum in the mid 90s. “Reducing the attack surface” can be misinterpreted, not everything which is loaded will be executed, so there is no attack scenario and some things need explicit permission e.g. if a website wants to gain access to your webcam. Stop saying e.g. disable x because it reduces the attack surface, no that’s not always true and in most cases in crippled the web-experience for all users.
* **This project does not aim to filter the web** - I don’t think filtering the web is the answer, it leads us to more tracking, more restrictions and hurts the little ones (e.g. the ads topic). I see other configuration which disabling basically everything, this is not the mission here, it should make sense and should benefit everyone without been worried that protocol/ads/extension you might leak your data. If you worried that e.g. a CDN leaks your data, because it collects your IP (due to security reasons e.g. to prevent DOS attacks or other attacks/exfl.) then use a VPN and “obfuscate” (hide) your real IP if that is your main concern.
* **Crypto-miners** - “workers” are disabled. - You see in the configuration that the workers-flag itself is enabled (debug reasons) but since we start Firefox in Private Browsing Mode (PBM) it automatically gets disabled (restricted) once you started the Browser.


## Why are studies & telemetry disabled?

> Telemetry is an automated communications process by which measurements and other data are collected at remote or inaccessible points and transmitted to receiving equipment for monitoring. The word is derived from Greek roots: tele = remote, and metron = measure.
Please note and consider to leave telemetry enabled, this helps Mozilla to secure the browser, it’s not about tracking or spying the thing is that no one wants to send manually the needed information and at the end mostly such reports doesn’t help at all cause something is missing and it consumes overall more time.

The biggest “pro” argument for telemetry is that some Mozilla Developers think that some old or new features aren’t used enough to justify maintenance (if you disable telemetry), this might helps them to focus on _more important_ things. This is overall not a bad argument, however I think telemetry & studies should be moved to nightly or beta (testing) builds only and do not belong into any stable Firefox builds.

Telemetry itself is not a privacy problem, Mozilla made sure that its anonymized and doesn’t expose any “private” information such as your browsing behavior but I think the overall _benefit_ is not existent since most bugs are been manually submitted via bug tracker, Reddit & co and it causes a _lot of traffic_ (which we want to avoid).


Since Firefox 75, the Browser comes with a new telemetry agent that sends information about your operating system and your default browser to Firefox every 24 hours. Mozilla has as a result of the change introduced a Windows group policy that prevents the default-browser-agent.exe executable from sending your default browser info.
```ps
New-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Mozilla\Firefox" -Name DisableTelemetry -Value 1 -Force
New-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Mozilla\Firefox" -Name DisableDefaultBrowserAgent -Value 1 -Force
````

## Does any of these tweaks really increase my security and how can I check it?

There are [bunch of websites which testing specific API's](https://github.com/CHEF-KOCH/Online-Privacy-Test-Resource-List), but it’s questionable if you need “several about:config tweaks”. I do believe that critical security things need to be fixed in the Mozilla Browser source code and not via any ‘tweaks’' or configurations. E.g when you never enabled JavaScript in the first place or visit page x, which might abuses privileges or other API's, you might never be affected because certain attacks are based on well-known “internet problems” (JavaScript, fingerprinting etc). Migrating those possible attacks are fine, however inspecting websites via debugger is better. Ask the website owner to “fix” it or mention possible alternatives, most webmasters are still not aware of more private alternatives which they could have been used to “harden” their website.


## What kind of Telemetry is disabled via user.js?

- [x] All Normandy and Shield Studies are disabled!
- [x] All Health reporting features are turned off!
- [x] Recommended addons are turned off!
- [x] The extensions blocklist URL is sanitized!
- [x] The search URL from the search box in `about:addons` is sanitized!
- [x] Extensions are allowed on protected sites, allowing uBO/uMatrix to block Google Analytics on sites like `https://addons.mozilla.org`!
- [x] Real-time checks of downloaded files (i.e., cloud-delivered “protection”)
- [x] All report and data sharing URLs are changed and all possible data sharing services are disabled!
- [x] Do Not Track (DnT) is turned off due to fingerprint reasons, it also not makes sense to enable it cause this is handled by each page and totally an optional feature!
- [x] Crash reports are disabled!
- [x] All Heartbeat(s) are disabled!

**... or in other words, every single browser based telemetry element gets disabled — because in my point of view, this belongs into test/nightly builds and not into stable or ESR releases**


## Optional addons to enhance some Firefox functions

The following extensions are not there to ‘harden’ Mozilla Firefox, it's more my personally recommendation to comply certain Firefox functions. It’s not meant that such addons are there to ‘secure’' your overall web-habits, there also not there to avoid any data leaks.

* [Authenticator - Generate 2-Step Verification codes in your browser](https://authenticator.cc/)  & [source code](https://github.com/Authenticator-Extension/Authenticator)
* [Donkey Defender](https://addons.mozilla.org/en-US/firefox/addon/donkey-defender/) & [source code](https://gitlab.com/regen-open-development/donkey-defender)
* [Extension source viewer (addons.mozilla.org)](https://addons.mozilla.org/en-GB/firefox/addon/crxviewer/)
* [Kee (github.com)](https://github.com/kee-org/browser-addon) - Alternative: [Tusk](https://github.com/subdavis/Tusk)
* [Make Omnibox Great Again](https://addons.mozilla.org/ko/firefox/addon/moga-make-omnibox-great-again/) & ([source code](https://github.com/phu54321/MOGA))
* [Media Reaper - Privacy 1st, Audio & Video Download](https://sasrip.cf/) + ([addon](http://anonym.es/?https://addons.mozilla.org/en-US/firefox/addon/media-reaper/))
* [Permission Inspector (github.com)](https://github.com/tsl143/addonManager)
* [PrivacySpy](https://addons.mozilla.org/en-US/firefox/addon/privacyspy/)
* [RSSPreview](https://addons.mozilla.org/en-US/firefox/addon/rsspreview/)
* [Select After Closing Current](https://addons.mozilla.org/en-US/firefox/addon/select-after-closing-current/)
* [Snowflake](https://addons.mozilla.org/de/firefox/addon/torproject-snowflake/) (_needs WEBRTC enabled!_)
* [Terms of Service; Didn't Read](https://addons.mozilla.org/en-US/firefox/addon/terms-of-service-didnt-read/)
* [uMatrix (github.com)](https://github.com/gorhill/uMatrix)
* [Violentmonkey (github.com)](https://github.com/violentmonkey/violentmonkey) (_with scripts_)
* ~~[NoScript (noscript.net)](https://noscript.net/)~~ (already integrated into Tor Browser)
* [Automatic Spell Checking Language Selection Extension for Firefox](https://github.com/kimsey0/FirefoxAutoDict)

## Why is “Safe-browsing” etc disabled, shouldn't that protect me against malware?

* Any kind of censorship (no matter if meant well or not) is in general a bad thing.
* Blacklisting the whole internet will never work. A malware author could still get it’s way around, whenever a whitelist domain loads additional third-party payload from a malware domain (which is not on the list).
* The hash is unique and can expose you or reveal your browsing habits (_addressed by configuration hardening_)
* An attacker can use the open source domain list to build strategies in order to bypass them, which means such filter lists are depending on how often and well they are maintained. In other words an attacker could grab the list, check if he is on the list or randomize the name each time your Browser loads the payload. Such filter lists can’t work with regular expressions since this would break legitimate domains too.
* Some filter lists cause a lot traffic.
* The filter lists are maybe stored on Google (CDN) Server (which then might tracks you).

If you want such censorship or blocking I suggest you [work with your own list instead](https://www.monperrus.net/martin/anti-phishing-protection-without-google-safebrowsing) which YOU can control and not any organization which you have no control over. I suggest [Unbound](https://www.nlnetlabs.nl/projects/unbound/about/) or/uMatrix/uBo combination which allowing you to create/use your own lists or allowing you to make exclusions, another benefit is that those are faster compared to Google's or Mozilla’s Safe browsing (_needs more evidence_).


## Why aren’t digital Signatures enforced by default to prevent Malware downloads?

There is a high chance of false positives, one [popular example is Notepad++](https://www.bleepingcomputer.com/news/software/notepad-no-longer-code-signed-dev-wont-support-overpriced-cert-industry/) which is now maybe blocked. The operation system should also protect you already against known malware techniques (_needs more evidence_).


## Why does Skype-Web refuse to work in Firefox?

You need to install [User-Agent Switcher](https://addons.mozilla.org/en-US/firefox/addon/user-agent-switcher-revived/) (or manually edit the User-Agent string) and choose "Google Chrome” or “Microsoft Edge” as User-Agent. Currently Firefox 65 doesn’t support [NPAPI](https://en.wikipedia.org/wiki/NPAPI) which is required for the web version.


## How to workaround the Google’s CAPTCHA problem?

In case you use uBlock copy the following rules under `Options > My Rules` and then hit `apply`.

* `https://www.google.com/recaptcha/api * noop`
* `https://www.gstatic.com/recaptcha/api * noop`
* `https://www.recaptcha.net/recaptcha/api script noop`
* `https://www.google.com/js/bg/ script noop`

The config related toggle is `privacy.resistFingerprint` + `privacy.firstparty.isolate` which is disabled in this configuration for several reasons, not only because it _can_ break Google's reCAPTCHA system but moreover because it breaks a [lot of other pages too](https://bugzilla.mozilla.org/show_bug.cgi?id=1299996).

Because of certain problems with time/Google I decided to not enable several anti-fingerprinting features. It’s also questionable if they really increase your privacy since there are other methods on the web which bypasses them.


## Do I still need Tor Browser even after using a hardened user.js configuration?

The short answer is `yes`, Tor not only has additional anti-fingerprinting related changes it is explicitly designed to be _by design_ [more privacy friendly](https://www.torproject.org/projects/torbrowser/design/) since the user can use the Browser out of the box without changing anything. If you are a [target such as journalist](https://www.nbcsandiego.com/news/local/Source-Leaked-Documents-Show-the-US-Government-Tracking-Journalists-and-Advocates-Through-a-Secret-Database-506783231.html), politician person etc.


I highly recommend to use Tor Browser as your default and only Browser if you're privacy biased.


## Why are several Scripts or filter-lists gone after I updated to Firefox 66.0+?

Firefox 66 changed the storage back-end from .json blobs to IndexedDB files, in other words during this migration process it’s very much likely that e.g. Tapermonkey or the internal database gets corrupted. The same can happen with your passwords whenever `logins.json` or/and `key3.DB` gets corrupted you might [lose all of your passwords](https://support.mozilla.org/en-US/questions/1181868). I highly suggest that you use KeePass or another password manager instead of Mozilla’s own password manager function.


## CanvasBlocker extension Vs. the Firefox integrated solution

The [integrated fingerprinting methods](https://blog.mozilla.org/security/2020/01/07/firefox-72-fingerprinting/) are (for now) disabled in the configuration due to several reasons but let me explain the basics first.

Mozilla Firefox uses the similar technique as the Tor Browser (_which is not really a surprise_), the technique will always returns a “white” canvas fingerprint to the website, this means a website can detect that the current browser is blocking canvas fingerprinting methods. The difference here between CanvasBlocker is that (by default) it will return a “random” generated canvas ID with each new request. In theory this could make it harder for the website to detect if you faked your ID or not. The downside is that it will make your Browser slower (we are talking about some milliseconds). Personally I would go with the addon and that’s the reason why the integrated method is disabled in my configuration.


## Disabling locked toolkit.telemetry.enabled (and others)

Manually create (or download) the file `autoconfig.js` (_other names won’t work_) it belongs into the `/defaults/pref/autoconfig.js` dir. In my repo it’s [this file](https://github.com/CHEF-KOCH/FFCK/blob/master/user.js/autoconfig.js) and drop it together with the [mozilla.cfg](https://github.com/CHEF-KOCH/FFCK/blob/master/user.js/mozilla.cfg) into your Firefox profile.

## Which extensions could I use to reduce the overall tracking behavior?

That’s a difficult question because every user has other needs, so I’ll only list the extension which I used in my daily Firefox times.

* [Auto Tab Discard](https://addons.mozilla.org/en-US/firefox/addon/auto-tab-discard/) (_optional_ and more a workaround for some known bugs)
* [CanvasBlocker](https://addons.mozilla.org/firefox/addon/canvasblocker/) alternative is [Luminous](https://gbaptista.github.io/luminous/doc/en-US/)
* [CSS Exfil Protection](https://addons.mozilla.org/firefox/addon/css-exfil-protection/), read [Bug 1531601](https://bugzilla.mozilla.org/show_bug.cgi?id=1531601) & [csswg-drafts](https://github.com/w3c/csswg-drafts/issues/2339) for the current progress
* [Firemonkey](https://addons.mozilla.org/en-US/firefox/addon/firemonkey/)
* [First Party Isolation](https://addons.mozilla.org/en-US/firefox/addon/first-party-isolation/)
* [inØsight — Zero Width Obfuscation](https://addons.mozilla.org/en-US/firefox/addon/in0sight/)
* [Multi-Account Containers (github.com)](https://github.com/mozilla/multi-account-containers)
* [NeatURL](https://addons.mozilla.org/en-US/firefox/addon/neat-url/)
* [Privacy Settings](https://add0n.com/privacy-settings.html) (_more a “gimmick”, we enforce this already via user.js_)
* [Redirector](https://addons.mozilla.org/firefox/addon/redirector/)
* [Request Control](https://addons.mozilla.org/en-US/firefox/addon/requestcontrol)
* [Skip Redirect](https://addons.mozilla.org/firefox/addon/skip-redirect/)
* [Smart Referer](https://addons.mozilla.org/en-US/firefox/addon/smart-referer/)
* [Temporary Containers Firefox Add-on (github.com)](https://github.com/stoically/firefox-add-on-temporary-containers#readme)
* [Temporary Containers](https://addons.mozilla.org/de/firefox/addon/temporary-containers/) ~~[Google Container](https://addons.mozilla.org/en-US/firefox/addon/google-contain-integrations)~~
* [uBlock Origin](https://addons.mozilla.org/firefox/addon/ublock-origin/)
* [uMatrix](https://addons.mozilla.org/firefox/addon/umatrix/)
* [Don't touch my tabs! (rel=noopener)](https://addons.mozilla.org/en-US/firefox/addon/dont-touch-my-tabs/) (_until Firefox 79_)
* ~~[Decentraleyes](https://addons.mozilla.org/firefox/addon/decentraleyes/)~~ - CDN's locally doesn't make sense as they change over time and also you make a connection to the CDN's anyway. So you only increase your own attack surface by using outdated and possible vulnerable files (they come integrated within the addon/extension).
* ~~[ETag Stoppa](https://addons.mozilla.org/firefox/addon/etag-stoppa/)~~ ClearURLs integrated the function](https://gitlab.com/KevinRoebert/ClearUrls/-/issues/440)
* ~~[IDN-Warner](https://addons.mozilla.org/en-US/firefox/addon/idn-warner/)~~
* ~~HTTPS Everywhere~~ ~~[Force HTTPS](https://addons.mozilla.org/nl/firefox/addon/force-https/?src=search)~~ (redundant, since we use `dom.security.https_only_mode` with `true`)
* ~~[Ignore X-Frame-Options Header](https://addons.mozilla.org/en-US/firefox/addon/ignore-x-frame-options-header/)~~


Keep in mind that I’m a _power user_ which means you might not need all the listed extensions. Blindly installing random extension just because someone told you to that “they are the best” is always a bad idea.

## Where does Firefox Multi-Account Containers Extension store its settings?

The localstorage is located under: `<your-profile-folder>\storage\default\moz-extension+++<your-extension-id>...\idb\....sqlite`. The ID for the extension itself is a random string that’s unique you can read it via developer tools or `moz-extension://<your-ID-here>/confirm-page.html?url=...`


## Is there a master list of all about:config flags (incl. the hidden ones)?

All prefs are listed over [here](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Experimental_features) or [here](http://kb.mozillazine.org/About:config_entries), this includes even the experimental ones. If you search only for the hidden prefs you will not find them easily in the source code or via search because there is no single master list.


## How to install addons in Mozilla Fenix?

* [Install Fennec (Fenix)](https://ftp.mozilla.org/pub/mobile/releases/68.2.0/) ([App Store](https://play.google.com/store/apps/details?id=org.mozilla.firefox))
* Install your fav. addons, like uBlock.
* Make sure you open uBlock's setting page and DO NOT close it.
* Replace the the original Firefox installation with the latest [preview build](https://tools.taskcluster.net/index/project.mobile.fenix.v2.fennec-production.2019.11.02/latest).
* Open "Firefox Preview", you will notice that the settings tab from uBlock is still there, which means you can control and use your addon incl. their settings without any problems.


## I can’t see any pictures after I used “save image as” option, what can I do?

Windows, Linux and MacOS (by default) does not support the format and that’s basically the reason why you can’t open .webp with the integrated tools to view webp images. This is not really a Firefox problem, the problem is that Adobe does not supports the [WebP](http://www.telegraphics.com.au/sw/product/WebPFormat) standard (most apps using the Adobe standards/implementations). However, you can open such formats with free programs e.g. GIMP. A solution for Photoshop users would be to add a filter for this format. In our configuration we enforced (by default) to save images only as .jpg, .jpeg etc. to workaround this.


## About:config filtering with Nightly Builds

The old syntax `about:config?filter=bookmarks` [does not work anymore](https://old.reddit.com/r/firefox/comments/d6alv2/aboutconfig_filter_in_nightly/), this is not a bug but was disabled due to several concerns, see [here](https://bugzilla.mozilla.org/show_bug.cgi?id=1501450). The new filtering syntax is `chrome://global/content/config.xul?filter=/abc|def/` (_yes, it’s "chrome" but it works in Firefox too_).


## I’m looking for a specific CSS tweak e.g. to make the context menu dark

A collection of userstyle “tweaks”can be found under [this project (firefox-csshacks)](https://github.com/MrOtherGuy/firefox-csshacks).


## Is it possible to downgrade my FF profile?

Yes, it is! But not via configuration, the `moz_allow_downgrade` option is hard coded and an environment variable. You can add `--allow-downgrade` to the target field on your Firefox shortcut. Keep in mind that this parameter is unsupported and you do this at your own risk.


## GDrive, GMail, YouTube are slow in Firefox — What can I do?!

Google redesigned their own services e.g. GDrive, GMail, YouTube (_you name it_). These website using now non-standard JavaScript (a.k.a homebrew APIs) stuff. This is called "Polymer". Polymer is (by default) enabled on every Google website.

> YouTube page load is 5x slower in Firefox and Edge than in Chrome because YouTube’s Polymer redesign relies on the deprecated Shadow DOM v0 API. - Source: [Mozilla Dev.](https://twitter.com/cpeterso/status/1021626510296285185?lang=en).

There are three things you can do:
* Manually disable the new design (polymer) over [https://www.youtube.com/?disable_polymer=true](https://www.youtube.com/?disable_polymer=true)
* [Install an addon](https://addons.mozilla.org/de/firefox/addon/disable-polymer-youtube/) ([Chrome](https://chrome.google.com/webstore/detail/restore-classic-for-youtu/dhnphdafbioamppmaiaebbdobfhbhnlm)).
* Or via "hacky" solution, fake the user agent e.g. set it to "Opera 12.14" which works via [User Agent switcher](https://chrome.google.com/webstore/detail/user-agent-switcher-for-c/djflhoibgkdhkhhcedjiklpkjnoahfmg) & or other addons/extensions/about:config.


## Policy Templates

You can get the latest Firefox / ESR templates from [here](https://github.com/mozilla/policy-templates/releases/).


## What are StaticPrefs?

[Static prefs](https://github.com/mozilla/gecko-dev/blob/master/modules/libpref/docs/index.md) are special entries which are listed and defined by `StaticPrefList.yaml`. Those prefs shouldn’t appear in both StaticPrefList.yaml and all.js!


## Against obfuscation as a "privacy tool"

I [do not follow](https://thereader.mitpress.mit.edu/the-fantasy-of-opting-out/) "opting out of surveillance" practices, because they are more than questionable and often problematic. Sometimes they are also already "fixed" within the browser, because the next logical step is (or should) be to report and fix problems within the browser (so you do not need any tools [or only as temp workaround]).

Here are **addons you don't need**:
* [AdNauseam](https://adnauseam.io/) - covered by uBlock/uMatrix
* [Cookie AutoDelete](https://addons.mozilla.org/firefox/addon/cookie-autodelete/) - Inefficent because it does not clean everything or is redundant by the integrated Browser cleaning mechanism (when in private browsing mode or "anti-Fingerprint" mode). If you want to use a cookie control addon, go with [CookieMaster](https://addons.mozilla.org/en-US/firefox/addon/cookiemaster/) instead because it (by default) block all cookies and only allow authorized sites, on a per-domain basis. You also can use [I don't care about cookies](https://www.i-dont-care-about-cookies.eu/abp/) or [forget-me-not](https://github.com/Lusito/forget-me-not) in combination with uBlock, which would make more sense.
* [Disconnect](https://disconnect.me) - covered by uBlock/uMatrix
* [Ghostery](https://www.ghostery.com) - Already covered by uBlock and/or uMatrix.
* [Go Rando](https://bengrosser.com/projects/go-rando/) - _questionable_
* [HTTPS Everywhere](https://addons.mozilla.org/de/firefox/addon/https-everywhere/) Use HTTPS websites only or use [Force HTTPS](Force HTTPS) to blocjk insecure http outgoing connections or [NoHTTP](https://addons.mozilla.org/en-US/firefox/addon/nohttp/)
* [HyperFace](https://ahprojects.com/) - _questionable_
* [NoScript](https://bugzilla.mozilla.org/show_bug.cgi?id=1462989#c20) - Some stuff got already included within the Browser, or they are simply [obsolete with uBO/uM](https://old.reddit.com/r/firefox/comments/e1vz2u/does_blocking_3rd_party_scripts_and_frames_in/)
* [TrackMeNot](http://trackmenot.io/) - covered by uBlock/uMatrix
* [User Agent Platform Spoofer](https://addons.mozilla.org/en-US/firefox/addon/user-agent-platform-spoofer/) or similar addons, if you want to spoof your User Agent then use uMatrix integrated function for this.
* A.I. based systems (addons) - A.I. is in general a good idea, but "bypassing", fooling or breaking them is often easy and A.I. always needs lots of data first


## Enabling DoH breaks my VPN connection

It's by design, a VPN with _"DNS leak protection"_ should not allow DOH to work properly.


## Why is `content process limit` not set to 1?

A lot of people complaining about the overall CPU and/or RAM usage in Firefox, settings the flag `dom.ipc.processCount` to 1 basically solves all performance and RAM related "problems". However, there is a cost to it. Setting it to 1 reduce the overall Browser security, because once this is done all tabs and windows will be running in a [single process](https://support.mozilla.org/en-US/kb/performance-settings).

That means if any website is able to compromise the browser's sandboxing _somehow_, it could more easily access content from every other tab. I you do not care about sandboxing/isolating related things, set it to 1 but **I do not recommend it**.


## Second Profile

You can use a second profile for MAC (e.g. AppAmor), [Sandboxing](https://wiki.mozilla.org/Security/Sandbox) etc. This is [optional](http://kb.mozillazine.org/Creating_a_new_Firefox_profile_on_Windows).

Profil parameter | Purpose
------------ | -------------
firefox -P 2profil_name --no-remote | Start another profile in second instance
firefox -P 2profil_name --no-remote --safe-mode | ""  "" including "secure Mode" (_no addons and themes are been loaded_)
firefox -P 2profil_name --no-remote --private | ""  ""  ""  "" including "private Mode"
firefox -P 2profil_name --no-remote --safe-mode --private | ""  ""  ""  "" "" including "secure" and "private Mode"


## Differences between `privacy.trackingprotection.enabled` and `privacy.resistFingerprinting`?

One [blocks scripts](https://support.mozilla.org/en-US/kb/trackers-and-scripts-firefox-blocks-enhanced-track), based on a Disconnect.me blocking list) and the other one actually tries to [resist fingerprinting](https://wiki.mozilla.org/Security/Fingerprinting) to such an extent that script blocking is unnecessary (while breaking a lot of things in the process, see above).


## Can I export a bookmark folder as a .txt file?

Right-click on a folder and select "copy". Then go into e.g. Notepad and paste. It will paste the folder name and all the bookmark urls. A alternative is [copy-tab-urls-webex](https://addons.mozilla.org/firefox/addon/copy-tab-urls-webex/)


## How do I enable tracking protection?

[Tracking Protection](https://wiki.mozilla.org/Security/Tracking_protection) is disabled, so you need to manually switch the flags if you want to use it.

```
user_pref("browser.contentblocking.category", "custom");
user_pref("network.cookie.cookieBehavior", 1);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true)
```


## Address bar design update in FF 77

In [Firefox 75](https://mozilla.invisionapp.com/share/MCUOETHBR4F#/screens/391775121), the [address bar was updated with a visual refresh a new "Top Sites" feature](https://blog.mozilla.org/blog/2020/04/07/latest-firefox-updates-address-bar-making-search-easier-than-ever/), along with some feature removals and changes, like the [Linux behavior of the address bar](https://bugzilla.mozilla.org/show_bug.cgi?id=1621570#c92) changing to be more like Windows and macOS, along with the deprecation of the old history drop marker in the address bar.

Since 77 possible flags to revert the changed as well as the underlying code got removed. You can use the following workarounds.

* [Megabar – Configuring and Styling the Firefox 75+ Address Bar](https://www.userchrome.org/megabar-styling-firefox-address-bar.html)
* [Disable the new address bar features in Firefox 77](https://support.mozilla.org/en-US/questions/1289351#answer-1318441)
* [Step-by-step guide to (sort-of) revert MegaBar in FF 77.0](https://old.reddit.com/r/firefox/comments/gvoaxj/stepbystep_guide_to_sortof_revert_megabar_in_ff/)
* [Directly downloadable .css tweak to undo it](https://www.userchrome.org/samples/userChrome-ZeroEnlargement.css)


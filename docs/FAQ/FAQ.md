## FFCK Project FAQ

### Why is NoScript configured to allow JavaScript by default in Tor Browser? Isn't that unsafe?

> We configure NoScript to allow JavaScript by default in Tor Browser because many websites will not work with JavaScript disabled. Most users would give up on Tor entirely if a website they want to use requires JavaScript, because they would not know how to allow a website to use JavaScript (or that enabling JavaScript might make a website work).

> There's a tradeoff here. On the one hand, we should leave JavaScript enabled by default so websites work the way users expect. On the other hand, we should disable JavaScript by default to better protect against browser vulnerabilities ( not just a theoretical concern!). But there's a third issue: websites can easily determine whether you have allowed JavaScript for them, and if you disable JavaScript by default but then allow a few websites to run scripts (the way most people use NoScript), then your choice of whitelisted websites acts as a sort of cookie that makes you recognizable (and distinguishable), thus harming your anonymity.

> Ultimately, we want the default Tor bundles to use a combination of firewalls (like the iptables rules in Tails) and sandboxes to make JavaScript not so scary. In the shorter term, TBB 3.0 will hopefully allow users to choose their JavaScript settings more easily but the partitioning concern will remain.

> Until we get there, feel free to leave JavaScript on or off depending on your security, anonymity, and usability priorities.

**Update 2019:**
Since NoScript (is in my opinion) _useless_ because Mozilla decided to immitate Google to switch over to the WebExtension API, the above statement is no longer true, for this repository. I think uMatrix or any other "web-filter" extension is better, the old NoScript had several protection mechanism (XSS, CSS-exf., CRFG etc), which are now been integrated (not all of them) into the Browser directly, which means you don't need NoScript anymore - there are other hardening and extensions which I think are better designed to do the job!. My point ov view is and always will be that Mozilla/Google should work directly with extensions hand-in-hand together to find best solution for everyone and not the ones which "know which extensions are security wise" good to have, not everyone is interested in those topics and I think the Browser should integrate everyhing out of the box for every user so that we don't need any extensions (that would be the perfect solution in a perfect world). 

Source:
* [Why is NoScript configured to allow JavaScript by default in Tor Browser? Isn't that unsafe? (torproject.org)](https://www.torproject.org/docs/faq.html.en#TBBJavaScriptEnabled)



### Wont-fix Stuff in this configuration

I don't waste my lifetime and anyones else time trying to fix something which is protocol specific, this has to be fixed within the Browser source code or the protocol. Disabling everything makes less sense because a) not every site/server might use it b) it might not directly compromise your security or privacy setup c) not every page is exploitable or abuse xyz hole. In most cases exploiting something needs additional steps to make it effective for an attacker to "gain something from it" d) I believe in layer security and not software 'security'.

* Basically **every connection is disabled**, except for getting **certificate updates** (blacklist). 
* **WebRTC** - I disabled it by default, you not need to disable it in uBlock.
* **WebGL is enabled**, the attack surface is practical too low, (except for fingerprinting) and some pages might need it e.g. ShaderToys, Switching to HTML5 is not an option, it also has several fingerprining problems. That been said, the fingerprint on test pages getting a higher score here, because it's enabled but there are optional extensions to control it per-site basis.
* **JavaScript will not be entirely disabled** - You can go ahead and do this per-site basis via uBlock or directly via Browser (whitelist).
* **OpenGL/Vulkan related stuff** - OpenGL is parcially disabled. There are no known attacks or fingerprint methods on the VulkanAPI.
* **Stuff which breaks functionally** such as 'xyz' (e.g. VR, GamePad) based APIs, unless there is evidence that it can be abused in the real-world.
* [Plugin](https://www.fxsitecompat.com/en-CA/docs/2015/plug-in-support-will-be-dropped-by-the-end-of-2016-except-flash/) related questions or things, this includes Java, Adobe Flash and other plugins. If a website needs Flash then stay away from it (however in e.g. China or Korea this is maybe not the best suggestions because the Gov. forces some pages to use e.g. Flash, it's not a joke!).
* **Reducing any network traffic and memory footprint** is the long term mission in this project. -  I don't think that any resources should be wasted, if it's only 1 kB in Memory or 1 kB as network traffic, create a plain text file, store your private address in it and check the file-size, it's 1KB and this could already expose your true identity.
* **Disabling X reduces attack surface** - Dunno, which dude started this crap (I guess it was me) when I first said this about Flash in a forum in the mid 90s. "Reducing the attack surface" can be misintepretet, not everything which is loaded will be executed, so there is no attack scenario and some things need explicit permission e.g. if a website wants to gain access to your webcam. Stop saying e.g. disable x because it reduces the attack surface, no that's not always true and in most cases in crippled the web-experience for all users. 
* **This project does not aim to filter the web** - I don't think filtering the web is the answer, it leads us to more tracking, more restrictions and hurts the little ones (e.g. the ads topic). I see other configuration which disabling basically everything, this is not the mission here, it should make sense and should benefit everyone without been worried that protocol/ad/extenion xyu might leak your data. If you worried that e.g. a CDN leaks your data, because it collects your IP (due to security reasons e.g. to prevent DOS attacks or other attacks/exfl.) then use a VPN and "obfuscate" (hide) your real IP if that is your main concern.
* **Crypto-miners** - "workers" are disabled. - You see in the configuration that the workers-flag itself is enabled (debug reasons) but since we start Firefox in Private Browsing Mode (PBM) it automatically gets disabled (restricted) once you started the fox.



### Does any of these tweaks really increase my security and how can I check it?

There are [bunch of websites which testing specific API's](https://github.com/CHEF-KOCH/Online-Privacy-Test-Resource-List), but it's questionable if you need "several about:config tweaks". I do believe that critical security things need to be fixed in the Mozilla Browser source code and not via any 'tweaks' or configurations. E.g when you never enabled JavaScript in the first place or visit page x, which might abuses privileges or other API's, you might never be affected because certain attacks are based on well-known "internet problems" (JavaScript, fingerprinting etc). Migrating those possible attacks are fine, however inspecting websites via debugger is better. Ask the website owner to "fix" it or mention possible alternatives, most webmasters are still not aware of more private alternatives which they could have been used to "harden" their website.



### Telemetry?

> Telemetry is an automated communications process by which measurements and other data are collected at remote or inaccessible points and transmitted to receiving equipment for monitoring. The word is derived from Greek roots: tele = remote, and metron = measure. 
Please note and consider to leave telemetry enabled, this helps Mozilla to secure the browser,it's not about tracking or spying the thing is that no one wants to send manually the needed information and at the end mostly such reports doesn't help at all cause something is missing and it consumes overall more time. 



### Which telemetry is disabled by default in user.js?

- All Normandy and Shield Studies are disabled.
- ALl Health reporting features are turned off
- Recommended addons are turned off
- The extensions blocklist URL is sanitized
- The search URL from the search box in `about:addons` is sanitized
- Extensions are allowed on protected sites, allowing uBO/uMatrix to block Google Analytics on sites like `https://addons.mozilla.org`
- Real time checking of downloads (i.e., cloud-delivered "protection") is turned off
- All report and data sharing URLs are changed and all possible data sharing services are disabled
- Do Not Track (DnT) is turned off due to fingerprint reasons, it also not makes sense to enable it cause this is handled by each page and totally an optional feature
- Crash reports are disabled
- All Heartbeat(s) are disabled
- **..in other words, every telemetry is been disabled - because in my point of view this belongs into test/nightly builds and not into stable or ESR releases**



### Optional addons to comply several Firefox integrated functions

The following extensions are not there to 'harden' Mozilla Firefox, it's more my personally recommendation to comply certain Fiefox functions. It's not meant that such addons are there to 'secure' your overall web-habits, there also not there to avoid any data leaks.

* [Temporary Containers Firefox Add-on (github.com)](https://github.com/stoically/firefox-add-on-temporary-containers#readme)
* [Multi-Account Containers (github.com)](https://github.com/mozilla/multi-account-containers)
* [Nano Adblocker (github.com)](https://github.com/NanoAdblocker/NanoCore)
* [Decentralyes (decentraleyes.org)](https://decentraleyes.org/)
* [uMatrix (github.com)](https://github.com/gorhill/uMatrix)
* ~~[NoScript (noscript.net)](https://noscript.net/)~~ (already integrated into Tor Browser)
* [Kee (github.com)](https://github.com/kee-org/browser-addon) - Alternative: [Tusk](https://github.com/subdavis/Tusk)
* [Violentmonkey (github.com)](https://github.com/violentmonkey/violentmonkey)
* [Extension source viewer (addons.mozilla.org)](https://addons.mozilla.org/en-GB/firefox/addon/crxviewer/)
* [Permission Inspector (github.com)](https://github.com/tsl143/addonManager)



### Why is "Safe-browsing" etc disabled, shouldn't that protect me against malware?

* Any kind of censorship (no matter if meant well or not) is a bad thing.
* Blacklisting the Internet will never work. A Malware author could still get it's way around, whenever a whitelist domain loads additional third-party payload from a malware domain (which is not on the list).
* The hash is unique and can expose you or reveal your browsing habits. 
* An attacker can use the open sourced list to build strategies to bypass them, which means such filter lists are depending on how often and well they are maintained. In other words an attacker could grab the list, check if he is on the list or randomize the name each time your Browser loads the payload. Such filter lists can't work with regular expressions since this would break legitimate domains too.

If you want such censorship or blocking I suggest you [work with your own list instead](https://www.monperrus.net/martin/anti-phishing-protection-without-google-safebrowsing) which you can control and not any organization which you have no control over. I suggest [Unbound](https://www.nlnetlabs.nl/projects/unbound/about/) or/uMatrix/uBo combination which allowing you to create/use your own lists or allowing you to make exclusions, another benefit is that those are faster compared to Google's or Mozilla's Safe browsing (_needs more evidence_).



### Why aren't digital Signatures enforced by default to prevent Malware downloads?

There is a high chance of false positives, one [popular example is Notepad++](https://www.bleepingcomputer.com/news/software/notepad-no-longer-code-signed-dev-wont-support-overpriced-cert-industry/) which is now maybe blocked. The operation system should also protect you already against known malware techniques (_needs more evidence_).



### Why does Skype-Web refuse to work in Firefox?

You need to install [User-Agent Switcher](https://addons.mozilla.org/en-US/firefox/addon/user-agent-switcher-revived/) (or manually edit the User-Agent string) and choose "Google Chrome” or “Microsot Edge” as User-Agent. Currently Firefox 65 doesn’t support [NPAPI](https://en.wikipedia.org/wiki/NPAPI) which is required for the web version.



### How to workaround Google's CAPTCHA problem

In case you use uBlock copy the following rules under Options > My Rules and then hit apply.

```bash
* https://www.google.com/recaptcha/api * noop
* https://www.gstatic.com/recaptcha/api * noop
* https://www.recaptcha.net/recaptcha/api script noop
* https://www.google.com/js/bg/ script noop
```

The config related toggle is `privacy.resistFingerprint` + `privacy.firstparty.isolate` which is disabled in this configuration for several reasons, not only because it _can_ break Google's CAPTCHA system but moreover because it breaks a [lot of other pages too](https://bugzilla.mozilla.org/show_bug.cgi?id=1299996).

Because of certain problems with time/Google I decided to not enable several anti-fingerprinting features. It's also questionable if they really increase your privacy since there are other methods on the web which bypasses them.



### Do I still need Tor Browser even after using a hardened user.js configuration?

The short answer is yes, Tor not only has additional anti-fingerprinting related changes it is explicity designed to be _by design_ [more privacy friendly](https://www.torproject.org/projects/torbrowser/design/) since the user can use the Browser out of the box without changing anything. If you are a [target such as journalist](https://www.nbcsandiego.com/news/local/Source-Leaked-Documents-Show-the-US-Government-Tracking-Journalists-and-Advocates-Through-a-Secret-Database-506783231.html), politican person etc. I highly recommend to use Tor Browser as your default and only Browser. 



### Why are several Scripts or filter-lists gone after I updated to Firefox 66.0?

Firefox 66 changed the storage backend from json blobs to IndexedDB files, in other words during this migration process it's very much likely that e.g. Tapermonkey or the internal database gets corrupted. The same can happen with your passwords whenever `logins.json` or/and `key3.DB` gets corrupted you might [lose all of your passwords](https://support.mozilla.org/en-US/questions/1181868). I highly suggest that you use KeePass or another password manager instead of Mozilla's own password manager function. 


### CanvasBlocker extension Vs. the Firefox integrated solution

The integrated fingerprinting method is (for now) disabled in the configuration due to several reasons but let me explain the basics first.

Mozilla Firefox uses the same technique as the Tor Browser (_which is not really a surprise_), the technique will always returns a "white" canvas fingerprint to the website, tis means a website can detect that the current browser is blocking canvas fingerprinting methods. The difference here between CanvasBlocker is that (by default) it will return a "random" generated canvas ID with each new request. In theory this could make it harder for the website to detect if you faked your ID or not. The downside is that it will make your Browser slower (we are talking about some milliseconds). Personally I would go with the addon and that's the reason why the integrated method is disabled in my configuration.


### Disabling locked toolkit.telemetry.enabled (and others)

Manually create (or download) the file `autoconfig.js` (_other names won't work_) it belongs into the `/defaults/pref/autoconfig.js` dir. In my repo it's [this file](https://github.com/CHEF-KOCH/FFCK/blob/master/user.js/autoconfig.js) and drop it together with the [mozilla.cfg](https://github.com/CHEF-KOCH/FFCK/blob/master/user.js/mozilla.cfg) into your Firefox profile.

### Which extensions could I use to reduce tracking behavior?

That's a difficult question because every user has other needs, so I'll only list the extension which I used in my daily Firefox times. 

* [Auto Tab Discard](https://addons.mozilla.org/en-US/firefox/addon/auto-tab-discard/)
* [CSS Exfil Protection](https://addons.mozilla.org/firefox/addon/css-exfil-protection/)
* [Privacy Settings](https://add0n.com/privacy-settings.html)
* [uBlock Origin](https://addons.mozilla.org/firefox/addon/ublock-origin/)
* [uMatrix](https://addons.mozilla.org/firefox/addon/umatrix/)
* ~~HTTPS Everywhere~~ [Force HTTPS](https://addons.mozilla.org/nl/firefox/addon/force-https/?src=search)
* [CanvasBlocker](https://addons.mozilla.org/firefox/addon/canvasblocker/)
* [IDN-Warner](https://addons.mozilla.org/en-US/firefox/addon/idn-warner/)
* [Decentraleyes](https://addons.mozilla.org/firefox/addon/decentraleyes/)
* [Smart Referer](https://addons.mozilla.org/firefox/addon/smart-referer/)
* [ETag Stoppa](https://addons.mozilla.org/firefox/addon/etag-stoppa/) 
* [Skip Redirect](https://addons.mozilla.org/firefox/addon/skip-redirect/)
* [ClearURLs](https://addons.mozilla.org/firefox/addon/clearurls/)
* [Violentmonkey](https://addons.mozilla.org/firefox/addon/violentmonkey/)
* [Redirector](https://addons.mozilla.org/firefox/addon/redirector/)
* [Request Control](https://addons.mozilla.org/en-US/firefox/addon/requestcontrol)
* [Cookie AutoDelete](https://addons.mozilla.org/firefox/addon/cookie-autodelete/)
* ~~Temporary Containers~~ [Google Container](https://addons.mozilla.org/en-US/firefox/addon/google-contain-integrations) with [Integrations](https://addons.mozilla.org/en-US/firefox/addon/google-contain-integrations)
* [First Party Isolation](https://addons.mozilla.org/en-US/firefox/addon/first-party-isolation/) (because I like to control it per-site basis) 

Keep in mind that I'm a _power user_ which means you might not need all the listed extensions. Blindly installing random extension just because someone told you that "they are the best" is always a bad idea.

### Where does Firefox Multi-Account Containers Extension store its settings?

The extension localstorage is located under `<your-profile-folder>\storage\default\moz-extension+++<your-extension-id>...\idb\....sqlite`. The ID for the extension itself is a random string that's unique you can read it via developer tools or `moz-extension://<your-ID-here>/confirm-page.html?url=...`


### Is there a master list of all about:config flags (incl. the hidden ones)?

All prefs are listed over [here](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Experimental_features) or [here](http://kb.mozillazine.org/About:config_entries), this includes even the experimental ones. If you search only for the hidden prefs you will not find them easily in the source code or via search because there is no single master list. 


### How to get addons in Mozilla Fennec?

You can install extensions in Fennec by installing [this](https://tools.taskcluster.net/index/project.mobile.fenix.v2.fennec-production/latest) into your Fennec, however this does not come without any [drawbacks](https://old.reddit.com/r/firefox/comments/d2hww8/fenix_have_supported_addons/). 


### I can't see any pictures after I used "save image as" option, what can I do?

Windows, Linux and MacOS (by defaault) does not support the format and that's basically the reason why you can't open .webp with the integrated tools to view webp images. This is not really a Firefox problem, the problem is that Adobe does not supports the [WebP](http://www.telegraphics.com.au/sw/product/WebPFormat) standard (most apps using the Adobe standards/implementations). However, you can open such formats with free programs e.g. GIMP. A solution for Photoshop users would be to add a filter for this format. In our configuration we enforced (by default) to save images only as .jpg, .jpeg etc. to workaround this.


### About:config filtering with Nightly Builds 

The old syntax `about:config?filter=bookmarks` [does not work anymore](https://old.reddit.com/r/firefox/comments/d6alv2/aboutconfig_filter_in_nightly/), this is not a bug but was disabled due to several concerns, see [here](https://bugzilla.mozilla.org/show_bug.cgi?id=1501450). The new filtering syntax is `chrome://global/content/config.xul?filter=/abc|def/` (_yes, it's "chrome" but it works in Firefox too_).


### I'm looking for a specific CSS tweak e.g. to make the context menu dark

A collection of userstyle "tweaks"can be found under [this project (firefox-csshacks)](https://github.com/MrOtherGuy/firefox-csshacks).

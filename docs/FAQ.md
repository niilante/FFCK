## FFCK Project FAQ

### Why is NoScript configured to allow JavaScript by default in Tor Browser? Isn't that unsafe?

> We configure NoScript to allow JavaScript by default in Tor Browser because many websites will not work with JavaScript disabled. Most users would give up on Tor entirely if a website they want to use requires JavaScript, because they would not know how to allow a website to use JavaScript (or that enabling JavaScript might make a website work).

> There's a tradeoff here. On the one hand, we should leave JavaScript enabled by default so websites work the way users expect. On the other hand, we should disable JavaScript by default to better protect against browser vulnerabilities ( not just a theoretical concern!). But there's a third issue: websites can easily determine whether you have allowed JavaScript for them, and if you disable JavaScript by default but then allow a few websites to run scripts (the way most people use NoScript), then your choice of whitelisted websites acts as a sort of cookie that makes you recognizable (and distinguishable), thus harming your anonymity.

> Ultimately, we want the default Tor bundles to use a combination of firewalls (like the iptables rules in Tails) and sandboxes to make JavaScript not so scary. In the shorter term, TBB 3.0 will hopefully allow users to choose their JavaScript settings more easily but the partitioning concern will remain.

> Until we get there, feel free to leave JavaScript on or off depending on your security, anonymity, and usability priorities.

Source:
* [Why is NoScript configured to allow JavaScript by default in Tor Browser? Isn't that unsafe? (torproject.org)](https://www.torproject.org/docs/faq.html.en#TBBJavaScriptEnabled)



### Wont-fix

I don't waste my and anyones else time trying to fix something which is protocol specific, this has to be fixed fixed within the source/protocol. Disabling everything makes less sense because a) not every site might use it b) it might not directly compromise your security setup c) not every page is exploitable or abuse this (since there is less benefit from doing it) d) I believe in layer security and not software 'security'.

* WebRTC - I disabled it by default, you not need to disable it in uBlock.
* JavaScript will not be entirely disabled - You can go ahead and do this per-site basis via uBo.
* OpenGL/Vulkan related stuff - OpenGL is parcially disabled. There are no known attacks or fingerprint methods on the VulkanAPI (it's opn source and could be fixed anyway even if someone finds attacks).
* Stuff which breaks functionally such as 'xyz' API unless there is evidence that it can be abused in the real-world.
* [Plugin](https://www.fxsitecompat.com/en-CA/docs/2015/plug-in-support-will-be-dropped-by-the-end-of-2016-except-flash/) related questions or things.



### Does any of these tweaks really increase my security and how can I check it?

There bunch of websites which testing specific API's, but it's questionable if you need the tweaks, I do believe that critical security things need to be fixed in the source code and not via any 'tweaks'. That said when you never enable JavaScript or visit pages which abusing privileges or such API's you're secure and do not need any tweaks.



### What is Telemetry?

```
Telemetry is an automated communications process by which measurements and other data are collected at remote or inaccessible points and transmitted to receiving equipment for monitoring. The word is derived from Greek roots: tele = remote, and metron = measure. 
Please note and consider to leave telemetry enabled, this helps Mozilla to secure the browser,it's not about tracking or spying the thing is that no one wants to send manually the needed information and at the end mostly such reports doesn't help at all cause something is missing and it consumes overall more time. 
```



### Optional addons to comply several Firefox functions

The following extensions are not there to 'harden' Mozilla Firefox there only my personally recommendation to comply certain Fiefox functions. It's not meant that such addons are there to 'secure' your web-habits, there also not there to avoid data leaks.

* [Temporary Containers Firefox Add-on](https://github.com/stoically/firefox-add-on-temporary-containers#readme)
* [Multi-Account Containers](https://github.com/mozilla/multi-account-containers)
* [Nano Adblocker](https://github.com/NanoAdblocker/NanoCore)
* [Decentralyes](https://decentraleyes.org/)
* [uMatrix](https://github.com/gorhill/uMatrix)
* [NoScript](https://noscript.net/) (already integrated into Tor Browser)
* [Kee](https://github.com/kee-org/browser-addon) - Alternative: [Tusk](https://github.com/subdavis/Tusk)
* [Violentmonkey](https://github.com/violentmonkey/violentmonkey)
* [Extension source viewer](https://addons.mozilla.org/en-GB/firefox/addon/crxviewer/)
* [Permission Inspector](https://github.com/tsl143/addonManager)



### Why is Safe Browsing and other Mozilla services are disabled, shouldn't that protect me against malware?

* Any kind of censorship (no matter if meant well or not) is a bad thing.
* Blacklisting the Internet will never work. A Malware author could still get it's way around, whenever a whitelist domain loads additional third-party payload from a malware domain (which is not on the list).
* The hash is unique and can expose you or reveal your browsing habits. 
* An attacker can use the open sourced list to build strategies to bypass them, which means such filter lists are depending on how often and well they are maintained. In other words an attacker could grab the list, check if he is on the list or randomize the name each time your Browser loads the payload. Such filter lists can't work with regular expressions since this would break legitimate domains too.

If you want such censorship or blocking I suggest you [work with your own list instead](https://www.monperrus.net/martin/anti-phishing-protection-without-google-safebrowsing) which you can control and not any organization which you have no control over. I suggest [Unbound](https://www.nlnetlabs.nl/projects/unbound/about/) or/uMatrix/uBo combination which allowing you to create/use your own lists or allowing you to make exclusions, another benefit is that those are faster compared to Google's or Mozilla's Safe browsing (_needs more evidence_).



### Why aren't digital Signatures enforced by default to prevent Malware downloads?

Same like #6, there is a high chance of false positives, one [popular example is Notepad++](https://www.bleepingcomputer.com/news/software/notepad-no-longer-code-signed-dev-wont-support-overpriced-cert-industry/) which is now maybe blocked. The operation system should also protect you already against known malware techniques (_needs more evidence_).



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



### Do I still need Tor Browser even after using a hardened user.js configuration?

The short answer is yes, Tor not only has additional anti-fingerprinting related changes it is explicity designed to be _by design_ [more privacy friendly](https://www.torproject.org/projects/torbrowser/design/) since the user can use the Browser out of the box without changing anything. If you are a [target such as journalist](https://www.nbcsandiego.com/news/local/Source-Leaked-Documents-Show-the-US-Government-Tracking-Journalists-and-Advocates-Through-a-Secret-Database-506783231.html), politican person etc. I highly recommend to use Tor Browser as your default and only Browser. 


### Which telemetry is disabled by default in user.js?

- All Normandy and Shield Studies are disabled 
- Recommended addons are turned off
- Crypto-miners are blocked (Mozilla can collect data about which mines data to improve their own list)
- The extensions blocklist URL is sanitized
- The search URL from the search box in `about:addons` is sanitized
- Extensions are allowed on protected sites, allowing uBO/uMatrix to block Google Analytics on sites like `https://addons.mozilla.org`
- Real time checking of downloads (i.e., cloud-delivered "protection") is turned off
- All report and data sharing URLs are changed and all possible data sharing services are disabled
- Do Not Track (DnT) is turned off due to fingerprint reasons, it also not makes sense to enable it cause this is handled by each page and totally an optional feature
- Crash reports & Health Report are disabled


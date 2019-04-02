## Overview

I do not believe in software [security through obscurity](https://en.wikipedia.org/wiki/Security_through_obscurity). Because there are many examples when software/extensions failed to protect the user (e.g. WebRTC). However, some extension can give you a small advantage which I list here:

- [FireProx](https://github.com/ustayready/fireprox) - Rotate IP addresses with every web request using an AWS API Gateway proxy.
- [Decentraleyes](https://decentraleyes.org/) - Local emulation of Content Delivery Networks.
- [CSS Exfil Protection](https://addons.mozilla.org/en-US/firefox/addon/css-exfil-protection/) - This plugin sanitizes and blocks any CSS rules which may be designed to steal data.
- [ClearURLs](https://addons.mozilla.org/en-US/firefox/addon/clearurls/) - This add-on will remove the tracking fields form all URLs which are visited by the browser.
- [KeePass Tusk](https://addons.mozilla.org/en-GB/firefox/addon/keepass-tusk/) - Tusk is a read-only password manager. It is compatible with KeePass 2 and KDBX version 4 databases, and can autofill usernames and passwords.
- [Buster Captcha Solver](https://addons.mozilla.org/en-US/firefox/addon/buster-captcha-solver/) - Buster is a Firefox extension which helps you to solve difficult captchas by completing reCAPTCHA audio challenges using automatic speech recognition. Challenges are solved by clicking on the extension button at the bottom of the reCAPTCHA widget.
- [Temporary Containers](https://addons.mozilla.org/en-US/firefox/addon/temporary-containers/) - Open tabs, websites, and links in automatically managed disposable containers. Containers isolate data websites store (cookies, storage, and more) from each other, enhancing your privacy and security while you browse.
- uMatrix/uBO (_or_ Nano Defender/uBO Scope
- [Cookie AutoDelete](https://addons.mozilla.org/en-US/firefox/addon/cookie-autodelete/)


Keep in mind that this list is not a list of extension which I use or say it "harden" your Firefox, it's a list which basically shows what  you could use in order to prevent certain things, like IP leakage etc.

### Why is NoScript not on the list?
uMatrix is better than NoScript because of the following reasons:

* NoScript/ScriptSafe can only block basic scripts, not "full" domains so if you block Google Analytics in NoScript, you're still connected to it once you visited the specific site with that request.
* NoScript doesn't have separate rulesets for global and individual sites. Say you want to enable a domain when connecting from Reddit, but block it when on a different site. NoScript doesn't make this distinction and only has a global block set, requiring more constant tinkering for power users.
* uMatrix is a general-purpose blocker, it can block and automatically delete cookies, forbid mixed HTTP/HTTPS content and of course, block scripts.

NoScript does have an Anti-XSS + Anti-Clickjacking protection as features so one could use both however from my personal experience NoScript often resets and goes back to blocking all by default and just disrupts my browsing frequently enough for me to abandon it.


### Why isn't SmartHTTPS/HTTPS Everywhere not on the list?

* HTTPS Everywhere collects data
* HTTPS Everywhere is not needed since (according to Google 85% of the whole web is already encrypted) Let's Encrypt certificates are free.
* HTTPS Everywhere causes more memory usage for no security benefit (you can get similar results via about:config flags which prevents a user to connect to "unsecure" http-connections entirely).
* Some websites have problems with it or creating an infinite reloading loop.
* We are not in the 90s anymore. ALL (!) newssites are using https, if you on unsecure websites which doesn't even give a shit about https you should consider to not use this page at all (Warez page?). The reason why a normal website uses https is that Google index rates websites with https much higher.

### Linux

Drop the new and hardened user.js file into your Firefox profile directory at <code>~/.mozilla/firefox/XXXXXXXX.your_profile_name</code> and verify that the settings are effective from about:support (check the "Important Modified Preferences" and "user.js Preferences" sections).

If you want to be able to keep your user.js up-to-date with this repository, you can clone the latter in the main Mozilla directory and create a link to the user.js file from your profile:

```bash
cd ~/.mozilla/firefox
git clone 'https://raw.githubusercontent.com/CHEF-KOCH/FFCK/master/user.js/user.js'
cd XXXXXXXX.your_profile_name
ln -s ../CHEF-KOCH/user.js/FFCK user.js
```

### MacOS

The `user.js` must be dropped into `~/Library/Application Support/Firefox/Profiles/XXXXXXXX.your_profile_name`. 


### Android


On Firefox for Android (Fenix), you need to drop the file to <code>/data/data/org.mozilla.firefox/files/mozilla/XXXXXXXX.your_profile_name</code>. If you use Jolla and run Firefox through Alien Dalvik, the location needs to be prefixed with <code>/opt/alien</code>.


### Sailfish OS + Alien Dalvik

Basically the same like Android except that the dir is under: `/opt/alien/data/data/org.mozilla.firefox/files/mozilla/XXXXXXXX.your_profile_name`.


### Windows


On Windows, you need to drop the user.js file to <code>%appdata%\Mozilla\Firefox\Profiles\XXXXXXXX.your_profile_name</code>. For portable versions use `[firefox dir]\Data\profile\` instead.



### MSI Package Download

You can install Firefox as .MSI package.

```bash
msiexec /passive /norestart /i „https://download.mozilla.org/?product=firefox-msi-latest-ssl&os=win64&lang=en“ START_MENU_SHORTCUT=true DESKTOP_SHORTCUT=true INSTALL_MAINTENANCE_SERVICE=false REMOVE_DISTRIBUTION_DIR=false TASKBAR_SHORTCUT=true /quiet /norestart
```

```
// Without download
msiexec.exe /i „c:MSidefault.msi“ INSTALL_DIRECTORY_PATH=“C:Firefox“ TASKBAR_SHORTCUT=false DESKTOP_SHORTCUT=false INSTALL_MAINTENANCE_SERVICE=false /quiet

```


### Permanent Tor Firefox profile

Tor always recommends just using the Tor browser generated configuration, the file already pre-configured and hardened to _resist common exploits_ (no evidence).



### System-wide based user.js installation

There are several files which you have to create manually (some examples already can be found in FFCK Project).

* `systemwide_user.js`: Contains the default values which aren't set by _about:config_. Those settings are kept on every browser session.
* `locked_user.js`: This is file acts like a locked preferences file for every new Firefox which you create.
* `debian_locked.js`: This file can't be changed or overridden.
* `fenec_locked.js`: This file can't be changed or overridden.

The files belong into the following directories: 
* Linux: `/etc/firefox/syspref.js` or below FF 60 in `/etc/firefox/firefox.js`
* Linux (Debian): `/etc/firefox-esr/firefox-esr.js` or for Archlinux under: `/usr/lib/firefox/mozilla.cfg`
* MacOS: `/Applications/Firefox.app/Contents/Resources/mozilla.cfg`
* Windows: `\Mozilla Firefox\mozilla.cfg`


### Troubleshooting

* In case your configuration file doesn't load check your `mozilla.cfg` and ensure there is a blank comment line `//` on the first line.
* Check if the syntax doesn't contain any error(s).
* Make sure the update url is correct.
* Verify if you settings getting applied, open _about:support_ and check `Important Modified Preferences` which is under the `user.js Preferences` section. 


### Installing Android (Fenix) Preview Builds
1. [Join](https://groups.google.com/forum/#!forum/fenix-nightly) the [Firefox Preview (Fenix) test group].(https://groups.google.com/forum/#!forum/fenix-nightly).
2. [Opt-in](https://play.google.com/apps/testing/org.mozilla.fenix).
3. Download from the [Google Play Store](https://play.google.com/store/apps/details?id=org.mozilla.fenix).

If case you would rather download an [APK](https://tools.taskcluster.net/index/project.mobile.fenix.v2.nightly/latest), you can do that too. Keep in mind that manually installed APKs do not auto-update! See above how to deal with the user.js configuration.

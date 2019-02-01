Creating a Firefox MST or Transform file
=========================================

An MST file is like a patch for a MSI installer that you can then apply when performing an install. This allows you to change, or transform, the install process by passing the MST file as an argument to the MSI installer.

To create an MST file, you need to download the Windows SDK Components for Windows Installer Developers and install the Orca.exe program. Once Orca is installed, run it and click on File and then Open and then select the MSI file that you wish to create a MST file

Once the MSI file is opened, click on the Transform menu and select New Transform as shown below.
When a new Transform has been started, the Orca window title will now include „transformed by untitled“ to indicate that you are in the transform mode.

Now click on the Property table as shown below. This will list all of the custom Firefox properties that you can configure for your MST file. For descriptions on what each property does, you can review this document.

To change a property, simply double-click on it and enter the new value. For boolean properties, the data can either be true or false. As you can see in the image below, we have changed the INSTALL_DIRECTORY_PATH property so that Firefox will be installed in the C:\Firefox65-Nightly\ folder.

When you are done configuring the properties, click on the Transform menu and select Generate Transform.
Orca will now generate a MST file and ask you where to save it. In our example, we will be saving the mst file as „custom.mst“. After you save the MST file, you can close the Orca program.

To use this newly generated MST file when installing Firefox, you would need to open a command prompt and enter a command like the following.

`msiexec /i firefox-65.0.en-US.win64.installer.msi /lvx msi.log TRANSFORMS=“custom.mst“`

When using this command, the Firefox MSI installer will execute and be transformed by the custom configuration saved in the custom.mst file. The „/lvx msi.log“ part of the command will generate a log file called msi.log in the same folder that you executed the command.

This log file can be used to debug problems that you may encounter when installing the MSI.

* INSTALL_DIRECTORY_PATH=[path] to define a path for the Firefox installation.
* INSTALL_DIRECTORY_NAME=[name] to define the name of the Firefox directory.
* TASKBAR_SHORTCUT={true,false} defines whether a taskbar shortcut is placed during installation.
* DESKTOP_SHORTCUT={true,false} defines whether a desktop shortcut is placed during installation.
* START_MENU_SHORTCUT={true,false} defines whether a Start Menu shortcut is placed during installation.
* INSTALL_MAINTENANCE_SERVICE={true,false} defines whether the Maintenance Service is installed.
* REMOVE_DISTRIBUTION_DIR={true,false} defines whether the distribution directory of an installation is removed.
* PREVENT_REBOOT_REQUIRED={true,false} to allow or prevent reboots if required.
* OPTIONAL_EXTENSIONS={true,false} ti allow or disallow the installation of bundled extensions.
* EXTRACT_DIR=[directory] extracts the Firefox files without installing them.

MSIEXEC options are supported as well:

* /i or /package will install the browser.
* /L or /log writes to a log file.
* /m generates an SMS status .mif file.
* /q, /quiet, or /passive to install Firefox silently
* /norestart, /forcerestart, or /promptrestart to block, force or prompt users for a restart.

---
old_url: adding_your_own_plugins.htm
title: "Adding your own Plugins"
active_menu_item: developers
class_name: developers
full_width: true
---

An AC Mobile Build Plugin is based on Cordova plugin framework. 

We will not allow any plugin to be added to the build system without it being vetted first. Once added, it will be available to all users of the system.

This document explains the XML configuration object that is required for any plugin to interface with AC Mobile Build.

If you would like us to add in your plugins, please follow the details below to construct your plugin and then contact us with details of your GitHub repo that we can access. 

You can submit to us by email (support@applicationcraft.com) with your project in a zip file, but it would be preferable if you use GitHub. It would then be easier for you to update your plugin in the future and for us to then update within AC as well.

For further info and technical details on how Cordova Plugins work and how to write one, please check the Cordova docs at [http://docs.phonegap.com/en/2.2.0/guide_plugin-development_index.md.html](http://docs.phonegap.com/en/2.2.0/guide_plugin-development_index.md.html)




##Simple XML Example

  <?xml version="1.0" encoding="UTF-8"?>
	<plugin xmlns="http://www.phonegap.com/ns/plugins/1.0"
	    xmlns:android="http://schemas.android.com/apk/res/android"
	    id="com.applicationcraft.plugins.PGSQLitePlugin"
	    version="2.1.0">
	    <name>PGSQLite</name>
	    <file source="www/pgsqliteplugin.ios.js" target="pgsqliteplugin.js" special-location="www"  platform="ios"/>
	    <file source="www/pgsqliteplugin.android.js" target="pgsqliteplugin.js" special-location="www" platform="android"/>   
	    <platform name="android">
	        <plugin-info name="PGSQLitePlugin" value="com.applicationcraft.plugins.PGSQLitePlugin"/>
	        <file source="PGSQLitePlugin.java" target="src/com/applicationcraft/plugins/PGSQLitePlugin.java" />
	        <uses-permission name="android.permission.WRITE_EXTERNAL_STORAGE"/>
	    </platform>
	    <platform name="ios">
	        <plugins-plist key="PGSQLitePlugin"
	                    string="PGSQLitePlugin" />
	        <source-file src="PGSQLitePlugin.h" />
	        <source-file src="PGSQLitePlugin.m" />
	        <framework src="libsqlite3.dylib" />
	    </platform>
	</plugin>

##Plugin Manifest Format Explained

	<plugin xmlns="http://www.phonegap.com/ns/plugins/1.0"
	    xmlns:android="http://schemas.android.com/apk/res/android"
	    id="com.applicationcraft.plugins.PGSQLitePlugin"
	    version="2.1.0">


###Main plugin element

The `plugin` element is the top-level element of the plugin manifest. It has the following attributes:

*`xmlns (required)`*

The plugin namespace - `http://www.phonegap.com/ns/plugins/1.0`. If the document contains XML from other namespaces - for example, tags to be added to the AndroidManifest.xml file - those namespaces should also be included in the top-level element.

*`id (required)`*

A reverse-domain style identifier for the plugin - for example, `com.companyname.foo`

*`version (required)`*

A version number for the plugin, that matches the following major-minor-patch style regular expression:

*`<name> element`*

A human-readable name for the plugin. The text content of the element contains the name of the plugin. An example:
`<name>Foo</name>`

At this point in time, the tools prototyped for this format do not make use of this element. If this document progresses, localization will also need to be accounted for.

###file element###


File to be copied into a Cordova app's `www` directory. 

A couple of samples:

	<file source="www/pgsqliteplugin.ios.js" target="pgsqliteplugin.js" special-location="www"  platform="ios"/>

	<file source="www/pgsqliteplugin.android.js" target="pgsqliteplugin.js" special-location="www" platform="android"/>

All assets tags require both a `source` attribute and a `target` attribute.

*`source (required)`*

Where the file is located in the plugin package, relative to the `plugin.xml` document.

*`target (required)`*

File name locate in `www` directory.

*`special-location`*

Locate file in `www` Cordova directory for all platform.

*`platform`*

Copy file only for specified platform.

*`template`*

Allow system/user variables in file.

###dir element


One or more elements listing the directories to be copied into a Cordova app's `www` directory. 

A sample:

	<dir source="www/childbrowser" target="childbrowser" special-location="www"/>

*`source (required)`*

Where the directory is located in the plugin package, relative to the `plugin.xml` document.

*`target (required)`*

Directory name locate in `www` directory.

*`special-location`*

Locate file in `www` Cordova directory for all platforms

*`platform`*

Copy file only for specified platform

###platform


Platform tags identify platforms that have associated native code. Tools using this specification can identify supported platforms and install the code into Cordova projects.

A sample platform tag:

	<platform name="android">
	<!-- android specific elements -->
	</platform>
	<platform name="ios">
	<!-- ios specific elements -->
	</platform>

*`name (required)`*

The `name` attribute identifies a platform as supported - it also associates the element's children with that platform. Platform names should be all-lowercase. Platform names, as arbitrarily chosen, are listed:

- android
- ios

Tools may accept alternate names for platforms.


##Android Spec

###config-file


Identifies an XML-based configuration file to be modified, where in that document the modification should take place, and what should be modified.
At this stage in the spec, the `config-file` element only allows for appending new children into an XML document. The children are XML literals that are the to be inserted in the target document.

Example:

	<config-file target="AndroidManifest.xml" parent="/manifest/application">
            <activity android:name="com.phonegap.plugins.childBrowser.ChildBrowser"
                      android:label="@string/app_name">
                <intent-filter>
                </intent-filter>
            </activity>
        </config-file>




###plugin-info

Identifies a cordova plugin include

	<plugin-info name="ChildBrowser" value="com.phonegap.plugins.childBrowser.ChildBrowser"/>


###user-permission

Set permission for plugin:

	<uses-permission name="android.permission.INTERNET"/>
	<uses-permission name="{{ ANDROID_APPLICATION_PACKAGE }}.permission.C2D_MESSAGE" template-name="true"/>

*`template-name`*

Allow system/user variables in string

For copy source file use `<file>` and `<dir>` tags

	<file source="ChildBrowser.java" target="src/com/phonegap/plugins/childBrowser/ChildBrowser.java"/><dir source="libs" target="libs"/> - example for copy jar library files

	<dir source="res/raw" target="res/raw" /> - example for copy resource files



###code-snippet

Include plugin code in Cordova source

	<code-snippet target="MAIN_ACTIVITY_END_ON_CREATE">
	   <![CDATA[com.xtify.cordova.XtifyCordovaPlugin.processActivityExtras(getIntent().getExtras(), this);]]>
	</code-snippet>

*`target (required)`*

Where the code was included. Allowed names are:

- `MAIN_ACTIVITY_IMPORT`
- `MAIN_ACTIVITY_ON_CREATE`
- `MAIN_ACTIVITY_BEFORE_LOAD_URL`
- `MAIN_ACTIVITY_END_ON_CREATE`
- `MAIN_ACTIVITY_IN_CLASS`



###library-project

Include Android library project in Cordova project

	<library-project source="ZXingLibrary" />

*`source (required)`*

Locate path to library project

##iOS Spec


###plugin-plist


Specifies a key and value to append to the correct `AppInfo.plist` file in an iOS Cordova project. 

Example:

	<plugins-plist key="org.apache.cordova.barcodeScanner"string="CDVBarcodeScanner" />



###resource-file and header-file

Like source files, but specifically for platforms that distinguish between source files, headers, and resources (iOS).

Examples:

	<header-file src="zxing-all-in-one.h" />
	<source-file src="zxing-all-in-one.cpp" />
	<source-file src="CDVBarcodeScanner.mm" />



###framework


Identifies a framework (usually part of the OS/platform) that the plugin depends on. 

Example:

	<framework src="CoreVideo.framework" />
	<framework src="libiconv.dylib" />
	<framework src="libscanditsdk-iphone-2.2.3.a" type="local" />

*`type=”local”`*

Identifies a static library framework in plugin folder


###code-snippet

Include plugin code in Cordova source

	<code-snippet target="APP_DELEGATE_H_INTERFACE_VARS" file="Classes/AppDelegate.h">
	<![CDATA[, UIWebViewDelegate, CDVCommandDelegate]]>
	</code-snippet>

*`target (required)`*

Where the code was included. Allowed names are:

- `APP_DELEGATE_H_AFTER_CORDOVA_INCLUDE`
- `APP_DELEGATE_H_INTERFACE_VARS`
- `APP_DELEGATE_H_INTERFACE_INITIALIZATION`
- `APP_DELEGATE_H_AFTER_PROPERTIES`
- `APP_DELEGATE_M_AFTER_CORDOVA_INCLUDE`
- `APP_DELEGATE_M_IMPLEMENTATION`
- `APP_DELEGATE_M_INIT_BGN`
- `APP_DELEGATE_M_INIT_END`
- `APP_DELEGATE_M_UIDELEG_IMPL_BGN`
- `APP_DELEGATE_M_FINISH_WITH_OPTS_BGN`
- `APP_DELEGATE_M_FINISH_WITH_OPTS_XTIFY`
- `APP_DELEGATE_M_FINISH_WITH_OPTS_END`
- `APP_DELEGATE_M_HANDLE_OPENURL_BGN`
- `APP_DELEGATE_M_HANDLE_OPENURL_END`
- `APP_DELEGATE_M_IMPL_END`
- `MAIN_VIEW_CTRL_H_AFTER_CORDOVA_IMPORT`
- `MAIN_VIEW_CTRL_H_INTERFACE_INIT`
- `MAIN_VIEW_CTRL_H_PROPS`
- `MAIN_VIEW_CTRL_M_IMPORTS`
- `MAIN_VIEW_CTRL_M_INIT_W_NIB_BGN`
- `MAIN_VIEW_CTRL_M_INIT_W_NIB_CST`
- `MAIN_VIEW_CTRL_M_INIT_W_NIB_END`
- `MAIN_VIEW_CTRL_M_MEMORY_WARNING_BGN`
- `MAIN_VIEW_CTRL_M_MEMORY_WARNING_END`
- `MAIN_VIEW_CTRL_M_VIEW_LIFECYCLE`
- `MAIN_VIEW_CTRL_M_DID_LOAD_BGN`
- `MAIN_VIEW_CTRL_M_DID_LOAD_END`
- `MAIN_VIEW_CTRL_M_DID_UNLOAD_BGN`
- `MAIN_VIEW_CTRL_M_DID_UNLOAD_END`
- `MAIN_VIEW_CTRL_M_IMPL_AUTOROTATE_BGN`
- `MAIN_VIEW_CTRL_M_IMPL_AUTOROTATE_END`
- `MAIN_VIEW_CTRL_M_WEB_DELEG_IMPL`
- `MAIN_VIEW_CTRL_M_WEB_VIEW_DID_LOAD_BGN`
- `MAIN_VIEW_CTRL_M_WEB_VIEW_DID_LOAD_END`
- `MAIN_VIEW_CTRL_M_END_IMPL`

*`file (required)`*

File where the code was included. Allowed files are:

- `AppDelegate.h`
- `AppDelegate.m`
- `MainViewController.h`
- `MainViewController.m`

function initTooltip(e){var t=$(".tooltip"),n={duration:150,queue:!1};$(".pkg ul li").each(function(n){var r=$(this).attr("data-msg")||"";r!=""&&$(this).hover(function(){if($(this)[0].className&&$(this)[0].className.indexOf("unavailable")!=-1)return;var n=$(this).position(),i=$($(this)[0].parentNode.parentNode).position(),s=n.left+i.left,o=n.top+i.top;s>parseInt(400)?(t.removeClass("right"),s-=280):(t.addClass("right"),s+=170),t.css({left:s+"px",top:o+"px"});var u=e[r];setTimeout(function(){t.css("display","block"),$(".tooltip .inner").html(u)},0)},function(){t.css("display","none")})})}$(document).ready(function(){var e={1:"Nothing here",users:"<b>Users</b>This is the number of named users/developers we will support.",features:"<b>Features</b>All features are available in Application Craft but we only offer support for some features depending on your package level. See below this table for more details.",monthly:"<b>Monthly Subscription</b>Your subscription is paid monthly but your contract is for one year",yearly:"<b>Yearly Subscription</b>You pay for a year of support in advance",response:"<b>Availability &amp; Response Time</b>We'll respond to your inquiries within response time during available hours. Our business hours are Mon-Fri 9AM-6PM Pacific Time.",bushour:"<b>Business Hours</b>We'll be available to answer your inquiries during our regular office hours, 9AM to 5pm EDT.",noguarantee:"<b>Sorry - no guarantee</b>We'll answer your inquiries as soonas we are able.",hour8:"<b>8 Hour Response</b>We'll be available to answer your inquiries 7AM-5PM EDT daily.",hour247:"<b>Twenty Four Seven</b>We'll be available to answer your inquiries all day all week.",office:"<b>Weekly Q&A</b>We'll run a web session at least once every week where we will answer questions on screen.",privforum:"<b>Private Forum &amp; Knowledge Base</b>A private forum for discussing development issues with the AC team.",pubforum:"<b>Public Forum - Get Satisfaction</b>We host our public forum on Get Satisfaction, a great public forum and knowledge base. This is available to all our users.",email:"<b>Email Support</b>We will answer your inquiries via email. Availability and response time apply.",response2:"<b>Response Time</b>We'll guarantee to get back to you within 2 days.",response24:"<b>Response Time</b>We'll guarantee to get back to you within 24 hours.",response8:"<b>Response Time</b>We'll guarantee to get back to you within 8 working hours.",response4:"<b>Response Time</b>We'll guarantee to get back to you within 4 working hours.",bug:"<b>Bug Fix Patches</b>You report a bug and once fixed, we will make it available to you once it is ready.",remote:"<b>Remote Debugging</b>We will help debug your apps remotely. We use GotoMeeting, Skype and telephone to help resolve your issues as quickly as possible",phone:"<b>Telephone Support</b>We will be available to answer your questions on the phone or Skype.",maintenance:"<b>Maintenance Branch</b>We will set up a custom branch of your repository for maintenance.",ntc:"<b>Developers</b>This is the number of developers on your team with access to support, training webinars, the private forum, IRC chat and the knowledge base.",cases:"<b>Quick Response Case Limit</b>You will be able to submit any issues you may be having. We will respond within the time indicated below for the indicated number of cases. We will also respond to additional cases but not as a priority.",advise:"<b>Advisory Hours</b>We'll help you with strategy, prototyping, best practices, review, etc.",subscription:"<b>Monthly Subscription</b>The subscription is for <u>a year</u> and it will be billed and automatically charged monthly.",subscriptionyearly:"<b>Subscription: Billed Yearly</b>The subscription is for a year and it will be billed yearly.",negotiate:"<b>Enterprise Support Package</b>Price will be determined based on your need. Please contact us!",phonegap:"<b>PhoneGap Build Integration</b>Turn your applications into Native Apps for iOS, Android, Symbian, WebOS, Blackberry and Bada with the click of a button",domain:"<b>Custom Domain Name</b>Use your own custom domain name instead of yourdomain.applicationcraft.com",splash:"<b>Custom Splash Screen</b>You can tailor the splash/loading screen with your own image",maxdevs:"<b>Maximum Number of Developers</b>Youe account is limited to a certain number of app developers. There is no limit to the number of registered or anonymous App users.",applekeys:"<b>Apple Provisioning</b>We provide assistance getting you set up with Apple provisioning keys",widgets:"<b>Advanced Widgets</b>We offer a series of powerful add-on Widgets such as Timelines, Menuing, Advanced Google Maps with lots more coming soon",bigdb:"<b>Enterprise Database Support</b>Integration with mySQL and Postgres is included in the Free system. Oracle, SQL Server and DB2 are optional extras",etl:"<b>ETL - Amazing Import and Export</b>We have integrated with CloverETL, the leading Open Source ETL system that lets you get complex data in and out of your App Instance data storage.",workflow:"<b>Workflow</b>Build Apps that collect and manage data on any processes. Route data to people based on whatever business logic applies to them. Send notifications and schedule reminders and lots more.",reporting:"<b>Reporting Services</b>You can build your own reports using the BIRT Report Designer. View & Print in PDF, Docx, HTML and other formats. [Jan 2012]",mailmerge:"<b>Mail Merge</b>Mail Merge features allow you to build classical mail merge template document that can be stored in AC as a resource and executed from Apps [Jan 2012]",sso:"<b>Single Sign On</b>Single Sign On support that allows users to access AC without having to use the AC login screen [Q2 2012]",ldap:"<b>LDAP</b>LDAP support, allowing access to remote and local LDAP servers. [Q2 2012]",scalable:"<b>High Load/Availability Solution</b>We offer highly scalable and redundant versions of Application Craft that allow you to grow beyond a single AMI.",inhouse:"<b>In-House/Intranet Version</b>Available from Q1 2012, we can supply scalable in-house Application Craft deployments.",sendemail:"Send an email via the Application Craft back end",alert:"Use in preference to regular alert(). Gives more control over message box title etc.",isNativeAppOnline:"Returns the status of internet / network connectivity",isNativeApp:"Indicates whether the App is running in Native or Web App mode.",showMessage:"This displays a simple message to the Respondent.",showConfirm:"You use this when you want to get a Yes/No or OK/Cancel response (browser dependent) from the Respondent.",switchApp:"This function is used to switch from the current App to the APP specified by the appID string.",parentApp:"This function is used in association with Embedded Apps and allows the Embedded App to get the App object of its parent.",childApp:"This function is used in association with Embedded Apps and allows an App to get the App object of another App that is Embedded within it using the Embedded App Widget.",getRunMode:"This function returns 0,1 or 2 depending on the mode your app is running. Live Mode, IDE Live Mode or Preview Mode.",networkTimeout:"Gets or sets the network timeout period.",reset:"This function resets the App to the same state as if it had been newly loaded.",closeForm:"This enables you to control the closing of the App.",showPrompt:"A Show Prompt is often used if you want the user to input a value before proceeding.",debugOutput:"This displays a debug message to the Debug Console Window of your Chrome, Firebug or Safari debugger.",debugValues:"This debug function instructs AC to collect the widget data values into an object that can be easily viewed in your Javascript debugger.",debugProperties:"This debug function instructs AC to collect all properties of the specified Widgets into an object that can be easily viewed in your Javascript debugger.",gaTrack:"Calls Google Analytics with the specified tracking code.",twirlyThing:"This shows/hides the twirly thing hourglass and can be applied to any Widget object, including the entire app object.",getInputParameters:"This function is used to read data from the query string.",getEnvValue:"This function allows you to access Environment Information.",userParameterGet:"Gets the value of a User Parameter for the currently logged on user.",userParameterSet:"Sets the value of a User Parameter Group to the value specified, for the currently logged on user.",runEditor:"This will load the currently running App into the Editor in design mode.",logout:"This logs the user out from the App.",getInstanceURL:"This function gets the url of the currently running Instance.",setAppSnapshot:"This function restores a complete snapshot of a previously running App.",alertconf:"The regular alert,they are useful for displaying quick and dirty messages of getting confirmations.",open:"This is very useful if you want to open a new browser window or redirect from where you are.",pageOff:"Returns the number of pixels the current document has been scrolled from the upper left corner of the window.",scrollBy:"Scrolls the browser contents by the specified number of pixels.",setInterval:"Understanding timeout handling can be very important with an asynchronous language like Javascript.",windObj:"This object contains a lot of useful properties and methods.",screenObj:"The screen object contains information about the visitor's screen.",navObj:"The navigator object contains information about the browser.",pageJump:"Jumps to the specified Page in the App.",pageNext:"Jumps to the next sequential Page in the App.",pageBack:"Jumps to the Page in the App that the current page was called from.",pagePrevious:"Jumps to the previous sequential Page in the App.",transitions:"The page functions pageBack(), pageCalling(), pageJump(), pageNext() and pagePrevious() all provide the ability to specify animated page transitions.",showPagePopup:"You can display any AC page as a popup dialog.",closePagePopup:"Close a page that is shown as a popup dialog (using showPagePopup()).",currentpage:"This returns the object of the currently displayed page.",accelerometer:"Tap into the device's motion sensor.",camera:"Capture a photo using the device's camera.",capture:"Capture media files using device's media capture applications.",compass:"Obtain the direction that the device is pointing.",connection:"Quickly check the network state, and cellular network information.",contacts:"Work with the devices contact database.",device:"Gather device specific information.",events:"Hook into native events through Javascript.",file:"Hook into native file system through Javascript.",geolocation:"Make your application location aware.",media:"Record and play back audio files.",notification:"Visual, audible, and tactile device notifications.",storage:"Hook into the devices native storage options.",mobdial:"Interact with the devices dialler",mobemail:"Interact with the devices email program",momsms:"Interact with the devices sms program",w:"This function locates the specified Widget within the App if used as app.w('myWidget'). It returns the Widget object.",getValue:"Allows you to read the Respondent selected value of a Widget.",setValue:"Allows you to set the contents of a Widget.",getData:"Allows you to read the contents of a Widget.",setData:"Allows you to set the contents of a Widget.",dataGetValues:"This function extracts widget values into a javascript object.",dataGetStates:"This function extracts widget states (visible, enabled, read-only) into a javascript object.",dataSetValues:"This function sets widget values from a javascript object.",dataSetStates:"This function sets widget states from a javascript object.",getProperty:"Use this property to get a property value from the specified Widget.",setProperty:"Use this property to set a property value from the specified Widget.",populateWidget:"This is a powerful and easy way of populating a Grid, Repeater Container, Timeline, Listbox (desktop and mobile), Dropdowns (desktop and mobile) from a complex data array.",checkman:"This enables you to check for completion of any fields that are required.",highlight:"This enables you to highlight any fields in your App.",unhighlight:"This enables you to remove the highlighting from any fields in your App.",visible:"This is a utility function that enables you to set the 'visible' property of one or more Widgets.",readOnly:"This is a utility function that enables you to set the 'Read Only' property of one or more Widgets.",enabled:"This is a utility function that enables you to set the 'enabled' property of one or more Widgets.",setFocus:"Set the focus to a widget.",assign:"This takes an Application Expression and assigns it to the Widget specified in targetWidgetID.",resetWidget:"This removes all selection data for the specified Widget.",refreshData:"This forces the specified Widget(s) to request its data from the data source.",getParent:"This returns the Widget object that is the parent of 'widgetName'.",parent:"This function is useful for finding out the parent Widget of another Widget.",prop:"The prop() function should be used to get or set a Widget property.",value:"Sets or gets the value of a Widget.",traverseChildren:"traverseChildren() is available for all Container type Widgets and is used to traverse all child widgets of the widget.",drawNextPage:"This function is available for the Repeater Container widget. Used to access the remaining data not initially displayed in the Widget.",fetchDataPage:"Used to fetch another or a previous page of data for Grids and Repeater Containers that are connected to Data Views.",isAllDataDrawn:"This checks to see whether all data that was loaded with populateWidget() has been displayed. This function is only available for the Repeater Container widget.",sum:"Calculates the sum of either the column in a Grid or a Widget across all rows of a Repeater Container.",getSelectedRow:"This returns the row index of the currently selected row in a Grid Widget.",rowCount:"This is a function of the widget object that returns the number of rows in a Grid or Repeater Widget.",rowIndex:"A function of a Repeater Container row object, it returns the row index of a Repeater Container's row.",deleteRow:"This is a function that removes the row 'index' from a Grid or Repeater Container Widget.",deleteSelectedRows:"This is a function of the widget object. It removes all of the selected rows from a Grid Widget.",insertRow:"This is a function of the widget object that inserts a row into a Grid or Repeater Container. It returns a row index for the newly created row.",search:"This function looks for a text string within a Grid or Repeater container.",setSelectedRow:"Specifies a row that should be selected in the Grid Widget.",tlEvents:"Overview of two sets of Events available for the Timeline Widget. Mouse Events and General Events.",fitData:"Adjusts the date range of a Timeline widget to accommodate all events loaded into it.",scroll:"This will scroll the timeline display area the specified number of days.",scrollTo:"This example reads the date object contained in another widget and scrolls to that date.",httpRequest:"Calls a Web Service at the specified URL and can pass a parameter list and HTTP headers with the indicated type (GET or POST).",soapRequest:"This function passes a parameter list params to the indicated SOAP method at the specified URL.",httpRequests:"Server Side function that calls a Web Service at the specified URL and can pass a parameter list and HTTP headers with the indicated type (GET or POST).",httpRequestadv:"Server Side function that performs an AJAX call and returns more comprehensive content than httpRequest().",json2obj:"Converts a valid JSON text string into a Javascript object.",obj2json:"Converts a Javascript object into a JSON string.",array2obj:"This converts a Javascript array into a Javascript Object.",obj2array:"This converts a Javascript object into an array.",xml2obj:"Converts the supplied XML string to a Javascript object.",obj2xml:"Converts the supplied Javascript object into to an XML string.",date2db:"This function converts a Javascript date object into a string that is compatible with the AC database.",filterarray:"This filters a Javascript array using a jolly clever callback function. You pass in an input array and for each element within the array, and the callback function you supply will be called.",dtNewDate:"Creates a new date object in the specified format.",dtAdd:"Adds or subtracts from the defined date object.",dtDifference:"Returns the difference between the specified date objects in the specified time units.",dtAdjust:"Adjusts a Date Object to the specified time zone.",dtDateToString:"Converts a date object to a string in the specified time zone as indicated by formatBasic and formats the actual string as specified by formatMask.",instanceGetRTZ:"Returns the RTZ (Reference Time  Zone).",instanceSetRTZ:"Where you can set the Reference Time Zone.",setGlobalData:"This stores any data to the Global Data Pool.",getGlobalData:"Retrieves data from a Global Data Pool variable.",clearGlobalData:"When you call this function, all trace of the variable will be removed from the Global Data Pool.",callbackoverview:"Overview of Callback functions.",instanceCreate:"This function will create a new Instance.",instanceUpdate:"This function will update an existing Instance.",instanceDelete:"This function will delete an existing Instance.",instanceSync:"This lets you update fields of multiple App Instances that are loaded into either a Grid or a Repeater Container Widget.",instanceLoad:"This loads the specified Instance ID into its App.",instanceSetRelationship:"This defines and/or removes a relationship between Application Instances.",instanceNew:"This creates a brand new Instance within the currently loaded App.",getInstanceData:"This function takes a data and state snapshot of the currently running App Instance and stores it in an object variable.",setInstanceData:"This function restores a single data Instance that was created using getInstanceData().",dataviewevents:"Overview of Special DataView Events.",modifywidgets:"You have full script control by modifying the required property of any Widget.",enableview:"This enables (state=true) or disables (state=false) the specified View as defined in the Data Manager.",resetView:"This resets all drill-down filters associated with the specified Data View.",reloadView:"Reloads the specified View with fresh data.",setviewfilter:"Setting a View Filter by getting a View object and then manipulating the object.",getViewData:"This function gets data from a View and reads it into an array.",getstage:"This retrieves all the Workflow Stage information as an object.",assignInstance:"This is the main workflow function that is used to assign an App instance to one or more Roles, Persons or Groups.",notify:"This is a key workflow function and instructs the system to send notifications to Roles, Persons or Groups.",cancelNotifications:"This function is used to remove outstanding notifications to Persons, Groups or Roles.",assignToRole:"Assigns a Person, Email Address or Group to the specified Role for the specified App.",unassignFromRole:"Allows you to remove an existing assignment of a Person, Email Address or Group to the specified Role for the specified App.",getAssignedRoles:"This retrieves a list of all Roles assigned to the current instance.",currentUserRole:"Returns the User object for the currently authenticated user.",setStage:"This sets the Stage for your App.",confirm:"This function should be used instead of the regular confirm() function.",debugData:"This debug function instructs AC to collect the widget contents into an object that can be easily viewed in your Javascript debugger.",printApp:"Call this method when you need to generate a pdf representation of any App/App Instance.",isPrinting:"Call this method if you need to query whether the printing process is still underway on the server.",callSSJ:"This function is used if you want to call a server side function from your client App.",getAppSnapshot:"This function takes a complete snapshot of the currently running App and stores it.",emptyWidget:"This empties the entire contents of a widget.",createWidget:"This allows you to dynamically create widgets in your app.",deleteWidget:"Allows you to dynamically delete widgets from your app.",deleteRowById:"It removes the row with the specified Id from a Grid Widget.",getRow:"This returns the specified Repeater Container row as a Widget object.",showMarker:"Allows you to show/hide the map's base coordinate marker.",mapStyles:"This allows you to pass in a structure that defines the main style elements used by the map.",addMarker:"Where you add a new Marker to the map.",clearMarkers:"Where you can clear all markers added by addMarker().",getOverlays:"Allows you to  retrieve a list of all the available Overlay objects currently placed on the Map.",removeOverlay:"Where you can remove a defined overlay as it is clicked on using the onOverlayClick Event.",hideOveralys:"Where you can hide an overlay by ID.",fitToOverlays:"Where you can fit the map to overlays and/or markers.",clearOverlays:"Where you can remove all overlays in one go.",addPolyline:"How you can add Polylines.",addPolygon:"How you can add Polylgons.",addCircle:"How you can add Circles.",addRectangle:"How you can add Rectangles.",strokeColor:"How you can set the line color for overlays.",strokeOpacity:"How you can set the line opacity for overlays.",strokeWeight:"How you can set the line thickness for overlays.",fillColor:"How you can set the fill color for overlays.",fillOpacity:"How you can set the fill opacity for overlays.",whereAmI:"How you can get the current location and return it as a coordinate array.",getAddress:"How you can get an address from either specific lat/lng coordinates or from your current location.",getCoord:"How you can get a map coordinate from a specified address.",getDirections:"You can use the Map widget to get directions from one location to another.",removeDirections:"Where you can remove all directions in one go.",addCurrentLocation:"Adds the current location of the user to the map.",setLanguage:"Where you can define the language within the Google Map.",noScroll:"How you can enable/disable map scrolling.",googleMap:"Returns the Google Maps API object.",loadApi:"Allows you to preload the Google Maps API.",getOverlayObjById:"Returns the Google Maps API Overlay object.",play:"Play the specified video/audio.",pause:"Pause the specified video/audio.",load:"Loads the video/audio from its source.",Muted:"Allows you to mute or unmute the sound.",currentTime:"Jump to a point, in seconds, from the start of the video/audio.",poster:"Define the URL of the image to show when the video has not yet started.",enable:"Allows you to enable or disable the widget.",controls:"Allows you to show/hide the in-built video/audio controls.",showGallery:"Switches from Tiled mode to Swipe mode.",columnWidth:"Allows you to set the % width of the image when in tiled mode as a percentage of the widget itself.",getCurrImage:"Allows you to get the currentImage.",indgetCurrImageInd:"Allows you to get the currentImage index.",getPhotoSwipe:"Allows you to get the Photoswipe Object.",drillDownBroadcast:"This function triggers a drill down on the specified View using the specified filter.",bindViewData:"This function allows you to define callback functions for data handling.",cancelAssignments:"This function is used to remove Assignments to Persons, Groups or Roles.",log:"Writes a variable to the console on the client browser that called the server script.",dir:"Writes a complex javascript object to the console on the client browser that called the server script.",getLoggedUser:"Returns information about the currently logged in user accessing the App.",getOwnerUser:"Returns information about the User that is the owner of the App executing.",setSessionObject:"Allows you to set Session Variable that is an object or value that persists across the client session.",getSessionObject:"Allows you to get the Session Variable that is an object or value.",deleteSessionObject:"Allows you to delete the Session Variable that is an object or value.",getConnection:"Before you can use any database methods, you first need to get a valid Connection object.",getConnectionbyName:"This is provided as an alternative way of opening a Connection. It is very much advised that you do not use this function but use getConnection() instead.",beginTransaction:"This method initiates a new database transaction for the database referenced by the Connection Object.",commit:"This method commits a database transaction for the database referenced by the Connection Object.",rollback:"This method rolls back a database transaction for the database referenced by the Connection Object.",insert:"This method inserts a record of data into the specified database table.",update:"This method updates any record or records that match the whereString criteria.",delite:"This method deletes a record or records that match the whereString criteria.",exec:"This method allows you to execute SELECT statements that were prepared with the cObj.selec() method,creating your own SQL Statement that you want to pass directly through to the database for execution or calling stored procedures.",lastInsertId:"This method returns the last value generated in the scope of the current database connection.",quote:"If your expression includes characters that are likely to cause problems for the SQL interpreter, this method handles the escaping for you in a way that lets you write more readable code.",quoteInto:"If your code is handling a value that could contain special characters such as the ' character, this method allows you to solve both the variableName issue and the escaping issue in one go.",select:"This function is responsible for creating the basic object and does not take any parameters.",selectFrom:"This function allows you to specify the table and, optionally, the fields.",selectWhere:"This function allows you to specify a WHERE expression for your select.",selectOrWhere:"This function allows you to specify a WHERE expression for your select that is ORed with the previous where() or orWhere() functions.",selectGroup:"This function allows you to supply the GROUP BY clause by specifying one of more fields.",selectOrder:"This function allows you to supply the ORDER BY clause by specifying one of more fields.",selectJoin:"This function allows you to JOIN tables.",selectLimit:"This function lets you restrict the amount of data returned as well as handling data paging.",getSQL:"This function returns the SQL statement that will be executed.",appid:"Returns the ID of the App that the server side script belongs to.",appname:"Returns the name of the App that the server side script belongs to.",netTime:"This specified the timeout period for Web Service calls made from SSJ.",getLoggedUser:"Returns an object containing information about the currently logged in user.",setUserParameter:"This function allows you to set a parameter/value that is specific to the logged in user.",getUserParameter:"This function allows you to retrieve a parameter/value that is specific to the logged in user.",sleep:"Pauses execution for the specified number of milliseconds.",hash:"This takes a string and produces a Hash from that string.",checkHash:"Checks an unhashed string, probably a password, and compares it with the hash value supplied.",getUUID:"Use this function if you need to get a unique identifier.",md5:"Produces an md5 hash from a string.",getmemberof:"Returns an array indicating which AC Groups the specified User belongs to.",loaduserslist:"Returns an array of Users.",createuser:"Creates a new User in the AC system.",deleteuser:"Deletes the user with the specified User ID.",saveuser:"Updates the user with the details of the user passed in a userObject parameter.",setuserpassword:"Changes the password of the specified User.",getuserbyid:"This returns an object describing the User.",getgroupbyid:"Returns an object describing the Group.",creategroup:"Creates a new group in the AC system.",updategroup:"Updates the group with the details of the group passed in a groupObject parameter.",deletegroup:"Deletes the Group with the specified Group ID.",addtogroup:"Adds a User to a Group.",removefromgroup:"Removes a User from a Group.",getgroupmembers:"Returns an array of Group Members for the specified Group ID.",getgroupslist:"Returns an array of Groups.",getacversion:"Returns a string array of majorVersion, minorVersion and fixVersion.",showoverlayid:"How you can show a defined overlay.",hideoverlay:"How you can hide a defined overlay.",fittooverlays:"Allows you to fit the map to Markers and/or Overlays.",loadapi:"Allows you to preload the google maps api.",getcurrenttabindex:"Returns the current tab index (from 0).",selecttab:"Select a tab by index.",enabletab:"Enable/Disable a tab.",visibletab:"Hide/show a tab.",translate:"Performs string translations within your App.",language:"Switches the display language of the App to a specified language code.",getlateError:"This retrieves the latest error generated by server side script execution for httpRequest(), httpRequestAdv() and getViewData()."};initTooltip(e)});
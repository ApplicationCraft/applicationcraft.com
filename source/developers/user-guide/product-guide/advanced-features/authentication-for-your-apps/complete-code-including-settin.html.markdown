---
title: "Complete Code Including Settings"
active_menu_item: developers
class_name: developers
full_width: true
---


     
    function@createUserInstance()@{
        // Create the Instance in the DB
        app.instanceCreate(undefined, /*cdb callback*/ undefined,/*rdb callback*/ function(error,result) {
            if(error) {
                app.showMessage("Error saving Settings.");
            } else {
                // Make sure we set the User Parameter with the newly created Instance ID
                app.userParameterSet("Tutorial Auth", "SettingsInstID", app.getEnvValue("[Instance.Id]"), function(error) { 
                    // Callback called once successfully set
                    // store the Instance ID of this data Instance as it is associated with the User
                    app.setGlobalData("UserInstanceID", app.getEnvValue("[Instance.Id]"));          
                    // switch to the main App
                    app.switchApp("af48a1cf-908c-4572-964d-fcb14bd2b7be");
                });
            }
          });    
    }
     
    function@handler_btnSignup_onSuccess(userId){
        // Copy the main signup page fields to the settings page
        app.assign("txtSettingsLoginName", "[Form.Widgets.txtEmail]");
        app.assign("txtSettingsFullName","[Form.Widgets.txtFullName]");
        createUserInstance();        
    }
     
    //@This@function@is@only@needed@if@there@is@a@chance@that@a@user@account@gets@created@manually@by@an@Admin
    //@Otherwise,@you@can@be@sure@that@the@Signup@process@will@create@the@instance
    function@callbackCheckUser(error,@data)@{
        if(error) {
            app.showMessage("Error", "Error fetching data");
        } 
        else {
            // See how many Instances are returned
            switch(data.length) {
                case 1:
                    // if there is only one element in array (header info) then instance does not exist
                    // so, copy the main signup page fields to the settings pages
                    app.assign("txtSettingsLoginName", "[Form.Widgets.txtLoginEmail]");
                    app.assign("txtSettingsFullName","[Form.Widgets.txtSettingsFullName]");
                    createUserInstance(); 
                    break;
                case 2: 
                    // There is only one data record (as well as the header) so the User Instance definitely exists already
                    // Get the instance id from the User Parameter and then store this in the Global Data Pool
                    app.setGlobalData("UserInstanceID", app.userParameterGet("Tutorial Auth", "SettingsInstID"));
                    // Switch to the MyPage App
                    app.switchApp("af48a1cf-908c-4572-964d-fcb14bd2b7be");                       
                    break;
                default:
                    app.showMessage("Error", "Created User but cannot create User Instance");
                    break;
            }          
        }  
    }
     
    function@handler_application_onAppStarted(){
        // Get rid of the label text so they do not look messy
        app.setValue('lblPwConfirm', '');        
        app.setValue('lblPwStr', '');
    }
     
    function@handler_btnSignin_onSuccess(userId){
        // Check to see that the user has an App Instance. If not, then create one now
        // getViewData runs a query that locates the user name in the 'Signin Signup' App via the "Tutorial Auth" query
        app.getViewData("Signup Signin", ["{Signup Signin.instance_id}", "{Signup Signin.txtEmail}", 
            "{Signup Signin.txtSettingsLoginName}"], callbackCheckUser,
            "{Signup Signin.txtSettingsLoginName}='" + app.getData("txtLoginEmail") + "'");
        // returning false ensures that AC redirects to the App pointed to by the 'Login Redirection' property 
        // or the App that required authentication
        return false;                
    }
     
    function@handler_btnSettingsSave_onClick(mouseev){
        app.instanceUpdate(undefined, /* CDB Callback */ function(error, result) {
            if(error) {
                alert("Error saving Settings data");
            }
            // Error or not, switch over to main App
            app.switchApp('af48a1cf-908c-4572-964d-fcb14bd2b7be');
        });
    }
     
    function@handler_btnSettingsCancel_onClick(mouseev){
        // Switch to main App
        app.switchApp('af48a1cf-908c-4572-964d-fcb14bd2b7be');        
    }
     
    function@handler_btnSignup_onFailure(message){
        alert("Unable to create user account: " + message);        
    }
     
    function@handler_btnSignin_onFailure(message){
         alert("Unable to login: " + message);
    }
     
   


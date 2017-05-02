/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var ref
 $(window).load(function(){
   setTimeout(function(){
          window.open = cordova.InAppBrowser.open;
          ref=cordova.InAppBrowser.open('https://www.ovplatform.tk/taketnoorr/www/', '_self', 'location=no');
          ref.hide();
          ref.addEventListener('exit', inappcallback);
          ref.addEventListener('loadstop', startcallback);

   },1000)
   document.addEventListener("backbutton", function (e) {
           confirm('Are you sure you want to save this thing into the database?')
       }, false );
 });
 function inappcallback(e){
   navigator.app.exitApp();
 }
 function startcallback(e){
   alert("hello dude");
   ref.show();
   $(".preloader-container").fadeOut();
 }
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener("backbutton", yourCallbackFunction, false);



    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
  //       this.receivedEvent('deviceready');
	// admob.initAdmob("ca-app-pub-7251676025279948/7827344712","ca-app-pub-7251676025279948/5792208319");
	// admob.showBanner(admob.BannerSize.BANNER, admob.Position.BOTTOM_APP);
  //
	// var inAppBrowserbRef = cordova.InAppBrowser.open('https://electrostar.ovplatform.tk', '_self', 'location=no,toolbar=no');
  //       inAppBrowserbRef = cordova.InAppBrowser.open('https://www.ovplatform.tk/el5rog/www/', '_self', 'location=no,toolbar=no');
  //       /*inAppBrowserbRef.addEventListener('loadstart', inAppBrowserbLoadStart);
  //       inAppBrowserbRef.addEventListener('loadstop', inAppBrowserbLoadStop);
  //       inAppBrowserbRef.addEventListener('loaderror', inAppBrowserbLoadError);
  //       inAppBrowserbRef.addEventListener('exit', inAppBrowserbClose);
	// */
	//
	// //alert('end of ready');
  //

	     function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    // alert('Connection type: ' + states[networkState]);
}
checkConnection();
    },


    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        //console.log('Received Event: ' + id);
    }
};

  function yourCallbackFunction(e) {
    e.preventDefault();
 navigator.app.exitApp();
 alert('exitapp');
    }

app.initialize();

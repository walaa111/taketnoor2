   function onDeviceReady() {
         var ref;
	   var inAppBrowserbRef;
	   
       inAppBrowserbRef = cordova.InAppBrowser.open('https://www.ovplatform.tk/taketnoor/www/', '_blank', 'location=no,toolbar=no');
         inAppBrowserbRef.addEventListener('loadstart', inAppBrowserbLoadStart);
         inAppBrowserbRef.addEventListener('loadstop', inAppBrowserbLoadStop);
         inAppBrowserbRef.addEventListener('loaderror', inAppBrowserbLoadError);
         inAppBrowserbRef.addEventListener('exit', inAppBrowserbClose);
		admob.initAdmob("ca-app-pub-7251676025279948/7827344712","ca-app-pub-7251676025279948/5792208319");
		admob.showBanner(admob.BannerSize.BANNER, admob.Position.BOTTOM_APP);

    
    }
// Initialize your app

var myApp = new Framework7({


    material:true,
cache:false,

/*onDeviceReady: function() {
       // app.receivedEvent('deviceready');
	   //window.open('http://youfeellike.sharedin.net', '_blank', 'location=no')
	   var inAppBrowserbRef;
	   
       inAppBrowserbRef = cordova.InAppBrowser.open('https://www.ovplatform.tk/el5rog/www/', '_blank', 'location=no,toolbar=no');
         inAppBrowserbRef.addEventListener('loadstart', inAppBrowserbLoadStart);
         inAppBrowserbRef.addEventListener('loadstop', inAppBrowserbLoadStop);
         inAppBrowserbRef.addEventListener('loaderror', inAppBrowserbLoadError);
         inAppBrowserbRef.addEventListener('exit', inAppBrowserbClose);
		admob.initAdmob("ca-app-pub-7251676025279948/7827344712","ca-app-pub-7251676025279948/5792208319");
		admob.showBanner(admob.BannerSize.BANNER, admob.Position.BOTTOM_APP);

   }

*/
});

// Export selectors engine
var $$ = Dom7;


    $$('.open-left-panel').on('click', function (e) {
        // 'left' position to open Left panel
        myApp.openPanel('left');
    });

    $$('.open-right-panel').on('click', function (e) {
        // 'right' position to open Right panel
        myApp.openPanel('right');
    });

    $$('.panel-close').on('click', function (e) {
        myApp.closePanel();
    });
// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}


      var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) {
    admobid = { // for Android
        banner: 'ca-app-pub-7251676025279948~2665838710',
        interstitial: 'ca-app-pub-7251676025279948/4142571918'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-6869992474017983/4806197152',
        interstitial: 'ca-app-pub-6869992474017983/7563979554'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-6869992474017983/8878394753',
        interstitial: 'ca-app-pub-6869992474017983/1355127956'
    };
}

function initApp() {
    if (AdMob) {
        AdMob.createBanner({
            adId : admobid.banner,
            position : AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow : true
        });
    }
	  document.addEventListener("deviceready", onDeviceReady, false);
	

}

document.addEventListener('deviceready', initApp, false);

    // $(".ser-link").on("click",function(e){
    //     e.preventDefault();
    //     var ser_id=$(this).attr("ser_id");
    //     alert(ser_id);
    //     window.location.href("ceaser.html");
    // });
var inAppBrowserRef;

function showHelp(url) {
	alert('connection is oppened');

    var target = "_blank";

    var options = "location=yes,hidden=yes";

    inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);

    inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);

    inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);

    inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);
	alert('completed');

}

function loadStartCallBack() {
alert('load started');
    $('#status-message').text("loading please wait ...");
alert('load done');
}

function loadStopCallBack() {

    if (inAppBrowserRef != undefined) {

        inAppBrowserRef.insertCSS({ code: "body{font-size: 25px;" });

        $('#status-message').text("");

        inAppBrowserRef.show();
    }

}

function loadErrorCallBack(params) {

    $('#status-message').text("");

    var scriptErrorMesssage =
       "alert('Sorry we cannot open that page. Message from the server is : "
       + params.message + "');"

    inAppBrowserRef.executeScript({ code: scriptErrorMesssage }, executeScriptCallBack);

    inAppBrowserRef.close();

    inAppBrowserRef = undefined;

}

function executeScriptCallBack(params) {

    if (params[0] == null) {

        $('#status-message').text(
           "Sorry we couldn't open that page. Message from the server is : '"
           + params.message + "'");
    }

}


cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-base64-to-gallery/www/object.assign-polyfill.js",
        "id": "cordova-base64-to-gallery.object.assign-polyfill",
        "pluginId": "cordova-base64-to-gallery"
    },
    {
        "file": "plugins/cordova-base64-to-gallery/www/base64ToGallery.js",
        "id": "cordova-base64-to-gallery.base64ToGallery",
        "pluginId": "cordova-base64-to-gallery",
        "clobbers": [
            "cordova.base64ToGallery"
        ]
    },
    {
        "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
        "id": "cordova-plugin-android-permissions.Permissions",
        "pluginId": "cordova-plugin-android-permissions",
        "clobbers": [
            "cordova.plugins.permissions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
        "id": "cordova-plugin-app-version.AppVersionPlugin",
        "pluginId": "cordova-plugin-app-version",
        "clobbers": [
            "cordova.getAppVersion"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
        "id": "cordova-plugin-file.DirectoryEntry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
        "id": "cordova-plugin-file.DirectoryReader",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Entry.js",
        "id": "cordova-plugin-file.Entry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/File.js",
        "id": "cordova-plugin-file.File",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileEntry.js",
        "id": "cordova-plugin-file.FileEntry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileError.js",
        "id": "cordova-plugin-file.FileError",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileReader.js",
        "id": "cordova-plugin-file.FileReader",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileSystem.js",
        "id": "cordova-plugin-file.FileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
        "id": "cordova-plugin-file.FileUploadOptions",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
        "id": "cordova-plugin-file.FileUploadResult",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileWriter.js",
        "id": "cordova-plugin-file.FileWriter",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Flags.js",
        "id": "cordova-plugin-file.Flags",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
        "id": "cordova-plugin-file.LocalFileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Metadata.js",
        "id": "cordova-plugin-file.Metadata",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
        "id": "cordova-plugin-file.ProgressEvent",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystems.js",
        "id": "cordova-plugin-file.fileSystems",
        "pluginId": "cordova-plugin-file"
    },
    {
        "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
        "id": "cordova-plugin-file.requestFileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
        "id": "cordova-plugin-file.resolveLocalFileSystemURI",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
        "id": "cordova-plugin-file.isChrome",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/Preparing.js",
        "id": "cordova-plugin-file.Preparing",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/src/browser/FileProxy.js",
        "id": "cordova-plugin-file.browserFileProxy",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
        "id": "cordova-plugin-file.fileSystemPaths",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "cordova"
        ],
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/FileSystem.js",
        "id": "cordova-plugin-file.firefoxFileSystem",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file-opener2/www/plugins.FileOpener2.js",
        "id": "cordova-plugin-file-opener2.FileOpener2",
        "pluginId": "cordova-plugin-file-opener2",
        "clobbers": [
            "cordova.plugins.fileOpener2"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
        "id": "cordova-plugin-file-transfer.FileTransferError",
        "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransferError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
        "id": "cordova-plugin-file-transfer.FileTransfer",
        "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file-transfer/www/browser/FileTransfer.js",
        "id": "cordova-plugin-file-transfer.BrowserFileTransfer",
        "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Promise.js",
        "id": "cordova-plugin-googlemaps.Promise",
        "pluginId": "cordova-plugin-googlemaps"
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/BaseClass.js",
        "id": "cordova-plugin-googlemaps.BaseClass",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/BaseArrayClass.js",
        "id": "cordova-plugin-googlemaps.BaseArrayClass",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/LatLng.js",
        "id": "cordova-plugin-googlemaps.LatLng",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/LatLngBounds.js",
        "id": "cordova-plugin-googlemaps.LatLngBounds",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/VisibleRegion.js",
        "id": "cordova-plugin-googlemaps.VisibleRegion",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Location.js",
        "id": "cordova-plugin-googlemaps.Location",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/CameraPosition.js",
        "id": "cordova-plugin-googlemaps.CameraPosition",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Polyline.js",
        "id": "cordova-plugin-googlemaps.Polyline",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Polygon.js",
        "id": "cordova-plugin-googlemaps.Polygon",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Marker.js",
        "id": "cordova-plugin-googlemaps.Marker",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/HtmlInfoWindow.js",
        "id": "cordova-plugin-googlemaps.HtmlInfoWindow",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Circle.js",
        "id": "cordova-plugin-googlemaps.Circle",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/TileOverlay.js",
        "id": "cordova-plugin-googlemaps.TileOverlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/GroundOverlay.js",
        "id": "cordova-plugin-googlemaps.GroundOverlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Common.js",
        "id": "cordova-plugin-googlemaps.Common",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/encoding.js",
        "id": "cordova-plugin-googlemaps.encoding",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/spherical.js",
        "id": "cordova-plugin-googlemaps.spherical",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/poly.js",
        "id": "cordova-plugin-googlemaps.poly",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Geocoder.js",
        "id": "cordova-plugin-googlemaps.Geocoder",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/LocationService.js",
        "id": "cordova-plugin-googlemaps.LocationService",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Map.js",
        "id": "cordova-plugin-googlemaps.Map",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/event.js",
        "id": "cordova-plugin-googlemaps.event",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/MapTypeId.js",
        "id": "cordova-plugin-googlemaps.MapTypeId",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/KmlOverlay.js",
        "id": "cordova-plugin-googlemaps.KmlOverlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/KmlLoader.js",
        "id": "cordova-plugin-googlemaps.KmlLoader",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Environment.js",
        "id": "cordova-plugin-googlemaps.Environment",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/MarkerCluster.js",
        "id": "cordova-plugin-googlemaps.MarkerCluster",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Cluster.js",
        "id": "cordova-plugin-googlemaps.Cluster",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/geomodel.js",
        "id": "cordova-plugin-googlemaps.geomodel",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/commandQueueExecutor.js",
        "id": "cordova-plugin-googlemaps.commandQueueExecutor",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/pluginInit.js",
        "id": "cordova-plugin-googlemaps.pluginInit",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/StreetViewPanorama.js",
        "id": "cordova-plugin-googlemaps.StreetViewPanorama",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Overlay.js",
        "id": "cordova-plugin-googlemaps.Overlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Thread.js",
        "id": "cordova-plugin-googlemaps.Thread",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/InlineWorker.js",
        "id": "cordova-plugin-googlemaps.InlineWorker",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/plugin-loader-for-browser.js",
        "id": "cordova-plugin-googlemaps.googlemaps-cdv-plugin",
        "pluginId": "cordova-plugin-googlemaps",
        "clobbers": [
            "plugin.google.maps"
        ]
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/js_CordovaGoogleMaps-for-browser.js",
        "id": "cordova-plugin-googlemaps.js_CordovaGoogleMaps",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/CordovaGoogleMaps.js",
        "id": "cordova-plugin-googlemaps.CordovaGoogleMaps",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginMap.js",
        "id": "cordova-plugin-googlemaps.PluginMap",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginMarker.js",
        "id": "cordova-plugin-googlemaps.PluginMarker",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginCircle.js",
        "id": "cordova-plugin-googlemaps.PluginCircle",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginGroundOverlay.js",
        "id": "cordova-plugin-googlemaps.PluginGroundOverlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginKmlOverlay.js",
        "id": "cordova-plugin-googlemaps.PluginKmlOverlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginMarkerCluster.js",
        "id": "cordova-plugin-googlemaps.PluginMarkerCluster",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginPolygon.js",
        "id": "cordova-plugin-googlemaps.PluginPolygon",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginPolyline.js",
        "id": "cordova-plugin-googlemaps.PluginPolyline",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginStreetViewPanorama.js",
        "id": "cordova-plugin-googlemaps.PluginStreetViewPanorama",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginTileOverlay.js",
        "id": "cordova-plugin-googlemaps.PluginTileOverlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginLocationService.js",
        "id": "cordova-plugin-googlemaps.PluginLocationService",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginGeocoder.js",
        "id": "cordova-plugin-googlemaps.PluginGeocoder",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginEnvironment.js",
        "id": "cordova-plugin-googlemaps.PluginEnvironment",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
        "id": "cordova-plugin-ionic-webview.IonicWebView",
        "pluginId": "cordova-plugin-ionic-webview",
        "clobbers": [
            "Ionic.WebView"
        ]
    },
    {
        "file": "plugins/cordova-plugin-nativegeocoder/www/NativeGeocoder.js",
        "id": "cordova-plugin-nativegeocoder.NativeGeocoder",
        "pluginId": "cordova-plugin-nativegeocoder",
        "clobbers": [
            "nativegeocoder"
        ]
    },
    {
        "file": "plugins/cordova-plugin-navigationbar-color/www/navigationbar.js",
        "id": "cordova-plugin-navigationbar-color.navigationbar",
        "pluginId": "cordova-plugin-navigationbar-color",
        "clobbers": [
            "window.NavigationBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-navigationbar-color/src/browser/NavigationBarProxy.js",
        "id": "cordova-plugin-navigationbar-color.NavigationBarProxy",
        "pluginId": "cordova-plugin-navigationbar-color",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
        "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
        "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-barcodescanner/src/browser/BarcodeScannerProxy.js",
        "id": "phonegap-plugin-barcodescanner.BarcodeScannerProxy",
        "pluginId": "phonegap-plugin-barcodescanner",
        "runs": true
    },
    {
        "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/common.js",
        "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.Common",
        "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
        "clobbers": [
            "launchnavigator"
        ]
    },
    {
        "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/localforage.v1.5.0.min.js",
        "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LocalForage",
        "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
        "clobbers": [
            "localforage"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-base64-to-gallery": "4.1.3",
    "cordova-plugin-add-swift-support": "2.0.2",
    "cordova-plugin-android-permissions": "1.0.2",
    "cordova-plugin-app-version": "0.1.9",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-file": "6.0.2",
    "cordova-plugin-file-opener2": "2.2.1",
    "cordova-plugin-file-transfer": "1.7.1",
    "cordova-plugin-geolocation": "4.0.2",
    "cordova-plugin-googlemaps": "2.6.2",
    "cordova-plugin-inappbrowser": "3.1.0",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-ionic-webview": "4.1.2",
    "cordova-plugin-nativegeocoder": "3.2.2",
    "cordova-plugin-navigationbar-color": "0.0.8",
    "cordova-plugin-network-information": "2.0.2",
    "cordova-plugin-splashscreen": "5.0.3",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-whitelist": "1.3.4",
    "phonegap-plugin-barcodescanner": "8.1.0",
    "uk.co.workingedge.phonegap.plugin.launchnavigator": "5.0.4"
}
// BOTTOM OF METADATA
});
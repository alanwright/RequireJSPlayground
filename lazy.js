console.log("Lazy.js has been loaded!");

define('internalService', ["require", "exports"], function (require, exports) {
    console.log('internalService within Lazy.js has been loaded!');
});
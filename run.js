console.log('Loading internalService...');
require(['internalService'], function() {
    console.log('waiting 100 ms...');
    setTimeout(function() {
        console.log('Loading lazy.js');
        require(['lazy']);
    }, 100);
});
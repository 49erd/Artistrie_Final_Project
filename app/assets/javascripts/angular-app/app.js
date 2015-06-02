var app = angular.module('myApp', [
  // additional dependencies here, such as restangular
  'templates'
]);

app.config(["$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}])

// @app.run(->
//   console.log 'angular app running'
// )
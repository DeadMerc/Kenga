var adminApp = angular.module('adminApp', [
    'ngRoute',
    'adminControllers',
    'ngMaterial',
    'ngMessages',
    'toastr',
    'angular-loading-bar',
    'ngAnimate',
    'ngFileUpload',
    'ui.grid',
], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
});


adminApp.run(function ($rootScope, toastr) {
    console.log("App started");
    /* config for http*/
    $rootScope.config = {
        headers: {
            'token': 'adm',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    /* toasts */
    $rootScope.success = function ($text) {
        //success warning info error
        toastr.success($text, {allowHtml: true});
    };
    $rootScope.warning = function ($text) {
        //success warning info error
        toastr.warning($text, {allowHtml: true});
    };
    $rootScope.info = function ($text) {
        //success warning info error
        toastr.info($text, {allowHtml: true});
    };
    $rootScope.error = function ($text) {
        //success warning info error
        toastr.error($text, {allowHtml: true});
    };
    $rootScope.transform = function (obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
            value = obj[name];

            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value !== undefined && value !== null)
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };

    $rootScope.serialize = function ( data ) {
        // If this is not an object, defer to native stringification.
        if ( ! angular.isObject( data ) ) {
            return( ( data == null ) ? "" : data.toString() );
        }

        var buffer = [];

        // Serialize each key in the object.
        for ( var name in data ) {
            if ( ! data.hasOwnProperty( name ) ) {
                continue;
            }

            var value = data[ name ];

            buffer.push(
                encodeURIComponent( name ) + "=" + encodeURIComponent( ( value == null ) ? "" : value )
            );
        }

        // Serialize the buffer and clean it up for transportation.
        var source = buffer.join( "&" ).replace( /%20/g, "+" );
        return( source );
    }
});
adminApp.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    console.log("Spinner init");
    cfpLoadingBarProvider.includeSpinner = false;

}])
adminApp.config(['$routeProvider',
    function ($routeProvider) {
        console.log("Route Init");
        $routeProvider
            .when('/lessons', {
                templateUrl: 'app/lessons.html',
                controller: 'LessonsCtrl'
            })
            .when('/lesson/:id?', {
                templateUrl: 'app/lesson.html',
                controller: 'LessonCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
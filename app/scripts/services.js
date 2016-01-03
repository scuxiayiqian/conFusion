'use strict';

angular.module('confusionApp')
    .constant("baseURL", "http://localhost:3000/")
    .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {

        this.getDishes = function(){

            // $resource(url, [paramDefaults], [actions], options);
            // the default set contains these actions:
            //  { 'get':    {method:'GET'},
            //    'save':   {method:'POST'},
            //    'query':  {method:'GET', isArray:true},
            //    'remove': {method:'DELETE'},
            //    'delete': {method:'DELETE'} };
            // which do not contain the update method, so we add a update hash with PUT in the actions parameter.
            return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});

        };

        this.getPromotion = function() {

            return $resource(baseURL + "promotions/:id" , null, {'update':{method:'PUT' }});
        };

    }])

    .factory('corporateFactory', [ '$resource', 'baseURL', function ($resource, baseURL) {

        var corpfac = {};
        corpfac.getLeaders = function () {
            return $resource(baseURL + "leadership/:id" , null, {'update':{ method:'PUT' }});
        };

        return corpfac;
    }])

    .factory('feedbackFactory', [ '$resource', 'baseURL', function($resource, baseURL) {

        var fbfac = {};
        fbfac.feedbackOperations = function() {
            return $resource(baseURL + "feedback/:id", null);
        }

        return fbfac;

    }])

;

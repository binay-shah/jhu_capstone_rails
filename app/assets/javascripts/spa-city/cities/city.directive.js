(function() {
    'use strict';

    angular
        .module('spa-city.cities')
        .directive('scCities', CitiesDirective);
        //sc-cities

    CitiesDirective.$inject = ['spa-city.APP_CONFIG'];

    /* @ngInject */
    function CitiesDirective(APP_CONFIG) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
        	templateUrl: APP_CONFIG.cities_html,
        	replace: true,
            bindToController: true,
            controller: 'spa-city.cities.CitiesController',
            controllerAs: 'citiesVM',
            link: link,
            restrict: 'E',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	console.log("CitiesDirective", scope);
        }
    }



    
})();
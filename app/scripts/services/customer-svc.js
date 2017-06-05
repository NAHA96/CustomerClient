'use strict';

angular.module('customerServices',['ngResource'])
    .factory('customerSvc', ['$resource',
        function($resource) {
            return $resource(
                'http://localhost:8080/customer/webresources/com.udea.customer.entity.customer/:customerId:id',
                {},
                {
                    update:{
                        method:'PUT'
                    },
                    params:{
                        id:'@customerId'
                    }
                }
            );
        }]);
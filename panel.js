var App = {
    configStore: [],
    descriptorStore: [],
    hotelResultsStore: [],
    productResultsStore: [],
    shoppingStore: []
};

function toTableController($scope) {
    $scope.type = function (input) {
        if (angular.isArray(input)) {
            return 'array';
        } else if (angular.isObject(input)) {
            return 'object';
        } else {
            return 'value';
        }
    };
}

angular.module('dripper', [])

    .filter('filterByTableName', function () {
        return function (input, tableName) {
            if (tableName) {
                tableName = tableName.toLowerCase();
                var objectKeys = Object.keys(input);
                var options = {};
                objectKeys.forEach(function (objectKey) {
                    var objectKeyLowerCase = objectKey.toLowerCase();
                    if (objectKeyLowerCase.indexOf(tableName) !== -1) {
                        options[objectKey] = input[objectKey];
                    }
                });
                return options;
            } else {
                return input;
            }
        }
    })

    .component('objectToTable', {
        templateUrl: 'tpl/object-to-table.html',
        controller: toTableController,
        bindings: {
            tableContent: '=',
            deep: '<'
        }
    })

    .component('arrayToTable', {
        templateUrl: 'tpl/array-to-table.html',
        controller: toTableController,
        bindings: {
            tableContent: '=',
            deep: '<'
        }
    })

    .controller('indexController', ['$scope', function ($scope) {
        $scope.searchFilter = '';

        $scope.stores = App;

        $scope.renderingDepth = 2;

        $scope.filterStores = function (item) {
            return item.tableName === $scope.searchFilter;
        };

        $scope.update = function () {
            $scope.stores = App;
        };
    }]);

chrome.devtools.inspectedWindow.eval('App.configStore._store', function (result, isException) {
    if (isException) {
        console.log('there\'s and error');
    } else {
        App.configStore = result;
    }
});

chrome.devtools.inspectedWindow.eval('App.descriptorStore._store', function (result, isException) {
    if (isException) {
        console.log('there\'s and error');
    } else {
        App.descriptorStore = result;
    }
});

chrome.devtools.inspectedWindow.eval('App.hotelResultsStore._store', function (result, isException) {
    if (isException) {
        console.log('there\'s and error');
    } else {
        App.hotelResultsStore = result;
    }
});

chrome.devtools.inspectedWindow.eval('App.productResultsStore._store', function (result, isException) {
    if (isException) {
        console.log('there\'s and error');
    } else {
        App.productResultsStore = result;
    }
});

chrome.devtools.inspectedWindow.eval('App.shoppingStore._store', function (result, isException) {
    if (isException) {
        console.log('there\'s and error');
    } else {
        App.shoppingStore = result;
    }
});

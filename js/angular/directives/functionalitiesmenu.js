app.directive("functionalitiesmenu", ['viewservice', function(viewservice) {
    return {
        restrict : "E",
        template : viewservice.functionalitiesMenu
    };
}]);
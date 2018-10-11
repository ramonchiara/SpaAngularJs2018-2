var app = angular.module('LojaApp', []);

app.controller('PrincipalCtrl', function ($scope, $http) {

    $scope.min = 0;
    $scope.max = 10000;
    $scope.produtos = [];

    $http.get('produtos.json').then(function (response) {
        $scope.produtos = response.data;
    });

    $scope.minmax = function (produto) {
        return produto.preco >= $scope.min && produto.preco <= $scope.max;
    }

});

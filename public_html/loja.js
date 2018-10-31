var app = angular.module('LojaApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('principal', {
        url: '/',
        templateUrl: 'views/principal.html'
    });

    $stateProvider.state('produto', {
        url: '/produtos/:id',
        templateUrl: 'views/produto.html',
        controller: 'ProdutoCtrl'
    });

    $urlRouterProvider.otherwise('/');

});

app.controller('PrincipalCtrl', function ($scope, $produtoDao) {

    $scope.min = 0;
    $scope.max = 10000;
    $scope.produtos = [];

    $produtoDao.getProdutos().then(function (produtos) {
        $scope.produtos = produtos;
    });

    // $http.get('produtos.json').then(function (response) {
    //     $scope.produtos = response.data;
    // });

    $scope.minmax = function (produto) {
        return produto.preco >= $scope.min && produto.preco <= $scope.max;
    };

});

app.controller('ProdutoCtrl', function ($scope, $produtoDao, $stateParams) {

    $scope.produto = $produtoDao.getProdutoById($stateParams.id);

});

app.factory('$produtoDao', function ($http, $q) {

    var produtos = [];

    function getProdutos() {
        return $q(function (resolve, reject) {
            $http.get('produtos.json').then(function (response) {
                produtos = response.data;
                resolve(produtos);
            });
        });
    }

    function getProdutoById(id) {
        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
            if (produto.id == id) {
                return produto;
            }
        }
        return null;
    }

    return {
        getProdutos,
        getProdutoById
    };

});
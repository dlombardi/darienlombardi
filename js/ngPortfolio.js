var dl = angular.module("dLombardi", []);

dl.controller("dController", ['$scope', function($scope){
  $scope.social = [
    { link: '#page-top', icon: "images/Darien_Lombardi_Logo_Inverse.png", class:"logo"},
    { link: 'https://www.linkedin.com/in/darienlombardi', icon: "images/linkedin.svg", class:"social"},
    { link: 'https://twitter.com/DarienLombardi', icon: "images/twitter.svg", class:"social"},
    { link: 'https://www.linkedin.com/in/darienlombardi', icon: "images/stackoverflow.svg", class:"social"},
  ];

  $scope.portfolio = [
    { title:"Calculator", image: "images/Calculator.png", website: "#", techs:["Javascript","Ionic","Google Maps Api","express","Mongo","Mongoose","Scss"]},
    { title:"Weather App", image: "images/WeatherApp.png", website: "http://dlombardi.github.io/Weather-on-the-Run/", techs:["Javascript","Ionic","Google Maps Api","express","Mongo","Mongoose","Scss"]},
    { title:"Calculator", image: "#", website: "#", techs:["Javascript","Ionic","Google Maps Api","express","Mongo","Mongoose","Scss"]},
    { title:"Historic", image: "#", website: "#", techs:["Javascript","Ionic","Google Maps Api","express","Mongo","Mongoose","Scss"]}
  ]
}]);

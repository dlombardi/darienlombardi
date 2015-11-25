var dl = angular.module("dLombardi", []);

dl.controller("dController", ['$scope', function($scope){
  $scope.social = [
    { link: 'https://www.linkedin.com/in/darienlombardi', icon: "images/linkedin.svg", class:"social", name: "Linkedin"},
    { link: 'https://twitter.com/DarienLombardi', icon: "images/twitter.svg", class:"social", name: "twitter"},
    { link: 'https://www.linkedin.com/in/darienlombardi', icon: "images/stackoverflow.svg", class:"social", name: "stackoverflow"},
  ];

  $scope.portfolio = [
    { title:"Quora", image: "#", website: "#", techs:["Javascript","Ionic","Google Maps Api","express","Mongo","Mongoose","Scss"]},
    { title:"Historic", image: "images/Historic.png", website: "#", techs:["Javascript","Ionic","Google Maps Api","express","Mongo","Mongoose","Scss"]},
    { title:"Record Swap", image: "#", website: "#", techs:["Javascript","Ionic","Google Maps Api","express","Mongo","Mongoose","Scss"]},
    { title:"Calculator", image: "images/Calculator.png", website: "http://dlombardi.github.io/Calculator/", techs:["Javascript", "jQuery", "HTML", "CSS"]},
    { title:"Weather App", image: "images/WeatherApp.png", website: "http://dlombardi.github.io/Weather-on-the-Run/", techs:["Javascript","Ionic", "Angular","Google Maps Api","Express","Mongo","Mongoose","Scss"]},
    { title:"Weather App", image: "images/WeatherApp.png", website: "http://dlombardi.github.io/Weather-on-the-Run/", techs:["Javascript","Ionic","Google Maps Api","express","Mongo","Mongoose","Scss"]}
  ]
}]);

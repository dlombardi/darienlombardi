var dl = angular.module("dLombardi", ['ngMessages']);

dl.controller("dController", ['$scope', '$http', function($scope, $http){
  $scope.social = [
    { link: 'https://www.linkedin.com/in/darienlombardi', icon: "/public/images/linkedin.svg", class:"social", name: "Linkedin"},
    { link: 'https://twitter.com/DarienLombardi', icon: "/public/images/twitter.svg", class:"social", name: "twitter"},
    { link: 'https://github.com/dlombardi', icon: "/public/images/github.svg", class:"social", name: "stackoverflow"},
    { link: 'https://www.linkedin.com/in/darienlombardi', icon: "/public/images/stackoverflow.svg", class:"social", name: "stackoverflow"},
  ];

  $scope.portfolio = [
    { title:"Quora", image: "/public/images/quora.png", website: "https://blooming-dusk-5310.herokuapp.com/", techs:["Node","Javascript","Angular","Express","Mongoose","Scss","Gulp", "Mixpanel", "Passport","Foundation"]},
    { title:"Historic", image: "/public/images/Historic.png", website: "https://radiant-island-9611.herokuapp.com/#/app/map", techs:["Node","Javascript","Ionic","Google Maps Api","Express","Mongo","Mongoose","Scss","Gulp"]},
    { title:"Record Swap", image: "/public/images/record_swap.png", website: "#", techs:["Node","Javascript","Ionic","Express","Mongo","Mongoose","Scss"]},
    { title:"PocketWatch", image: "/public/images/pocket_watch.png", website: "http://www.pocketwatchapp.us/#/home", techs:["Javascript","Twilio", "Weather Underground API","Express","HTML", "CSS"]},
    { title:"Weather App", image: "/public/images/WeatherApp.png", website: "http://dlombardi.github.io/Weather-on-the-Run/", techs:["Javascript","jQuery", "Weather Underground API","Bootstrap","HTML","CSS"]},
    { title:"Calculator", image: "/public/images/Calculator.png", website: "http://dlombardi.github.io/Calculator/", techs:["Javascript", "jQuery", "Bootstrap", "HTML", "CSS"]}
  ]

    $scope.skills = [
    { title: 'HTML 5', image: 'img/html.png' },
    { title: 'CSS 3', image: 'img/css.png' },
    { title: 'Javascript', image: 'img/javascript.jpg' },
    { title: 'MongoDB', image: "img/mongodb.png" },
    { title: 'HapiJS', image: "img/hapi.png" },
    { title: 'AngularJS', image: "img/angular.png" },
    { title: 'NodeJS', image: "img/node.png" },
    { title: 'CoffeeScript', image: 'img/coffeescript.png' }
  ]

  $scope.emailDarien = function(){
    console.log("in email darien");
    var email = {
      sender: $scope.sender,
      email: $scope.email,
      title: $scope.title,
      content: $scope.content
    }
    $http.post('email', email)
    .success(function(email){
      swal({
        type: "success",
        title: "Email sent!",
        timer: 1000,
        showConfirmButton: false
      });
      $scope.sender = "";
      $scope.email = "";
      $scope.title = "";
      $scope.content = "";
    })
  }
}]);

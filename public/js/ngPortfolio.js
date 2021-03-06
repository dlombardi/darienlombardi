var dl = angular.module("dLombardi", ['ngMessages']);

dl.controller("dController", ['$scope', '$http', function($scope, $http){
  $scope.social = [
    { link: 'https://www.linkedin.com/in/darienlombardi', icon: "/public/images/linkedin.svg", class:"social", name: "Linkedin"},
    { link: 'https://twitter.com/DarienLombardi', icon: "/public/images/twitter.svg", class:"social", name: "twitter"},
    { link: 'https://github.com/dlombardi', icon: "/public/images/github.svg", class:"social", name: "stackoverflow"},
    { link: 'http://stackoverflow.com/users/5095918/darien-lombardi', icon: "/public/images/stackoverflow.svg", class:"social", name: "stackoverflow"},
  ];

  $scope.portfolio = [
    { title:"Cookin", image: "/public/images/cookin.png", website: "https://www.trycookin.com", techs:["React", "Redux", "Docker", "Django", "Flexbox"]},
    { title:"Clear Old Hashes Plugin", image: "/public/images/webpack-plugin.png", website: "https://www.npmjs.com/package/clear-old-hashes-plugin", github: "https://github.com/dlombardi/clear-old-hashes-plugin" ,techs:["Node","Javascript", "Webpack"]},
    { title:"Space Simulator", image: "/public/images/space-simulator.png", website: "https://dlombardi.github.io/space-simulator/", github: "https://github.com/dlombardi/space-simulator" ,techs:["Node","Javascript","HTML5 Canvas"]},
    { title:"VINBeam website", image: "/public/images/Vinbeam.png", website: "http://www.vinbeam.com/",techs:["Node","Javascript","Bootstrap","Angular","Express","Scss","Gulp"]},
    { title:"Quora Clone", image: "/public/images/quora.png", website: "https://blooming-dusk-5310.herokuapp.com/", github: "https://github.com/dlombardi/Quora_clone" ,techs:["Node","Javascript","Angular","Express","Mongoose","Scss","Gulp", "Mixpanel", "Passport","Foundation"]},
    { title:"Historic (Mobile)", image: "/public/images/Historic.png", website: "https://radiant-island-9611.herokuapp.com/#/app/map", github: "https://github.com/dlombardi/historic" ,techs:["Node","Javascript","Ionic","Google Maps Api","Express","Mongo","Mongoose","Scss","Gulp"]},
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
      $scope.emailForm.$setUntouched();
    })
  }
}]);

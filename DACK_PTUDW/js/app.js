//angular.module('myApp', ['ui.bootstrap']);
var app = angular.module('hidrobook', ['ui.bootstrap']);


// Controller  for Carousel
function CarouselCtrl($scope) {

// initializing the time Interval
  $scope.myInterval = 4000;
  
 // Initializing  slide rray  

$scope.slides = [
            {image: 'images/img00.jpg', description: 'Image 00'},
            {image: 'images/img01.jpg', description: 'Image 01'},
            {image: 'images/img02.jpg', description: 'Image 02'},
            {image: 'images/img03.jpg', description: 'Image 03'},
            {image: 'images/img04.jpg', description: 'Image 04'}
        ];

  var slides = $scope.slides;
  console.log(slides);

} // Controller Ends here
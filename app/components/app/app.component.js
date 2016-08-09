angular
  .module('treyeckels')
  .component('app', {
    templateUrl: 'components/app/app.template.html',
    controller: function AppCtrl() {
      this.slides = [
        'images/fruitwater.jpg',
        'images/boston-globe.jpg',
        'images/mine-for-nine.jpg',
        'images/usa-today.jpg',
        'images/fitness.jpg',
        'images/ice.jpg',
        'images/lg.jpg',
        'images/usps.jpg',
        'images/washington-post.jpg',
        'images/linkedin.jpg'
      ];
    }
  });

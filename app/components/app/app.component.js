angular
  .module('treyeckels')
  .component('app', {
    templateUrl: 'components/app/app.template.html',
    controller: function AppCtrl() {
      this.slides = [{
          src: 'images/fruitwater.jpg',
          caption: 'Fruitwater Launch for Coca-Cola 2013'
        },
        {
          src: 'images/boston-globe.jpg',
          caption: 'BostonGlobe.com Launch 2012 '
        },
        {
          src: 'images/mine-for-nine.jpg',
          caption: 'Mine for Nine Redesign 2014'
        },
        {
          src: 'images/usa-today.jpg',
          caption: 'USA Today for Gannett 2013'
        },
        {
          src: 'images/fitness.jpg',
          caption: 'Fitness.gov for Mrs. Obama 2012'
        },
        {
          src: 'images/ice.jpg',
          caption: 'ICE.gov for Homeland Security 2008'
        },
        {
          src: 'images/lg.jpg',
          caption: 'LG.com for LG 2013'
        },
        {
          src: 'images/usps.jpg',
          caption: 'USPS.com for the US Postal Service 2009'
        },
        {
          src: 'images/washington-post.jpg',
          caption: 'WahingtonPost.com for The Washington Post 2010'
        },
        {
          src: 'images/linkedin.jpg',
          caption: 'Company Profile Pages for LinkedIn 2016'
        }];
    }
  });

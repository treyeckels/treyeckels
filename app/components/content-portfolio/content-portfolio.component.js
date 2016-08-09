angular
  .module('treyeckels')
  .component('contentPortfolio', {
    templateUrl: 'components/content-portfolio/content-portfolio.template.html',
    bindings: {
      slides: '<'
    }
  });

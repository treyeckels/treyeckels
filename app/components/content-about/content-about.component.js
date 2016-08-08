angular
  .module('treyeckels')
  .component('contentAbout', {
    templateUrl: 'components/content-about/content-about.template.html',
    controller: function SkillsController() {
      ctrl = this;
      ctrl.skills = [
          'Front-end web development',
          'Server-side web development',
          'CMS Development',
          'HTML5',
          'CSS3',
          'XML',
          'XSL',
          'JavaScript',
          'jQuery',
          'PhP (Code Igniter, Symfony2)',
          'Node.js',
          'MEAN',
          'Responsive Design',
          'Continuous Integration',
          'Unit Testing',
          'Git',
          'Accessibility/Section 508',
          'i18n'
      ]
    }
  });

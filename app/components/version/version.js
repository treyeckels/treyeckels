'use strict';

angular.module('treyeckels.version', [
  'treyeckels.version.interpolate-filter',
  'treyeckels.version.version-directive'
])

.value('version', '0.1');

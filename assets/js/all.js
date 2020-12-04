"use strict";

$(document).ready(function () {
  console.log('HesSchool Hello!');
  var pathname = window.location.pathname.split('/').pop().split('.')[0];
  $("#".concat(pathname)).addClass('active');
});
//# sourceMappingURL=all.js.map

$(document).ready(() => {
  console.log('HesSchool Hello!');
  var pathname = window.location.pathname.split('/').pop().split('.')[0];
  $(`#${pathname}`).addClass('active');
});
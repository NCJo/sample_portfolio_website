// function for email link (not working yet)
$(document).ready(function() {
      $('#emailLink').on('click', function (event) {
      event.preventDefault();
    alert("Huh");
    var email = 'cnimkulr@gmail.com';
    var subject = 'Circle Around';
    var emailBody = 'Some blah';
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
  });
});
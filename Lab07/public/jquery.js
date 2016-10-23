/*
* Author: LoganVP
* For exercise 7.2
*/

$( document ).ready(function() {
  $("#getdata").click(function( event ) {

    // Using the core $.ajax() method
    $.ajax({
      // The URL for the request
      url: "/fetch",
      // The data to send (will be converted to a query string)
      data: {
        id: "Lab07"
      },
      type: "GET",
      dataType: "json"
      })
      .done(function( json ) {
        $("#getdata").next("div").html("<p>" + json.message + "</p>");
      })
      .fail(function( xhr, status, errorThrown ) {
        alert( "Sorry, there was a problem!" );
      })
    .always(function( xhr, status ) {
      alert( "The request is complete!" );
    }
  });
});

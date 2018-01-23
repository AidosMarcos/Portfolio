$(document).ready(function(){

  var quote;
  var author;

  // call function when page loads so it will automaticaly generate one quote
  getNewQuote();
  changeBckg();

  function getNewQuote() {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/',
      // work around browser secuity for this API
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        $('#quote').text('"' + quote + '"'); // in case author has no value it outputs "unknown author"
        if (author) {
          $('#author').text('by ' + author);
        } else {
          $('#author').text('by unknown author');
        }
        console.log(response);
      }
    });
  }

  // associate function to button click
  $('#btnQuote').on('click', function(event) {
    event.preventDefault();
    getNewQuote();
    changeBckg();
  });

  // create function for share button
  $('#btnTwitter').on('click', function(event) {
    event.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '" ' + ' by ' + author));
  })

  // function to change background color randomly
  function changeBckg() {
    var x = Math.round(Math.random() * 256);
    var y = Math.round(Math.random() * 256);
    var z = Math.round(Math.random() * 256);
    var bgColor = "background: rgb("+ x +","+ y + "," + z + ");";
    var element = document.getElementById("background");
    element.style = bgColor;
  }
});

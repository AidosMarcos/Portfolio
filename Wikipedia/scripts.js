
$('#btnSubmit').on('click', function(e){
  e.preventDefault();
  requestSearch();
});

$('#btnLucky').on('click', function(e){
  e.preventDefault();
  $("#searchBar").css("border-color", "");
  randomSearch();
});

// autocomplete while wrting term to search
$('#searchBar').autocomplete({
  source: function(request, response) {
    console.log(request);
    $.ajax({
      url: "https://en.wikipedia.org/w/api.php",
      dataType: 'jsonp',
      data: {
        'action': "opensearch",
        'format': "json",
        'search': request.term
      },
      success: function(data) {
        console.log(data);
        response(data[1]);
      }
    });
  }
});


function requestSearch() {  //function to request info of user input
   var searchVal = $("#searchBar").val();
   var requestUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchVal + "&format=json&callback=?";
   if (searchVal) {
     $("#searchBar").css("border-color", "");
     $.ajax({
       type: 'GET',
       url: requestUrl,
       dataType: 'json',
       success: function(data){
         console.log(data);
         var size = data[1].length;
         $("#searchBar").val('');
         $("#resultsBox").empty();
         $("#resultsBox").append("<p>Results for <em>" + searchVal + "</em>:</p> <hr>");
         for (var i = 0; i < size; i++){
           $("#resultsBox").append('<div class="col-xs-12 resultDiv"><h4><a target="_blank" href="'+ data[3][i] +'">' + data[1][i] + '</a></h4><p>' + data[2][i] +'</p></div>');
         }
       },
       error: function (errorMessage) {
         console.log(errorMessage);
        }
     });
   } else {
     $("#resultsBox").empty();
     $("#resultsBox").append("<p>Please write something to search</p>");
     $("#searchBar").css("border-color", "red");
   }
}

function randomSearch() {
  var requestUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&titles=&generator=random&exintro=1&inprop=url&grnlimit=10";
    $.ajax({
      type: 'GET',
      url: requestUrl,
      contentType: "application/json charset=UTF-8",
      dataType: 'jsonp',
      success: function(data){
        $("#searchBar").val('');
        $("#resultsBox").empty();
        $("#resultsBox").append("<p>Your random results:</p> <hr>");
        console.log(data);
        var pages = data.query.pages;
        console.log(typeof pages);
        for (var i= 0; i< 10; i++){               // Object.keys creates and array of the given object, in this case "pages" so now we can manipulate them in the for loop
          $("#resultsBox").append('<div class="col-xs-12 resultDiv"><h4><a target="_blank" href="'+ pages[Object.keys(pages)[i]].fullurl +'">' + pages[Object.keys(pages)[i]].title + '</a></h4><p>' + pages[Object.keys(pages)[i]].extract +'</p></div>');
        }
      },
      error: function (errorMessage) {
        console.log(errorMessage);
       }
    });
}

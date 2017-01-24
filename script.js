$(document).ready(function(){

    //Sets the 'enter' key to submit the search
    $(document).bind('keypress',function(e){
        if(e.which==13){
            $('#searchBtn').trigger('click');
        }
    });

    //Sets the search button to submit a search term to the wikipedia API and return 10 results.
    $('#searchBtn').click(function(){
        //Defines the variable to hold the search term
        var search = $('#search').val();
        //Defines the url as the Wikipedia API + opensearch + entered search term + format + callback
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ search + "&format=json&callback=?";
        //Retrieves data from Wikipedia API
        $.ajax({
            type:"GET",
            url:url,
            asynch:false,
            dataType:"json",
            //Displays the returned data
            success: function(data){
                //Clears and previous search output
                $('#output').html("");
                //Iterates through the output and displays contents of array
                for (var i=0;i < data[1].length;i++){
                $('#output').prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
                }
                //Clears the search variable of any previous search terms
                $('#search').val("");
            },
            //Error message
            error: function(errorMessage){
                console.log("Error");

            }
        })

    });


});

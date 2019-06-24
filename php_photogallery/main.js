
$('#carouselExample').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});





  $(document).ready(function() {
/* show lightbox when clicking a thumbnail */
    $('a.thumb').click(function(event){
      event.preventDefault();
      var content = $('.modal-body');
      content.empty();
        var title = $(this).attr("title");
        $('.modal-title').html(title);        
        content.html($(this).html());
        $(".modal-profile").modal({show:true});
    });

  });

  $(document).ready(function(){ 
 
    try {
        
  var player1 = "3025";
  var player2 = "2111";
  var player3 = "9998";
  var player4 = "5555";
  var player5 = "1111";
  var player6 = "1111";
  
  
   
         $.getJSON('./results.json', function(data) {
            
             $.each(data, function(i,item) {
               
                // $("<img/>").attr("src", item.link).appendTo("#links");
                if(item.id == player1){
                  
                 $("#picture1").attr("src", "content/player/"+item.link);
                 $("#picture7").attr("src", "content/player/"+item.link);
                }
                if(item.id == player2){
                 $("#picture2").attr("src", "content/player/"+item.link);
                 $("#picture8").attr("src", "content/player/"+item.link);
                
                }
 
                if(item.id == player3){
                 $("#picture3").attr("src", "content/player/"+item.link);
                }
 
                if(item.id == player4){
                 $("#picture4").attr("src", "content/player/"+item.link);
                }
 
                if(item.id == player5){
                 $("#picture5").attr("src", "content/player/"+item.link);
                }
 
                if(item.id == player6){
                 $("#picture6").attr("src", "content/player/"+item.link);
                }
 
 
             });
         });
     } catch (error) {
         console.log(error);
     }
    
    
 
 
 });
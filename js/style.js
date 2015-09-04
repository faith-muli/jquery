
<script>
	$(document).ready(function() {
	$.fn.fullpage({
	slidesColor: ['#fff','#ccc', '#2C3539','#ED9641'],
	anchors: ['page1', 'page2', 'page3', 'page4'],
	navigation: true,
	verticalCentered: true,
	resize: true,

	});
	});
	</script>




<script>
	       $(window).scroll(function() {
		  $('#object').each(function(){
		  var imagePos = $(this).offset().top;

		  var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("expandUp");
			}
		      });
	       });
       </script>
       
     <script>
	       $('#object').click(function() {
		  $(this).addClass("expandUp");
           });
       </script>
       <script>
       $(document).ready(function){
       $("#object").owlCarousel({
           autoplay: 3000,
           items   :3,
          /* itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3]*/
       });
       
       });
       
       </script>
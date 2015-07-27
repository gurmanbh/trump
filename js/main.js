(function(){          

	d3.csv ('data/trump.csv', function(error, dataset){
		
		$('.box').on('mousemove', function(e){

		    var buffer = 55;
		    arrowbuffer = 5;
		    var tooltip_height= $('#tooltip').height();
		    var tooltip_width = $('#tooltip').width();
		    $('#tooltip').css({
		        top: e.pageY - tooltip_height / 2,
		        left: e.pageX + tooltip_width/2 - buffer
		    })
		    $('#tooltip').addClass('visible');
		    var usingid = $(this).attr('data-id');
		    baketooltip(usingid);
		    $(this).addClass('active');
		    console.log(tooltip_height)

		    $('#tail1').css({
		    	bottom:tooltip_height/2-arrowbuffer,
		    	left:-28
		    })
		    $('#tail2').css({
		    	bottom:tooltip_height/2-arrowbuffer-1,
		    	left:-28
		    })
		    $('#tailShadow').css ({
			    bottom:tooltip_height/2-arrowbuffer+5,
			    left: -14
			})

		});
		$('.box').on('mouseout', function(e){
		    $('#tooltip').removeClass('visible');
		});

		$('#tooltip').on('mousemove',function(e){
			var buffer = 40;
			$('#tooltip').addClass('visible');
		})

		$('#tooltip').on('mouseout',function(e){
			$('#tooltip').removeClass('visible');
		})
		function baketooltip(id){
			var obj = _.findWhere(dataset,{'id':id});
			$('.headline').html('<a target="_blank" href="'+obj.link+'">'+obj.headline.split('|')[0].trim()+'</a>')
			$('.section').html('was published in the '+obj.publishedin+' section.')
		}
	});

}).call(this);
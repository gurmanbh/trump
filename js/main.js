(function(){          

	d3.csv ('data/trump.csv', function(error, dataset){
		
		$('.box').on('mousemove', function(e){
			$('.box').attr('status','inactive')

		    var buffer = 58;
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
		    // console.log(tooltip_height)

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
			var id = $(this).attr('activeid');
			var buffer = 40;
			$('#tooltip').addClass('visible');
			$('.box[data-id="'+id+'"]').attr('status','active');
		})

		$('#tooltip').on('mouseout',function(e){

			$('#tooltip').removeClass('visible');
			$('.box').attr('status','inactive')
		})
		function baketooltip(id){
			var obj = _.findWhere(dataset,{'id':id});
			$('.headline').html('<a target="_blank" href="'+obj.link+'">'+obj.headline.split('|')[0].trim()+'</a>')
			$('.section').html('was published in the '+obj.publishedin+' section.')
			$('.box[data-id="'+id+'"]').attr('status','active');
			$('#tooltip').attr('activeid',id)
			if ($('.box[data-id="'+id+'"]').attr('changed-status')==='true'){
				$('.changed').html('It was previously posted in the Huffpost Politics section.')
			} else {
				$('.changed').html('');
			}
		}
	});

}).call(this);
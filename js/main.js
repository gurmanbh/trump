(function(){          

	d3.csv ('data/trump.csv', function(error, dataset){
		
		$('.box').on('mousemove', function(e){

		    var buffer = 40;
		    var tooltip_height = $('#tooltip').height();
		    var tooltip_width = $('#tooltip').width();
		    $('#tooltip').css({
		        top: e.pageY - tooltip_height - buffer,
		        left: e.pageX - tooltip_width / 2
		    })
		    $('#tooltip').addClass('visible');
		    var usingid = $(this).attr('data-id');
		    baketooltip(usingid);
		    $(this).addClass('active');
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
			$('.headline').html('<a href="'+obj.link+'">'+obj.headline.split('|')[0].trim()+'</a>')
			$('.section').html('was published in the '+obj.publishedin+' section.')
		}
	});

}).call(this);
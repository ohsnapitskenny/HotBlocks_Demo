window.onload = function(){
   $('aside').on('click', function(e){
   		console.log(e)
   		if(e.target.dataset.number==1){
   			$('section').find('img:nth-child(1)').toggle();
   			if($(e.target.children["0"]).prop('checked')){
   				$(e.target.children["0"]).prop('checked', false);
   			}else{
   				$(e.target.children["0"]).prop('checked', true);
   			}
   		}
   		if(e.target.dataset.number==2){
   			$('section').find('img:nth-child(2)').toggle();
   			if($(e.target.children["0"]).prop('checked')){
   				$(e.target.children["0"]).prop('checked', false);
   			}else{
   				$(e.target.children["0"]).prop('checked', true);
   			}
   		}
   		if(e.target.dataset.number==3){
   			$('section').find('img:nth-child(3)').toggle();
   			if($(e.target.children["0"]).prop('checked')){
   				$(e.target.children["0"]).prop('checked', false);
   			}else{
   				$(e.target.children["0"]).prop('checked', true);
   			}
   		}
   		if(e.target.dataset.number==4){
   			$('section').find('img:nth-child(4)').toggle();
   			if($(e.target.children["0"]).prop('checked')){
   				$(e.target.children["0"]).prop('checked', false);
   			}else{
   				$(e.target.children["0"]).prop('checked', true);
   			}
   		}
   		if(e.target.dataset.number==5){
   			$('section').find('img:nth-child(5)').toggle();
   			if($(e.target.children["0"]).prop('checked')){
   				$(e.target.children["0"]).prop('checked', false);
   			}else{
   				$(e.target.children["0"]).prop('checked', true);
   			}
   		}
   })
}

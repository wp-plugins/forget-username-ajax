jQuery(document).ready(function($){
	var $=jQuery;

	$('#lostusername').submit(function(event){
		event.preventDefault();

		$('#showmsg').remove();

		$('<div id="showmsg"></div>').prependTo('#lostusername');

		var postData=getPostData('#lostusername *[name]');
		postData['action']="my_username";

		var url=$('#lostusername').attr('action');
		var emailVal=$('#fu_email').val();
		$.ajax({
			type : "post",
			url : url,
			data : postData,
			success: function(response){
				$('#showmsg').html(response);
			}
		}) ;
	});

	function getPostData(selector){
		var postData={};
		$.each($(selector),function(index,el){
			el=$(el);
			postData[el.attr('name')]=el.attr('value');
		});
		return postData
	}
});


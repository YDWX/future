function showAct(){
	$("#msg").css('display','none');
	$("#act").css('display','block');
}
function showMsg(){
	console.log("ok");
	$("#msg").css('display','block');
	$("#act").css('display','none');
}
function showNewspaper(){
	$("#newspaper").css('display','block');
	$("#Ebook").css('display','none');
}
function showEbook(){
	$("#newspaper").css('display','none');
	$("#Ebook").css('display','block');
}
function showMicroPlatform(){
	$("#footer_item2_copyright").css('display','none');
	$("#footer_item2_microPlatform").css('display','block');
}
function showCopyright(){
	$("#footer_item2_copyright").css('display','block');
	$("#footer_item2_microPlatform").css('display','none');
}
function check_search(){
	var search_data = $('#search_content').val();
	if(search_data == null || search_data == ''){
		return false;
	}
	else{
		return true;
	}
}
var bmenuDisplay = false;
function fnMenuDisplay(){
	if(!bmenuDisplay){
		$('#menu_bar ul').show();
		bmenuDisplay = true;
	}else{
		$('#menu_bar ul').hide();
		bmenuDisplay = false;
	}
}

// to check of li when clicked
$("ul").on("click","li",function(){
	$(this).toggleClass("selected")
});

// $(LI).ON("CLICK",FUNCTINO()) WORKS ONLY ON EXISTING LI'S, TO MAKE IT WORK FOR LI'S APPENDED IN FUTURE, WE WRITE:

/* $("UL").ON("CLICK","LI",FUNCTION()) WHICH TELLS CLICK WILL WORK IF ANY LI CLICKED INSIDE UL,SINCE UL EXISTED SINCE BEGINNING,IT WILL WORK 
UNLIKE LI WHICH MIGHT BE APPENDED*/

//TO MAKE DELETE FUNCTION WHEN CLICKED ON SPAN
$("ul").on("click","span",function(e){
	e.stopPropagation(); 			//SINCE SPAN INSIDE LI,CLICKING IT ALSO CLICKS LI,HENCE TO STOP SPAN CLICK FROM PROPAGATING TO ITS ANCESTORS
	$(this).parent().fadeOut(500,function(){	//REMOVES THE PARENT OF SPAN WHICH IS LI,HENCE LI CONATINING THIS SPAN DELETED
		$(this).remove();						//NOW THIS IS THE ELEMENT INVOKING FADEOUT,HENCE PARENT() NOT NEEDED 
	});
});

$("input[type='text']").keypress(function(e){
	if(e.which==13)
	{
		var txt=$(this).val();//GET TEXT WRITTEN IN INPUT WHEN ENTER PRESSED(ENTER ASCII=13)
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>  "+txt+"</li>");//TO ADD NEW ELEMENT(TXT FROM INPUT BOX)(TOGETHER WITH HTML TAGS) TO UL WITH GIVEN TEXT
		$(this).val("");
	}
});
$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").slideToggle();
})
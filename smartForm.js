// Your jQuery goes here

var userData = {

	name: '',
	email: '',

	html: {likes:[],dislikes:[]},
	css: {likes:[],dislikes:[]},
	js: {likes:[],dislikes:[]},
	strength: {css: '', js: '', html: ''},
	currentQuestion: '#welcome'



};

//console.log(localStorage.getItem('userData'));
if(localStorage.getItem('userData')){
	userData = JSON.parse(localStorage.getItem('userData'));
	
    $('#welcome').show();
	$(userData.currentQuestion).hide();
	
	$('#name').val(userData.name);
	$('#email').val(userData.email);
}
else
{
	localStorage.setItem('userData', JSON.stringify(userData));
}  
$('#start').click(function(){

	console.log("start");
	$('#welcome').hide();
	$('#q1').show();
	userData.currentQuestion="#q1";
	localStorage.setItem('userData', JSON.stringify(userData));
});


$('name').change(function(event){


	console.log($('#name').val());
});

$('#q1next').click(function(){
 if($('#name').val() && $('#email').val()){


 userData.name = $('#name').val();
 userData.name = $('#email').val();
 localStorage.setItem(userData);
 $('#q2').show();
 $('#q1').show();
  }
  else{
  	alert('Please enter name & email');
  }

});
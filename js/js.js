var url="https://rawgit.com/christiancampos123/PaginaNoticias/master/Json";
var cargado = 1;
var ok = false;

$(document).ready(function(){

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height() && ok == true) {
        cargar();
	}
		
});

 $(".auto").click(function(){
	if(ok==false){
		$("#si").show();
		$("#no").hide();
		ok=true;
		$("#botoncarg").hide();
	}else{
		$("#si").hide();
		$("#no").show();
		ok=false;
		$("#botoncarg").show();
	}

});

});



function cargar() {
    if (cargado < 3) {
		$("#cargando").show();
			$.getJSON(url + cargado + ".json", function (jsonObject) {
				mijson(jsonObject);
				$("#cargando").hide();
				if(cargado==3){
					$('#botoncarg').text('No hay más Noticias');
				}
			});
			cargado++;
		} else {
        $('#botoncarg').text('No hay más Noticias');
	}
};

function mijson(json) {
    $.each(json, function (i, item) {
		$("#nuevas").append(
		'<div class="row-sm-4 thumbnail">'+
		'<div class="row">'+
		'<div class="col-sm-3">'+
		'<img class="foto" src= "'+ item.imgbig +'" alt= "foto">'+
		'</div>'+
		'<div class="col-sm-9">'+ 
		'<div class="well well-sm">'+
		'<b>'
		+ item.title +
		'</b>'+
		'</div>'+ item.description + 
		'<br>' + "Que el corazon de las cartas esté con vosotros."+
		'<div class="noticiaC">'+
		'</div>'+
		'<div class="fecha">'+ item.datetime +
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'
		);


	});
};
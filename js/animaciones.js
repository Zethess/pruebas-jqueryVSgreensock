(function(){


	

	function mover(dir){
		var $cajaRoja = $(".cajaRoja");
		$cajaRoja.clearQueue();

		//Si quiere realizar varias animaciones es necsarios declarar lo siguiente
		var $cajaAzul = $(".cajaAzul");
		var tl = new TimelineMax();
		switch( dir ){

			case "arr":
				$cajaRoja.animate({
					top: "-=100",
				}, 450);

				tl.to( $cajaAzul, 0.45, {y:"-=100"} );

			break;

			case "aba":
				$cajaRoja.animate({
					top: "+=100",
				}, 450);

				tl.to( $cajaAzul, 0.45, {y:"+=100"} );
			break;

			case "izq":
				$cajaRoja.animate({
					left: "-=100",
				}, 450);

				tl.to( $cajaAzul, 0.45, {x:"-=100"} );
			break;

			case "der":
				$cajaRoja.animate({
					left: "+=100",
				}, 450);

				tl.to( $cajaAzul, 0.45, {x:"+=100"} );
			break;


			case "res": 

				$cajaRoja.animate({
					top: "0px",
					left: "0",
					width: "50px",
					height: "50px"
				}, 450);

				tl.to( $cajaAzul, 0.45, {
					 x:"0",
					 y:"0",
					 width: "50px",
					 height: "50px",
					 backgroundColor: "blue"
				});

		}

	}

	// Funcion del keypress en la pagina, para moverlo con las teclas direccionales
	$(document).on("keydown",function(e){

		var keyCode = e.keyCode;
		//console.log(keyCode);

		switch( keyCode ){
			case 38:
            case 87:
				mover("arr");
			break;

			case 40:
            case 83:
				mover("aba");
			break;

			case 39:
            case 68:
				mover("der");
			break;			

			case 37:
            case 65:
				mover("izq");
			break;

			default:
				mover("res");

		}


	});

	$("#botAncho").on("click",function(){
		var $cajaRoja = $(".cajaRoja");
		$cajaRoja.clearQueue();

		//Si quiere realizar varias animaciones es necsarios declarar lo siguiente
		var $cajaAzul = $(".cajaAzul");
		var tl = new TimelineMax();

		$cajaRoja.animate({
			width: "+=150",
			height: "+=150",
			backgroundColor: "blue"
		},500);
		tl.to( $cajaAzul, 0.5,{
			width: "+=150",
			height: "+=150"
		})
		//si no queremos que se ejecute con las otras dos de arriba, si no despues, habria que concatenarse
		//el 0.3 es para decirle que se ejecutara 0.2 sg antes de que termine la de arriba que son 0.5
			.to( $cajaAzul, 0.3, { backgroundColor: "red"}, "-=0.3");


	});

	// Funcion de los botones
	$("button").on('click', function() {
		
		var dir = $(this).data("dir");
		mover( dir );

	});

})();

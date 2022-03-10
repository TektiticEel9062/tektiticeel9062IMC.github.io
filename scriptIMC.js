calc = document.getElementById("calc");
	peso = document.getElementById("kg");
	altura = document.getElementById("m");
	imc = document.getElementById("imc");
	est = document.getElementById("est");


      
    function MostrarResultadoIMC (imc)
      { if(imc<18.5){ var mensaje = "Tu IMC es de: " + imc + " Bajo de Peso";}
        else if(imc>=18.5 && imc<=24.9){ var mensaje = "Tu IMC es de: " + imc +  " Peso saludable";}
        else if(imc>=25 && imc<=29.9){ var mensaje = "Tu IMC es de: " + imc +  " Sobrepeso";}
        else if(imc>=30 && imc<=34.9){ var mensaje = "Tu IMC es de: " + imc +  " Obesidad grado 1";}
        else if(imc>=35 && imc<=39.9){ var mensaje = "Tu IMC es de: " + imc +  " Obesidad grado 2";}
        else if(imc>=40){ var mensaje = "Tu IMC es de: " + imc + " Obesidad morbida";}
        
        alert (mensaje);
      }
    
    
	calc.onclick = function(){
		if(peso.value!="" && altura.value!=""){
			imcCalc = (peso.value / (altura.value* altura.value));
			imc.innerHTML = imcCalc
			console.log(imcCalc);

			if(imcCalc<18.5){ est.innerHTML = "Bajo de peso";
            document.body.style.backgroundColor = 'blue'; }
			else if(imcCalc>=18.5 && imcCalc<=24.9){ est.innerHTML = "Peso saludable";  document.body.style.backgroundColor = 'green';}
			else if(imcCalc>=25 && imcCalc<=29.9){ est.innerHTML = "Sobrepeso";  document.body.style.backgroundColor = 'yellow';}
			else if(imcCalc>=30 && imcCalc<=34.9){ est.innerHTML = "Obesidad grado 1";  document.body.style.backgroundColor = 'orange';}
			else if(imcCalc>=35 && imcCalc<=39.9){ est.innerHTML = "Obesidad grado 2";  document.body.style.backgroundColor = 'DarkOrange';}
            else if(imcCalc>=40){ est.innerHTML = "Obesidad morbida";  document.body.style.backgroundColor = 'red';}
            MostrarResultadoIMC(imcCalc)
    }   
}


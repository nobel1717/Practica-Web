var total = 0;

function area(){
    var v1 = document.getElementById("n1").value;
    total = Math.PI * Math.pow(v1,2);
    total = total.toFixed(2);
    console.log("Área del círculo: " + total);
    Swal.fire(
        total,
        'Es el área del círculo',
        'success'
      );
}

function perimetro(){
    var v1 = document.getElementById("n2").value;
    total = Math.PI * 2 * Math.pow(v1,2);
    total = total.toFixed(2);
    console.log("Perímetro del círculo: " + total);
    Swal.fire(
        total,
        'Es el perímetro del círculo',
        'success'
      );
}

function fibo(){
    var v1 = document.getElementById("n3").value;
    
    let fibonacci = [0, 1];
    let numero = 0;
    for (i = 0; i <= v1; i++) {
        numero = fibonacci.at(-1) + fibonacci.at(-2);
        fibonacci.push(numero);
    }
    console.log("El número es:" + fibonacci);
    total = fibonacci[fibonacci.length - 1];
    
    Swal.fire(
        'Listo',
        'El resultado final es: ' + total,
        'success'
      );

}
function ecua(){
    var a = document.getElementById("n4").value;
    var b = document.getElementById("n5").value;       
    var c = document.getElementById("n6").value;
    if (a==0){
        Swal.fire(
            'Error',
            'El primer valor fue 0 o nulo',
            'error'
          );
    }else {
        
        total=b*b-4*a*c;
        if(total>0)
        {
            var x1 = (-b+(Math.sqrt(total)))/(2*a);
            var x2 = (-b-(Math.sqrt(total)))/(2*a);
            
            Swal.fire(
                'Listo',
                'X1= ' + x1 + ' X2= ' + x2,
                'success'
            );
        }
        if(total==0)
        {
            var x1= (-b)/2*a;
            var x2= (-b)/2*a;
            
            Swal.fire(
                'Listo',
                'X1= ' + x1 + ' X2= ' + x2,
                'success'
            );
        }
        if (total<0)
        {
            alert("Raices Imaginarias");
        }
    }

}

function limitDecimalPlaces(e, count) {
    if (e.target.value.indexOf('.') == -1) { return; }
    if ((e.target.value.length - e.target.value.indexOf('.')) > count) {
      e.target.value = parseFloat(e.target.value).toFixed(count);
    }
  }
  
  function isNumberKey(evt)
  {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  
    return true;
  }
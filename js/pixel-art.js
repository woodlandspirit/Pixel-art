let paleta = document.getElementById('paleta');
let grillaPixeles = document.getElementById('grilla-pixeles');

var nombreColores = ['White', 'LightYellow',
'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
'LightGreen', 'PaleGreen', 'PaleTurquoise',
'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
'BlueViolet', 'DarkViolet', 'DarkOrchid',
'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Función que genera la paleta de colores.

function paletaColores(){
  for(let i = 0; i < nombreColores.length; i++){
    let color = document.createElement('div');
    color.style.backgroundColor = (nombreColores[i]);
    color.className = ('color-paleta');
    paleta.appendChild(color);
  }
}

// Función que crea los píxeles en la paleta.
function generadorPixeles() {
  for (let i=0; i < 1750; i++) {
    let pixel = document.createElement('div');
    grillaPixeles.appendChild(pixel);
  }
}

// Aquí se logra que al clickear un elemento de la paleta, el indicador de color refleje el color seleccionado.

let indicadorColor = document.getElementById('indicador-de-color');
paleta.addEventListener('click', cambiarColor);

function cambiarColor(e) {
  indicadorColor.style.backgroundColor = e.target.style.backgroundColor;
}

// Aquí se programa la funcionalidad para que el pincel coloree la grilla.

grillaPixeles.addEventListener('click', colorear);

function colorear(e){
  e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
}

// Aquí se detecta si el cursor está activo o no y en base a eso se define qué acción ejecutar.

let estadoCursor = false;

grillaPixeles.addEventListener('mousedown', presionado);
grillaPixeles.addEventListener('mouseup', noPresionado);
grillaPixeles.addEventListener('mouseover', enMovimiento);


function presionado(e) {
  estadoCursor = true;
  colorear(e);
}

function noPresionado(_) {
  estadoCursor = false;
}

function enMovimiento(e) {
  if(estadoCursor){
    colorear(e);
  }
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
(function() {
  // Se guarda el color de la rueda en colorActual
  colorActual = colorPersonalizado.value;
  // Completar para que cambie el indicador-de-color al colorActual
  indicadorColor.style.backgroundColor = colorActual;
})
);

// Habilitación del botón Borrar Todo.

$('#borrar').click(function() {
  $('#grilla-pixeles').children().animate({'background-color': 'white'}, 850);
});

// Carga de los superhéroes en la grilla de píxeles, una vez clickeados.

$('#batman').click(function(){
  cargarSuperheroe(batman);
});

$('#wonder').click(function(){
  cargarSuperheroe(wonder);
});

$('#flash').click(function(){
  cargarSuperheroe(flash);
});

$('#invisible').click(function(){
  cargarSuperheroe(invisible);
});

// Habilitación del botón Guardar. 

$("#guardar").click (function () {
  guardarPixelArt();
});

$(document).ready(function(){
  $('body').hide().fadeIn(500);
  paletaColores();
  generadorPixeles();
});
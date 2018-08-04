'use strict';

//ejercicio 4//
//var listElem = document.querySelector('.container');
//var content = '<img src= "http://via.placeholder.com/350x150" alt= imagen> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';
//listElem.innerHTML += content;

//ejercicio 5//

var ulList=document.querySelector ('ul');
var list= '';
for (var i=0; i<3; i++){
  list += '<li>' + (i+1) + '</li>';
}
ulList.innerHTML=list;

//ejercicio 6//

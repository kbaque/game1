//start level easy

var seconds = 30;
$("#time").click(function(){
    document.getElementById("time").innerHTML = seconds;
    setInterval(function(){
    seconds--;
    if (seconds === 0){
       alert('Game Over, you won!!');
       clearInterval(seconds);
    }
    document.getElementById("time").innerHTML = seconds;
 }, 800);

});


// var timer = function(){
//   alert()
// }
//
$('#level1').click(function(){
  alert('Start');
});

let index=0;
let twoClicks = [];
let divIds = [];

function one(){
   populate($(this));
   compare();
 //  check();
   document.getElementById('img1').style.display = 'block';
index++;
}

function two(){
  populate($(this));
  compare();
  document.getElementById('img2').style.display = 'block';
index++;
}

function three(){
  populate($(this));
  compare();
  document.getElementById('img3').style.display = 'block';
index++;
}

function four(){
  populate($(this));
  compare();
  document.getElementById('img4').style.display = 'block';
index++;
}

function five(){
  populate($(this));
  compare();
  document.getElementById('img5').style.display = 'block';
index++;
}

function six(){
  populate($(this));
  compare();
  document.getElementById('img6').style.display = 'block';
index++;
}

const $child = $('.child');

$child.eq(0).on('click', one);
$child.eq(1).on('click', two);
$child.eq(2).on('click', three);
$child.eq(3).on('click', four);
$child.eq(4).on('click', five);
$child.eq(5).on('click', six);


 function populate(id){
  twoClicks.push(id.find("img").attr('src'));
  divIds.push([index]=id.attr('id'));
 //  console.log(id.attr('id'));
 // console.log(twoClicks[index] +" adress");
console.log(divIds);
console.log(twoClicks);

}

function compare(){

 if( twoClicks.length===2){
  if ( twoClicks[0]!==twoClicks[1]){
   $(`#${divIds[0]}`).find("img").css("display", "none");
    $(`#${divIds[1]}`).find("img").css("display", "none");
    twoClicks=[];
    divIds=[];
      console.log (`${divIds[0]}`);
      console.log (`${divIds[1]}`);
      alert ("no match!");


    }

   else if ( twoClicks[0]===twoClicks[1]){
      //keep images
      twoClicks=[];
      divIds=[];
      alert ("match!");
    }
  }
}

// populate();
   compare();




//     function check(){
//  ( twoClicks[0]!==twoClicks[1]) ? alert("Won") : alert("try again");
// };

// check();


// function myFunction() {
//   var hide = document.getElementById('#child1');
//   if (hide.style.display === 'block'){
//       hide.style.display = 'none';
//   }
// }

// myFunction();





//hiding divs
$('#level1').click(function(){
  $('#child1').toggle();
});
$('#level1').click(function(){
  $('#child2').toggle();
});
$('#level1').click(function(){
  $('#child3').toggle();
});
$('#level1').click(function(){
  $('#child4').toggle();
});
$('#level1').click(function(){
  $('#child5').toggle();
});
$('#level1').click(function(){
  $('#child6').toggle();
});



// start level medium
//   $('#level2').click(function(){
//   alert('Start');
// });

// $('#level1').click(function(){
//   $('#child1').show();
// });
// $('#level1').click(function(){
//   $('#child2').toggle();
// });
// $('#level1').click(function(){
//   $('#child3').toggle();
// });
// $('#level1').click(function(){
//   $('#child4').toggle();
// });
// $('#level1').click(function(){
//   $('#child5').toggle();
// });
// $('#level1').click(function(){
//   $('#child6').toggle();




//adding first line of div
  let $parentDiv = document.createElement('div');//<div class="container" >
$parentDiv.setAttribute('class', 'container');

  let $hope = document.createElement('div');
  $parentDiv.appendChild($hope);
$hope.setAttribute('id', 'child1');
$hope.setAttribute('class', 'child');

 let $please = document.createElement('div');
  $parentDiv.appendChild($please);
$please .setAttribute('id', 'child2');
$please .setAttribute('class', 'child');

 let $faith = document.createElement('div');
  $parentDiv.appendChild($faith);
$faith.setAttribute('id', 'child3');
$faith.setAttribute('class', 'child');

document.body.appendChild($parentDiv);

//adding second line of divs
  let $parent2 = document.createElement('div');
 $parent2.setAttribute('class', 'container');

  let $box1 = document.createElement('div');
  $parent2.appendChild($box1);
$box1.setAttribute('id', 'child4');
$box1.setAttribute('class', 'child')

  let $box2 = document.createElement('div');
  $parent2.appendChild($box2);
$box2.setAttribute('id', 'child5');
$box2.setAttribute('class', 'child');

  let $box3 = document.createElement('div');
$parent2.appendChild($box3);
$box3.setAttribute('id', 'child6');
$box3.setAttribute('class', 'child');

document.body.appendChild($parent2);

//adding images to divs

// $('#first').append ('<img src="Images/sun.png" />');
$('#child1').append('<img src="Images/tea.png" />');
$('#child2').append('<img src="Images/tea.png" />');
$('#child3').append('<img src="Images/tea.png" />');
$('#child4').append('<img src="Images/tea.png" />');
$('#child5').append('<img src="Images/tea.png" />');
$('#child6').append('<img src="Images/tea.png" />');




// ///start level hard

$('#level3').click(function(){
  alert('Start');
});
///first set of divs
// let $parent3 = document.createElement('div');
//  $parent3.setAttribute('class', 'container');

//   let $div1 = document.createElement('div');
//   $parent3.appendChild($div1);
// $div1.setAttribute('id', 'child7');
// $div1.setAttribute('class', 'child')

//   let $div2 = document.createElement('div');
//   $parent3.appendChild($div2);
// $div2.setAttribute('id', 'child8');
// $div2.setAttribute('class', 'child');

//   let $div3 = document.createElement('div');
// $parent3.appendChild($div3);
// $div3.setAttribute('id', 'child9');
// $div3.setAttribute('class', 'child');

// document.body.appendChild($parent3);

// ///second set of divs
// let $parent4 = document.createElement('div');
//  $parent4.setAttribute('class', 'container');

//   let $last1 = document.createElement('div');
//   $parent4.appendChild($last1);
// $last1.setAttribute('id', 'child10');
// $last1.setAttribute('class', 'child');

//   let $last2 = document.createElement('div');
//   $parent4.appendChild($last2);
// $last2.setAttribute('id', 'child11');
// $last2.setAttribute('class', 'child');

//   let $last3 = document.createElement('div');
// $parent4.appendChild($last3);
// $last3.setAttribute('id', 'child12');
// $last3.setAttribute('class', 'child');

// document.body.appendChild($parent4);









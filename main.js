/*
 * Runs overall js scrips file
 * Used w3school help get js working for the front end devs
 * Name: Alex Kauffman
 */

//Font list Modal
var fontModal = document.getElementById("myFontList");

// Get the button that opens the modal
var fontBtn = document.getElementById("myFontBtn");

// Get the <span> element that closes the modal
var fontspan = document.getElementsByClassName("fontclose")[0];

// When the user clicks the button, open the modal 
fontBtn.onclick = function () {
  fontModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
fontspan.onclick = function () {
  fontModal.style.display = "none";
}

//Help Modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

//Save output Modal
var savemodal = document.getElementById("saveModal");

// Get the button that opens the modal
var savebtn = document.getElementById("saveButton");

var saveclosebtn = document.getElementById("saveCloseButton");

// Get the <span> element that closes the modal
var savespan = document.getElementsByClassName("saveclose")[0];

// When the user clicks the button, open the modal 
savebtn.onclick = function () {
  savemodal.style.display = "block";
}

saveclosebtn.onclick = function () {
  savemodal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
savespan.onclick = function () {
  savemodal.style.display = "none";
}

//Closes window
var closewelcomebutton = document.getElementById("closewelcome");

closewelcomebutton.onclick = function(){
  welcomescreen.style.display = "none";
}



//Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



//data array 
//Big fancy font data array
var bigJSON = [];

// small data array that will use for the queue
var tempItems = [];

//Loop through json file and list to hmtl with buttons next to it
$.getJSON("example.json", function (data) {
  //assigning bgJson to data
  bigJSON = data;

  //print the big data 
  console.log(bigJSON);

  //get the ul item from html
  var ul = document.getElementById('dynamic-list');

  //for each to loop through the list andn print to li item with button
  bigJSON.forEach(function (item) {

    //create list
    var li = document.createElement('li');

    //label the font names and add buttons for user to select each fonts
    li.innerHTML += item.fontName + "<button id='btn' class='addfontbutton'>" + "Add font" + "</button>";

    //apply list to ul
    ul.appendChild(li);

  });

  $('#btn').click(function () {
    var temp = $('#btn').val();
    tempItems.push(temp);
    console.log(tempItems);

    var newTempData = '';
    $.each(tempItems, function (key, value) {
      newTempData = '<div class="items" draggable="true"><div class="grabtool"><div class="bar"></div><div class="bar"></div></div><h1>' + value.fontName + '</h1></div></div>'
    });
    $('#sortable').append(newTempData);
  });
});
























//JSONItems += '<li>' + value.fontName + '<button class="addtiemsbutton">Add fonts to Queue</button>' +'</li>'

/*
 When user select one items on a list, add that to a temp array so i can calc all items in that list to genrate a new fonts with ml
 */

// newFontDatas += '<div class="items" draggable="true"><div class="grabtool"><div class="bar"></div><div class="bar"></div></div><h1>' + value.fontName + '</h1></div></div>'

// $(document).ready(function(){
//   $.getJSON("example.json", function(data){
//     var newFontDatas = '';
//     $.each(data, function(key, value){
//       newFontDatas += '<div class="items" draggable="true"><div class="grabtool"><div class="bar"></div><div class="bar"></div></div><h1>' + value.fontName + '</h1></div></div>'
//     });
//     $('#sortable').append(newFontDatas);
//   });
// });
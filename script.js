var yard = document.getElementById("yard");
var centimenter= document.getElementById('Centimeter')
var inches = document.getElementById("inches")
var miles = document.getElementById('Miles')
var convert = document.getElementById("convert")
var instruction = document.getElementById("instruction")
var convert = document.getElementById("convert")
const form =document.getElementById('form')
var output =document.getElementById("output")
let convertType

//instruction on click
yard.addEventListener('click', () =>{
  instruction.innerHTML = 'Type in a number of yards, then click convert'
   convertType = 'yards'
})

centimenter.addEventListener('click', () => {
  instruction.innerHTML = 'Type in a number of centimeters, then click convert'
  convertType = 'centimeters'
})

inches.addEventListener('click', () =>{
    instruction.innerHTML = 'Type in a number of inches, then click convert'
    convertType = 'inches'
  })

  miles.addEventListener('click', () =>{
    instruction.innerHTML =  'Type in a number of miles, then click convert'
    convertType = 'miles'
  })

  
//   prevent default
form.addEventListener('submit', function(event){
    event.preventDefault ()
  
    let inputText = document.getElementById('inputText').value

    if (inputText) {
        
        if (convertType == 'yards') {
          document.getElementById('output').value = inputText * 91.44 + "centimeters"
        }

        if (convertType == 'centimeters')  {
          document.getElementById('output').value =inputText * 0.0109361 + "yards"
        }

        if (convertType == 'inches')  {
          document.getElementById('output').value =inputText * 1.5783 + "miles"
        }

        if (convertType == 'miles')  {
          document.getElementById('output').value =inputText * 63360 + "inches"
        }
    }
})
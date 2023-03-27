const selectedColor = document.getElementById("selected-color")
const selectedScheme = document.getElementById("color-scheme")
const containerHexColor = document.getElementById("container-hex-colors")
const containerColors = document.getElementById("container-colors")

let arrayOfColors =[]

renderPlaceHolder()

function renderColors (){
    let htmlHex = ``
    let htmlColors = ``
    for(let color of arrayOfColors){
        const colorHexValue = color.hex.value
        htmlHex += `<div class="hex-colors-display"><p>${colorHexValue}<p></div>` 
        
        htmlColors += `<div class="colors-display" style="background-color:${colorHexValue}"></div>`
    }

    containerHexColor.innerHTML = htmlHex
    containerColors.innerHTML = htmlColors
}


document.getElementById("btn-getScheme").addEventListener("click", function(){
    const selectedColorHexValue = selectedColor.value.substr(1,7).toUpperCase()
    const selectedSchemeValue = selectedScheme.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColorHexValue}&mode=${selectedSchemeValue}`)
    .then(res => res.json())
    .then(data => {
        arrayOfColors = data.colors
        renderColors()
    })
})

function renderPlaceHolder(){
  
    let htmlDescriptionPlaceholder = `<div class="hex-colors-display"><p>#000000<p></div>
    <div class="hex-colors-display"><p>#102316<p></div>
    <div class="hex-colors-display"><p>#20462B<p></div>
    <div class="hex-colors-display"><p>#2F6A40<p></div>
    <div class="hex-colors-display"><p>#3D8F55<p></div>`

    let htmlColorsPlaceholder = `<div class="colors-display" style="background-color: #000000"></div>
    <div class="colors-display" style="background-color: #102316"></div>
    <div class="colors-display" style="background-color: #20462B"></div>
    <div class="colors-display" style="background-color: #2F6A40"></div>
    <div class="colors-display" style="background-color: #3D8F55"></div>`

    containerHexColor.innerHTML = htmlDescriptionPlaceholder
    containerColors.innerHTML =  htmlColorsPlaceholder

}

let myImages = ["olaf.jpg", "cinderella.jpg", "minion.jpg","frozen.jpg", "mickey.jpg", "princess.jpg" ]
let currentIndex = 0
let highestIndex = myImages.length - 1
let imageToDisplay
const image= $("#myimage")
const imgSrc = image.attr("src")


window.onload = function(){
    displayImage(currentIndex)
    $("#prev-btn").hide()
}
 
function displayImage(imageIndex) {
    imageToDisplay = imgSrc + myImages[imageIndex]
    image.attr('src', imageToDisplay)

    if (currentIndex == highestIndex)
        $("#next-btn").hide()
    else
        $("#next-btn").show()
}

$("#next-btn").on("click", function showNextPicture() {
    currentIndex += 1

    

    displayImage(currentIndex)
    $("#prev-btn").show()
    
})

$("#prev-btn").on("click",function showNextPicture() {
    currentIndex -= 1
    displayImage(currentIndex)

    if (currentIndex==0) {
        $("#prev-btn").hide()
    }
})

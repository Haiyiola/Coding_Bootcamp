let previousImg = document.getElementById("prev")
let nextImg = document.getElementById("next")
let prevArticle = document.getElementById("prev-article")
let nextArticle = document.getElementById("next-article")

nextImg.addEventListener("click", function(){
    prevArticle.style.display = "none"
    nextArticle.style.display = "block"
    nextArticle.style.display = "flex"
    nextArticle.style.flexDirection ="row"
})

previousImg.addEventListener("click", function(){
    nextArticle.style.display = "none"
    prevArticle.style.display = "block"
    prevArticle.style.display = "flex"
    prevArticle.style.flexDirection = "row"
})
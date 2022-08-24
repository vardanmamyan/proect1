const addBtn = document.querySelector(".btn");
const addSing = document.querySelector(".sing");
const drop = document.querySelector(".backdrop")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const Input = document.querySelectorAll("input")
const Film_menu = document.querySelector(".film_menu")
const div2 = document.querySelector(".div2")
const Movie = []
const updateUI = () => {
    if (Movie.length === 0 ){
        Film_menu.style.display = "flex"
    }
    else{
        Film_menu.style.display = "none"
    }
}
const toggleDrop = ()=>{
    drop.classList.toggle("visible")
}
const cancel1 = ()=>{
    toggleDrop();
    div2.classList.remove("visible")
}
const confirmDeleteMovie = (MovieId) =>{
    let Index = 0;
    for(let movie of Movie)
{
    if(movie.id == MovieId){
        break;
    }
    Index++;
}
Movie.splice(Index,1);
const listRoot = document.getElementById("Move");
listRoot.children[Index].remove();
cancel1();
updateUI();
}
const delateMovie =(movieId)=>{
    div2.classList.add("visible");
    toggleDrop()
    const btn4 = document.querySelector(".btn4")
    let btn5 = document.querySelector(".btn5")
    btn5.replaceWith(btn5.cloneNode(true));
    btn5 = document.querySelector(".btn5")
    btn4.addEventListener("click",cancel1);
    btn5.addEventListener("click",confirmDeleteMovie.bind(null,movieId))
}
const clearInputs = ()=>{
    Input.forEach(function(val){
        return val.value = ""
    })
}
const renderMovieElement = (id,title,imgUrl,Rating) =>{
    const newMovieElement = document.createElement("li")
    newMovieElement.classList = "movie-element";
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src = "${imgUrl}" alt ="${title}" style="max-height:125px; height:125;">
</div>
    <div class = "movie-element__info">
    <h2>${title}</h2>
    <p>${Rating}/5 stars</p>
    </div>
    `;
    newMovieElement.addEventListener("click", delateMovie.bind(null,id));
    const Ul = document.querySelector("#Move");
    Ul.append(newMovieElement)
};
const togModel =()=>{
    addSing.classList.toggle("visible")
    toggleDrop()
};
const addBtn2 =()=>{
    togModel()
    clearInputs()
}
const addHand = () =>{
    const Title = Input[0].value
    const Url = Input[1].value
    const Rating =  Math.round(Input[2].value)
if(Title.trim() === "" ||
   Url.trim() === "" ||
    Rating<1 || Rating>5 ||
    Title.length>30
)
{
    alert("Please input valid value")
    clearInputs()
}
else {
    const newObj = {
        id:Math.random(),
        title:Title,
        imgUrl:Url,
        rating:Rating
    }
    Movie.push(newObj)
    console.log(Movie)
    togModel()
    clearInputs()
    renderMovieElement(
        newObj.id,
        newObj.title,
        newObj.imgUrl,
        newObj.rating
    )
    updateUI()
}
}
addBtn.addEventListener("click",togModel);
btn2.addEventListener("click",addBtn2);
btn3.addEventListener("click",addHand);
Film_menu.addEventListener("click",togModel);
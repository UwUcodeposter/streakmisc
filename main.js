//UwUcodeposter Watermark
const streakNum = document.getElementById("streakNum");
const fireImage = document.getElementById("fireImage");
let points = 0;

console.log("Note : your browser must support `corner-shape` for the button CSS to load")
alert("Note : your browser must support `corner-shape` for the button CSS to load");

setInterval(() => {
    pointsCheck();
    imageCheck();
}, 2000);

function increase() {
    points += 1;
    pointsCheck();
    imageCheck();
}

function reset() {
    points = 0;
    pointsCheck();
    imageCheck();
}

function imageCheck() {
    if (points < 6) {
        fireImage.src = "Images/Orange\ Fire.jpeg";
        fireImage.alt = "Picture of Orange Fire";
    }
    else if (points > 6 && points < 27) {
        fireImage.src = "Images/Blue\ Fire.jpg";
        fireImage.alt = "Picture of Blue Fire";
    }
    else if (points > 27) {
        fireImage.src = "Images/Purple\ Fire.jpg";
        fireImage.alt = "Picture of Purple Fire";
    }
}

function pointsCheck() {
    streakNum.innerText = points;
}

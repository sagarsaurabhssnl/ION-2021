var siteState = "home";
var preState = "home";
const showcase = document.getElementById("showcase");
const mainSite = document.getElementById("main-site");
const footer = document.getElementById("footer");

// const fileUpload = document.getElementById('fileUpload');
// fileUpload.addEventListener('change', (event) => {
//     const files = event.target.files;
//     console.log('files', files);
// });

async function fetch() {
    var museums = db.collectionGroup('products').where('productName', '==', 'demoProduct');
    museums.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data());
        });
    });

    var storageFetch = await storage.child("demoUser/1.png").getDownloadURL().then(
        (url) => {
            document.querySelector('img').src = url;
        }).catch(function (error) {
            console.error(error);
        });
    console.log(storageFetch);
}

// fetch();

window.onload = () => {
    var loader = document.getElementById("loader-container");
    loader.style.visibility = "hidden";
    var body = document.getElementById("body");
    body.style = "height"
}

function hideShowcase() {
    showcase.style.display = "none";
}

function showShowcase() {
    showcase.style.display = "block";
}

function hideHome() {
    mainSite.style.display = "none";
}

function showHome() {
    mainSite.style.display = "block";
}


function stateChanged() {
    if (siteState === "home") {
        showHome();
        hideShowcase();
    } else if (siteState === "showcase") {
        hideHome();
        showShowcase();
    } else if (siteState === "login") {
        showLogin();
    } else if (siteState === "signup") {
        showSignup();
    }
}

stateChanged();

function change(toState) {
    preState = siteState;
    siteState = toState;
    stateChanged();
}

function changeImage(uri) {
    var a = document.getElementById("showcase-img");
    a.src = uri;
}

const login = document.getElementById("login");
const signup = document.getElementById("signup");
login.addEventListener("click", () => { console.log("login") });
signup.addEventListener("click", () => { console.log("sign up") })

for (let i = 0; i < 50; i++) {
    async function loadImage() {
        let count = Math.round(Math.random() * 10) + 1;
        await storage.child("demoUser/" + count + ".png").getDownloadURL().then(
            (url) => {
                var div1 = document.createElement("button");
                div1.className = "tiles";
                div1.customName = url;
                console.log(div1);
                div1.onclick = () => { localStorage.setItem(url, "sagar1216iocshow"); console.log(url); change("showcase"); changeImage(url); };
                // div1[i].addEventListener("click", () => { localStorage.setItem(div1.customName, "sagar1216iocshow"); alert(localStorage.getItem("sagar1216iocshow")); });
                var div2 = document.createElement("div");
                div2.className = "tiles-container";
                // var overContainer = document.createElement("div");
                // over.className = "over";
                var over = document.createElement("div");
                over.className = "over";
                var overText = document.createElement("div");
                overText.innerHTML = "₹ 10,000";
                overText.className = "overText";
                var img = document.createElement("img");
                img.className = "img";
                img.src = url;
                document.getElementById("products").appendChild(div1).appendChild(div2).appendChild(img);
                div2.appendChild(over).appendChild(overText);
                return (url);
            }).catch(function (error) {
                console.error(error);
            });
    }
    loadImage().then(() => {
        // const tile = document.getElementsByClassName("tiles");
        // console.log("called1");
        // console.log(tile.length);
        // for (let i = 0; i < tile.length; i++) {
        //     console.log("called");
        //     tile[i].addEventListener("click", () => { console.log(tile[i].customName); });
        // }
        // console.log(tile);
    });
    // localStorage.setItem("sagar1216Data", "Hello World");
}

function check() {
}

const close = document.getElementById("close");
close.addEventListener("click", () => { change("home") });


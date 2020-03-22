var keyChaines = document.getElementById("v-pills-profile-tab");
var paperBags = document.getElementById("v-pills-bags-tab");
var lighters = document.getElementById("v-pills-lighter-tab");
var tShirts = document.getElementById("v-pills-textile-tab");
var capsnhats = document.getElementById("v-pills-clothes-tab");
var sunglasses = document.getElementById("v-pills-messages-tab");
var stash = document.getElementById("v-pills-stash-tab");
var antistess = document.getElementById("v-pills-antistess-tab");
var biobags = document.getElementById("v-pills-biobags-tab");
var bionotebooks = document.getElementById("v-pills-bionotebooks-tab");
var pencils = document.getElementById("v-pills-settings-tab");
var kitchenstuff = document.getElementById("v-pills-set-tab");
var phonegadgets = document.getElementById("v-pills-home-tab");
var pcgadgets = document.getElementById("v-pills-pc-tab");
var stuff = document.getElementById("v-pills-stuff-tab");
var wallets = document.getElementById("v-pills-wallets-tab");
var wintergear = document.getElementById("v-pills-wintergear-tab");

window.addEventListener("load", loadStash);
antistess.addEventListener("click", loadAntistess);
biobags.addEventListener("click", loadBiobags);
bionotebooks.addEventListener("click", loadBionotebooks);
pencils.addEventListener("click", loadPencils);
keyChaines.addEventListener("click", loadKeychaines);
paperBags.addEventListener("click", loadBags);
lighters.addEventListener("click", loadLighters);
tShirts.addEventListener("click", loadTshirt);
capsnhats.addEventListener("click", loadCapsnhats);
sunglasses.addEventListener("click", loadBeauty);
kitchenstuff.addEventListener("click", loadHouseSets);
phonegadgets.addEventListener("click", loadTech);
pcgadgets.addEventListener("click", loadPc);
stuff.addEventListener("click", loadStuff);
wallets.addEventListener("click", loadWallets);
wintergear.addEventListener("click", loadWintergear);

// STASH
function loadStash() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "./stash.json", true);

    xhr.onload = function() {
        if (this.status == 200) {
            var projects = JSON.parse(this.responseText);

            var output = "";

            for (var i in projects) {
                output += `<div class="col-md-3">
                        <div class="tech-card text-center position-relative">
                            
                            <h5>${projects[i].title}</h5>
                            <img class="img-fluid" src="${projects[i].img}">

                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${projects[i].id}" data-whatever="@mdo">Read More</button>
                            <div class="modal fade" id="exampleModal${projects[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">${projects[i].title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="carouselExampleIndicators${projects[i].id}" class="carousel slide h-100" data-ride="carousel">
                                                    <ol class="carousel-indicators">
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="0" class="active">
                                                            <img class="d-block w-100" src="${projects[i].img}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="1">
                                                            <img class="d-block w-100" src="${projects[i].img2}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img3}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img4}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img5}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img6}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img7}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img8}" alt="">
                                                        </li>
                                                    </ol>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img class="w-100" src="${projects[i].img}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100 " src="${projects[i].img2}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img3}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img4}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img5}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img6}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img7}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img8}" alt="">
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" class="text-left">ProductID</th>
                                                            <td></td>
                                                            <td>${projects[i].ProductID}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Can size</th>
                                                            <td></td>
                                                            <td>${projects[i].Cansize}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Stash volume</th>
                                                            <td></td>
                                                            <td>${projects[i].Stashvolume}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Gross weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Grossweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Net weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Netweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Material</th>
                                                            <td></td>
                                                            <td>${projects[i].Material}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Customs tariff</th>
                                                            <td></td>
                                                            <td>${projects[i].Customstariff}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="text-left pl-2">
                                                    <h5 class="mb-3">Description:</h5>
                                                    <p>${projects[i].desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>`;
            }
        }

        document.getElementById("stash").innerHTML = output;
    };

    xhr.send();
}

// ANTISTESS
function loadAntistess() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "./antistress.json", true);

    xhr.onload = function() {
        if (this.status == 200) {
            var projects = JSON.parse(this.responseText);

            var output = "";

            for (var i in projects) {
                output += `<div class="col-md-3">
                        <div class="tech-card text-center position-relative">
                            
                            <h5>${projects[i].title}</h5>
                            <img class="img-fluid" src="${projects[i].img}">

                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${projects[i].id}" data-whatever="@mdo">Read More</button>
                            <div class="modal fade" id="exampleModal${projects[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">${projects[i].title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="carouselExampleIndicators${projects[i].id}" class="carousel slide h-100" data-ride="carousel">
                                                    <ol class="carousel-indicators">
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="0" class="active">
                                                            <img class="d-block w-100" src="${projects[i].img}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="1">
                                                            <img class="d-block w-100" src="${projects[i].img2}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img3}" alt="">
                                                        </li>
                                                    </ol>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img class="w-100" src="${projects[i].img}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100 " src="${projects[i].img2}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img3}" alt="">
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" class="text-left">ProductID</th>
                                                            <td></td>
                                                            <td>${projects[i].ProductID}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Dimensions</th>
                                                            <td></td>
                                                            <td>${projects[i].Dimension}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Package</th>
                                                            <td></td>
                                                            <td>${projects[i].Package}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Recommended print dimensions</th>
                                                            <td></td>
                                                            <td>${projects[i].Recommendedprintdimension}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Gross weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Grossweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Net weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Netweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Material</th>
                                                            <td></td>
                                                            <td>${projects[i].Material}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Transport box size</th>
                                                            <td></td>
                                                            <td>${projects[i].Transportboxsize}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Customs tariff</th>
                                                            <td></td>
                                                            <td>${projects[i].Customstariff}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Country of origin</th>
                                                            <td></td>
                                                            <td>${projects[i].Countryoforigin}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="text-left pl-2">
                                                    <h5 class="mb-3">Description:</h5>
                                                    <p>${projects[i].desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>`;
            }
        }

        document.getElementById("antistess").innerHTML = output;
    };

    xhr.send();
}

// BIOBAGS
function loadBiobags() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "./biobags.json", true);

    xhr.onload = function() {
        if (this.status == 200) {
            var projects = JSON.parse(this.responseText);

            var output = "";

            for (var i in projects) {
                output += `<div class="col-md-3">
                        <div class="tech-card text-center position-relative">
                            
                            <h5>${projects[i].title}</h5>
                            <img class="img-fluid" src="${projects[i].img}">

                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${projects[i].id}" data-whatever="@mdo">Read More</button>
                            <div class="modal fade" id="exampleModal${projects[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">${projects[i].title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="carouselExampleIndicators${projects[i].id}" class="carousel slide h-100" data-ride="carousel">
                                                    <ol class="carousel-indicators">
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="0" class="active">
                                                            <img class="d-block w-100" src="${projects[i].img}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="1">
                                                            <img class="d-block w-100" src="${projects[i].img2}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img3}" alt="">
                                                        </li>
                                                    </ol>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img class="w-100" src="${projects[i].img}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100 " src="${projects[i].img2}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img3}" alt="">
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" class="text-left">ProductID</th>
                                                            <td></td>
                                                            <td>${projects[i].ProductID}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Dimensions</th>
                                                            <td></td>
                                                            <td>${projects[i].Dimension}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Package</th>
                                                            <td></td>
                                                            <td>${projects[i].Package}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Recommended print dimensions</th>
                                                            <td></td>
                                                            <td>${projects[i].Recommendedprintdimension}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Gross weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Grossweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Net weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Netweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Material</th>
                                                            <td></td>
                                                            <td>${projects[i].Material}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Transport box size</th>
                                                            <td></td>
                                                            <td>${projects[i].Transportboxsize}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Customs tariff</th>
                                                            <td></td>
                                                            <td>${projects[i].Customstariff}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Country of origin</th>
                                                            <td></td>
                                                            <td>${projects[i].Countryoforigin}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="text-left pl-2">
                                                    <h5 class="mb-3">Description:</h5>
                                                    <p>${projects[i].desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>`;
            }
        }

        document.getElementById("biobags").innerHTML = output;
    };

    xhr.send();
}

// BIONOTEBOOKS
function loadBionotebooks() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "./bionotebooks.json", true);

    xhr.onload = function() {
        if (this.status == 200) {
            var projects = JSON.parse(this.responseText);

            var output = "";

            for (var i in projects) {
                output += `<div class="col-md-3">
                        <div class="tech-card text-center position-relative">
                            
                            <h5>${projects[i].title}</h5>
                            <img class="img-fluid" src="${projects[i].img}">

                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${projects[i].id}" data-whatever="@mdo">Read More</button>
                            <div class="modal fade" id="exampleModal${projects[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">${projects[i].title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="carouselExampleIndicators${projects[i].id}" class="carousel slide h-100" data-ride="carousel">
                                                    <ol class="carousel-indicators">
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="0" class="active">
                                                            <img class="d-block w-100" src="${projects[i].img}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="1">
                                                            <img class="d-block w-100" src="${projects[i].img2}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img3}" alt="">
                                                        </li>
                                                    </ol>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img class="w-100" src="${projects[i].img}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100 " src="${projects[i].img2}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img3}" alt="">
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" class="text-left">ProductID</th>
                                                            <td></td>
                                                            <td>${projects[i].ProductID}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Dimensions</th>
                                                            <td></td>
                                                            <td>${projects[i].Dimension}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Package</th>
                                                            <td></td>
                                                            <td>${projects[i].Package}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Recommended print dimensions</th>
                                                            <td></td>
                                                            <td>${projects[i].Recommendedprintdimension}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Gross weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Grossweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Net weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Netweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Transport box size</th>
                                                            <td></td>
                                                            <td>${projects[i].Transportboxsize}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Customs tariff</th>
                                                            <td></td>
                                                            <td>${projects[i].Customstariff}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Country of origin</th>
                                                            <td></td>
                                                            <td>${projects[i].Countryoforigin}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="text-left pl-2">
                                                    <h5 class="mb-3">Description:</h5>
                                                    <p>${projects[i].desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>`;
            }
        }

        document.getElementById("bionotebooks").innerHTML = output;
    };

    xhr.send();
}

// TECH

function loadTech() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "./tech.json", true);

    xhr.onload = function() {
        if (this.status == 200) {
            var projects = JSON.parse(this.responseText);

            var output = "";

            for (var i in projects) {
                output += `
                <div class="col-md-3">
                    <div class="tech-card text-center">
                        <h5>${projects[i].title}</h5>
                        <img class="img-fluid main-img" src="${projects[i].img}">
   

                        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${projects[i].id}" data-whatever="@mdo">Read More</button>
                        <div class="modal fade" id="exampleModal${projects[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">${projects[i].title}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div id="carouselExampleIndicators${projects[i].id}" class="carousel slide h-100" data-ride="carousel">
                                                <ol class="carousel-indicators">
                                                    <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="0" class="active">
                                                        <img class="d-block w-100" src="${projects[i].img}" alt="">
                                                    </li>
                                                    <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="1">
                                                        <img class="d-block w-100" src="${projects[i].img2}" alt="">
                                                    </li>
                                                    <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                        <img class="d-block w-100" src="${projects[i].img3}" alt="">
                                                    </li>
                                                </ol>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img class="w-100" src="${projects[i].img}" alt="">
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="w-100 " src="${projects[i].img2}" alt="">
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="w-100" src="${projects[i].img3}" alt="">
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" class="text-left">ProductID</th>
                                                        <td></td>
                                                        <td>${projects[i].ProductID}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-left">Dimensions</th>
                                                        <td></td>
                                                        <td>${projects[i].Dimension}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-left">Package</th>
                                                        <td></td>
                                                        <td>${projects[i].Package}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-left">Recommended print dimensions</th>
                                                        <td></td>
                                                        <td>${projects[i].Recommendedprintdimension}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-left">Gross weight</th>
                                                        <td></td>
                                                        <td>${projects[i].Grossweight}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-left">Net weight</th>
                                                        <td></td>
                                                        <td>${projects[i].Netweight}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-left">Transport box size</th>
                                                        <td></td>
                                                        <td>${projects[i].Transportboxsize}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-left">Customs tariff</th>
                                                        <td></td>
                                                        <td>${projects[i].Customstariff}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-left">Country of origin</th>
                                                        <td></td>
                                                        <td>${projects[i].Countryoforigin}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="text-left pl-2">
                                                <h5 class="mb-3">Description:</h5>
                                                <p>${projects[i].desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            }
        }

        document.getElementById("tech").innerHTML = output;
    };

    xhr.send();
}

// PCGADGETS

function loadPc() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "./pcgadgets.json", true);

    xhr.onload = function() {
        if (this.status == 200) {
            var projects = JSON.parse(this.responseText);

            var output = "";

            for (var i in projects) {
                output += `
                <div class="col-md-3">
                    <div class="tech-card text-center">
                        <h5>${projects[i].title}</h5>
                        <img class="img-fluid main-img" src="${projects[i].img}">
   

                        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${projects[i].id}" data-whatever="@mdo">Read More</button>
                        <div class="modal fade" id="exampleModal${projects[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">${projects[i].title}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div id="carouselExampleIndicators${projects[i].id}" class="carousel slide h-100" data-ride="carousel">
                                                <ol class="carousel-indicators">
                                                    <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="0" class="active">
                                                        <img class="d-block w-100" src="${projects[i].img}" alt="">
                                                    </li>
                                                    <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="1">
                                                        <img class="d-block w-100" src="${projects[i].img2}" alt="">
                                                    </li>
                                                    <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                        <img class="d-block w-100" src="${projects[i].img3}" alt="">
                                                    </li>
                                                </ol>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img class="w-100" src="${projects[i].img}" alt="">
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="w-100 " src="${projects[i].img2}" alt="">
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="w-100" src="${projects[i].img3}" alt="">
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" class="text-left">ProductID</th>
                                                        <td></td>
                                                        <td>${projects[i].ProductID}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-left">Dimensions</th>
                                                        <td></td>
                                                        <td>${projects[i].Dimension}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-left">Package</th>
                                                        <td></td>
                                                        <td>${projects[i].Package}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-left">Recommended print dimensions</th>
                                                        <td></td>
                                                        <td>${projects[i].Recommendedprintdimension}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-left">Customs tariff</th>
                                                        <td></td>
                                                        <td>${projects[i].Customstariff}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" class="text-left">Country of origin</th>
                                                        <td></td>
                                                        <td>${projects[i].Countryoforigin}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="text-left pl-2">
                                                <h5 class="mb-3">Description:</h5>
                                                <p>${projects[i].desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            }
        }

        document.getElementById("pc").innerHTML = output;
    };

    xhr.send();
}

// KEYCHAINES

function loadKeychaines() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "./keychaines.json", true);

    xhr.onload = function() {
        if (this.status == 200) {
            var projects = JSON.parse(this.responseText);

            var output = "";

            for (var i in projects) {
                output += `<div class="col-md-3">
                        <div class="tech-card text-center position-relative">
                            
                            <h5>${projects[i].title}</h5>
                            <img class="img-fluid" src="${projects[i].img}">

                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${projects[i].id}" data-whatever="@mdo">Read More</button>
                            <div class="modal fade" id="exampleModal${projects[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">${projects[i].title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="carouselExampleIndicators${projects[i].id}" class="carousel slide h-100" data-ride="carousel">
                                                    <ol class="carousel-indicators">
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="0" class="active">
                                                            <img class="d-block w-100" src="${projects[i].img}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="1">
                                                            <img class="d-block w-100" src="${projects[i].img2}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img3}" alt="">
                                                        </li>
                                                    </ol>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img class="w-100" src="${projects[i].img}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100 " src="${projects[i].img2}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img3}" alt="">
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" class="text-left">ProductID</th>
                                                            <td></td>
                                                            <td>${projects[i].ProductID}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Dimensions</th>
                                                            <td></td>
                                                            <td>${projects[i].Dimension}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Package</th>
                                                            <td></td>
                                                            <td>${projects[i].Package}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Recommended print dimensions</th>
                                                            <td></td>
                                                            <td>${projects[i].Recommendedprintdimension}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Gross weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Grossweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Net weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Netweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Material</th>
                                                            <td></td>
                                                            <td>${projects[i].Material}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Transport box size</th>
                                                            <td></td>
                                                            <td>${projects[i].Transportboxsize}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Customs tariff</th>
                                                            <td></td>
                                                            <td>${projects[i].Customstariff}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Country of origin</th>
                                                            <td></td>
                                                            <td>${projects[i].Countryoforigin}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="text-left pl-2">
                                                    <h5 class="mb-3">Description:</h5>
                                                    <p>${projects[i].desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>`;
            }
        }

        document.getElementById("keychaines").innerHTML = output;
    };

    xhr.send();
}

// SANGLASSES

function loadBeauty() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "./sanglasses.json", true);

    xhr.onload = function() {
        if (this.status == 200) {
            var projects = JSON.parse(this.responseText);

            var output = "";

            for (var i in projects) {
                output += `<div class="col-md-3">
                        <div class="tech-card text-center">
                            <h5>${projects[i].title}</h5>
                            <img class="img-fluid" src="${projects[i].img}">

                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${projects[i].id}" data-whatever="@mdo">Read More</button>
                            <div class="modal fade" id="exampleModal${projects[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">${projects[i].title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="carouselExampleIndicators${projects[i].id}" class="carousel slide h-100" data-ride="carousel">
                                                    <ol class="carousel-indicators">
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="0" class="active">
                                                            <img class="d-block w-100" src="${projects[i].img}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="1">
                                                            <img class="d-block w-100" src="${projects[i].img2}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img3}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="3">
                                                            <img class="d-block w-100" src="${projects[i].img4}" alt="">
                                                        </li>
                                                    </ol>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img class="w-100" src="${projects[i].img}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100 " src="${projects[i].img2}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img3}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img4}" alt="">
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" class="text-left">ProductID</th>
                                                            <td></td>
                                                            <td>${projects[i].ProductID}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Dimensions</th>
                                                            <td></td>
                                                            <td>${projects[i].Dimension}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Package</th>
                                                            <td></td>
                                                            <td>${projects[i].Package}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Recommended print dimensions</th>
                                                            <td></td>
                                                            <td>${projects[i].Recommendedprintdimension}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Gross weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Grossweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Net weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Netweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Transport box size</th>
                                                            <td></td>
                                                            <td>${projects[i].Transportboxsize}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Customs tariff</th>
                                                            <td></td>
                                                            <td>${projects[i].Customstariff}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Country of origin</th>
                                                            <td></td>
                                                            <td>${projects[i].Countryoforigin}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="text-left pl-2">
                                                    <h5 class="mb-3">Description:</h5>
                                                    <p>${projects[i].desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>`;
            }
        }

        document.getElementById("beauty").innerHTML = output;
    };

    xhr.send();
}

// PENS

function loadPencils() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "./pencils.json", true);

    xhr.onload = function() {
        if (this.status == 200) {
            var projects = JSON.parse(this.responseText);

            var output = "";

            for (var i in projects) {
                output += `<div class="col-md-3">
                        <div class="tech-card text-center">
                            <h5>${projects[i].title}</h5>
                            <img class="img-fluid" src="${projects[i].img}">

                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${projects[i].id}" data-whatever="@mdo">Read More</button>
                            <div class="modal fade" id="exampleModal${projects[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">${projects[i].title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="carouselExampleIndicators${projects[i].id}" class="carousel slide h-100" data-ride="carousel">
                                                    <ol class="carousel-indicators">
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="0" class="active">
                                                            <img class="d-block w-100" src="${projects[i].img}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="1">
                                                            <img class="d-block w-100" src="${projects[i].img2}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img3}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="3">
                                                            <img class="d-block w-100" src="${projects[i].img4}" alt="">
                                                        </li>
                                                    </ol>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img class="w-100" src="${projects[i].img}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100 " src="${projects[i].img2}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img3}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img4}" alt="">
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" class="text-left">ProductID</th>
                                                            <td></td>
                                                            <td>${projects[i].ProductID}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Dimensions</th>
                                                            <td></td>
                                                            <td>${projects[i].Dimension}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Package</th>
                                                            <td></td>
                                                            <td>${projects[i].Package}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Recommended print dimensions</th>
                                                            <td></td>
                                                            <td>${projects[i].Recommendedprintdimension}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Gross weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Grossweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Net weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Netweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Material</th>
                                                            <td></td>
                                                            <td>${projects[i].Material}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Transport box size</th>
                                                            <td></td>
                                                            <td>${projects[i].Transportboxsize}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Customs tariff</th>
                                                            <td></td>
                                                            <td>${projects[i].Customstariff}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Country of origin</th>
                                                            <td></td>
                                                            <td>${projects[i].Countryoforigin}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="text-left pl-2">
                                                    <h5 class="mb-3">Description:</h5>
                                                    <p>${projects[i].desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>`;
            }
        }

        document.getElementById("pencils").innerHTML = output;
    };

    xhr.send();
}

// BAGS

function loadBags() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "./bags.json", true);

    xhr.onload = function() {
        if (this.status == 200) {
            var projects = JSON.parse(this.responseText);

            var output = "";

            for (var i in projects) {
                output += `<div class="col-md-3">
                        <div class="tech-card text-center">
                            <h5>${projects[i].title}</h5>
                            <img class="img-fluid" src="${projects[i].img}">

                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${projects[i].id}" data-whatever="@mdo">Read More</button>
                            <div class="modal fade" id="exampleModal${projects[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">${projects[i].title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="carouselExampleIndicators${projects[i].id}" class="carousel slide h-100" data-ride="carousel">
                                                    <ol class="carousel-indicators">
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="0" class="active">
                                                            <img class="d-block w-100" src="${projects[i].img}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="1">
                                                            <img class="d-block w-100" src="${projects[i].img2}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img3}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="3">
                                                            <img class="d-block w-100" src="${projects[i].img4}" alt="">
                                                        </li>
                                                    </ol>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img class="w-100" src="${projects[i].img}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100 " src="${projects[i].img2}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img3}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img4}" alt="">
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" class="text-left">ProductID</th>
                                                            <td></td>
                                                            <td>${projects[i].ProductID}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Dimensions</th>
                                                            <td></td>
                                                            <td>${projects[i].Dimension}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Package</th>
                                                            <td></td>
                                                            <td>${projects[i].Package}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Recommended print dimensions</th>
                                                            <td></td>
                                                            <td>${projects[i].Recommendedprintdimension}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Gross weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Grossweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Net weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Netweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Material</th>
                                                            <td></td>
                                                            <td>${projects[i].Material}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Transport box size</th>
                                                            <td></td>
                                                            <td>${projects[i].Transportboxsize}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Customs tariff</th>
                                                            <td></td>
                                                            <td>${projects[i].Customstariff}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Country of origin</th>
                                                            <td></td>
                                                            <td>${projects[i].Countryoforigin}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="text-left pl-2">
                                                    <h5 class="mb-3">Description:</h5>
                                                    <p>${projects[i].desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>`;
            }
        }

        document.getElementById("bags").innerHTML = output;
    };

    xhr.send();
}

// LIGHTERS

function loadLighters() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "./lighter.json", true);

    xhr.onload = function() {
        if (this.status == 200) {
            var projects = JSON.parse(this.responseText);

            var output = "";

            for (var i in projects) {
                output += `<div class="col-md-3">
                        <div class="tech-card text-center">
                            <h5>${projects[i].title}</h5>
                            <img class="img-fluid" src="${projects[i].img}">

                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${projects[i].id}" data-whatever="@mdo">Read More</button>
                            <div class="modal fade" id="exampleModal${projects[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">${projects[i].title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="carouselExampleIndicators${projects[i].id}" class="carousel slide h-100" data-ride="carousel">
                                                    <ol class="carousel-indicators">
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="0" class="active">
                                                            <img class="d-block w-100" src="${projects[i].img}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="1">
                                                            <img class="d-block w-100" src="${projects[i].img2}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img3}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="3">
                                                            <img class="d-block w-100" src="${projects[i].img4}" alt="">
                                                        </li>
                                                    </ol>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img class="w-100" src="${projects[i].img}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100 " src="${projects[i].img2}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img3}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img4}" alt="">
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" class="text-left">ProductID</th>
                                                            <td></td>
                                                            <td>${projects[i].ProductID}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Dimensions</th>
                                                            <td></td>
                                                            <td>${projects[i].Dimension}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Package</th>
                                                            <td></td>
                                                            <td>${projects[i].Package}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Recommended print dimensions</th>
                                                            <td></td>
                                                            <td>${projects[i].Recommendedprintdimension}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Gross weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Grossweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Net weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Netweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Material</th>
                                                            <td></td>
                                                            <td>${projects[i].Material}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Transport box size</th>
                                                            <td></td>
                                                            <td>${projects[i].Transportboxsize}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Customs tariff</th>
                                                            <td></td>
                                                            <td>${projects[i].Customstariff}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Country of origin</th>
                                                            <td></td>
                                                            <td>${projects[i].Countryoforigin}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="text-left pl-2">
                                                    <h5 class="mb-3">Description:</h5>
                                                    <p>${projects[i].desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
            }
        }

        document.getElementById("lighter").innerHTML = output;
    };

    xhr.send();
}

// KITCHENSTUFF

function loadHouseSets() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "./house-sets.json", true);

    xhr.onload = function() {
        if (this.status == 200) {
            var projects = JSON.parse(this.responseText);

            var output = "";

            for (var i in projects) {
                output += `<div class="col-md-3">
                        <div class="tech-card text-center">
                            <h5>${projects[i].title}</h5>
                            <img class="img-fluid" src="${projects[i].img}">

                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${projects[i].id}" data-whatever="@mdo">Read More</button>
                            <div class="modal fade" id="exampleModal${projects[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">${projects[i].title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="carouselExampleIndicators${projects[i].id}" class="carousel slide h-100" data-ride="carousel">
                                                    <ol class="carousel-indicators">
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="0" class="active">
                                                            <img class="d-block w-100" src="${projects[i].img}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="1">
                                                            <img class="d-block w-100" src="${projects[i].img2}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img3}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="3">
                                                            <img class="d-block w-100" src="${projects[i].img4}" alt="">
                                                        </li>
                                                    </ol>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img class="w-100" src="${projects[i].img}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100 " src="${projects[i].img2}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img3}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img4}" alt="">
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" class="text-left">ProductID</th>
                                                            <td></td>
                                                            <td>${projects[i].ProductID}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Package</th>
                                                            <td></td>
                                                            <td>${projects[i].Package}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Gross weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Grossweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Net weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Netweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Material</th>
                                                            <td></td>
                                                            <td>${projects[i].Material}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Transport box size</th>
                                                            <td></td>
                                                            <td>${projects[i].Transportboxsize}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Customs tariff</th>
                                                            <td></td>
                                                            <td>${projects[i].Customstariff}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Country of origin</th>
                                                            <td></td>
                                                            <td>${projects[i].Countryoforigin}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="text-left pl-2">
                                                    <h5 class="mb-3">Description:</h5>
                                                    <p>${projects[i].desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>`;
            }
        }

        document.getElementById("house-sets").innerHTML = output;
    };

    xhr.send();
}

// TEXTILES

function loadTshirt() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "./t-shirt.json", true);

    xhr.onload = function() {
        if (this.status == 200) {
            var projects = JSON.parse(this.responseText);

            var output = "";

            for (var i in projects) {
                output += `<div class="col-md-3">
                        <div class="tech-card text-center">
                            <h5>${projects[i].title}</h5>
                            <img class="img-fluid" src="${projects[i].img}">

                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${projects[i].id}" data-whatever="@mdo">Read More</button>
                            <div class="modal fade" id="exampleModal${projects[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">${projects[i].title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="carouselExampleIndicators${projects[i].id}" class="carousel slide h-100" data-ride="carousel">
                                                    <ol class="carousel-indicators">
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="0" class="active">
                                                            <img class="d-block w-100" src="${projects[i].img}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="1">
                                                            <img class="d-block w-100" src="${projects[i].img2}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img3}" alt="">
                                                        </li>
                                                    </ol>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img class="w-100" src="${projects[i].img}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100 " src="${projects[i].img2}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img3}" alt="">
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" class="text-left">ProductID</th>
                                                            <td></td>
                                                            <td>${projects[i].ProductID}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Package</th>
                                                            <td></td>
                                                            <td>${projects[i].Package}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Type</th>
                                                            <td></td>
                                                            <td>${projects[i].Type}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">G/Sm</th>
                                                            <td></td>
                                                            <td>${projects[i].Gsm}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Gross weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Grossweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Net weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Netweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Material</th>
                                                            <td></td>
                                                            <td>${projects[i].Material}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Transport box size</th>
                                                            <td></td>
                                                            <td>${projects[i].Transportboxsize}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Customs tariff</th>
                                                            <td></td>
                                                            <td>${projects[i].Customstariff}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Country of origin</th>
                                                            <td></td>
                                                            <td>${projects[i].Countryoforigin}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="text-left pl-2">
                                                    <h5 class="mb-3">Description:</h5>
                                                    <p>${projects[i].desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>`;
            }
        }

        document.getElementById("textiles").innerHTML = output;
    };

    xhr.send();
}

// CAPS AND HATS

function loadCapsnhats() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "./capsnhats.json", true);

    xhr.onload = function() {
        if (this.status == 200) {
            var projects = JSON.parse(this.responseText);

            var output = "";

            for (var i in projects) {
                output += `<div class="col-md-3">
                        <div class="tech-card text-center">
                            <h5>${projects[i].title}</h5>
                            <img class="img-fluid" src="${projects[i].img}">


                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${projects[i].id}" data-whatever="@mdo">Read More</button>
                            <div class="modal fade" id="exampleModal${projects[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">${projects[i].title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="carouselExampleIndicators${projects[i].id}" class="carousel slide h-100" data-ride="carousel">
                                                    <ol class="carousel-indicators">
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="0" class="active">
                                                            <img class="d-block w-100" src="${projects[i].img}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="1">
                                                            <img class="d-block w-100" src="${projects[i].img2}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img3}" alt="">
                                                        </li>
                                                    </ol>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img class="w-100" src="${projects[i].img}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100 " src="${projects[i].img2}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img3}" alt="">
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" class="text-left">ProductID</th>
                                                            <td></td>
                                                            <td>${projects[i].ProductID}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Package</th>
                                                            <td></td>
                                                            <td>${projects[i].Package}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Size</th>
                                                            <td></td>
                                                            <td>${projects[i].Size}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Gross weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Grossweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Net weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Netweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Material</th>
                                                            <td></td>
                                                            <td>${projects[i].Material}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Transport box size</th>
                                                            <td></td>
                                                            <td>${projects[i].Transportboxsize}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Customs tariff</th>
                                                            <td></td>
                                                            <td>${projects[i].Customstariff}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Country of origin</th>
                                                            <td></td>
                                                            <td>${projects[i].Countryoforigin}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="text-left pl-2">
                                                    <h5 class="mb-3">Description:</h5>
                                                    <p>${projects[i].desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>`;
            }
        }

        document.getElementById("clothes").innerHTML = output;
    };

    xhr.send();
}

// KITCHENSTUFF

function loadStuff() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "./stuff.json", true);

    xhr.onload = function() {
        if (this.status == 200) {
            var projects = JSON.parse(this.responseText);

            var output = "";

            for (var i in projects) {
                output += `<div class="col-md-3">
                        <div class="tech-card text-center">
                            <h5>${projects[i].title}</h5>
                            <img class="img-fluid" src="${projects[i].img}">

                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${projects[i].id}" data-whatever="@mdo">Read More</button>
                            <div class="modal fade" id="exampleModal${projects[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">${projects[i].title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="carouselExampleIndicators${projects[i].id}" class="carousel slide h-100" data-ride="carousel">
                                                    <ol class="carousel-indicators">
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="0" class="active">
                                                            <img class="d-block w-100" src="${projects[i].img}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="1">
                                                            <img class="d-block w-100" src="${projects[i].img2}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img3}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="3">
                                                            <img class="d-block w-100" src="${projects[i].img4}" alt="">
                                                        </li>
                                                    </ol>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img class="w-100" src="${projects[i].img}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100 " src="${projects[i].img2}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img3}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img4}" alt="">
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" class="text-left">ProductID</th>
                                                            <td></td>
                                                            <td>${projects[i].ProductID}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Package</th>
                                                            <td></td>
                                                            <td>${projects[i].Package}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Gross weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Grossweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Net weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Netweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Transport box size</th>
                                                            <td></td>
                                                            <td>${projects[i].Transportboxsize}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Customs tariff</th>
                                                            <td></td>
                                                            <td>${projects[i].Customstariff}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Country of origin</th>
                                                            <td></td>
                                                            <td>${projects[i].Countryoforigin}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="text-left pl-2">
                                                    <h5 class="mb-3">Description:</h5>
                                                    <p>${projects[i].desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>`;
            }
        }

        document.getElementById("stuff").innerHTML = output;
    };

    xhr.send();
}

// WALLETS

function loadWallets() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "./wallets.json", true);

    xhr.onload = function() {
        if (this.status == 200) {
            var projects = JSON.parse(this.responseText);

            var output = "";

            for (var i in projects) {
                output += `<div class="col-md-3">
                        <div class="tech-card text-center">
                            <h5>${projects[i].title}</h5>
                            <img class="img-fluid" src="${projects[i].img}">

                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${projects[i].id}" data-whatever="@mdo">Read More</button>
                            <div class="modal fade" id="exampleModal${projects[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">${projects[i].title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="carouselExampleIndicators${projects[i].id}" class="carousel slide h-100" data-ride="carousel">
                                                    <ol class="carousel-indicators">
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="0" class="active">
                                                            <img class="d-block w-100" src="${projects[i].img}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="1">
                                                            <img class="d-block w-100" src="${projects[i].img2}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img3}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="3">
                                                            <img class="d-block w-100" src="${projects[i].img4}" alt="">
                                                        </li>
                                                    </ol>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img class="w-100" src="${projects[i].img}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100 " src="${projects[i].img2}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img3}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img4}" alt="">
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" class="text-left">ProductID</th>
                                                            <td></td>
                                                            <td>${projects[i].ProductID}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Package</th>
                                                            <td></td>
                                                            <td>${projects[i].Package}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Gross weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Grossweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Net weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Netweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Transport box size</th>
                                                            <td></td>
                                                            <td>${projects[i].Transportboxsize}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Customs tariff</th>
                                                            <td></td>
                                                            <td>${projects[i].Customstariff}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Country of origin</th>
                                                            <td></td>
                                                            <td>${projects[i].Countryoforigin}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="text-left pl-2">
                                                    <h5 class="mb-3">Description:</h5>
                                                    <p>${projects[i].desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>`;
            }
        }

        document.getElementById("wallets").innerHTML = output;
    };

    xhr.send();
}

// WINTERGEAR

function loadWintergear() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "./winter-gear.json", true);

    xhr.onload = function() {
        if (this.status == 200) {
            var projects = JSON.parse(this.responseText);

            var output = "";

            for (var i in projects) {
                output += `<div class="col-md-3">
                        <div class="tech-card text-center">
                            <h5>${projects[i].title}</h5>
                            <img class="img-fluid" src="${projects[i].img}">

                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal${projects[i].id}" data-whatever="@mdo">Read More</button>
                            <div class="modal fade" id="exampleModal${projects[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">${projects[i].title}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="carouselExampleIndicators${projects[i].id}" class="carousel slide h-100" data-ride="carousel">
                                                    <ol class="carousel-indicators">
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="0" class="active">
                                                            <img class="d-block w-100" src="${projects[i].img}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="1">
                                                            <img class="d-block w-100" src="${projects[i].img2}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="2">
                                                            <img class="d-block w-100" src="${projects[i].img3}" alt="">
                                                        </li>
                                                        <li data-target="#carouselExampleIndicators${projects[i].id}" data-slide-to="3">
                                                            <img class="d-block w-100" src="${projects[i].img4}" alt="">
                                                        </li>
                                                    </ol>
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img class="w-100" src="${projects[i].img}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100 " src="${projects[i].img2}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img3}" alt="">
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="w-100" src="${projects[i].img4}" alt="">
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carouselExampleIndicators${projects[i].id}" role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" class="text-left">ProductID</th>
                                                            <td></td>
                                                            <td>${projects[i].ProductID}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Package</th>
                                                            <td></td>
                                                            <td>${projects[i].Package}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Gross weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Grossweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Net weight</th>
                                                            <td></td>
                                                            <td>${projects[i].Netweight}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Transport box size</th>
                                                            <td></td>
                                                            <td>${projects[i].Transportboxsize}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Customs tariff</th>
                                                            <td></td>
                                                            <td>${projects[i].Customstariff}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" class="text-left">Country of origin</th>
                                                            <td></td>
                                                            <td>${projects[i].Countryoforigin}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="text-left pl-2">
                                                    <h5 class="mb-3">Description:</h5>
                                                    <p>${projects[i].desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>`;
            }
        }

        document.getElementById("wintergear").innerHTML = output;
    };

    xhr.send();
}

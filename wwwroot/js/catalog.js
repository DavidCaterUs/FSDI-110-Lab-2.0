

function getCatalogData() {
    // create a jquery ajax request
    $.ajax({
        url: '/catalog/getCatalog',
        type: 'GET',
        success: function (res) {
          for(i = 0; i< res.length; i++){
            displayCar(res[i]);
          }
        },
        error: function (error) {
            console.log("Erron getting catalog", error);
        }
    });
}

  function displayCar(car){
    var container = $("#catContainer");

    var template = `
    <div class='card col-6'>
      <div class='row'>
        <div class = 'col-6'>
          <img class='car-img' src='${car.imageURL}'>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button type="button" class="btn btn-primary">Rent Now!</button>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>`;
      container.append(template);
  }

function init() {
    console.log("I'm catalog page");

    getCatalogData();
}


window.onload = init;

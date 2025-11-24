function updateTime() {
  //Iran
  let iranElement = document.querySelector("#iran");
  if (iranElement) {
    let iranDateElement = iranElement.querySelector(".date");
    let iranTimeElement = iranElement.querySelector(".time");
    let ir = moment().tz("Asia/Tehran");
    iranDateElement.innerHTML = ir.format("MMMM Do YYYY");
    iranTimeElement.innerHTML = ir.format("h:mm:ss [<small>]A[</small>]");
  }
  //Pakistan
  let islamabadElement = document.querySelector("#islamabad");
  if (islamabadElement) {
    let islamabadDateElement = islamabadElement.querySelector(".date");
    let islamabadTimeElement = islamabadElement.querySelector(".time");
    let pk = moment().tz("Asia/Karachi");
    islamabadDateElement.innerHTML = pk.format("MMMM Do YYYY");
    islamabadTimeElement.innerHTML = pk.format("h:mm:ss [<small>]A[</small>]");
  }

  //China
  let HongKongElement = document.querySelector("#china");
  if (HongKongElement) {
    let HongKongDateElement = HongKongElement.querySelector(".date");
    let HongKongTimeElement = HongKongElement.querySelector(".time");
    let cn = moment().tz("Asia/Hong_Kong");
    HongKongDateElement.innerHTML = cn.format("MMMM Do YYYY");
    HongKongTimeElement.innerHTML = cn.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city" id="">
      <div class="left">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="right">
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
      </div>
    </div>
  `;
}
updateTime();
setInterval(updateTime, 1000);

let selectCitiesElement = document.querySelector("#city");
selectCitiesElement.addEventListener("change", updateCity);

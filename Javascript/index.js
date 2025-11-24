function updateTime() {
  //Iran
  let iranElement = document.querySelector("#iran");
  let iranDateElement = iranElement.querySelector(".date");
  let iranTimeElement = iranElement.querySelector(".time");
  let ir = moment().tz("Asia/Tehran");
  iranDateElement.innerHTML = ir.format("MMMM Do YYYY");
  iranTimeElement.innerHTML = ir.format("h:mm:ss [<small>]A[</small>]");

  //Pakistan
  let islamabadElement = document.querySelector("#islamabad");
  let islamabadDateElement = islamabadElement.querySelector(".date");
  let islamabadTimeElement = islamabadElement.querySelector(".time");
  let pk = moment().tz("Asia/Karachi");
  islamabadDateElement.innerHTML = pk.format("MMMM Do YYYY");
  islamabadTimeElement.innerHTML = pk.format("h:mm:ss [<small>]A[</small>]");

  //China
  let HongKongElement = document.querySelector("#china");
  let HongKongDateElement = HongKongElement.querySelector(".date");
  let HongKongTimeElement = HongKongElement.querySelector(".time");
  let cn = moment().tz("Asia/Hong_Kong");
  HongKongDateElement.innerHTML = cn.format("MMMM Do YYYY");
  HongKongTimeElement.innerHTML = cn.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);

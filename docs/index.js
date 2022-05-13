let timeSelected = "daily";
$(document).ready(function () {
  callJson();
  $(".user-btn").click(function () {
    updateJson($(this).attr("id"));
  });
});
function updateJson(selected) {
  timeSelected = selected;
  $(".small-cards").empty();
  callJson();
  $(`.${selected}`).addClass("active").siblings().removeClass("active");
  //this.classList.add('active').siblings().classList.remove('active');
}

function callJson() {
  $.getJSON("data.json", function (json) {
    json.forEach((element) => {
      var str = element.title.replace(/\s/g, "");
      var text = newText(
        element.title,
        element.timeframes[timeSelected].current,
        element.timeframes[timeSelected].previous
      );
      // console.log(element.timeframes[timeSelected].current);
      $(`#${str}`).append(text);
    });
  });
}

function newText(title, current, previous) {
  var text = `<div class="small-card-text">
    <h3>${title}</h3>
    <span id="dots"></span>
    <p id="current-time" class="text-col-span">${current}hrs</p>
    <p class='text-col-span previous'>Last week - ${previous}hrs</p>
  </div>`;
  return text;
}

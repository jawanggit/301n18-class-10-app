'use strict';

let API = 'http://localhost:3000';

function renderThings(list) {
  const template = $('#thingsToDoTemplate').html();
  const container = $('#things');
  list.forEach(item => {
    let newItemHTML = Mustache.render(template, item)
    container.append(newItemHTML);
  });
}

function showThingsToDo() {

  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };

  $.ajax(`${API}/todo`, ajaxSettings)
    .then(things => {
      renderThings(things);
    });


  // let things = [
  //   { task: 'watch tv' },
  //   { task: 'take a nap' },
  // ];



  

}

$(document).ready(function () {
  showThingsToDo();
});

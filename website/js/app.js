'use strict';

function renderThings(list) {
  const template = $('#thingsToDoTemplate').html;
  const container = $('.things');
  list.forEach(item => {
    let newItemHTML = Mustache.render(item,template)
    container.append(newItemHTML);
  });
}

function showThingsToDo() {

  let things = [
    { thing: 'watch tv' },
    { thing: 'take a nap' },
  ];
  renderThings(things);

}

$(document).ready(function () {
  showThingsToDo();
});

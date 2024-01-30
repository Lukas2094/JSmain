document.addEventListener("DOMContentLoaded", function () {

  var menuBtnGroup = document.querySelector('.btn-group-vertical');
  var headerContainer = document.querySelector('.jumbotron');
  var menuButtons = menuBtnGroup.querySelectorAll('.btn');
  var listItems = document.querySelectorAll('.list-group-item');

  menuBtnGroup.classList.remove('btn-group-vertical');
  menuBtnGroup.classList.add('btn-group', 'd-inline-flex', 'flex-row', 'mr-3', 'w-50');

  menuButtons.forEach(function (button) {
    button.style.marginRight = '5px';
    button.style.borderRadius = '7px';
    button.style.width = 'auto';
  });

  headerContainer.style.setProperty('background-color', 'rgba(107,117,126,255)');
  headerContainer.style.setProperty('border-radius', '0.3rem');
  headerContainer.style.setProperty('display', 'flex');
  headerContainer.style.setProperty('flex-direction', 'column');
  headerContainer.style.setProperty('align-items', 'flex-end');

  var jumbotronTexts = headerContainer.querySelectorAll('p, h1, h5, hr , a');
  jumbotronTexts.forEach(function (textElement) {
    textElement.style.color = 'white';
    if (textElement.tagName === 'HR') {
      textElement.style.width = '100%';
      textElement.style.height = '5px';
    }

    if (textElement.tagName === 'A') {
      textElement.style.backgroundColor = 'rgba(39,168,68,255)';
      textElement.style.border = 'rgba(39,168,68,255)';
    }
  });

  var cardButtons = document.querySelectorAll('.card .btn');
  cardButtons.forEach(function (cardButton) {
    cardButton.addEventListener('click', function () {
      cardButtons.forEach(function (btn) {
        btn.style.backgroundColor = '';
      });

    cardButton.style.backgroundColor = 'rgba(39,168,68,255)';
    cardButton.style.border = 'rgba(39,168,68,255)';
  });
});

  listItems.forEach(function (item) {
    item.addEventListener('click', function () {
      listItems.forEach(function (li) {
        li.style.backgroundColor = '';
      });
      item.style.backgroundColor = 'rgba(0,122,255,255)';
    });
  });
});

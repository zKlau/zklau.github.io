var get = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelector(selector);
};

var getAll = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelectorAll(selector);
};

if (document.getElementsByClassName('demo').length > 0) {
  var i = 0;
  var txt = ` cat info.txt
              \nMy name is Claudiu and I am very passionate about Technology, Paleontology and Astronomy.
              \n I am open to learn new things any time.
              \n I like software and game development but I also have some web development knowledge.
              \n Usually I play Guild Wars 2 or other RolePlaying games I find.`;
  var speed = 5;

  function typeItOut () {
    if (i < txt.length) {
      if (txt.charAt(i) === "<" && txt.charAt(i + 1) === "s") {
        var closingTagIndex = txt.indexOf(">", i);
        document.getElementsByClassName('demo')[0].innerHTML += txt.substring(i, closingTagIndex + 1);
        i = closingTagIndex + 1;
      } else {
        document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
        i++;
      }
      setTimeout(typeItOut, speed);
      if(i == txt.length) {
        document.getElementById('second-command').style.display = 'block'
      }
    }
    
  }
  setTimeout(typeItOut, 1800);
  
}

window.addEventListener("load", function() {
  var tabContainers = getAll(".tab__container");

  for (var i = 0; i < tabContainers.length; i++) {
    get('.tab__menu', tabContainers[i]).addEventListener("click", tabClick);
  }

  function tabClick (event) {
    var scope = event.currentTarget.parentNode;
    var clickedTab = event.target;
    var tabs = getAll('.tab', scope);
    var panes = getAll('.tab__pane', scope);
    var activePane = get(`.${clickedTab.getAttribute('data-tab')}`, scope);

    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    for (var i = 0; i < panes.length; i++) {
      panes[i].classList.remove('active');
    }

    clickedTab.classList.add('active');
    activePane.classList.add('active');
  }
});

window.addEventListener('scroll', function () {
  var docNav = get('.doc__nav > ul');

  if( docNav) {
    if (window.pageYOffset > 63) {
      docNav.classList.add('fixed');
    } else {
      docNav.classList.remove('fixed');
    }
  }
});

var topNav = get('.menu');
var icon = get('.toggle');

window.addEventListener('load', function(){
  function showNav() {
    if (topNav.className === 'menu') {
      topNav.className += ' responsive';
      icon.className += ' open';
    } else {
      topNav.className = 'menu';
      icon.classList.remove('open');
    }
  }
  icon.addEventListener('click', showNav);
});

// Add CSS class to dynamically inserted HTML elements
window.addEventListener('DOMContentLoaded', function() {
  var attributeSpan = document.querySelector('.hljs-attribute');
  var regexpSpan = document.querySelector('.hljs-regexp');
  
  if(attributeSpan && regexpSpan) {
    attributeSpan.classList.add('hljs-attribute');
    regexpSpan.classList.add('hljs-regexp');
  }
});

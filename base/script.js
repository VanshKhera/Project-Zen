const menu = document.getElementsByClassName('menu')[0]
const navItem0 = document.getElementsByClassName('nav-item')[0]
const navItem1 = document.getElementsByClassName('nav-item')[1]
const navItem2 = document.getElementsByClassName('nav-item')[2]
const navItem3 = document.getElementsByClassName('nav-item')[3]
const navItem4 = document.getElementsByClassName('nav-item')[4]

/*
IMPORTANT!
let array = [];
for(let i = 0; i < 4; i++){
        array.push("navItem"+i)
        eval('navItem' + i + ' = ' + 'document' + '.' + 'getElementsByClassName' + "('nav-item')" + [i] + ';');
        console.log(navItem0)
}
*/
menu.addEventListener('click', () => {
  navItem0.classList.toggle('responsive-li')
  navItem1.classList.toggle('responsive-li')
  navItem2.classList.toggle('responsive-li')
  navItem3.classList.toggle('responsive-li')
  navItem4.classList.toggle('responsive-li')
  /*      menu.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>' */
});
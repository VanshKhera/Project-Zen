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
});
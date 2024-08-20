/* Navbutton */

const navBtn = document.querySelector('nav button')
const sidebar = document.querySelector('.sidebar')

const sidebarOpen = ()=>{
  sidebar.classList.add('active')
}

navBtn.addEventListener('click', sidebarOpen)

/* Navbutton End */

/* Cancelbutton */
const cancelBtn = document.querySelector('.cancelBtn')
const closeSidebar = (event) =>{
 if(event.target.classList.contains('sidebar')||event.target.classList.contains('cancelBtn')){
  sidebar.classList.remove('active')
 } 
 sidebar.classList.remove('active')

}

cancelBtn.addEventListener('click', closeSidebar)
sidebar.addEventListener('click', closeSidebar)

/* Cancelbutton End*/

/* Darkmode */
const darkModeBtn = document.querySelector('.darkModeBtn')
const body = document.querySelector('body')

const darkMode = () => {
  body.classList.toggle('darkmode')
}

darkModeBtn.addEventListener('click', darkMode)

/* Darkmode Ends */

// Cursor
const cursor = document.querySelector('.cursor')
const cursorSmall = document.querySelector('.cursorSmall')


const customMouseCursor = (event) =>{
   cursor.style.top = `${event.pageY}px`;
   cursor.style.left = `${event.pageX}px`;
   cursorSmall.style.top = `${event.pageY}px`;
   cursorSmall.style.left = `${event.pageX}px`;

} 

window.addEventListener('mousemove', customMouseCursor)
// Cursor Ends 
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
const startingTime = performance.now();
/**
 * Define Global Variables
 * 
*/
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


//creating the navigation menu that contains the sections
function createNavigationMenu(){
    //looping over all sections
    for (let i=0; i < sections.length; i++){
        const listItem = document.createElement('li');
        const sectionName = sections[i].getAttribute('data-nav')
        const sectionId = sections[i].getAttribute('id')
        //appending sections to the list item
        // Scroll to section on click
        listItem.innerHTML = `<a class ="menu__link" href="#${sectionId}">${sectionName}</a>`;
         fragment.appendChild(listItem);
    }
    const navBarList = document.getElementById('navbar__list')
    //appending all elements to the fragment
    navBarList.appendChild(fragment);
}

//determine if section is in viewport or not
function elementisInViewport (element) {
    const domRect = element.getBoundingClientRect();
    if (domRect.top >= 0 && domRect.left >= 0 && domRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        domRect.right <= (window.innerWidth || document.documentElement.clientWidth)){
            return (true);
        }else{
            return (false);
        }
};
//adding an active state when section is in viewport
function setActiveState(){
    //looping on all sections
    for (section of sections){
        //checking if the section is in the viewport
        if (elementisInViewport(section)){
            //if it's not then add the active class
            if (!section.classList.contains("your-active-class"))
            {
                section.classList.add("your-active-class");
            }
        }else{
            section.classList.remove("your-active-class");
        }
    }
}



//event listener to change the background when you're scrolling throw the sections
document.addEventListener('scroll', function(){
    setActiveState();
});

createNavigationMenu()


const endingTime = performance.now();

console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');

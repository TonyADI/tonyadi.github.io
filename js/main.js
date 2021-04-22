const skillsContainer = document.getElementById('skills-container');
const skillsContainerOffset = skillsContainer.offsetTop;

const scrollDown = document.getElementById('scroll-down');
const progressBars = document.getElementsByClassName('progress-bar');

const contactInfo = document.getElementById('contact-info');
const contactInfoOffset = contactInfo.offsetTop;

const contactsContainer = document.getElementById('contacts-container');
const contactsContainerOffset = contactsContainer.offsetTop;

const mainProjects = document.getElementById('main-projects');
const mainProjectsOffset = mainProjects.offsetTop;

const sideProjects = document.getElementById('side-projects');
const sideProjectsOffset = sideProjects.offsetTop;

// Activate animations when in view
const addAnimation = () => {
    if(window.pageYOffset > (skillsContainerOffset - window.innerHeight + 100)){
        skillsContainer.classList.add('drop-in');
        // Start progress bar animation
        for(let i =0; i < progressBars.length; i++){
            progressBars[i].classList.add('progress-fill')
        }
        // Hide scroll down element
        scrollDown.classList.add('fade-out');
    }
    else{
        scrollDown.classList.remove('fade-out');
        for(let i =0; i < progressBars.length; i++){
            progressBars[i].classList.remove('progress-fill')
        }
    }
    
    if(window.pageYOffset > (contactInfoOffset - window.innerHeight + 100)){
        contactInfo.classList.add('drop-in');
        contactsContainer.classList.add('bounce');
    }

    if(window.pageYOffset > (mainProjectsOffset - window.innerHeight + 100)){
        mainProjects.classList.add('drop-in');
    }

    if(window.pageYOffset > (sideProjectsOffset - window.innerHeight + 100)){
        sideProjects.classList.add('scale-up');
    }
}


document.addEventListener('scroll', addAnimation);
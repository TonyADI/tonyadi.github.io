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

const progressBarsLength = progressBars.length;
const innerHeight = window.innerHeight;

// Activate animations when in view
const addAnimation = () => {
    if(window.scrollY > (skillsContainerOffset - innerHeight + 100)){
        if(!skillsContainer.classList.contains('drop-in')){
            skillsContainer.classList.add('drop-in');
        }
        if(!progressBars[0].classList.contains('progress-fill')){
            // Start progress bar animation
            for(let i =0; i < progressBarsLength; i++){
                progressBars[i].classList.add('progress-fill')
            }
        }
        // Hide scroll down element
        scrollDown.classList.add('fade-out');
    }
    else{
        scrollDown.classList.remove('fade-out');
        if(progressBars[0].classList.contains('progress-fill')){
            for(let i =0; i < progressBarsLength; i++){
                progressBars[i].classList.remove('progress-fill')
            }
        }
    }
    if(window.scrollY > (sideProjectsOffset - window.innerHeight + 100)){
        if(!sideProjects.classList.contains('scale-up')){
            sideProjects.classList.add('scale-up');
        }
    }
    if(window.scrollY > (contactInfoOffset - window.innerHeight + 100)){
        if(!contactInfo.classList.contains('drop-in') && !contactsContainer.classList.contains('bounce')){
            contactInfo.classList.add('drop-in');
            contactsContainer.classList.add('bounce');
        }
    }

}


document.addEventListener('scroll', addAnimation);
const skillsContainer = document.getElementById('skills-container');
const skillsContainerOffset = skillsContainer.offsetTop;

const scrollDown = document.getElementById('scroll-down');

const contactInfo = document.getElementById('contact-info');
const contactInfoOffset = contactInfo.offsetTop;

const contactsContainer = document.getElementById('contacts-container');
const contactsContainerOffset = contactsContainer.offsetTop;

const mainProjects = document.getElementById('main-projects');
const mainProjectsOffset = mainProjects.offsetTop;

const frontendMentor = document.getElementById('frontend-mentor-challenges');
const frontendMentorOffset = frontendMentor.offsetTop;

const sideProjects = document.getElementById('side-projects');
const sideProjectsOffset = sideProjects.offsetTop;

const innerHeight = window.innerHeight;

const slider = document.getElementById('slider');
const body = document.getElementById('body');

const toggleStyles = () => {
    body.classList.toggle('body-dark-theme')
}

// Activate animations when in view
const addAnimation = () => {
    if(window.scrollY > (skillsContainerOffset - innerHeight + 100)){
        if(!skillsContainer.classList.contains('drop-in')){
            skillsContainer.classList.add('drop-in');
        }
        // Hide scroll down element
        scrollDown.classList.add('fade-out');
    }
    else{
        scrollDown.classList.remove('fade-out');
    }
    if(window.scrollY > (mainProjectsOffset - window.innerHeight + 100)){
        if(!mainProjects.classList.contains('fade-in')){
            mainProjects.classList.add('fade-in');
        }
    }
    if(window.scrollY > (frontendMentorOffset - window.innerHeight + 100)){
        if(!frontendMentor.classList.contains('drop-in')){
            frontendMentor.classList.add('drop-in');
        }
    }
    if(window.scrollY > (sideProjectsOffset - window.innerHeight + 100)){
        if(!sideProjects.classList.contains('drop-in')){
            sideProjects.classList.add('drop-in');
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
slider.addEventListener('click', toggleStyles)
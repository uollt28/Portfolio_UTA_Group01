// KhoaTD handle slider Project SectionĐôi chút về dự án của nhóm

const projectContents = document.querySelectorAll('.project-content');
const btnProjects = document.querySelectorAll('.btn-project');

btnProjects.forEach((item, index) => {
    item.addEventListener('click', () => {
        const projectContent = projectContents[index];
        const currentActiveBtnProject = document.querySelector('.btn-project.active');
        const currentActiveContentProject = document.querySelector('.project-content.active');
        

        currentActiveContentProject.classList.remove('active');
        currentActiveBtnProject.classList.remove('active');

        projectContent.classList.add('active');
        item.classList.add('active');
    })
})

//IT members
$(document).ready(function () {
    $("#members-it").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        dots: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        autoplaySpeed: 3000,
        responsive: {
            0: {
                items: 1
            },
            2000: {
                items: 1
            },
        },
    });
});

//Commercial members
$(document).ready(function () {
    $("#members-c").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        dots: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        autoplaySpeed: 3000,
        responsive: {
            0: {
                items: 1
            },
            2000: {
                items: 1
            },
        },
    });
});

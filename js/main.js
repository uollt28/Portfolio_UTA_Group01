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


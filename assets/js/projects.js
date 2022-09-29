$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    //$('.white-button').removeClass('white-button-hover');
    //$(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/rent.jpg',
            link: 'https://github.com/crazybruce-bowen/WatchingU',
            title: 'RentInfo',
            demo: false,
            technologies: ['Python', 'Script', 'ORC'],
            description: "Automatically finding house renting information in Shanghai ",
            categories: ['Learn']
        },
        {
            image: 'assets/images/car_license.jpg',
            link: 'https://github.com/crazybruce-bowen/License-Plate-Recognition',
            title: 'Plate-Recognize',
            demo: false,
            technologies: ['Python', 'YOLO', 'Pytorch'],
            description: "Automatically detect cars license plate and recognize the number",
            categories: ['Learn']
        },
        {
            image: 'assets/images/IG.jpg',
            link: 'https://github.com/crazybruce-bowen/IntelliGEO',
            title: 'IntelliGEO',
            demo: false,
            technologies: ['Python', 'XGBoost'],
            description: "Collect data and predict sales sales potential about grid GEO",
            categories: ['Job']
        },
        {
            image: 'assets/images/SA.jpg',
            link: 'https://github.com/crazybruce-bowen/StoreAdvisor',
            title: 'Store Advisor',
            demo: false,
            technologies: ['Python', 'LSTM', 'Tensorflow'],
            description: "Classify retail store's type using LSTM model on their store name",
            categories: ['Job']
        },
        {
            image: 'assets/images/crius.jpg',
            link: 'https://github.com/abhn/Social-Share-Counts',
            title: 'Machine Learning & AI Platform',
            demo: false,
            technologies: ['Python', 'Docker', 'Django'],
            description: "Crius Machine Learning & AI Platform",
            categories: ['Job']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
function includeHTML(file, containerId) {
    return fetch(file)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML += html;
        })
}

includeHTML('./assets/components/1header.html', 'main')
    .then(() => includeHTML('./assets/components/2hero.html', 'main'))
    .then(() => includeHTML('./assets/components/3about.html', 'main'))
    .then(() => includeHTML('./assets/components/4service.html', 'main'))
    .then(() => includeHTML('./assets/components/5staff.html', 'main'))
    .then(() => includeHTML('./assets/components/6pricing.html', 'main'))
    .then(() => includeHTML('./assets/components/7review.html', 'main'))
    .then(() => includeHTML('./assets/components/8blog.html', 'main'))
    .then(() => includeHTML('./assets/components/9footer.html', 'main'))
    .then(() => {
        console.log('All HTML files included successfully.');
    }).catch(error => {
        console.error('An error occurred while including HTML files:', error);
    })

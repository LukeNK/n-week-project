window.MathJax = {
    // loader: {
    //     load: ['ui/lazy']
    // },
    tex: {
        // tags: 'ams',
        inlineMath: [['$', '$']],
    }
};

let subjects = document.querySelectorAll('div[subject]'), subjectLoaded = 0;

subjects.forEach(async (subject) => {
    let response = await fetch(`./${subject.getAttribute('subject')}/index.html`);
    response = await response.text();
    subject.innerHTML = response;

    // check images here so it can have subject
    subject.querySelectorAll('img').forEach(img => {
        let src = img.getAttribute('src');
        img.src = subject.getAttribute('subject') + '/' + src;
        src = src.split('.')[0];
        img.parentElement.id = `fig-${subject.getAttribute('subject')}${src}`;
    });
    subject.querySelectorAll('note').forEach((note, id) => {
        note.innerHTML = `[${id}]<span>${note.innerHTML}</span>`;
    })

    subjectLoad();
})

function subjectLoad() {
    subjectLoaded++
    if (subjectLoaded < subjects.length) return;

    // check links here to cross-reference between subjects
    console.log('Checking links');
    document.querySelectorAll('a').forEach(a => {
        let ref = a.getAttribute('href');
        if (!ref.startsWith('#')) return;
        if (!document.getElementById(ref.slice(1))) {
            a.parentElement.classList.add('error');
            a.parentElement.title = 'This paragraph contains broken link';
            console.log(a)
            return;
        }
    });

    console.log('Assign numbering - figures');
    let chapter = 0, count = 0,
        allAs = document.querySelectorAll('a');
    document.querySelectorAll('figure, h2:not([noNumber])').forEach(e => {
        if (e.tagName === 'H2') { chapter++; count = 0; return; }
        count++;
        let ref = `Figure ${chapter}.${count}`,
            caption = e.querySelector('figcaption');
        caption.innerText = `${ref}: ${caption.innerText}`;
        allAs.forEach(a => {
            if (a.getAttribute('href') === `#${e.id}`)
                a.innerText = ref;
        });
    });

    console.log('Assign numbering - tables');
    chapter = 0, count = 0;
    document.querySelectorAll('table, h2:not([noNumber])').forEach(e => {
        if (e.tagName === 'H2') { chapter++; count = 0; return; }
        count++;
        let ref = `Table ${chapter}.${count}`,
            caption = e.querySelector('caption');
        caption.innerText = `${ref}: ${caption.innerText}`;
        allAs.forEach(a => {
            if (a.getAttribute('href') === `#${e.id}`)
                a.innerText = ref;
        });
    });

    console.log('Assign numbering - equations');
    chapter = 0, count = 0;
    document.querySelectorAll('eq, h2:not([noNumber])').forEach(e => {
        if (e.tagName === 'H2') { chapter++; count = 0; return; }
        count++;
        // Create equation number
        e.innerHTML = `
            \\begin{equation*}\\begin{aligned} ${e.innerHTML} \\end{aligned}\\end{equation*}
            <span>(${chapter}.${count})</span>`;

        let id = e.id;
        if (id === '') return;
        if (e.parentElement.tagName == 'P') {
            // move ID so user can see the introduction paragraph of the eq
            e.id = '';
            e.parentElement.id = id;
        }
        allAs.forEach(a => {
            if (a.getAttribute('href') === `#${id}`)
                a.innerText = `Equation ${chapter}.${count}`;
        });
    });

    console.log('Assign numbering - sections')
    document.querySelectorAll('h2:not([noNumber])').forEach(e => {
        allAs.forEach(a => {
            if (a.getAttribute('href') === `#${e.id}`) {
                a.innerText = `Section "${e.innerText}"`;
            }
        });
    });

    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
    script.async = true;
    document.head.appendChild(script);
}

window.onload = () => {
    // create a time out to scroll to the hash after the page is loaded
    setTimeout(
        () => {
            try {
                document.getElementById(window.location.hash.slice(1))
                .scrollIntoView()
            } catch (err) {
                console.info('No hash to scroll')
            }
        }
        , 1000
    );
}

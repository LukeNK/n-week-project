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
    document.querySelectorAll('figure:not([comic]), h2:not([noNumber])').forEach(e => {
        if (e.tagName === 'H2') { chapter++; count = 0; return; }
        count++;
        let ref = `Figure ${chapter}.${count}`,
            caption = e.querySelector('figcaption');
        caption.innerHTML = `<b>${ref}</b>: ${caption.innerText}`;
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
        caption.innerHTML = `<b>${ref}</b>: ${caption.innerText}`;
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

    console.log('Assign numbering - notes');
    chapter = 0, count = 0;
    document.querySelectorAll('note, h2:not([noNumber])').forEach(e => {
        if (e.tagName === 'H2') { chapter++; count = 0; return; }
        count++;
        let ref = `${chapter}.${count}`,
            content = e.innerHTML,
            pElement = e.parentElement,
            aside = document.createElement('aside');

        e.innerHTML = `[${ref}]`;

        aside.id = `note-${ref}`;
        aside.addEventListener('click', () => {
            window.location.hash = `#note-${ref}`;
        });
        aside.innerHTML = `<b>[${ref}]</b> ${content}`;

        pElement.insertAdjacentElement('beforebegin', aside);
        });

    console.log('Assign link reference - sections')
    document.querySelectorAll('h2:not([noNumber])').forEach(e => {
        allAs.forEach(a => {
            if (a.getAttribute('href') === `#${e.id}`) {
                a.innerText = `Section "${e.innerText}"`;
            }
        });
    });

    console.log('Generate table of contents');
    let toc = document.querySelector('nav');
    chapter = 0;
    document.querySelectorAll('h1, h2:not([noNumber])').forEach(e => {
        if (e.tagName === 'H1') {
            toc.innerHTML += `<span>${e.innerText}</span>`;
        } else {
            chapter++;
            toc.innerHTML +=
                `<p><a href="#${chapter}">
                    <b>${chapter}</b>.<nbp>
                    ${e.innerText}
                </a></p>`;
        }
    });

    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
    script.async = true;
    document.head.appendChild(script);
}

(async () => {
    // Handle version
    let sha = await fetch('https://api.github.com/repos/LukeNK/n-week-project/git/trees/main?recursive=1');
    sha = await sha.json();
    sha = sha.sha;

    let date = new Date();
    document.querySelector('time').setAttribute('datetime', date.toISOString());
    document.querySelector('time').innerHTML =
        sha.slice(0, 7) +
        (window.location.href.includes('lukenk.github.io')?
            '' : ' (downstream)');
})();

window.onload = () => {
    // create a time out to scroll to the hash after the page is loaded
    setTimeout(() => {
        try {
            document.getElementById(window.location.hash.slice(1))
            .scrollIntoView()
        } catch (err) {
            console.info('No hash to scroll')
        }
    }, 1000);
}
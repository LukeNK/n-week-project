/*
    Assign course numbering to each chapter
    Each chapter with be assigned a four-digit code
    The first two digits are the level of the chapter, starting from 00 for subjects with no prerequisites
*/
const dataElements = document.querySelectorAll('data');
const chapters = {};

// First pass: collect prerequisites
dataElements.forEach((data, number) => {
    const subject = data.getAttribute('subject');
    const chapter = data.getAttribute('chapter');
    const prerequisites = data.getAttribute('prerequisites').split(',').filter(prereq => prereq.trim() !== '');
    const draft = data.getAttribute('draft') === 'true';
    chapters[chapter] = { subject, prerequisites, level: 0, number: number + 1, draft };
});

// Function to compute level recursively
function computeLevel(chapter) {
    if (chapters[chapter].level > 0) {
        return chapters[chapter].level;
    }
    if (chapters[chapter].prerequisites.length === 0) {
        chapters[chapter].level = 0;
        return 0;
    }
    let maxPrereqLevel = 0;
    chapters[chapter].prerequisites.forEach(prereq => {
        if (chapters[prereq]) {
            const prereqLevel = computeLevel(prereq);
            if (prereqLevel > maxPrereqLevel) {
                maxPrereqLevel = prereqLevel;
            }
        }
    });
    chapters[chapter].level = maxPrereqLevel + 1;
    return chapters[chapter].level;
}

// Second pass: compute levels
Object.keys(chapters).forEach(chapter => {
    computeLevel(chapter);
});

// sort by level
const sortedChapters = Object.keys(chapters).sort((a, b) => {
    return chapters[a].level - chapters[b].level;
});
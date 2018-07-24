
function preprocessTitle(titleString) {
    // apply toLower
    titleString = titleString.toLowerCase();
    // replace '.' and '/' with a space
    titleString = titleString.replace(/[^a-zA-Z0-9]+/g, ' ');
    titleString = titleString.replace(/\s+/g, ' ');
    titleString = titleString.trim();
    return titleString;
}
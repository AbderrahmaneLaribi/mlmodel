
function preprocessUrl(urlString) {
    // apply toLower
    urlString = urlString.toLowerCase();
    // replace '.' and '/' with a space
    urlString = urlString.replace('https://', '');
    urlString = urlString.replace('http://', '');
    urlString = urlString.replace('www.', '');
    urlString = urlString.trim();
    urlString = urlString.replace(/[^a-zA-Z0-9]+/g, ' ');
    urlString = urlString.replace(/\s+/g, ' ');
    return urlString;
}
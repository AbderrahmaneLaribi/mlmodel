function runUrlTitleClassification(urlString, titleString) {
    // preprocess url
    urlString = preprocessUrl(urlString);
    // preprocess title
    titleString = preprocessTitle(titleString);
    // merge url and title strings
    mergedString = urlString + ' ' + titleString;
    // extract ngrams
    featureIdx = extractNGramFeatures(mergedString, 3, ngramIdx);
    // run ml decoder
    predIdx = runMultinomialLrDecoder(featureIdx, modelParams, 0.6);
    // get category from max pred
    predCategory = (predIdx == -1) ? "unknown" : labelIdx[predIdx];
    return predCategory;
}
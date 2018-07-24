function extractNGramFeatures(urlString, nVal, nGramsIdx) {
    var featureIdx = {};
    words = urlString.split(" ");
    for (var i = 0; i < words.length; i++) {
        mergedTokens = "";
        for (var j = 0; j < nVal; j++) {
            if ((i + j) >= words.length) break;
            if (j != 0) mergedTokens = mergedTokens + " ";
            mergedTokens = mergedTokens + words[i + j];
            if (nGramsIdx.hasOwnProperty(mergedTokens)) {
                if (!featureIdx.hasOwnProperty(nGramsIdx[mergedTokens])) {
                    featureIdx[nGramsIdx[mergedTokens]] = 1.0;
                }
            }
        }
    }
    return featureIdx;
}
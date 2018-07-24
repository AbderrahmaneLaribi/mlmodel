
function runMultinomialLrDecoder(featureIdx, paramsModel, threshold) {
    // weighted sums for each output
    wSums = [];
    for (var i = 0; i < paramsModel.length; i++) {
        wSum = paramsModel[i][0]; // bias
        for (var k in featureIdx) {
            k = parseInt(k);
            wSum = wSum + paramsModel[i][k + 1]; // val + 1, because the first element is the bias
        }
        wSums.push(wSum);
    }
    // softmax
    exps = [];
    for (var i = 0; i < wSums.length; i++) {
        exps.push(Math.exp(wSums[i]));
    }
    expSum = 0;
    for (var i = 0; i < exps.length; i++) {
        expSum = expSum + exps[i];
    }
    sm = [];
    for (var i = 0; i < exps.length; i++) {
        sm.push(exps[i]/expSum);
    }
    console.log('sm: ');
    console.log(sm);
    // find max index
    maxIdx = -1;
    maxVal = -1;
    for (var i = 0; i < sm.length; i++) {
        if (sm[i] > maxVal) {
            maxVal = sm[i];
            maxIdx = i;
        }
    }
    return ((maxVal < threshold) ? -1 : maxIdx);
}


function runMultinomialLrDecoderModified(featureIdx, paramsModel, threshold) {
    // weighted sums for each output
    wSums = [0.0];
    for (var i = 1; i < paramsModel.length; i++) {
        wSum = paramsModel[i][0]; // bias
        for (var k in featureIdx) {
            k = parseInt(k);
            wSum = wSum + paramsModel[i][k + 1]; // val + 1, because the first element is the bias
        }
        wSums.push(wSum);
    }
    // softmax
    exps = [];
    for (var i = 0; i < wSums.length; i++) {
        exps.push(Math.exp(wSums[i]));
    }
    expSum = 0;
    for (var i = 0; i < exps.length; i++) {
        expSum = expSum + exps[i];
    }
    sm = [];
    for (var i = 0; i < exps.length; i++) {
        sm.push(exps[i] / expSum);
    }
    // find max index
    maxIdx = -1;
    maxVal = -1;
    for (var i = 0; i < sm.length; i++) {
        if (sm[i] > maxVal) {
            maxVal = sm[i];
            maxIdx = i;
        }
    }
    return ((maxVal < threshold) ? -1 : maxIdx);
}


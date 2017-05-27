function findAllelePermutations(allelePairs) {
    counter = Math.pow(2, allelePairs.length);
    for (var j = 0; j < counter; j++) {
        var bin = Number(j).toString(2);
        var allelePermutation = "";
        for (var i = 0; i < allelePairs.length; i++) {
            if (bin[i] == 0) {
                allelePermutation += allelePairs[i].substring(0,Math.ceil(allelePairs[i].length/2));
            }
            else {
                allelePermutation += allelePairs[i].substring(Math.ceil(allelePairs[i].length/2),allelePairs[i].length);
            }
        }
        console.log(allelePermutation);
    }
    
}

function splitGenotype(genotype) {
    var allelePairs = [];
    var alleles = "";
    for (var i = 0; i < genotype.length; i++) {
        alleles += genotype[i];
        if (genotype[i] == "_" || alleles.substring(0,Math.floor(alleles.length/2)).toUpperCase()===alleles.substring(Math.floor(alleles.length/2),alleles.length).toUpperCase()) {
            allelePairs.push(alleles);
            alleles = "";
        }
    }
    if (alleles != "") {
        allelePairs.push(alleles);
    }
    return allelePairs;
}
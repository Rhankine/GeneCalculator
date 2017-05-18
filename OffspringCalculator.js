function splitGenotype(genotype) {
    var allelePairs = [];
    var alleles = "";
    for (var i = 0; i < genotype.length; i++) {
        alleles += genotype[i];
        console.log(alleles);
        if (genotype[i] == "_") {
            allelePairs.push(alleles);
            alleles = "";
        }
    }
}

/*function splitGenotype(genotype) {
    var allelePairs = [];
    var alleles = "";
    for (var i = 0; i  < genotype.length; i++) {
        alleles += genotype[i];
        if (alleles[]) {
            
        }
    }
    return genotype;
}*/
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
    console.log(allelePairs)
    return allelePairs;
}
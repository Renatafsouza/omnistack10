// criado quando existe uma regra de negócio utilizada em dois ou mais arquivos

module.exports = function parseStringAsArray(arrayAsString) {  
    return arrayAsString.split(",").map(tech => tech.trim()); // tratou a entrada com espaços indevidos. Separou, percorreu e removeu espaços.
}
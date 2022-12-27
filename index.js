const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){cats.push('Ralph');}
function destructivelyPrepencCat(){cats.unshift('Bob');}
function destructivelyRemoveLast(){cats.pop('Ralph');}
function destructivelyRemoveFirstCat(){cats.shift('Bob');}
function appendCat (){const copyOfCats=[...cats,"Broom"];return copyOfCats}
function prependCat (){const copyOfCats =["Arnold", ...cats];return copyOfCats;}

function removeLastCat (){const newCats=cats.slice(0, array.length -1);return newCats}

function removeFirstCat (){}

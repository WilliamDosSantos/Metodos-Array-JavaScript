const array = [1, 2, 3, 4, 5];

var newArray;

array.push(6); //adiciona elemento
array.fill(4, 1, 4); // substitui intervalos
array.pop(); //remove o último elemento
array.shift(); // remove o elemento de índice zero
array.unshift(0, 1, 2); // insere os valores fornecidos no início de um objeto do tipo array
array.splice(2); // remove últimos quando negativo ou apresenta até o índice quando positivo
newArray = array.concat(6, 7, 8); // copia os valores de strings e numbers para o novo array
newArray = array.join("-"); // junta os itens em apenas uma string com o separador
newArray = array.slice(1, 4); // retorna um array entre as posições início e fim
newArray = array.indexOf(6); // Retorna o índice do item, caso não tenha retorna -1
newArray = array.includes(4); // Verifica se tem o item, bool
newArray = array.find((n) => n > 3); // retorna o elemento filtrado
newArray = array.findIndex((n) => n === 6); // retorna o índice do elemento
newArray = array.map((n) => n * 2); // retorna o novo array com todos os elementos “traduzidos”
array.forEach((n) => newArray.push(n * 3)); // executa uma dada função em cada elemento de um array
newArray = array.filter((n) => n % 2 === 1); // novo array com os filtros
newArray = array.reduce((acc, cur) => acc + cur); // Acumulador (acc) + Valor Atual (cur) - retorna um total
newArray = array.every((n) => n < 4); // Verifica se todos condizem com a condição
newArray = array.some((n) => n === 10); // verifica se algum condiz com a condição
array.reverse(); // reverte o array
newArray = array.at(8); //retorna o item referente o índice

console.log(newArray ?? array);

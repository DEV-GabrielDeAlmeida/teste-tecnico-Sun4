// Realiza uma contagem de quantas vezes uma determinada palavra ocorre.
// Ao final, preferencialmente, ordenar o objeto pelo volume de ocorrência.
// *
// Saída esperada: {'hello':2, 'world':1}

function q2ContarFrequenciaPalavra(text) {
  let words = text.toLowerCase().split(/\s+/);

  let count = {};

  words.forEach((word) => {
    count[word] = (count[word] || 0) + 1;
  });

  let orderCount = Object.entries(count).sort((a, b) => b[1] - a[1]);

  return Object.fromEntries(orderCount);
}

console.log(q2ContarFrequenciaPalavra("Hello world hello"));

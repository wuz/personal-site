
var choice = function (a) {
  var i = Math.floor(a.length * Math.random());
  return a[i];
};

var make_joke = function (min_length, { terminals, startwords, wordstats }) {
  word = choice(startwords);
  var title = [word];
  while (wordstats.hasOwnProperty(word)) {
    var next_words = wordstats[word];
    word = choice(next_words);
    title.push(word);
    if (title.length > min_length && terminals.hasOwnProperty(word)) break;
  }
  if (title.length < min_length) return make_joke(min_length, {terminals, startwords, wordstats});
  return title.join(' ');
};

var q = document.querySelector(".q");
var a = document.querySelector(".a");

console.log(q, a)

fetch("./q.txt").then((response) => {
  response.text().then((text) => {
    q.innerHTML = make_joke(5, createChain(text));
  });
});

fetch("./a.txt").then((response) => {
  response.text().then((text) => {
    a.innerHTML = make_joke(5, createChain(text));
  });
});

const createChain = (titles) => {
  if(!Array.isArray(titles)) { titles=titles.split("\n") }
  var terminals = {};
  var startwords = [];
  var wordstats = {};
  for (var i = 0; i < titles.length; i++) {
    var words = titles[i].split(' ');
    terminals[words[words.length-1]] = true;
    startwords.push(words[0]);
    for (var j = 0; j < words.length - 1; j++) {
      if (wordstats.hasOwnProperty(words[j])) {
        wordstats[words[j]].push(words[j+1]);
      } else {
        wordstats[words[j]] = [words[j+1]];
      }
    }
  }
  return {
    terminals,
    startwords,
    wordstats,
  }
}


document.querySelector('.colorSwitch').addEventListener('click', function() {
  document.body.classList.toggle('dark');
});


function getHash(hash) {
  return hash ? hash : location.hash;
}

function sort(hash) {
  if(getHash() !== '') {
    const sortedBy = getHash(hash).substring(1);
    [].map.call(document.querySelectorAll('.sortBy'), function(elem) {
      elem.classList.remove('sortBy');
    });
    if(sortedBy !== 'all') {
      document.querySelector('.sorters').classList.add('sorted');
      document.querySelector('.sort').classList.add('sorted');
      [].map.call(document.querySelectorAll('.'+sortedBy), function(elem) {
        elem.classList.add('sortBy');
      });
    } else {
      [].map.call(document.querySelectorAll('.sorted'), function(elem) {
        elem.classList.remove('sorted');
      })
    }
  }
};

[].map.call(document.querySelectorAll('.sorters a'), function(elem) {
  elem.addEventListener('click', function(e) {
    sort(e.target.getAttribute('href'));
  });
});
sort();

function setID(event) {
  event.preventDefault();
  const username = document.querySelector('#name').value;

  fetch(`http://localhost:8080/matomo.php?uid=${username}&rec=1&idsite=1`).then(response => {
    if (response.ok) {
      console.log('ID set', username);
    }
  });
}

const btn = document.querySelector('button');

btn.addEventListener('click', event => {
  setID(event);

});
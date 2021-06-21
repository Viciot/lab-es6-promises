

function addImage(step, id, callback) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.querySelector(id).innerHTML += `<img src="public/images/mashPotatotes.jpg" alt=""> `;
        resolve(step);
        callback ? callback() : ''; // For iteration one
      }, Math.floor(Math.random() * 1000));
    });
  }
document.addEventListener('DOMContentLoaded',function(){
    const checkbox = document.querySelector('.checkbox');
    const body = document.querySelector('body');

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  });
});
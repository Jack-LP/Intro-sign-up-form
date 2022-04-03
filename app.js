function validation() {
  let email = document.getElementById('email-input').value;
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.match(pattern)) {
    emailInput.classList.remove('invalid');
  } else {
    emailInput.classList.add('invalid');
  }

  inputs.forEach((input) => {
    if (input.value == '') {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
  });
}

const emailInput = document.getElementById('email-input');
let inputs = document.querySelectorAll('.text-input');
const submitBtn = document.getElementById('submit-btn');
emailInput.addEventListener('keydown', validation);
submitBtn.addEventListener('click', validation);

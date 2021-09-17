window.addEventListener('load', function () {
    document.querySelector("form").addEventListener("submit", handleSubmit);
});
  

const handleSubmit = (e) => {
    e.preventDefault();
  let myForm = document.getElementById('contactForm');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "multipart/form-data" },
    body: new URLSearchParams(formData).toString()
  }).then((res) => {
    console.log('Form successfully submitted')
    console.log("response is", res);
    formSubmittedSuccess(e);
}).catch((error) =>
    alert("There was a problem submitting your form"));
}

const formSubmittedSuccess = (e) => {
    let myForm = document.getElementById('contactForm');
    myForm.reset();
    let successMsg = document.createElement("p");
    let msg = document.createTextNode("Thanks for submitting feedback!");
    successMsg.append(msg);
    successMsg.setAttribute("class", "thankyou-message");
    myForm.appendChild(successMsg);
    e.preventDefault();
    return false;
}
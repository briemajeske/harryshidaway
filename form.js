window.addEventListener('load', function () {
    document.querySelector("form").addEventListener("submit", handleSubmit);
});
  

const handleSubmit = (e) => {
    console.log('submit fired');
  e.preventDefault()
  let myForm = document.getElementById('contactForm');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "multipart/form-data" },
    body: new URLSearchParams(formData).toString()
  }).then((res) => {
    console.log('Form successfully submitted')
    console.log("response is", res);
}).catch((error) =>
    alert(error))
}
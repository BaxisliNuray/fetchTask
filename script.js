let row = document.querySelector(".row")
let loader = document.querySelector("loader")
let button=document.querySelector(".btn-outline-success")

let ApiURL = "https://jsonplaceholder.typicode.com/users"


function getUsers(ApiURL) {
    // loader.style.display="block"
    fetch(ApiURL).then((resp) => resp.json())
        .then((data) => {
            // loader.style.display="none"
            
            data.forEach(user => {
                row.innerHTML += `
        
            <div class="col-lg-4 col-md-6 ">
                <div class="card my-4 ">
                    <img class="card-img-top"
                        src="https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_.jpg">
                    <div class="card-body">
                        <h5 class="card-title">Name: <span>${user.name}</span> </h5>
                        <p class="card-email">Email: <span>${user.email}</span></p>
                        <p class="card-address">Address: <span>${user.address.street},${user.address.city}</span></p>
                        <p class="card-phone">Phone num: <span>${user.phone}</span></p>
                        <p class="card-company">Company: <span>${user.company.name}</span></p>
                    </div>
                </div>
                </div>
      
      `
            });
        })
}



button.addEventListener("click",()=>{
   console.log( getUsers(ApiURL));
})
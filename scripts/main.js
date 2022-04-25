const newest = document.querySelector(".newest");
const OpenMobileNav = document.querySelector(".OpenMobileNav");
const newest_list = document.querySelector(".newest-list");
const contact = document.querySelector(".contact");
const ContactDiv = document.querySelector(".contactDiv");
const subscribeForm = document.querySelector(".subscribeForm");
const email = document.querySelector(".email");
const submitEmail = document.querySelector(".submitEmail");
const sendEmail = document.querySelector(".sendEmail");
const senderName = document.querySelector(".senderName");
const senderEmail = document.querySelector(".senderEmail");
const senderMessage = document.querySelector(".senderMessage");
const sendEmailBtn = document.querySelector(".sendEmailBtn");

contact.addEventListener("click", ()=>{
    ContactDiv.scrollIntoView({
        behavior: "smooth"
    });
});

subscribeForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    if(!(email.value == "")){
        submitEmail.disabled = true;
        submitEmail.innerHTML = '<i class="fa fa-loader"></i>';

        fetch("./api/subscribe.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "Email": email.value
            })
        })
        .then(res => res.json())
        .then((data)=>{
            if(data == "Success"){
                email.value = "";
                submitEmail.innerHTML = `<i class="fa fa-badge-check"></i>`;
                setTimeout(()=>{
                    submitEmail.innerHTML = `Subscribe <i class="fa fa-bell">`;
                    setTimeout(()=>{
                        submitEmail.disabled = false;
                    }, 100);
                }, 2000);
            }
            else{
                console.log(data);
            }
            // console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    else{
        console.log("No No!!");
    }
});

sendEmail.addEventListener("submit", (e)=>{
    e.preventDefault();
})

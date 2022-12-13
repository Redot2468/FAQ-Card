const faqSections = document.querySelectorAll(".faq__sections")
const faqHeading = document.querySelectorAll(".faq__sections-heading");
const icons = document.querySelectorAll(".icons");
const answerEl = document.querySelectorAll("#answer__el");
const chevronUp = document.querySelectorAll("#chevron__up");
const chevronDown = document.querySelectorAll("#chevron__down");
const iconUp = document.querySelectorAll(".fa-chevron-up");
const iconDown = document.querySelectorAll(".fa-chevron-down");
const question = document.querySelectorAll(".question")



for (let i = 0; i <= faqHeading.length; i++)
     
    faqHeading[i].addEventListener("click", (e) => {
            
        // When it the answers to the faq are opened then it cantains the class "answer"
            let opened = answerEl[i].classList.contains("answer");
    
        // if it cantains a class "answer" is opened, then remove the class, to close it.
        if(opened){
        answerEl[i].classList.remove("answer");
            question[i].style.fontWeight = "700";
            chevronUp[i].style.display = "block";
            chevronDown[i].style.display = "none";
            
            
        } 
            // if it doesn't contains a class "answer", then add the class to open it.
        else{
            answerEl[i].classList.add("answer");
           chevronDown[i].style.display = "block";
            question[i].style.fontWeight = "500";
            chevronUp[i].style.display = "none";
           
        }}
    )


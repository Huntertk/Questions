//using selectors inside the element
// traversing the dom

/*First Method */
// const btns = document.querySelectorAll('.question-btn')
// btns.forEach((btnItem)=>{
//     btnItem.addEventListener('click', (e)=> {
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     })
// })


/*Second Method*/
const questions = document.querySelectorAll('.question')
questions.forEach((question) => {
    // console.log(question)
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', () => {
        questions.forEach((item) => {
            console.log(item)
            if(item !== question){
                item.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
    })
})
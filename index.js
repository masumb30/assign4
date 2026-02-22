
const allJobContainer = document.getElementById('alljob-container');
const interviewJobContainer = document.getElementById('interview-container');
const rejectedJobContainer = document.getElementById('rejected-container');
const totalJobCount = document.querySelectorAll('.total-job-count');
let interviewJobsArray = [];
let rejectedJobsArray = [];

function renderInterviewSection(){
    if(interviewJobsArray.length === 0){
        interviewJobContainer.innerHTML = `<div class="flex justify-center items-center h-[200px] border-green-100 border-1 rounded-sm">
                No job found
            </div>`
    }else{
        interviewJobContainer.innerText = interviewJobsArray.length;
    }
}
function renderRejectedSection(){
    if(rejectedJobsArray.length === 0){
        rejectedJobContainer.innerHTML = `<div class="flex justify-center items-center h-[200px] border-green-100 border-1 rounded-sm">
                No job found
            </div>`
    }else{
        rejectedJobContainer.innerText = rejectedJobsArray.length;
    }
}

// job delete function

allJobContainer.addEventListener('click', function(event){
    console.log(event.target);
    if(event.target.classList.contains('delete')){
        const name = event.target.parentNode.children[0].innerText;
        
        const parent = event.target.parentNode.parentNode;
        allJobContainer.removeChild(parent);
        
        totalJobCount.forEach(count=> count.innerText = Number(count.innerText) -1)
        // get the job name and filter the interview array and the rejected array

    }
    if(event.target.classList.contains('interview-btn')){
        // extract the information 
        const jobcard = event.target.parentNode.parentNode;
        const company = jobcard.children[0].children[0].innerText;
        console.log('company', company);
        const jobTitle = jobcard.children[1].innerText;
        console.log("jobtitle: ", jobTitle)
    }
})

// code to switch tabs

// onclick tabs change their colors
const allJobsButton = document.getElementById('allJobs');
const interviewJobsButton = document.getElementById('interviewJobs');
const rejectedJobsButton = document.getElementById('rejectedJobs');

allJobsButton.addEventListener('click', function(){
    interviewJobsButton.classList.remove('bg-blue-500');
    rejectedJobsButton.classList.remove('bg-blue-500');
    allJobsButton.classList.add('bg-blue-500');
    interviewJobContainer.style.display = 'none';
    rejectedJobContainer.style.display = 'none';
    allJobContainer.style.display = 'block'
})
interviewJobsButton.addEventListener('click', function(){
    allJobsButton.classList.remove('bg-blue-500');
    rejectedJobsButton.classList.remove('bg-blue-500');
    interviewJobsButton.classList.add('bg-blue-500');
    rejectedJobContainer.style.display = 'none';
    allJobContainer.style.display = 'none'
    interviewJobContainer.style.display = 'block';

    renderInterviewSection();
});

rejectedJobsButton.addEventListener('click', function(){
    allJobsButton.classList.remove('bg-blue-500');
    interviewJobsButton.classList.remove('bg-blue-500');
    rejectedJobsButton.classList.add('bg-blue-500');
    allJobContainer.style.display = 'none'
    interviewJobContainer.style.display = 'none';
    rejectedJobContainer.style.display = 'block';
    renderRejectedSection()
});


// - depending on which is selected set other sections display to none, and their to display block

// - originally the other tabs should have empty sections

const interviewJobContainer = document.getElementById('interview-container');
const rejectedJobContainer = document.getElementById('rejected-container')
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

// code to switch tabs

// onclick tabs change their colors
const allJobsButton = document.getElementById('allJobs');
const interviewJobsButton = document.getElementById('interviewJobs');
const rejectedJobsButton = document.getElementById('rejectedJobs');
const allJobContainer = document.getElementById('alljob-container');

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
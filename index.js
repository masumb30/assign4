
const allJobContainer = document.getElementById('alljob-container');
const interviewJobContainer = document.getElementById('interview-container');
const rejectedJobContainer = document.getElementById('rejected-container');
const totalJobCount = document.querySelectorAll('.total-job-count');
let interviewJobsArray = [];
let rejectedJobsArray = [];
const interviewCount = document.getElementById('interviewCount');
const rejectCount = document.getElementById('rejectCount');


function updateFilteredJobs() {
    interviewCount.innerText = interviewJobsArray.length;
    rejectCount.innerText = rejectedJobsArray.length;
}
function filterInterviewJobsArray(name) {
    let newArray = interviewJobsArray.filter(job => job.company !== name);
    interviewJobsArray = newArray;
}
function filterRejectedJobsArray(name) {
    let newArray = rejectedJobsArray.filter(job => job.company !== name);
    rejectedJobsArray = newArray;
}
function renderInterviewSection() {
    if (interviewJobsArray.length === 0) {
        interviewJobContainer.innerHTML = `<div class="flex flex-col justify-center items-center h-[200px] border-green-100 border-1 rounded-sm">
        <i class="fa fa-file-text text-[40px] text-red-200" aria-hidden="true"></i>
        <h2 class="text-lg font-extrabold">No Job's Available</h2>
        <p class="font-extralight text-sm">Check back soon for new job opportunities</p>
            </div>`
    } else {
        interviewJobContainer.innerHTML = interviewJobsArray.map(job => `<div class="bg-white border-green-100 p-3 my-2 border-1 rounded-md">
                <div class="flex justify-between items-center">

                    <p class="company-name">${job.company}</p>
                    <button class="delete bg-red-100 rounded-full text-red-700 text-sm p-2 cursor-pointer">
                        <i class="fa fa-trash delete" aria-hidden="true"></i>
                    </button>
                </div>
                <p class="job-role">${job.jobTitle}</p>
                <p class="salary">
                    ${job.salary}
                </p>
                <button class="applied-status bg-green-100 border-green-200 text-green-500 px-3 py-1 rounded-sm border-1">${job.status}</button>
                <p class="job-description">${job.description}</p>
                <div>
                    <button
                        class="interview-btn text-green-700 border-green-700 border-1 rounded-sm px-3 py-1">Interview</button>
                    <button
                        class="reject-btn text-red-700 border-red-700 border-1 rounded-sm px-3 py-1 ">Rejected</button>
                </div>
            </div>`)

    }
}
function renderRejectedSection() {
    if (rejectedJobsArray.length === 0) {
        rejectedJobContainer.innerHTML = `<div class="flex flex-col justify-center items-center h-[200px] border-green-100 border-1 rounded-sm">
        <i class="fa fa-file-text text-[40px] text-red-200" aria-hidden="true"></i>
        <h2 class="text-lg font-extrabold">No Job's Available</h2>
        <p class="font-extralight text-sm">Check back soon for new job opportunities</p>
            </div>`
    } else {
        rejectedJobContainer.innerHTML = rejectedJobsArray.map(job => `<div class="bg-white border-green-100 p-3 my-2 border-1 rounded-md">
                <div class="flex justify-between items-center">

                    <p class="company-name">${job.company}</p>
                    <button class="delete bg-red-100 rounded-full text-red-700 text-sm p-2 cursor-pointer">
                        <i class="fa fa-trash delete" aria-hidden="true"></i>
                    </button>
                </div>
                <p class="job-role">${job.jobTitle}</p>
                <p class="salary">
                    ${job.salary}
                </p>
                <button class="applied-status bg-red-100 border-red-200 border-1 text-red-500 px-3 py-1 rounded-sm">${job.status}</button>
                <p class="job-description">${job.description}</p>
                <div>
                    <button
                        class="interview-btn text-green-700 border-green-700 border-1 rounded-sm px-3 py-1">Interview</button>
                    <button
                        class="reject-btn text-red-700 border-red-700 border-1 rounded-sm px-3 py-1 ">Rejected</button>
                </div>
            </div>`)
    }
}

// job delete function

function handleClickEvent(event) {
    console.log(event.target);
    if (event.target.classList.contains('delete')) {
        const name = event.target.parentNode.parentNode.children[0].innerText;
        const newinterviewArray = interviewJobsArray.filter(job => job.company !== name);
        interviewJobsArray = newinterviewArray;
        const newrejectArray = rejectedJobsArray.filter(job => job.company !== name);
        rejectedJobsArray = newrejectArray;
        const parent = event.target.parentNode.parentNode;
        // allJobContainer.removeChild(parent);
        // return the index of the child node in alljobs container
        console.log('sldkf: ', allJobContainer.children)
        const index = [...allJobContainer.children].findIndex(job => {
            return job.children[0].children[0].innerText === name;
        });
        allJobContainer.children[index].remove();

        totalJobCount.forEach(count => count.innerText = Number(count.innerText) - 1)
        // get the job name and filter the interview array and the rejected array
        updateFilteredJobs();
        // if the all section is visible then don't render other section
        
        if(interviewJobContainer.style.display === 'block'){

        renderInterviewSection();
        }
        if(rejectedJobContainer.style.display === 'block'){

        renderRejectedSection();
        }

    }
    if (event.target.classList.contains('interview-btn')) {
        // extract the information 
        const jobcard = event.target.parentNode.parentNode;
        const company = jobcard.children[0].children[0].innerText;
        console.log('company', company);
        const jobTitle = jobcard.children[1].innerText;
        console.log("jobtitle: ", jobTitle);
        const salary = jobcard.children[2].innerText;
        const status = 'Interview';
        const description = jobcard.children[4].innerText;
        const job = {
            company, jobTitle, salary, status, description
        };
        if (!interviewJobsArray.some(job => job.company === company)) {
            interviewJobsArray.push(job);
        }
        jobcard.children[3].innerText = 'Interview';
        jobcard.children[3].className = "applied-status bg-green-100 px-3 py-1 rounded-sm border-1 border-green-200 text-green-500";
        filterRejectedJobsArray(company);
        updateFilteredJobs();
        renderRejectedSection();

        // find the job on all page and update the status
        const index = [...allJobContainer.children].findIndex(job => {
            return job.children[0].children[0].innerText === company;
        });
        allJobContainer.children[index].children[3].innerText = 'Interview';
        allJobContainer.children[index].children[3].className = "applied-status bg-green-100 px-3 py-1 rounded-sm border-1 border-green-200 text-green-500"

    }
    if (event.target.classList.contains('reject-btn')) {
        // extract the information 
        const jobcard = event.target.parentNode.parentNode;
        const company = jobcard.children[0].children[0].innerText;
        console.log('company', company);
        const jobTitle = jobcard.children[1].innerText;
        console.log("jobtitle: ", jobTitle);
        const salary = jobcard.children[2].innerText;
        const status = 'Rejected';
        const description = jobcard.children[4].innerText;
        const job = {
            company, jobTitle, salary, status, description
        };
        if (!rejectedJobsArray.some(job => job.company === company)) {
            rejectedJobsArray.push(job);
        }
        jobcard.children[3].innerText = 'Rejected';
        jobcard.children[3].className = "applied-status bg-red-100 px-3 py-1 rounded-sm border-1 border-red-200 text-red-500";
        filterInterviewJobsArray(company);
        updateFilteredJobs();
        renderInterviewSection();

        const index = [...allJobContainer.children].findIndex(job => {
            return job.children[0].children[0].innerText === company;
        });
        allJobContainer.children[index].children[3].innerText = 'Rejected';
        allJobContainer.children[index].children[3].className = "applied-status bg-red-100 px-3 py-1 rounded-sm border-1 border-red-200 text-red-500"
    }
}

allJobContainer.addEventListener('click', function (event) {
    handleClickEvent(event);
})
interviewJobContainer.addEventListener('click', function (event) {
    handleClickEvent(event);
})
rejectedJobContainer.addEventListener('click', function (event) {
    handleClickEvent(event)
})

// code to switch tabs

// onclick tabs change their colors
const allJobsButton = document.getElementById('allJobs');
const interviewJobsButton = document.getElementById('interviewJobs');
const rejectedJobsButton = document.getElementById('rejectedJobs');

allJobsButton.addEventListener('click', function () {
    interviewJobsButton.classList.remove('bg-blue-500');
    rejectedJobsButton.classList.remove('bg-blue-500');
    allJobsButton.classList.add('bg-blue-500');
    interviewJobContainer.style.display = 'none';
    rejectedJobContainer.style.display = 'none';
    allJobContainer.style.display = 'block'
})
interviewJobsButton.addEventListener('click', function () {
    allJobsButton.classList.remove('bg-blue-500');
    rejectedJobsButton.classList.remove('bg-blue-500');
    interviewJobsButton.classList.add('bg-blue-500');
    rejectedJobContainer.style.display = 'none';
    allJobContainer.style.display = 'none'
    interviewJobContainer.style.display = 'block';

    renderInterviewSection();
});

rejectedJobsButton.addEventListener('click', function () {
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
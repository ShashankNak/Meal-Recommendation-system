const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})


///////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const ageBarChartCtx = document.getElementById('ageBarChart1').getContext('2d');
    const genderPieChartCtx = document.getElementById('genderPieChart1').getContext('2d');

    // Data for age ranges
    const ageData = {
        labels: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61+'],
        datasets: [{
            label: 'Number of Users',
            data: [5, 10, 15, 20, 10, 5, 2], // Example data
            backgroundColor: '#4CAF50',
            borderColor: '#388E3C',
            borderWidth: 1
        }]
    };

    // Data for gender
    const genderData = {
        labels: ['Male', 'Female'],
        datasets: [{
            label: 'Gender Distribution',
            data: [60, 40], // Example data
            backgroundColor: ['#36A2EB', '#FF6384'],
            borderColor: ['#36A2EB', '#FF6384'],
            borderWidth: 1
        }]
    };

    const ageBarChart = new Chart(ageBarChartCtx, {
        type: 'bar',
        data: ageData,
        options: {
            responsive: true,
            animation: {
                duration: 2000
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const genderPieChart = new Chart(genderPieChartCtx, {
        type: 'pie',
        data: genderData,
        options: {
            responsive: true,
            animation: {
                duration: 2000
            }
        }
    });
});

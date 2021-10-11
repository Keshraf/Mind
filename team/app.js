const commitsChart = document.querySelector('#review-chart');

const theCommit = new Chart(commitsChart,{
    type:'bar',
    data:{
        labels:  ['5 stars','4 stars','3 stars','2 stars', '1 star'],
        datasets: [{
            label:"Review",
            data: [38,8,3,1,0],
            backgroundColor:[
                "rgba(49, 164, 230, 1)",
                "rgba(85, 203, 203, 1)",
                "rgba(84, 202, 118, 1)",
                "rgba(245, 196, 82, 1)",
                "rgba(242, 99, 127, 1)",
                "rgba(146, 97, 243, 1)"
        ]
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: false,
        plugins:{
            legend:{
                position:"top"
            }
        }
     }
})
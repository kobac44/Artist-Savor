// let canvas = document.getElementById('artistChart');
// let data = {
//     labels: ["Artist Pay", "Artist Cost"],
//     datasets: [
//         {
//             label: "Artist Savor Chart",
//             backgroundColor: "rgba(52, 235, 155, 0.2)",
//             borderColor: "rgba(52, 235, 155, 1)",
//             borderWidth: 3,
//             hoverBackGroundColor: "rgba(52, 235, 155, 0.5)",
//             hoverBorderColor: "rgba(52, 235, 155, 1)",
//             data: [
//                 {
//                     // data: pay.amount,
//                     // data: cost.cost

//                 }
//             ],
//         }
//     ]
// };
// let option = {
//     animation: {
//         duration: 3000
//     }
// };
// let artistChart = Chart.Bar(canvas, {
//     data: data,
//     options: option
// });


var ctx = document.getElementById("pieChart").getContext('2d');
var pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Green", "Blue"],
        datasets: [{
            backgroundColor: [
                "#2ecc71",
                "#3498db"
            ],
            data: [200, 50],
        }]
    }
});

getCost();
getPay();

let incomeData = [];
let UserId = data.UserId;
let getPay = function () {

    $.get("/api/pays/total/" + UserId).then(data => {
        for (i = 0; i < data.length; i++) {
            incomeData.push(data[i].total);
        };
    });
};

let costData = [];

let getCost = function () {

    $.get("/api/costs/total/" + UserId).then(data => {
        for (i = 0; i < data.length; i++) {
            costData.push(data[i].total);
        };
    });
};
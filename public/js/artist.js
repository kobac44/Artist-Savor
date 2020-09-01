$(document).ready(() => {

    let fullDataSet = [];

    var ctx = document.getElementById("pieChart").getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Artist Savor", "Artist Cost"],
            datasets: [{
                backgroundColor: [
                    "#2ecc71",
                    "#3498db"
                ],
                data: [200, 50],
            }]
        }
    });


    // let totalSums = function () {
    //     $.get("/api/user_data").then(function (data) {
    //         UserId = data.UserId;
    //         $.get("/api/pay/total/" + UserId).then(function (secData) {
    //             fullDataSet.push(secData[0].amount_total);
    //             $.get("/api/cost/total/" + UserId).then(function (treData) {
    //                 fullDataSet.push(treData[0].cost_total);
    //                 let artistSavorHolding = parseInt(fullDataSet[0] - fullDataSet[1])
    //                 $("#artistSavorHolding").text(artistSavorHolding).toFixed(2);
    //                 console.log('check data totals', fullDataSet);
    //             });
    //         });
    //     });
    // };
    // totalSums();
});
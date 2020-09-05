
$(document).ready(() => {



    var ctxOne = $("#pieChart");
    netDataSet = [];

    var getNetData = function () {
        $.get("/api/user_data").then(function (data) {
            email = data.email;
            $.get("/api/pay/total/" + email).then(function (datatwo) {
                netDataSet.push(datatwo[0].tot_amt);
                // console.log(datatwo[0].tot_amt);
                $.get("/api/cost/total/" + email).then(function (datathree) {
                    // console.log(datathree[0].tot_amt);
                    netDataSet.push(datathree[0].tot_amt);
                    // console.log(netDataSet)
                    new Chart(ctxOne, {
                        type: "pie",
                        data: {
                            labels: ["Artist Savor", "Artist Cost"],
                            datasets: [{
                                // data: [netDataSet[0], netDataSet[2]],
                                data: netDataSet,
                                backgroundColor: [
                                    "#2ecc71",
                                    "#3498db"],
                            }]
                        },
                        options: {
                            legend: {
                                display: false,
                            },
                            title: {
                                display: true,
                                text: 'Artist Savor vs. Artist Cost'
                            },
                            scales: {
                                xAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    });
                    $("#artistTotal").text(netDataSet[0] - netDataSet[1]).toFixed(2);
                });
            });
        });
    }

    getNetData();

});

// const pay = require("../../models/pay");
// const cost = require("../../models/cost");
//const db = require("../models");
$(document).ready(() => {

    let AmountData = [];
    let CostData = [];
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
                data: [80, 20],
            }]
        }
    });


});
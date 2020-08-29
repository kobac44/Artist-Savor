

$('#expenseBtn').on("click", function (event) {
    event.preventDefault();

    if (!($("#costs") && $('#cost-type') && $('#cost-amount'))) {

        return;
    }

    expense = {
        origin: $("#costs").val().trim(),
        type: $('#cost-type').val().trim(),
        amount: $('#cost-amount').val().trim(),
        email: $(".member-name").text()
    };

    submitExpense(expense)

    $("#costs").val("");
    $('#cost-type').val("");
    $('#cost-amount').val("");
});

$('#artistBtn').on("click", function (event) {
    event.preventDefault();

    if (!($('#incomeOrigin') && $('#incomeType') && $('#incomeAmount'))) {

        return;
    }

    const income = {
        origin: $('#incomeOrigin').val().trim(),
        type: $('incomeType').val().trim(),
        amount: $('incomeAmount').val().trim(),
        email: $(".member-name").text()
    };

    submitIncome(income)

    $('#incomeOrigin').val("");
    $('#incomeType').val("");
    $('#incomeAmount').val("");
});

function submitExpense(Expense) {
    $.post("/api/transactions/", Expense, function () {
        window.location.reload();
    })
};

function submitIncome(Income) {
    $.post("/api/artists/", Income, function () {
        window.location.reload();
    })
};

function handleExpenseDelete() {
    var currentExpense = $(this).attr("data-expenseid")
    deleteExpense(currentExpense);
    window.location.reload();
}
function handleIncomeDelete() {
    var currentIncome = $(this).attr("data-incomeid")
    deleteIncome(currentIncome);
    window.location.reload();
}

function deleteExpense(id) {
    $.ajax({
        method: "DELETE",
        url: "/api/transactions/" + id
    })
        .then(function () {
        });
};

function deleteIncome(id) {
    $.ajax({
        method: "DELETE",
        url: "/api/artists/" + id
    })
        .then(function () {
        });
};





//Association between tables query id = userid look at activity use here instead use one object
// CHART FOR THE NET DIFFERENCE

let gotMoney = [];

let getNetData = function () {
    $.get("/api/user_data").then(function (data) {
        email = data.email;
        $.get("/api/artists/total/" + email).then(function (datatwo) {
            gotMoney.push(datatwo[0].tot_amt);
            // console.log(datatwo[0].tot_amt);
            $.get("/api/transactions/total/" + email).then(function (datathree) {
                // console.log(datathree[0].tot_amt);
                gotMoney.push(datathree[0].tot_amt);
                // console.log(gotMoney)
                new Chart($("#myChartNet"), {
                    type: "horizontalBar",
                    data: {
                        labels: ["INCOME", "EXPENSES"],
                        datasets: [{
                            data: [gotMoney[0], gotMoney[2]],
                            data: gotMoney,
                            backgroundColor: [
                                "rgba(75, 192, 192, 1)",
                                "rgba(255,99,132,1)"],
                        }]
                    },
                    options: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: true,
                            text: 'Expenses vs. Income'
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
                $("#netDollars").text(gotMoney[0] - gotMoney[1]).toFixed(2);
            });
        });
    });
};

getNetData();


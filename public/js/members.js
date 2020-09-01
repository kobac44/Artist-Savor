$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  let userId;
  let artForms;
  function userDat() {
    $.get("/api/user_data").then(data => {
      userId = data.id;
      artForms = data.artform;
      $(".member-name").text(data.email);
      $(".artist-address").text(data.artist_address);
      $(".art-form").text(artForms);
      $(".user-id").text(userId);


    });
  };
  userDat();
  let UserId = $(".user-id");
  // id="originMoney"
  let originMoney = $("input#originMoney");
  // id="artType"
  let artType = $("input#artType");
  // id="artAmount"
  let artAmount = $("input#artAmount");
  let payBtn = $("#payBtn");

  payBtn.on("click", PaySubmit);
  function PaySubmit(event) {
    event.preventDefault();

    let gigPay = {

      origin: originMoney.val().trim(),
      type: artType.val().trim(),
      amount: artAmount.val().trim(),
      UserId: UserId.text()
    };
    sendPay(gigPay);

    console.log('show gig pay', gigPay);
    originMoney.val('');
    artType.val('');
    artAmount.val('');
  };
  function sendPay(Pay) {
    $.post('/api/pays', Pay, function () {
      window.location.reload();

    });
  };

  let UserId2 = $(".user-id");
  // id="originCost"
  let originCost = $("input#originCost");
  // id="costType"
  let costType = $("input#costType");
  // id="artCost"
  let artCost = $("input#artCost");
  let costBtn = $("#costBtn");

  costBtn.on("click", CostSubmit);
  function CostSubmit(event) {
    event.preventDefault();

    let gigCost = {

      origin: originCost.val().trim(),
      type: costType.val().trim(),
      cost: artCost.val().trim(),
      UserId: UserId2.text()
    };
    sendCost(gigCost);

    console.log('show gig pay', gigCost);
    originCost.val('');
    costType.val('');
    artCost.val('');
  };
  function sendCost(Cost) {
    $.post('/api/costs', Cost, function () {
      window.location.reload();

    });
  };
  function amounthandle() {
    var currentExpense = $(this).attr("data-expenseid")
    deleteExpense(currentExpense);
    window.location.reload();
  }

  function costhandle() {
    var currentIncome = $(this).attr("data-incomeid")
    deleteIncome(currentIncome);
    window.location.reload();
  }

  function deleteExpense(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/expenses/" + id
    })
      .then(function () {
      });
  }

  function deleteIncome(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/incomes/" + id
    })
      .then(function () {
      });
  }
  deleteExpenseBtn = $(".deleteExpense");
  deleteIncomeBtn = $(".deleteIncome");

  deleteExpenseBtn.on("click", costhandle);
  deleteIncomeBtn.on("click", amounthandle);

});

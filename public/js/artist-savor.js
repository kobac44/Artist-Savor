// ready function for js file
$(function () {
    //handle click event for creating a new 
    $('.create-form').on('submit', function (event) {
        event.preventDefault();

        let newArtist = {
            artistName: $('#newartist').val().trim(),
            address: $('#address').val().trim(),
            artform: $('#artform').val().trim(),
            deposit: $('#deposit').val().trim()
        };
        $.ajax('/api/artist', {
            type: "POST",
            data: newArtist
        }).then(() => {
            // Reload the page to get the updated account information
            location.reload();
        });
    });
    //handle click event to update 
    $('.create-trans').on('click', function (event) {
        event.preventDefault();
        let id = $(this).data('id');

        let Transaction = {
            balance: $('#deposit'),


        };
        $.ajax('/api/artist/' + id, {
            type: "PUT",
            balance: Transaction
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
    });
    // handle click event to delete a burger from view and database
    $(".delete-artist").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        // Send the DELETE request.
        $.ajax("/api/artist/" + id, {
            type: "DELETE"
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });
});

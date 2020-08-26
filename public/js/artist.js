// ready function for js file
$(function () {
    //handle click event for creating a new burger to database and view
    $('.create-form').on('submit', function (event) {
        event.preventDefault();

        let newArtist = {
            artistName: $('#newartist').val().trim(),
            address: $('#address').val().trim(),
            artform: $('#artform').val().trim(),
            deposit: $('#deposit').val().trim()
        };
        $.ajax('/api/artists', {
            type: "POST",
            data: newArtist
        }).then(() => {
            // Reload the page to get the updated list of burgers
            location.reload();
        });
    });
    //handle click event to update a burger to devoured in view and database
    $('.create-trans').on('click', function (event) {
        event.preventDefault();
        let id = $(this).data('id');

        let transaction = {
            deposit: parseInt($('#deposit')),
            withdrawl: -1 * parseInt($('#withdrawl'))

        };
        $.ajax('/api/artists/' + id, {
            type: "PUT",
            transaction: transaction
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
        $.ajax("/api/artists/" + id, {
            type: "DELETE"
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });
});

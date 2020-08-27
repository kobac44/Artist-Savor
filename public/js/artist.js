// ready function for js file
$(function () {

    $('.create-form').on('submit', function (event) {
        event.preventDefault();

        let newArtist = {
            artistName: $('#artistName').val().trim(),
            address: $('#artist_address').val().trim(),
            artform: $('#artform').val().trim(),
            deposit: $('#deposit').val().trim()
        };
        $.ajax('/api/artist', {
            type: "POST",
            data: newArtist
        }).then(() => {

            window.location.replace("/members");
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
            window.location.replace("/members");
        }
        );
    });
});

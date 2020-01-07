Routing and Templating
The goal of these exercises is to use the value of req.url.

Echo Server
-----------
Write an http server that sends a plain text response containing the value of req.url.

For example, if the address in the browser is http://localhost:3000/hey-you, the page should show the text hey-you.


Madlib
------
Part 1

Write an http server that uses the value of req.url as part of a greeting.

For example, if the address in the browser is http://localhost:3000/oakley, the page should show the text Hello, Oakley!

As before, set the Content-Type correctly for plain text.


Album browser
------------
Continuing the code from the demo, create a module named albums.js that provides the following functions:

getAlbums
getSongsForAlbum
In albums.js, require() an albumsData.json file that you will need to create and fill with this data:

{
  "albums": [
    {
        "id": 1001,
        "artist": "Miles Davis",
        "title": "Kind of Blue",
        "songs": [
            {
                "id": 5001,
                "title": "So What"
            },
            {
                "id": 5002,
                "title": "Freddie Freeloader"
            },
            {
                "id": 5003,
                "title": "Blue in Green"
            },
            {
                "id": 5004,
                "title": "All Blues"
            },
            {
                "id": 5005,
                "title": "Flamenco Sketches"
            }
        ]
    },
    {
        "id": 1002,
        "artist": "John Coltrane",
        "title": "A Love Supreme",
        "songs": [
            {
                "id": 6001,
                "title": "Resolution"
            },
            {
                "id": 6002,
                "title": "Pursuance"
            },
            {
                "id": 6003,
                "title": "Psalm"
            }
        ]
    },
    {
        "id": 1003,
        "artist": "Dave Brubeck ",
        "title": "Time Out",
        "songs": [
            {
                "id": 7001,
                "title": "Blue Rondo à la Turk"
            },
            {
                "id": 7002,
                "title": "Strange Meadow Lark"
            },
            {
                "id": 7003,
                "title": "Take Five"
            },
            {
                "id": 7004,
                "title": "Three to Get Ready"
            },
            {
                "id": 7005,
                "title": "Kathy's Waltz"
            },
            {
                "id": 7006,
                "title": "Everybody's Jumpin'"
            },
            {
                "id": 7007,
                "title": "Pick up Sticks"
            }
        ]
    }    
  ]
}
Use those functions to send data back to the client when they request album or song information.

If they request any IDs that do not exist, respond with the message "Data not found."

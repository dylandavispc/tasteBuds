$(document).ready(function() {

    const url = window.location.search;

    // grabs the user ID passed through the url
    let userId = url.split("=")[1];

    getUserInfo(userId);
});

const getUserInfo = (userId) => {
    queryUrl = "/api/user/" + userId;
    $.get(queryUrl, function(data) {
        console.log(data.name);

        // Template markup to home page
        let newTr = `
        <div>
            Name: ${data.name}
        </div>
        `

        // !!!!!! To be replaced with actual front-end !!!!!!!!!!!!!!!!!
        document.body.innerHTML = newTr;
    })
}
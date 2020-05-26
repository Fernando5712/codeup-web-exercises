// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

$(document).ready(function () {
    function userHistory(username) {
        var myPromise = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_TOKEN}`}});
        myPromise.then(response => response.json())
            .then(events => console.log(events));
    }
    userHistory('FernandoHernandez')
});


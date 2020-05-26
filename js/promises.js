// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

$(document).ready(function () {
    function userHistory(username) {
        var myPromise = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_TOKEN}`}});
        myPromise.then(response => response.json())
            .then(events => console.log(events));
    }
    userHistory('FernandoHernandez')
});

function timeOut(millsecond) {
    let secs = millsecond / 1000;
    return new Promise((resolve, reject) => {
        if (typeof millsecond === "number") {
            setTimeout(() => {
                if (millsecond <= 1000) {
                    resolve (" You'll see this after ${secs} seconds")
                } else {
                    resolve ( " You'll see this after ${secs} seconds")
                }
            }, millsecond)
        } else {
            reject ("${millsecond.toUpperCase()} IDK WHAT HAPPENED")
        }
    })
}

console.log(timeOut(1000));
timeOut(2000).then(message => console.log("Promise Resolved", message));
timeOut("random").catch(message => console.log("Promise Rejected"));
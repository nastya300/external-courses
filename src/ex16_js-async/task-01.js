const post = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        userId: 2001,
        id: 2001,
        title: "my post request",
        body: "Nastya Lobakina",
    })
};

function fetch(url, obj) {
    let xhr = new XMLHttpRequest();
    let method = 'GET';
    let body = null;

    if (typeof (obj) !== 'undefined') {
        method = 'POST';
        body = obj.body;
    }

    return new Promise(function (resolve) {
        xhr.open(method, url);
        if (method === 'POST') {
            xhr.setRequestHeader(Object.keys(obj.headers)[0], obj.headers[Object.keys(obj.headers)]);
        }
        xhr.onload = () => {
            resolve(new Response(xhr.response))
        }
        xhr.send(body);
    });

}
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => { return response.json() })
    .then(data => document.getElementById('main').innerHTML = JSON.stringify(data))
    .catch(error => console.log(error))

fetch("https://jsonplaceholder.typicode.com/posts", post)
    .then(response => { return response.json() })
    .then(data => document.getElementById('main').innerHTML = JSON.stringify(data))
    .catch(error => console.log(error))

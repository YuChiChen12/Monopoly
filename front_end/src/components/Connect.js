function Get() {
    return fetch("http://140.113.122.176:5000")
      .then((response) => response.json())
      .catch((error) => {
        console.log(`Error: ${error}`);
        throw error;
    });
}

export default Get;

export function Post(data) {
return fetch("http://140.113.122.176:5000", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
})
    .then((response) => response.json())
    .then(json => console.log(json))
    .catch((error) => {
    console.log(`Error: ${error}`);
    throw error;
    });
}


function Get() {
    return fetch("http://140.113.122.176:5000")
      .then((response) => response.json())
      .catch((error) => {
        console.log(`Error: ${error}`);
        throw error;
    });
}

export default Get;

export function Post(formDataJson) {
    console.log('Post data：', {formDataJson})
    return fetch('http://140.113.122.176:5000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: formDataJson,
        })
        .then(response => response.json())
        .catch((error) => {
            console.error(`Error in handleButtonClick: ${error}`);
        });
}


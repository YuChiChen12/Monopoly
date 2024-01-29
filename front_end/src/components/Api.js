export default async function Get() {
    try {
        const response = await fetch("http://54.206.145.117:5000");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error in Get: ${error}`);
        throw error;
    }
}

export async function Post(formDataJson) {
    console.log('Post data:', formDataJson);
    try {
        const response = await fetch("http://54.206.145.117:5000", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataJson),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error in Post: ${error}`);
        throw error;
    }
}

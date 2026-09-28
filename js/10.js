function fetchWithTimeout(url, ms) {
    const fetchPromise = fetch(url);

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request Timed Out"));
        }, ms);
    });

    return Promise.race([
        fetchPromise,
        timeoutPromise
    ]);
}

async function testFetch() {
    try {
        const response = await fetchWithTimeout(
            "https://jsonplaceholder.typicode.com/todos/1",
            2000
        );

        const data = await response.json();

        console.log("Task 10:", data);

    } catch (error) {
        console.log("Task 10:", error.message);
    }
}

testFetch();
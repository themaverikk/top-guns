const submitHireRequest = async hireRequestDetails => {
    console.log("submitting hire request");

    await fetch("/api/hire", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ hireRequestDetails }),
    });
}

export { submitHireRequest };

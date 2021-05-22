const submitHireRequest = async hireRequestDetails => {

    await fetch("/api/hire", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ hireRequestDetails }),
    });
}

export { submitHireRequest };

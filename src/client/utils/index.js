const submitHireRequest = async hireRequestData => {

    await fetch("/api/hire", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(hireRequestData),
    });
}

const applyForJob = async candidateDetails => {

    await fetch("/api/apply", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ candidateDetails }),
    });
}

export { submitHireRequest, applyForJob };

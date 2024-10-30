function responseStructure(
    code,
    message = "Something went wrong...",
    data = null,
    status = "Failed"
) {
    return {
        code,
        status,
        message,
        data,
    };
}

export { responseStructure }
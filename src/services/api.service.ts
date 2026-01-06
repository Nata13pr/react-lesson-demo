// const endpoint

const loadUsers = async () => {
    const response = await fetch("/api/users")
        .then(res => res.json());
    return response;
}
export {
    loadUsers,
}
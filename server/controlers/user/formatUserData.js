
const usersForReturn = (users) => {
    return users.map(user => userForReturn(user));
}

const userForReturn = (user) => {
    const { _id, firstName, lastName, email, avatarId, role, createdAt, updatedAt, isDeleted, deletedAt } = user;
    return { _id, firstName, lastName, email, avatarId, role, createdAt, updatedAt, isDeleted, deletedAt };
}

module.exports = {
    usersForReturn,
    userForReturn,
}
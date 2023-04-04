export const padNumber = (n, count) => {
    const string = '0'.repeat(count);
    return (string + n).slice(-count);
}
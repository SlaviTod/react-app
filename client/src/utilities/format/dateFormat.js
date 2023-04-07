export const formatDate = (date, locale) => {
    return new Date(date).toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' });
}

export const formatTime = (date, locale) => {
    return new Date(date).toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });
}
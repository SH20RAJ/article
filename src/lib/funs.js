






export const getDate = (date) => {
    const d = new Date(date);
    return d.toDateString();
}


export const getRelativeTime = (date) => {
    const d = new Date(date);
    const now = new Date();
    const diff = now - d;
    const seconds = diff / 1000;
    if (seconds < 60) {
        return `${Math.floor(seconds)}s ago`;
    }
    const minutes = seconds / 60;
    if (minutes < 60) {
        return `${Math.floor(minutes)}m ago`;
    }
    const hours = minutes / 60;
    if (hours < 24) {
        return `${Math.floor(hours)}h ago`;
    }
    const days = hours / 24;
    if (days < 30) {
        return `${Math.floor(days)}d ago`;
    }
    const months = days / 30;
    if (months < 12) {
        return `${Math.floor(months)} months ago`;
    }
    const years = months / 12;
    return `${Math.floor(years)}y ago`;
}

export const getRelativeViews = (views) => {
    if (views < 1000) {
        return views;
    }
    if (views < 1000000) {
        return `${Math.floor(views / 1000)}k`;
    }
    return `${Math.floor(views / 1000000)}m`;
}


export const makeSlug = (str) => {
    return str.toLowerCase().replace(/ /g, "-");
    }
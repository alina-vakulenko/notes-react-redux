export const formatDate = (
    datestring: string,
    options: Intl.DateTimeFormatOptions = {
        month: "numeric",
        day: "numeric",
        year: "numeric",
    }
) => {
    const dateToFormat = Date.parse(datestring);
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        dateToFormat
    );
    return formattedDate;
};

// Date du jour en format String

const dateAuj = new Date().toISOString();
const formatDate = dateAuj.slice(0, 10);

console.log(formatDate);

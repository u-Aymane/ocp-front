const days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
];

let months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
];

export default function formatCurrentDate() {
    let date = new Date();
    let year = date.getFullYear();
    return `${days[date.getDay()]} ${date.getDate()} ${
        months[date.getMonth()]
    } ${year}`;
}

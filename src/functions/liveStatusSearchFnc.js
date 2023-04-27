import social_media from "../data/socialMediaList";

const keys = {
    0: "Clic sur ",
    65: "Ajout aux contacts",
    51: "Ouverture du profil",
    52: "Clic sur Email",
    // 51:"Ouverture localisation",
    102: "Clic lien rendez-vous",
    101: "Lien ouvert (Title of link)",
    // 51:"Consulte les images",
    // 51:"Regarde les vidéos",
};

const ROLE_OPTIONS_KEYS = {
    Collaborateur: "fname",
    "ID interlocteur": "tracking_token",
    "Date 1ère rencontre": "first_seen",
    Ville: "ip_info",
    "Action exécutée": "user_action",
    "Date Action": "date",
    "Nb visites profil": "times_seen",
};

export default function searchByFiled(row, searchText, filterBy) {
    if (!searchText.trim()) return true;
    let search = searchText.toLowerCase().trim();
    let filed = "";
    if (filterBy === "Action exécutée") {
        filed =
            row.user_action < 25
                ? `Clic sur ${social_media[row.user_action - 1].label}`
                : row.user_action === 101
                ? row.other_data.includes("calendly")
                    ? "Clic lien rendez-vous"
                    : row.link_title !== (undefined && null)
                    ? `Lien ouvert ${row.link_title}`
                    : "Ouverture Site web"
                : keys[row.user_action];
        if (!Boolean(filed)) filed = "";
    } else if (filterBy === "Collaborateur" || filterBy === "Utilisateur") {
        filed = `${row.fname} ${row.lname}`;
    } else if (filterBy === "ID interlocteur") {
        filed =
            row.viewer_data &&
            row.viewer_data.fname != null &&
            row.viewer_data.lname != null
                ? row.viewer_data.fname + " " + row.viewer_data.lname
                : row.tracking_token;
    } else {
        filed = row[ROLE_OPTIONS_KEYS[filterBy]] + "".toLowerCase();
    }

    filed = filed.trim().toLowerCase();

    return filed.includes(search);
}

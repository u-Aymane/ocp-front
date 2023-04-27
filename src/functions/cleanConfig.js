function deleteId(item) {
    delete item.id;
    return item;
}

export default function cleanConfig(dirty_config) {
    let config = { ...dirty_config };
    config.register_email_ext = config.register_email_ext.replace("@", "");
    config.contact_email_ext = config.contact_email_ext.replace("@", "");

    // Remove the the id that added by ui
    // config.socials = config.socials.map(deleteId);
    // config.links = config.links.map(deleteId);
    // config.images = config.images.map(deleteId);
    // config.videos = config.videos.map(deleteId);

    // Remove The empty Fields
    config.socials = config.socials.filter((item) => item.social_id !== -1);
    config.images = config.images.filter((item) => item.image);
    config.videos = config.videos.filter((item) => item.type);

    return config;
}

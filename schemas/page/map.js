export default {
    name: 'map',
    title: 'Map',
    type: 'document',
    fields: [
        {
            name: 'location',
            title: 'Meet us at',
            type: 'string',
            description: 'The address of the location.',
        },
        {
            name: 'contact',
            title: 'Contact',
            type: 'text',
            description: 'Email ID to contact.',
        },
        {
            name: 'follow',
            title: 'Follow us on',
            type: 'string',
            description: 'Social media links.',
        }
    ],
    preview: {
        select: {
            title: 'location',
            subtitle: 'contact',
            media: 'follow',
        },
        prepare(selection) {
            const { title, subtitle, media } = selection;
            // If there is no media, use a default placeholder (not provided here)
            const defaultMedia = undefined; // Replace this with your own default image asset if needed

            return {
                title: title,
                subtitle: subtitle,
                media: media || defaultMedia,
            };
        },
    },
};

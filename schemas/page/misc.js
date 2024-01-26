export default {
    name: 'misc',
    title: 'Miscellaneous',
    type: 'document',
    fields: [
        {
            name: 'year',
            title: 'Year',
            type: 'number',
            description: 'The current academic year.',
        },
        {
            name: 'theme',
            title: 'Theme',
            type: 'string',
            description: 'The theme for the current year.',
        },
        {
            name: 'current_captain',
            title: 'Captain',
            type: 'string',
            description: 'The name of the current captain.',
        },
        {
            name: 'current_treasurer',
            title: 'Treasurer',
            type: 'string',
            description: 'The name of the current treasurer.',
        },
        {
            name: 'current_webLead',
            title: 'Web Lead',
            type: 'string',
            description: 'The name of the current web lead.',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            description: 'The logo of the club.',
        },
        {
            name: 'facebook',
            title: 'Facebook',
            type: 'url',
            description: 'Link to the Facebook page.',
        },
        {
            name: 'facebookHandler',
            title: 'Facebook Handler',
            type: 'string',
            description: 'Handler for the Facebook page (e.g., @yourpage)',
            hidden: ({ document }) => !document.facebook,
        },
        {
            name: 'twitter',
            title: 'Twitter',
            type: 'url',
            description: 'Link to the Twitter profile.',
        },
        {
            name: 'twitterHandler',
            title: 'Twitter Handler',
            type: 'string',
            description: 'Handler for the Twitter profile (e.g., @yourprofile)',
            hidden: ({ document }) => !document.twitter,
        },
        {
            name: 'linkedIn',
            title: 'LinkedIn',
            type: 'url',
            description: 'Link to the LinkedIn profile.',
        },
        {
            name: 'linkedInHandler',
            title: 'LinkedIn Handler',
            type: 'string',
            description: 'Handler for the LinkedIn profile (e.g., @yourprofile)',
            hidden: ({ document }) => !document.linkedIn,
        },
        {
            name: 'instagram',
            title: 'Instagram',
            type: 'url',
            description: 'Link to the Instagram profile.',
        },
        {
            name: 'instagramHandler',
            title: 'Instagram Handler',
            type: 'string',
            description: 'Handler for the Instagram profile (e.g., @yourprofile)',
            hidden: ({ document }) => !document.instagram,
        },
        // Add more social media fields and handlers as needed
    ],
    preview: {
        select: {
            title: 'year',
            description: 'theme',
        },
        prepare(selection) {
            const { title, theme } = selection;
            // If there is no trophy image, use a default placeholder (not provided here)

            return {
                title: title,
                subtitle: theme,
            };
        },
    },
};

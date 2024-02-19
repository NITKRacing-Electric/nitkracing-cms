export default {
    name: 'team_desc',
    title: 'Team Description',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Title of the team',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Description of the team',
      },
      {
        name: 'team_images',
        title: 'Team Images',
        type: 'image',
        description: 'An image of the team',
        options: {
          hotspot: true, // Enables hotspot for precise cropping
        },
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'description',
        media: 'team_images',
      },
      prepare(selection) {
        const { title, subtitle, media } = selection;
        // If there is no trophy image, use a default placeholder (not provided here)
        const defaultMedia = undefined; // Replace this with your own default image asset if needed
  
        return {
          title: title,
          subtitle: subtitle,
          media: media || defaultMedia,
        };
      },
    },
  };
  
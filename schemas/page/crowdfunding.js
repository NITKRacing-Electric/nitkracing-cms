export default {
    name: 'crowdfunding',
    title: 'Crowdfunding',
    type: 'document',
    fields: [
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Description of the crowdfunding project',
      },
      {
        name: 'crowdfunding_image',
        title: 'Crowdfunding Image',
        type: 'image',
        description: 'An image related to the crowdfunding project',
        options: {
          hotspot: true, // Enables hotspot for precise cropping
        },
      },
    ],
    preview: {
      select: {
        media: 'crowdfunding_image', 
        subtitle: 'description', 
      },
      prepare(selection) {
        const { subtitle, media } = selection;
        // If there is no image provided, use a default placeholder
        const defaultMedia = undefined; // Replace this with your own default image asset if needed
  
        return {
          subtitle: subtitle,
          media: media || defaultMedia,
        };
      },
    },
  };
  
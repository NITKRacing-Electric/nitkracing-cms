export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The title of the gallery item.',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                description: 'The image for the gallery item.',
                options: {
                  hotspot: true, // Enables hotspot for precise cropping
                },
              },
              {
                name: 'link',
                title: 'Link',
                type: 'url',
                description: 'The link associated with the image.',
              },
            ],
          },
        ],
        description: 'List of images with their associated links for the gallery item.',
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'images.0.image',
      },

      prepare(selection) {
        const { title, media } = selection;
        // If there is no team lead image, use a default placeholder
        const defaultMedia = undefined; // Replace this with your own default image asset if needed
    
        return {
          title: title,
          media: media || defaultMedia,
        };
      },
    },
  };
  
export default {
  name: 'achievement',
  title: 'Achievement',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the achievement or award.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the achievement and its significance.',
    },
    {
      name: 'background',
      title: 'Background Image',
      type: 'image',
      description: 'An image that represents the background or context of the achievement.',
      options: {
        hotspot: true, // Enables hotspot for precise cropping
      },
    },
    {
      name: 'trophy_image',
      title: 'Trophy Image',
      type: 'image',
      description: 'An image of the trophy or award (optional).',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'trophy_image',
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

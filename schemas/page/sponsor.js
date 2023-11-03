export default {
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    {
      name: 'picture',
      title: 'Picture',
      type: 'image',
      description: 'An image representing the sponsor, such as a logo.',
      options: {
        hotspot: true, // Enables the hotspot for precise control over how images are cropped
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the sponsor.',
    },
    {
      name: 'tier',
      title: 'Tier',
      type: 'string',
      description: 'The sponsorship tier.',
      options: {
        list: [
          { title: 'Gold', value: 'gold' },
          { title: 'Silver', value: 'silver' },
          { title: 'Bronze', value: 'bronze' },
          { title: 'None', value: 'none' },
        ], // Defines the list of possible options for the tier
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tier',
      media: 'picture',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        subtitle: subtitle.charAt(0).toUpperCase() + subtitle.slice(1), // Capitalize the first letter of the tier
        media,
      };
    },
  },
};

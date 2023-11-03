export default {
  name: 'teamMember',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'memberName',
      title: 'Member Name',
      type: 'string',
      description: 'The full name of the team member.',
    },
    {
      name: 'info',
      title: 'Information',
      type: 'text',
      description: 'A detailed description of the member\'s role and contributions to the team.',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'The title or position of the team member within the club.',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'An image of the team member.',
      options: {
        hotspot: true, // Enables the hotspot for precise control over how images are cropped
      },
    },
  ],
  preview: {
    select: {
      title: 'memberName',
      subtitle: 'heading',
      media:'image'
    },
  },
};

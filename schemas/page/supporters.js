export default {
    name: 'supporters',
    title: 'Supporters',
    type: 'document',
    fields: [
      {
        name: 'supporter_name',
        title: 'Supporter Name',
        type: 'string',
        description: 'Name of the supporter.',
      },
    ],
    preview: {
      select: {
        title: 'supporter_name'
      },
      prepare(selection) {
        const { title } = selection;
        return {
          title: title,
        };
      },
    },
  };
  
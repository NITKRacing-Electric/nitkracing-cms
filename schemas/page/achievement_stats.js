export default {
    name: 'achievement_stats',
    title: 'Achievement Stats',
    type: 'document',
    fields: [
      {
        name: 'stat',
        title: 'Stat',
        type: 'text',
        description: 'The statistic or achievement',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Title of the achievement',
      },
    ],
    preview: {
      select: {
        subtitle: 'title', 
        media: '',
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
  
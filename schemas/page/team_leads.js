export default {
    name: 'team_leads',
    title: 'Team Leads',
    type: 'document',
    fields: [
      {
        name: 'year',
        title: 'Year',
        type: 'integer',
        description: 'Year in which the team lead was active',
      },
      {
        name: 'name',
        title: 'Name',
        type: 'text',
        description: 'Name of the team lead',
      },
      {
        name: 'subsystem',
        title: 'Subsystem',
        type: 'text',
        description: 'Subsystem of the team lead',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Description of the team lead',
      },
      {
        name: 'team_leads_image',
        title: 'Team Lead Image',
        type: 'image',
        description: 'An image of the team lead',
        options: {
          hotspot: true, // Enables hotspot for precise cropping
        },
      },
      
    ],
    preview: {
        select: {
          title: 'name', // Use the name field for the title
          subtitle: 'year', // Use the year field for the subtitle
          media: 'team_leads_image', // Use the team_leads_image field for the media
        },
        prepare(selection) {
          const { title, subtitle, media } = selection;
          // If there is no team lead image, use a default placeholder
          const defaultMedia = undefined; // Replace this with your own default image asset if needed
      
          return {
            title: title,
            subtitle: `Year: ${subtitle}`,
            media: media || defaultMedia,
          };
        },
      },
  };
  
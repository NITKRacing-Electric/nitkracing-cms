export default {
    name: 'sponsorship',
    title: 'Sponsorship',
    type: 'document',
    fields: [
      
      {
        name: 'tiers',
        title: 'Tiers',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Tier Name',
                type: 'string',
                options: {
                  list: [
                    { title: 'Gold', value: 'gold' },
                    { title: 'Silver', value: 'silver' },
                    { title: 'Bronze', value: 'bronze' },
                    { title: 'None', value: 'none' },
                  ], // Defines the list of possible options for the tier
                },
                description: 'The name of the sponsorship tier (Gold, Platinum, Silver, etc.).',
              },
              {
                name: 'price',
                title: 'Price',
                type: 'number',
                description: 'The price of the sponsorship tier in USD.',
              },
              {
                name: 'features',
                title: 'Features',
                type: 'array',
                of: [{ type: 'string' }],
                description: 'Features included in the sponsorship tier.',
              },
            ],
          },
        ],
        description: 'List of sponsorship tiers with their features.',
      },
      
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'description',
      },
      prepare(selection) {
        const { title, subtitle } = selection;
        return {
          title: title,
          subtitle: subtitle,
        };
      },
    },
  };
  
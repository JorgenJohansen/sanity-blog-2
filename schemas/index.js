export const schemaTypes = [

    {
        name: 'author',
        type: 'document',
        title: 'Author',
        fields: [
            {
                name: 'name',
                title: 'Name',
                type: 'string'
            },
            {
                name: 'avatar',
                title: 'Avatar',
                type: 'image'
            }
        ]
    },
    {
        name: 'blog',
        type: 'document',
        title: 'Blog',
        fields: [
            {
                name: 'title',
                type: 'string',
                title: 'Title'
            },
            {
                name: 'subtitle',
                type: 'string',
                title: 'Subtitle'
            },

            {
                name: 'coverImage',
                title: 'Cover Image',
                type: 'image',
                options: {
                    hotspot: true
                },
                fields: [
                    {
                        title: 'Position',
                        name: 'position',
                        type: 'string',
                        options: {
                            list: [
                                {title: 'Center', value: 'center'},
                                {title: 'Left', value: 'left'},
                                {title: 'Right', value: 'right'},
                            ],
                            layout: 'radio',
                            isHighlighted: true
                        }
                    },
                    {
                        type: 'text',
                        name: 'alt',
                        title: 'Description',
                        options: {
                            isHighlighted: true
                        }
                    }
                ],
            },
            {
                name: 'content',
                title: 'Content',
                type: 'array',
                of: [
                    {
                        type: 'block'
                    },
                    {
                        type: 'image',
                        fields: [
                            {
                                type: 'text',
                                name: 'alt',
                                title: 'Description',
                                options: {
                                    isHighlighted: true
                                }
                            }
                        ],
                        options: {
                            hotspot: true
                        }
                    },
                    // {
                    //     type: 'code',
                    //     options: {
                    //         withFilename: true
                    //     }
                    // }
                ]
            },
            {
                name: 'date',
                title: 'Date',
                type: 'datetime',
                validation: (Rule) => {return Rule.required()}
            },
            {
                name: 'author',
                title: 'Author',
                type: 'reference',
                to: [{type: 'author'}],
                validation: (Rule) => {return Rule.required()}
            },
            {
                name: 'slug',
                type: 'slug',
                title: 'Slug',
                validation: (Rule) => {return Rule.required()}
            }
        ]
    }
]

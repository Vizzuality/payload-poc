import { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: "textarea",
      required: true,
      localized: true,
    }
  ],
}

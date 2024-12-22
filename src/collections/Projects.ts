import { adminsAndCreatedBy } from "@/collections/access/admins-and-created-by";
import { createdBy } from "@/collections/hooks/created-by";
import { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: adminsAndCreatedBy,
    update: adminsAndCreatedBy,
    delete: adminsAndCreatedBy,
  },
  hooks: {
    beforeChange: [
      createdBy,
    ],
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
    },
    {
      name: "createdBy",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
      access: {
        update: () => false,
      },
      admin: {
        readOnly: true,
      }
    }
  ],
}

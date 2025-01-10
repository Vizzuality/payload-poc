import { admins } from "@/collections/access/admins";
import { adminsAndUser } from "@/collections/access/admins-and-user";
import { anyone } from "@/collections/access/anyone";
import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: adminsAndUser,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
  },
  fields: [
    {
      name: "roles",
      type: "select",
      hasMany: true,
      saveToJWT: true,
      required: true,
      // hooks: {
      //   beforeChange: [protectRoles],
      // },
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "User",
          value: "user",
        },
      ],
    },
  ],
};

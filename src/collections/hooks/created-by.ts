import { CollectionBeforeChangeHook } from "payload";

export const createdBy: CollectionBeforeChangeHook = ({ req, operation, data }) => {
  if (operation === 'create') {
    if (req.user) {
      data.createdBy = req.user.id;
      return data;
    }
  }
};
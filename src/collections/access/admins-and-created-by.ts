import type { Access } from "payload";

import { checkRole } from "./check-role";

export const adminsAndCreatedBy: Access = ({ req: { user } }) => {
  if (user) {
    if (checkRole(["admin"], user)) {
      return true;
    }

    return {
      createdBy: {
        equals: user.id,
      },
    };
  }

  return false;
};

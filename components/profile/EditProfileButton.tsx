import React from "react";

import CustomLink from "components/common/CustomLink";
import Maybe from "components/common/Maybe";

interface EditProfileButtonProps {
  isUser: boolean;
}

const EditProfileButton = ({ isUser }: EditProfileButtonProps) => (
  <Maybe test={isUser}>
    <CustomLink
      href="/settings"
      className="btn btn-sm btn-outline-secondary action-btn"
    >
      <i className="ion-gear-a" /> Edit Profile Settings
    </CustomLink>
  </Maybe>
);

export default EditProfileButton;

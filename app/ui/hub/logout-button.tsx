'use client';

import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid';
import { Button, Tooltip } from '@nextui-org/react';
import { signOut } from 'next-auth/react';

export function LogoutButton() {
  const logout = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <Tooltip placement="top" content="Log out">
      <Button
        isIconOnly
        variant="faded"
        aria-label="Logout"
        onPress={() => logout()}
      >
        <ArrowLeftStartOnRectangleIcon />
      </Button>
    </Tooltip>
  );
}

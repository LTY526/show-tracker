'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { Button, Tooltip } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return theme === 'light' ? (
    <Tooltip placement="top" content="Switch to Dark mode">
      <Button
        isIconOnly
        variant="faded"
        aria-label="Switch to Dark mode"
        onPress={() => setTheme('dark')}
      >
        <MoonIcon />
      </Button>
    </Tooltip>
  ) : (
    <Tooltip placement="top" content="Switch to Light mode">
      <Button
        isIconOnly
        variant="faded"
        aria-label="Switch to Light mode"
        onPress={() => setTheme('light')}
      >
        <SunIcon />
      </Button>
    </Tooltip>
  );
}

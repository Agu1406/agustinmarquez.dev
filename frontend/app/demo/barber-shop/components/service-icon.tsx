"use client";

import { Icon } from "@iconify/react";

type ServiceIconProps = {
  icon: string;
  className?: string;
};

export function ServiceIcon({ icon, className }: ServiceIconProps) {
  return (
    <Icon
      icon={icon}
      className={className}
      width={22}
      height={22}
      aria-hidden
    />
  );
}

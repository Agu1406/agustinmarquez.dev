/** Tipo de cambio orientativo solo para la demo (no en tiempo real). */
export const EUR_TO_UAH = 44.33;

export const GROUP_HOURLY_EUR = 15;

export function formatGroupPrice(): { uah: string; eur: string } {
  const uah = Math.round(GROUP_HOURLY_EUR * EUR_TO_UAH);
  return {
    uah: `${uah} ₴`,
    eur: `${GROUP_HOURLY_EUR} €`,
  };
}

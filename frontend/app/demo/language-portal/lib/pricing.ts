/** Tipo de cambio orientativo solo para la demo (no en tiempo real). */
export const EUR_TO_UAH = 44.33;

export const GROUP_HOURLY_EUR = 15;

export const EXAMPLE_PRICE_NOTE = {
  uk: "Приклад ціни, це не пропозиція. Курс гривні орієнтовний.",
  es: "Precio de ejemplo, no es una oferta. El cambio a grivna es orientativo.",
} as const;

export const DEMO_NOTICE = {
  uk: "Це демонстрація з вигаданими даними. Контакт веде на пошту портфоліо.",
  es: "Esto es una demo con datos de ejemplo. El contacto abre el correo del portfolio.",
} as const;

export function formatGroupPrice(): { uah: string; eur: string } {
  const uah = Math.round(GROUP_HOURLY_EUR * EUR_TO_UAH);
  return {
    uah: `${uah} ₴`,
    eur: `${GROUP_HOURLY_EUR} €`,
  };
}

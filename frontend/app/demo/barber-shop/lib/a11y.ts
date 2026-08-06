/** Sufijo para enlaces que abren en nueva pestaña (lectores de pantalla). */
export const NEW_TAB_LABEL = " (se abre en nueva pestaña)";

export function externalLabel(label: string): string {
  return `${label}${NEW_TAB_LABEL}`;
}

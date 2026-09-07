export const WHATSAPP_NUMBER = "1130249702";
export const WHATSAPP_E164 = "5491130249702";
export const WHATSAPP_DISPLAY = "11 3024-9702";

const DEFAULT_TEXT = "Hola Bitfy, quiero pedir una cotización.";

export function whatsappUrl(text: string = DEFAULT_TEXT) {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}

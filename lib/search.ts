// Lower-cases text and drops diacritics, so that "Przyluska" finds "Przyłuska".
export function fold(text: string) {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ł/gi, 'l')
    .replace(/ø/gi, 'o')
    .toLocaleLowerCase()
}

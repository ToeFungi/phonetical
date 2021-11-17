import { Dictionary } from './types/Dictionary'
import { NatoDictionary } from './dictionaries/NatoDictionary'

/**
 * Phonetical translates text into a specified phonetic alphabet
 */
class Phonetical {
  /**
   * Translate given text to specified phonetic alphabet
   */
  public static toPhonetics(text: string, dictionary: Dictionary = NatoDictionary): string {
    const mapLetterToPhonetic = (letter: string) => dictionary[letter.toLowerCase()]

    const mapWordToPhonetic = (word: string) => word.split('')
      .map(mapLetterToPhonetic)
      .join(' ')

    return text.split(' ')
      .map(mapWordToPhonetic)
      .join(' ')
  }
}

export { Phonetical }

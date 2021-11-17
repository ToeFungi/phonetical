import { TestCase } from '../../support/types/TestCase'
import { onlyPredicate } from '../../support/libs/OnlyPredicate'
import {
  Phonetical,
  NatoDictionary,
  GermanDictionary,
  EnglishDictionary,
  ItalianDictionary,
  AmericanDictionary,
  InternationalDictionary
} from '../../../src'

describe('Phonetical', () => {
  describe('#toPhonetics', () => {
    const testCases = [
      {
        descriptor: 'returns the translation with a Nato dictionary',
        dictionary: NatoDictionary,
        text: 'Hello',
        translation: 'Hotel Echo Lima Lima Oscar'
      },
      {
        descriptor: 'returns the translation with an Italian dictionary',
        dictionary: ItalianDictionary,
        text: 'Hello',
        translation: 'Hotel Empoli Livorno Livorno Otranto'
      },
      {
        descriptor: 'returns the translation with an International dictionary',
        dictionary: InternationalDictionary,
        text: 'Hello',
        translation: 'Havana Edision Liverpool Liverpool Oslo'
      },
      {
        descriptor: 'returns the translation with an German dictionary',
        dictionary: GermanDictionary,
        text: 'Hello',
        translation: 'Heinrich Emil Ludwig Ludwig Otto'
      },
      {
        descriptor: 'returns the translation with an English dictionary',
        dictionary: EnglishDictionary,
        text: 'Hello',
        translation: 'Harry Edward Lucy Lucy Oliver'
      },
      {
        descriptor: 'returns the translation with an American dictionary',
        dictionary: AmericanDictionary,
        text: 'Hello',
        translation: 'How Easy Love Love Oboe'
      }
    ] as TestCase[]

    testCases.forEach(({ only, descriptor, dictionary, text, translation }) => {
      onlyPredicate(only)(descriptor, () => {
        return Phonetical.toPhonetics(text, dictionary)
          .should.deep.equal(translation)
      })
    })
  })
})

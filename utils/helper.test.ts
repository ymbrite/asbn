import { describe, it, expect } from 'vitest'
import { makeFirstCharUpper } from './helper'

describe('makeFirstCharUpper', () => {
    it('should return empty string if input is empty', () => {
        expect(makeFirstCharUpper('')).toBe('')
    })

    it('should capitalize the first letter of a lowercase word', () => {
        expect(makeFirstCharUpper('hello')).toBe('Hello')
    })

    it('should keep the first letter capitalized if already capital', () => {
        expect(makeFirstCharUpper('World')).toBe('World')
    })

    it('should work with single character', () => {
        expect(makeFirstCharUpper('a')).toBe('A')
    })

    it('should not affect non-alphabetic first characters', () => {
        expect(makeFirstCharUpper('1test')).toBe('1test')
        expect(makeFirstCharUpper('-dash')).toBe('-dash')
    })
})

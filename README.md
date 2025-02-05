# google-sheets-functions

This repository contains custom Google Sheets functions I've used and find useful.

## Functions

### RangeContainsAll

The [RangeContainsAll](RangeContainsAll.gs) function performs an iterative "if in" check on a range of cells. It accepts an unspecified number of strings as arguments, and checks each cell in the range against the strings. It will return `TRUE` if all of the strings are equivalent to at least one cell in the range, and `FALSE` if even one of the strings is not contained in the range.
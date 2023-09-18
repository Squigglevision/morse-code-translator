# morse-code-translator

## Overview

The morse code translator tranlates English text (A-Z, numbers and some
punctuation) into morse code and vice versa. I created it using JavaScript and
SCSS, and I used Jest to create unit tests for my translation functions.

## The app

![Screenshot of the morse code translator app](./assets/images/morse-code-translator-screenshot.png)

The design is quite simple, as I focused more on refactoring the JavaScript
and testing for edge cases, but it's optimised to any screen size.

## Functionality

The scripts for the project contain both encode and decode functions, which
are called depending on which language is detected. The translator will check
for dots and dashes - and no A-Z characters - to determine if the input is
written in morse code. If it detects English, numbers or other punctuation aside
from dot, dash or forward slash, it will call the encode function instead.

If either function can't convert a character, it will simply display that
character instead and not translate it.

To capture the input, I've used a form with a textarea field, which will then be
translated and be shown in the output div. To show the encoded or decoded text,
I created a function to replace the output text and change the paramaters based
on whether it needs to be encoded or decoded.

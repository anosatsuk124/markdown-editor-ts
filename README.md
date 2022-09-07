# Markdown Editor

A simple markdown editor. Its markdown parser is built from scratch.

## Usage

## Philosophy

The philosophy of this program is to keep minimal and extensible implementations. We don't need any complex functions and implements. All of the necessary functions would be realized to insert or modify small codes.

## Markdown Parser Implementation

Its parser is built from scratch. So I needed some formal documentation and formal syntax or grammar expressions.

But I can find nothing I want at all, then I defined a GitHub-flavored Markdown subset of a formal (E)BNF-syntax expression as reference [GitHub Official Documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

[(E)BNF-syntax expression I defined](./docs/markdown.ebnf)

```

    This is a simple markdown editor. Its markdown parser is built from scratch.
    Copyright (C) 2022-  Satsuki Akiba

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.


```

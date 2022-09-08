import * as O from 'fp-ts/Option';

const TokenKind = {
    HeadingHash: '#',
    Space: ' ',
    Tab: '\t',
    Asterisk: '*',
    Underscore: '_',
    Tilde: '~',
    OpenedAngle: '<',
    ClosedAngle: '>',
    BackQuote: '`',
    OpenedBraket: '[',
    ClosedBraket: ']',
    OpenedCurly: '(',
    ClosedCurly: ')',
    Exclamation: '!',
    Hyphen: '-',
    Dot: '.',
    Hat: '^',
    Colon: ':',
    Text: '""',
    LF: '\n',
    EOF: '',
} as const;

type TokenKind = typeof TokenKind[keyof typeof TokenKind];

type Token = {
    next: O.Option<Token>;
    kind: TokenKind;
    value: O.Option<string>;
};

const tokenize = (input: string): Token => {
    const chars: Array<string> = Array.from(input);
    let token: Token = {
        next: O.none,
        kind: TokenKind.EOF,
        value: O.none,
    };

    for (const char of chars) {
        switch (char) {
            case TokenKind.HeadingHash:
                token = concat_token(token, TokenKind.HeadingHash, O.none);
                break;
            case TokenKind.Space:
                token = concat_token(token, TokenKind.Space, O.none);
                break;
            case TokenKind.Tab:
                token = concat_token(token, TokenKind.Tab, O.none);
                break;
            case TokenKind.Asterisk:
                token = concat_token(token, TokenKind.Asterisk, O.none);
                break;
            case TokenKind.Underscore:
                token = concat_token(token, TokenKind.Underscore, O.none);
                break;
            case TokenKind.Tilde:
                token = concat_token(token, TokenKind.Tilde, O.none);
                break;
            case TokenKind.OpenedAngle:
                token = concat_token(token, TokenKind.OpenedAngle, O.none);
                break;
            case TokenKind.ClosedAngle:
                token = concat_token(token, TokenKind.ClosedAngle, O.none);
                break;
            case TokenKind.BackQuote:
                token = concat_token(token, TokenKind.BackQuote, O.none);
                break;
            case TokenKind.OpenedBraket:
                token = concat_token(token, TokenKind.OpenedBraket, O.none);
                break;
            case TokenKind.ClosedBraket:
                token = concat_token(token, TokenKind.ClosedBraket, O.none);
                break;
            case TokenKind.OpenedCurly:
                token = concat_token(token, TokenKind.OpenedCurly, O.none);
                break;
            case TokenKind.ClosedCurly:
                token = concat_token(token, TokenKind.ClosedCurly, O.none);
                break;
            case TokenKind.Exclamation:
                token = concat_token(token, TokenKind.Exclamation, O.none);
                break;
            case TokenKind.Hyphen:
                token = concat_token(token, TokenKind.Hyphen, O.none);
                break;
            case TokenKind.Dot:
                token = concat_token(token, TokenKind.Dot, O.none);
                break;
            case TokenKind.Hat:
                token = concat_token(token, TokenKind.Hat, O.none);
                break;
            case TokenKind.Colon:
                token = concat_token(token, TokenKind.Colon, O.none);
                break;
            case TokenKind.LF:
                token = concat_token(token, TokenKind.LF, O.none);
                break;
            default:
                token = concat_token(token, TokenKind.Text, O.some(char));
        }
    }

    return concat_token(token, TokenKind.EOF, O.none);
};

const concat_token = (
    current_token: Token,
    kind: TokenKind,
    value: O.Option<string>
): Token => {
    return {
        next: O.some({
            next: O.none,
            kind: kind,
            value: value,
        }),
        kind: current_token.kind,
        value: current_token.value,
    };
};

export { TokenKind, tokenize };

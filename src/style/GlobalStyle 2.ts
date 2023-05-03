import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    };
    html {
    -webkit-tap-highlight-color: rgba($color: #000000, $alpha: 0);
    word-break: keep-all;
    font-size: 16px;
}

button {
    text-transform: none !important;
}

a {
    text-decoration: none;
    color: inherit;
}

div, span, object, iframe, img, table, caption, thead, tbody,
tfoot, tr, tr, article, aside, canvas, details, figure, hgroup, menu,
nav, footer, header, section, summary, mark, audio, video {
    border: 0;
    margin: 0;
    padding: 0;
}

h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, address, code,
del, dfn, em, ins, q, samp, small, strong, sub, sup, b, i, hr, dl, dt, dd,
ol, ul, li, fieldset, legend, label {
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    margin: 0;
    padding: 0;
}

article, aside, canvas, figure, figure img, figcaption, hgroup,
footer, header, nav, section, audio, video {
    display: block;
}

ul {
    list-style: none;
}

/* Change autocomplete stylrmaes in WebKit */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill,
select:-webkit-autofill:focus {
    background-color: inherit;
    transition: background-color 5000s ease-in-out 0s;
}

input::-ms-clear,
input::-ms-reveal {
    display: none;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration {
    display: none;
}

`

export default GlobalStyle

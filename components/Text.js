import s from 'styled-components'

import { DARK_GRAY, BLACK, SLATE } from '../constants/colors'

export const Title = s.h2``

export const Text = s.p`
  color: ${DARK_GRAY};
`

export const MediumText = s(Text)`
  color: ${BLACK};
  font-weight: 600;
`

export const StrongText = s(Text)`
  color: ${BLACK};
  font-weight: 700;
`

export const Preheading = s.h6`
  margin-bottom: 2.175rem;
  color: ${SLATE};
`

export const Blockquote = s.blockquote`
  opacity: 0.6;

  ::before {
    content: "“";
    position: absolute;
    transform: translateX(-100%);
    font-size: 125%;
  }

  ::after {
    content: "”";
    position: absolute;
    font-size: 125%;
  }
`

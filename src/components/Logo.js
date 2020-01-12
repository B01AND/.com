/** @jsx jsx */

import React from 'react' //eslint-disable-line

import { jsx } from 'theme-ui'

import { Link } from 'gatsby'

import styled from '@emotion/styled'

import { Glyph } from '../utils/Icons'

const A = styled(Link)`
  padding: 0;
  svg,
  g,
  path,
  stroke,
  circle,
  clipPath {
    transition: all 0s !important;
  }
`

const Logo = props => {
  return (
    <A
      sx={{
        variant: 'styles.a',
      }}
      to={`/`}
      className="noUnderline"
      alt="I Am Matthias"
    >
      <Glyph />
    </A>
  )
}

export default Logo
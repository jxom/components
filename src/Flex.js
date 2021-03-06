import styled from 'styled-components'
import PropTypes from 'prop-types'
import {display} from 'styled-system'
import {COMMON, FLEX_CONTAINER, FLEX_ITEM} from './constants'
import theme from './theme'

const Flex = styled.div`
  ${FLEX_CONTAINER}
  ${COMMON}
  ${display}
`

Flex.Item = styled.div`
  ${FLEX_ITEM} ${COMMON};
`

Flex.defaultProps = {
  theme,
  display: 'flex'
}
Flex.Item.defaultProps = {
  theme
}
Flex.propTypes = {
  ...COMMON.propTypes,
  ...FLEX_CONTAINER.propTypes,
  ...display.propTypes
}

Flex.Item.propTypes = {
  ...COMMON.propTypes,
  ...FLEX_ITEM.propTypes,
  theme: PropTypes.object
}

export default Flex

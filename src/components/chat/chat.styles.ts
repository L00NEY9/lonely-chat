import styled from 'styled-components'
import { chatBackgroundColor, borderColor, borderRadius, chatMaxWidth } from '../../constants/ui'

export const ChatWrapper = styled.main`
  max-width: ${chatMaxWidth}px;
  height: 95%;
  width: 100%;
  background: ${chatBackgroundColor};
  border-radius: ${borderRadius}px;
  border: 1px solid ${borderColor};
  display: flex;
  flex-direction: column;
  padding: 0 15px 15px;
  
  @media(max-width: ${chatMaxWidth}px) {
    border: none;
    border-radius: 0;
    width: 100%;
    height: 100%;
  }
`

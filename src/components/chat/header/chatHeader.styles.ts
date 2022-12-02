import styled from 'styled-components'
import { borderColor, dimTextColor } from '../../../constants/ui'

export const ChatHeaderWrapper = styled.header`
  width: 100%;
  min-height: 50px;
  border-bottom: 1px solid ${borderColor};
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  > h4 {
    margin: 0;
    padding: 0;
  }
  
  > span {
    color: ${dimTextColor};
    font-weight: 500;
    font-size: 13px;
  }
`

import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  height: 48px;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
  color: #fff;
`

export const NavItem = styled.li`
  position: relative;
  cursor: pointer;
  list-style: none;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: yellow;
  }
`

export const SubNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  position: absolute;
  top: 34px;
  width: 224px;
  border: 1px solid gray;
  border-radius: 4px;
  color: gray;

  ul {
    padding: 4px 8px;
    margin: 0;
  }
`

export const SubItem = styled.li`
  list-style: none;
  text-align: left;

  &:hover {
    color: #0070f3;
  }
`
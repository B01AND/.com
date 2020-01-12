import { Link } from 'gatsby'

import styled from '@emotion/styled'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.section`
position: relative;
  margin: 2rem auto;
  height: 80vh;
  width: calc(100vw - 4rem);
  max-width: 2000px !important;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  div p {
    display: inline-block;
    padding-right: 1rem;
  }
  &.lost {
    div {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
  }
  
  }
  &.biography {
    height: 100%;
    width: calc(100vw - 4rem);
    margin: 2rem 2rem 10rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 'portrait' 'copy';
    grid-gap: 2rem;
    .copy {
      grid-area: copy;
      form {
        font-family: ${props => props.theme.fonts.body};
        width: 100%;
        label {
          display: none;
        }
        input {
          width: 100%;
          border: 2px solid ${props => props.theme.colors.text};
          display: block;
          margin: 0 0 1rem;
          padding: 0.5rem;
          background: ${props => props.theme.colors.background};
          color: ${props => props.theme.colors.text};
          @media screen and (min-width: ${props =>
            props.theme.responsive.medium}) {
            width: 50%;
          }
        }
        button {
          background: ${props => props.theme.colors.text};
          color: ${props => props.theme.colors.background};
          font-weight: ${props => props.theme.fontWeights.heading};
          padding: 0.5rem 1rem;
        }
      }
    }
    .portrait {
      grid-area: portrait;
    }
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 'copy portrait';
    }
  }
  &.blogIntroduction,
  &.pagination {
    height: 100%;
  }
  &.blog {
    height: 100%;
    width: calc(100vw - 4rem);
    margin: 2rem 2rem 10rem;
    padding-bottom: 2rem;
    display: grid;
    grid-template-columns: 50vw 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    grid-auto-flow: dense;
    border-bottom: 2px solid ${props => props.theme.colors.text};
    article {
      position: relative;
      height: 100%;
      grid-column: 1 /7;
      @media screen and (min-width: ${props => props.theme.responsive.medium}) {
        grid-column: 1;
      }
      figure {
        text-align: center;
        font-style: italic;
        color: ${props => props.theme.colors.muted};
        div {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
          grid-gap: 1rem;
        }
      }
      .buttons {
        margin: 2rem 0;
      }
    
    }
    .hero {
      grid-column: 1 /7;
      @media screen and (min-width: ${props => props.theme.responsive.medium}) {
        grid-column: 2 / 7;
      }
    }
  }
  &.menu {
    height: 5vh;
    margin: 2rem 6.18vw;
    width: calc(100vw - 12.36vw);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: right;
    .mobileBlock {
      
      display: block;
      @media screen and (min-width: ${props => props.theme.responsive.medium}) {
        display: inline-block;
      }
    }
  }
  &.gallery {
    height: 100%;
    justify-content: start;
    .subGallery {
      width: 100%;
      margin: 0 0 5rem;
      p {
        display: block;
      }
    }
  }
`

export const ContentLink = styled(Link)`
  position: relative;
  text-decoration: none;
  div {
    object-fit: cover !important;
  }
  .fit {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 3;
    text-align: center;
    p {
      color: ${props => props.theme.colors.background};
      -webkit-text-stroke: 2px ${props => props.theme.colors.background};
      opacity: 0;
    }
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    background: ${props => props.theme.colors.text};
    opacity: 0;
  }
  &:hover {
    p {
      opacity: 1;
    }
    &:before {
      opacity: 0.8;
    }
  }
`

export const Button = styled.button`
  background: transparent;
  color: ${props => props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.text};
  padding: ${props => props.theme.space[1]}px ${props => props.theme.space[2]}px;
  margin-right: ${props => props.theme.space[2]}px;
  &.colorToggle {
    border: 0;
    svg,
    g,
    path,
    stroke,
    circle,
    clipPath {
      transition: all 0s !important;
    }
    &:focus {
      outline: 0;
    }
  }
`

export const GalleryList = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  div {
    width: 100%;
    position: relative;
  }
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    grid-template-columns: repeat(4, 1fr);
  }
`
// import {
//   secondaryDark, backgroundColor, blueText, mainText
// } from 'src/_styles/colors'

export const commonStyles = {
  Wrapper:{
    '& a': {
      cursor: 'pointer !important'
    }
  },
  Main:{
    '& .swiper-container-horizontal > .swiper-scrollbar': {
      display: 'none'
    }
  },
  loader:{
    position: 'fixed',
    width: '100vW',
    height: '100vh',
    display: 'flex',
    top:0,
    left:0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:9999,
    background: 'rgba(0,0,0,0.7)'
  }
}

export const mobileStyles = {
  Main: {
    paddingTop: '56px',
    '& .swiper-container-horizontal > .swiper-scrollbar': {
      display: 'block',
      bottom: '0'
    },
    '& .swiperScrollbarDrag': {
      backgroundColor: 'rgb(252, 130, 26)'
    }
  }
}

export const TabStyles = {

}

export const desktopStyles = {
  Main: {
    paddingTop: '7.5rem'
  },
  Wrapper: {
    '& .MuiContainer-maxWidthXl': {
      width: '90%',
      maxWidth: '1404px'
    }
  }
}

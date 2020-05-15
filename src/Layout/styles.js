// import {
//   secondaryDark, backgroundColor, blueText, mainText
// } from 'src/_styles/colors'

export const commonStyles = {
  Wrapper: {
    '& ::-webkit-scrollbar': {
      width: '10px',
      backgroundColor: '#F5F5F5',
    },
    '& ::-webkit-scrollbar-thumb': {
      backgroundColor: '#F90',
      backgroundImage: '-webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,	  transparent 75%, transparent)'
    },
    '& a': {
      cursor: 'pointer !important'
    }
  },
  Main: {
    '& .swiper-container-horizontal > .swiper-scrollbar': {
      display: 'none'
    }
  },
  loader: {
    position: 'fixed',
    width: '100vW',
    height: '100vh',
    display: 'flex',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
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

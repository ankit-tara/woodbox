// import {
//   secondaryDark, backgroundColor, blueText, mainText
// } from 'src/_styles/colors'

export const commonStyles = {
  carousel:{
    '& .swiper-button-prev': {
      color: '#000',
      left: '4%',
      outline: 'none'
    },
    '& .swiper-button-next': {
      color: '#000',
      right: '4%',
      outline: 'none'
    },
    '& .swiper-button-disabled': {
      opacity: '0'
    },
    '& .swiper-pagination': {
      bottom: '1.5rem'
    },
    '& .swiper-pagination-bullet': {
      width: '16px',
      height: '16px',
      border: 'solid #fff 1px',
      background: 'transparent',
      opacity: 1
    },
    '& .swiper-pagination-bullet-active': {
      background: '#fff'
    },
  },
  BannerSlide:{
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  slideContent:{
    height: '700px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#fff',
    '& h1':{
      marginBottom: '1rem'
    }
  },
  Button:{
    marginTop: '2rem',
    width: '14rem',
    height: '4.5rem',
    fontSize: '1.4rem',
    color: '#fff',
    borderRadius: '10px',
    backgroundColor: '#000',
    '&:hover':{
      backgroundColor: '#000',
      textDecoration: 'none'
    }
  }
}

export const mobileStyles = {

}

export const TabStyles = {

}

export const desktopStyles = {

}

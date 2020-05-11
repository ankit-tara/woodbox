// import {
//   secondaryDark, backgroundColor, blueText, mainText
// } from 'src/_styles/colors'

export const commonStyles = {
  section: {
    padding: '5rem 0',
    position: 'relative'
  },
  ptZero: {
    paddingTop: '0'
  },
  sectionHeader: {
    textAlign: 'center',
    maxWidth: '910px',
    margin: '0 auto',
    '& h3': {
      marginBottom: '1rem'
    },
    '& h2': {
      marginBottom: '1rem',
      textTransform: 'uppercase'
    },
    '& p': {
      color: '#4A4A4A',
      fontSize: '1.25rem',
    }
  },
  IconCardWrapper: {
    maxWidth: '960px',
    margin: '2rem auto 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '&::before': {
      content: '""',
      background: 'url(/static/images/circleCenter.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      top: '55%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      height: '540px',
      width: '540px',
      position: 'absolute',
      zIndex: '-1'
    },
    '&::after': {
      content: '""',
      background: 'url(/static/images/circleCenter.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      bottom: '-15rem',
      left: '-25rem',
      height: '50rem',
      width: '50rem',
      position: 'absolute',
      zIndex: '-1'
    }
  },
  EventIconCardWrapper: {
    margin: '2rem auto 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  productsHeader: {
    paddingBottom: '1rem',
    borderBottom: 'solid 1px #BDBDBD',
    '& h5': {
      marginBottom: '1rem'
    }
  }
}

export const mobileStyles = {
  section: {
    padding: '2.5rem 0'
  },
  sectionHeader: {
    '& h3': {
      marginBottom: '1rem',
      lineHeight: '2rem'
    },
    '& h2': {
      marginBottom: '1rem',
    },
    '& p': {
      fontSize: '14px',
    }
  },
  IconCardWrapper: {
    '&::after': {
      display: 'none'
    },
    '&::before': {
      width: '20rem',
      height: '20rem'
    }
  },
  EventIconCardWrapper: {
    '& .swiper-button-prev': {
      display: 'none',
    },
    '& .swiper-button-next': {
      display: 'none',
    }
  }
}

export const TabStyles = {
  IconCardWrapper: {
    '&::after': {
      display: 'none'
    }
  }
}

export const desktopStyles = {

}

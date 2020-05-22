// import {
//   secondaryDark, backgroundColor, blueText, mainText
// } from 'src/_styles/colors'
// import {
//   HeadFont
// } from 'src/_styles/global'

export const commonStyles = {
  ProfileContainer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 1rem',
    border: '#ccc solid 1px',
    marginRight: '2.5rem'
  },
  ProfileImage:{
    borderRadius: '50%',
    marginTop: '2rem',
    width: '200px',
    border: 'solid 2px #fd8118',
    position: 'relative',
    overflow:'hidden',
    '& img':{
      borderRadius:'50%',
      width: '100%'
    },
    '&::after':{
      width: '100%',
      height: '30%',
      content: '""',
      background: 'rgba(253, 129, 24, 0.5607843137254902)',
      position: 'absolute',
      bottom: '0',
      left: '0%'
    },
  },
  uploadIcon:{
    position: 'absolute',
    bottom :'10%',
    zIndex: '2',
    left: '40%',
    color: '#fff',
    cursor: 'pointer'
  },
  Button:{
    width: '80%',
    height:'50px',
    marginTop: '2.5rem',
    backgroundColor: '#FD8118',
    color: '#fff',
    fontSize: '1rem',
    boxShadow: 'none'
    },
  vHide:{
    visibility: 'hidden'
  }
}

export const mobileStyles = {

}

export const TabStyles = {

}

export const desktopStyles = {

}

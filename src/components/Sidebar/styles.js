// import {
//   secondaryDark, backgroundColor, blueText, mainText
// } from 'src/_styles/colors'
// import {
//   HeadFont
// } from 'src/_styles/global'

export const commonStyles = {
  root:{
    marginTop: '3rem',
    marginBottom: 0,
    borderBottom: 'solid 1px #BDBDBD',
    '& .MuiExpansionPanel-root':{
      borderTop: 'solid 1px #BDBDBD',
      boxShadow: 'none'
    },
    '& .MuiExpansionPanelSummary-content.Mui-expanded':{
      marginBottom: '0'
    },
    '& .MuiExpansionPanel-root.Mui-expanded':{
      margin: '0'
    },
    '& .MuiExpansionPanelDetails-root':{
      paddingLeft: '0',
      maxHeight: '300px',
      overflow: 'auto'
    },
    '& .MuiExpansionPanelSummary-root':{
      paddingLeft: '0'
    },
    '& .MuiFormControlLabel-label':{
      fontSize: '1.1rem'
    },
    '& .MuiCheckbox-colorPrimary.Mui-checked + .MuiFormControlLabel-label':{
      color: '#FD8118'
    },
  },
  title:{
    fontSize: '20px',
  },
  heading:{
    fontSize: '20px',
    marginBottom:'1rem'
  },
}

export const mobileStyles = {

}

export const TabStyles = {

}

export const desktopStyles = {
  root:{
    marginRight: '2rem'
  }
}

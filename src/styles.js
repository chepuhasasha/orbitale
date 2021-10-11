const styles = {
  themes: {
    dark: {
      background_0: '#f1f3f6',
      background_100: 'white',
      background_200: '#393939',
      text_0: '1F1F1F',
      text_100: '#181818',
      text_200: '#393939',
      hover_0: '#1F1F1F',
      hover_100: '#393939',
      primary_0: 'rgba(123, 97, 255, 1)',
      primary_100: '#0B8FE8',
      danger_0: '#FF5A26',
      danger_100: '#FF3D00',
      warning_0: '#FFB800',
      warning_100: '#FFD465',
      sucsess_0: '#CDFF64',
      sucsess_100: '#AAD44F',
      text_size_0: '14px',
      text_size_100: '12px'
    },
    light: {
      background_0: '#F1F3F6',
      background_100: '#FFFFFF',
      background_200: '#393939',
      text_primary: '#2C2C2C',
      hover_0: '#DAEBF7',
      hover_100: 'rgba(24, 160, 251, 0.05)',
      primary_0: '#18A0FB',
      primary_100: '#0B8FE8',
    },
  },

  setTheme: (theme) => {
    const keys = Object.keys(styles.themes[theme])
    keys.forEach(key => {
      document.documentElement.style.setProperty(`--${key}`, styles.themes[theme][key])
    })
  },

  getTheme() {
    return Object.keys(this.themes)
  }
}

export default styles
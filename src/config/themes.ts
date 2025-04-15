export interface ThemeConfig {
  id: string;
  name: string;
  startDate: string; // Format: MM-DD
  endDate: string; // Format: MM-DD
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
  assets: {
    logo?: string;
    backgroundImage?: string;
    icon?: string;
  };
  effects?: {
    animation?: string;
    particles?: string;
  };
}

export const themes: ThemeConfig[] = [
  // Theme mặc định
  {
    id: 'default',
    name: 'Mặc định',
    startDate: '', // Luôn active khi không có theme nào khác
    endDate: '',
    colors: {
      primary: '#FFD875',
      secondary: '#1a1a1f',
      background: '#16161a',
      text: '#ffffff',
      accent: '#ffc107'
    },
    assets: {
      logo: '/images/logo.png'
    }
  },
  // Tết Nguyên Đán
  {
    id: 'lunar-new-year',
    name: 'Tết Nguyên Đán',
    startDate: '01-20', // Có thể điều chỉnh theo lịch âm hàng năm
    endDate: '02-05',
    colors: {
      primary: '#FF0000',
      secondary: '#FFD700',
      background: '#8B0000',
      text: '#FFD700',
      accent: '#FF4D4D'
    },
    assets: {
      logo: '/images/logo-tet.png',
      backgroundImage: '/images/tet-background.png',
      icon: '/images/tet-icon.png'
    },
    effects: {
      animation: 'firecracker',
      particles: 'cherry-blossom'
    }
  },
  // Lễ tình nhân
  {
    id: 'valentine',
    name: 'Valentine',
    startDate: '02-10',
    endDate: '02-15',
    colors: {
      primary: '#FF69B4',
      secondary: '#FFB6C1',
      background: '#FFF0F5',
      text: '#FF1493',
      accent: '#FF69B4'
    },
    assets: {
      logo: '/images/logo-valentine.png',
      icon: '/images/heart-icon.png'
    },
    effects: {
      particles: 'hearts'
    }
  },
  // Mùa xuân
  {
    id: 'spring',
    name: 'Mùa Xuân',
    startDate: '02-16',
    endDate: '05-06',
    colors: {
      primary: '#98FB98',
      secondary: '#90EE90',
      background: '#F0FFF0',
      text: '#228B22',
      accent: '#32CD32'
    },
    assets: {
      logo: '/images/logo-spring.png',
      backgroundImage: '/images/spring-background.png'
    },
    effects: {
      particles: 'flower-petals'
    }
  },
  // Mùa hè
  {
    id: 'summer',
    name: 'Mùa Hè',
    startDate: '05-07',
    endDate: '08-06',
    colors: {
      primary: '#87CEEB',
      secondary: '#00BFFF',
      background: '#F0F8FF',
      text: '#4169E1',
      accent: '#1E90FF'
    },
    assets: {
      logo: '/images/logo-summer.png',
      backgroundImage: '/images/summer-background.png'
    },
    effects: {
      particles: 'sun-rays'
    }
  },
  // Trung thu
  {
    id: 'mid-autumn',
    name: 'Trung Thu',
    startDate: '09-10',
    endDate: '09-15',
    colors: {
      primary: '#FFA500',
      secondary: '#FFD700',
      background: '#1a1a1f',
      text: '#FFD700',
      accent: '#FFA500'
    },
    assets: {
      logo: '/images/logo-mid-autumn.png',
      icon: '/images/lantern-icon.png'
    },
    effects: {
      animation: 'lanterns',
      particles: 'mooncakes'
    }
  },
  // Mùa thu
  {
    id: 'autumn',
    name: 'Mùa Thu',
    startDate: '08-07',
    endDate: '11-06',
    colors: {
      primary: '#DAA520',
      secondary: '#D2691E',
      background: '#FFF8DC',
      text: '#8B4513',
      accent: '#CD853F'
    },
    assets: {
      logo: '/images/logo-autumn.png',
      backgroundImage: '/images/autumn-background.png'
    },
    effects: {
      particles: 'falling-leaves'
    }
  },
  // Giáng sinh
  {
    id: 'christmas',
    name: 'Giáng Sinh',
    startDate: '12-20',
    endDate: '12-31',
    colors: {
      primary: '#FF0000',
      secondary: '#006400',
      background: '#FFFFFF',
      text: '#006400',
      accent: '#FF0000'
    },
    assets: {
      logo: '/images/logo-christmas.png',
      backgroundImage: '/images/christmas-background.png',
      icon: '/images/santa-icon.png'
    },
    effects: {
      animation: 'snow',
      particles: 'snowflakes'
    }
  },
  // Mùa đông
  {
    id: 'winter',
    name: 'Mùa Đông',
    startDate: '11-07',
    endDate: '02-19',
    colors: {
      primary: '#B0C4DE',
      secondary: '#4682B4',
      background: '#F0F8FF',
      text: '#4169E1',
      accent: '#1E90FF'
    },
    assets: {
      logo: '/images/logo-winter.png',
      backgroundImage: '/images/winter-background.png'
    },
    effects: {
      particles: 'snowflakes'
    }
  }
]; 
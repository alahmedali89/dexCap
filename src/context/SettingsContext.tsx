import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppSettings {
  isMaintenanceMode: boolean;
  isWebsiteLaunched: boolean;
  downloadLink: string;
  engageLink: string;
  telegramLink: string;
  youtubeLink: string;
  rewardRates: {
    text: number;
    image: number;
    slider: number;
    emoji: number;
    tap: number;
    math: number;
    match: number;
    missing: number;
    auto: number;
    audio: number;
  };
}

interface SettingsContextType {
  settings: AppSettings;
  updateSettings: (newSettings: Partial<AppSettings>) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

const DEFAULT_SETTINGS: AppSettings = {
  isMaintenanceMode: false,
  isWebsiteLaunched: true,
  downloadLink: 'https://example.com/download/dexcaptcha.apk',
  engageLink: 'https://example.com/engage',
  telegramLink: 'https://t.me/dexcaptcha',
  youtubeLink: 'https://youtube.com/@dexcaptcha',
  rewardRates: {
    text: 2000,
    image: 2500,
    slider: 3333,
    emoji: 3333,
    tap: 5000,
    math: 5000,
    match: 5000,
    missing: 3333,
    auto: 5000,
    audio: 2500,
  },
};

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AppSettings>(() => {
    const saved = localStorage.getItem('dexcaptcha_settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Deep merge or at least ensure new top-level keys exist
        return {
          ...DEFAULT_SETTINGS,
          ...parsed,
          rewardRates: {
            ...DEFAULT_SETTINGS.rewardRates,
            ...(parsed.rewardRates || {})
          }
        };
      } catch (e) {
        console.error('Error parsing settings:', e);
        return DEFAULT_SETTINGS;
      }
    }
    return DEFAULT_SETTINGS;
  });

  useEffect(() => {
    localStorage.setItem('dexcaptcha_settings', JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

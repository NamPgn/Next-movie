'use client';
import { useTheme } from '@/contexts/ThemeContext';
import { themes } from '@/config/themes';
import * as Switch from '@radix-ui/react-switch';

const ThemeManagement = () => {
  const { currentTheme, setTheme, isAutoTheme, setAutoTheme } = useTheme();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">Quản lý Theme</h1>
      
      <div className="mb-6">
        <div className="flex items-center space-x-2">
          <Switch.Root
            id="auto-theme"
            checked={isAutoTheme}
            onCheckedChange={setAutoTheme}
            className="w-[42px] h-[25px] bg-gray-600 rounded-full relative data-[state=checked]:bg-[#FFD875] outline-none cursor-pointer"
          >
            <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
          </Switch.Root>
          <label
            htmlFor="auto-theme"
            className="text-white cursor-pointer select-none"
          >
            Tự động thay đổi theo ngày
          </label>
        </div>
        <p className="text-sm text-gray-400 mt-1">
          Khi bật, theme sẽ tự động thay đổi theo ngày lễ và mùa
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              currentTheme.id === theme.id
                ? 'border-[#FFD875] shadow-lg scale-105'
                : 'border-gray-600 hover:border-[#FFD875]/50'
            }`}
            onClick={() => !isAutoTheme && setTheme(theme.id)}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-white">{theme.name}</h3>
              {currentTheme.id === theme.id && (
                <span className="text-xs bg-[#FFD875]/20 text-[#FFD875] px-2 py-1 rounded">
                  Đang sử dụng
                </span>
              )}
            </div>

            {/* Preview màu sắc */}
            <div className="grid grid-cols-5 gap-2 mb-4">
              {Object.entries(theme.colors).map(([key, color]) => (
                <div
                  key={key}
                  className="w-full aspect-square rounded"
                  style={{ backgroundColor: color }}
                  title={key}
                />
              ))}
            </div>

            {/* Thời gian áp dụng */}
            {theme.startDate && theme.endDate && (
              <div className="text-sm text-gray-400">
                Áp dụng: {theme.startDate} đến {theme.endDate}
              </div>
            )}

            {/* Preview effects */}
            {theme.effects && (
              <div className="mt-2 flex flex-wrap gap-2">
                {Object.entries(theme.effects).map(([key, value]) => (
                  <span
                    key={key}
                    className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                  >
                    {value}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeManagement; 
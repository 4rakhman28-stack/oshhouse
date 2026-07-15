import { usePwaInstall } from '../hooks/usePwaInstall';

export function PwaInstallButton() {
  const { canInstall, installed, isIos, showHint, closeHint, install } = usePwaInstall();

  if (installed) {
    return (
      <span className="hero__installed">
        ✓ Приложение установлено
      </span>
    );
  }

  if (!canInstall) return null;

  return (
    <>
      <button type="button" className="hero__download" onClick={install}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Скачать приложение
      </button>

      {showHint && (
        <>
          <div className="pwa-hint-overlay" onClick={closeHint} />
          <div className="pwa-hint" role="dialog" aria-label="Установка приложения">
            <button className="pwa-hint__close" onClick={closeHint} aria-label="Закрыть">
              ✕
            </button>
            <h3>{isIos ? 'Установить на iPhone' : 'Установить приложение'}</h3>
            {isIos ? (
              <ol>
                <li>Нажмите «Поделиться» внизу Safari</li>
                <li>Выберите «На экран Домой»</li>
                <li>Нажмите «Добавить»</li>
              </ol>
            ) : (
              <ol>
                <li>Откройте меню браузера (⋮ или ⋯)</li>
                <li>Выберите «Установить приложение» или «Добавить на главный экран»</li>
                <li>Подтвердите установку</li>
              </ol>
            )}
          </div>
        </>
      )}
    </>
  );
}

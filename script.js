document.addEventListener('DOMContentLoaded', () => {
  const _0x26cadd = document.getElementById('generate-btn');
  const _0x14a80b = document.getElementById('chart'),
    _0x15d432 = document.getElementById('signal-result');
  const _0x158a99 = document.getElementById('signal-time');
  let _0x452738 = null,
    _0x26ad3f = null,
    _0x35dc1b = null,
    _0x4d3df0 = null;
  initTheme(), initCustomSelects(), initButtonEffects();
  changeLanguage(), _0x26cadd.addEventListener('click', () => {
    _0x26cadd.disabled = true, _0x26cadd.textContent = 'Анализируем...', _0x26cadd.classList.add('loading');
    if (_0x452738) clearTimeout(_0x452738);
    if (_0x26ad3f) clearInterval(_0x26ad3f);
    if (_0x35dc1b) cancelAnimationFrame(_0x35dc1b);
    if (_0x4d3df0) _0x4d3df0.destroy();
    _0x15d432.innerHTML = '\n            <div class="loading-animation">\n                <div class="loadingDots">\n                    <span></span><span></span><span></span>\n                </div>\n                <p>Алгоритм обрабатывает данные</p>\n            </div>\n        ', _0x452738 = setTimeout(() => {
      _0x26cadd.disabled = false, _0x26cadd.textContent = 'Получить сигнал', _0x26cadd.classList.remove('loading');
      const _0x3b644f = document.getElementById('currency-pair').value,
        _0x59fe9d = document.getElementById('timeframe').value.replace(/[^0-9]/g, ''),
        _0x455840 = Math.random() > 0.5,
        _0x52c63b = (Math.random() * 10 + 85).toFixed(2),
        _0xb570b3 = new Date().toLocaleTimeString('ru-RU', {
          'hour': '2-digit',
          'minute': '2-digit',
          'second': '2-digit'
        }),
        _0x7e10f7 = document.getElementById('language').value,
        _0x4e0d18 = '\n                <div class="signal-details">\n                    <div class="signal-pair">' + _0x3b644f + '</div>\n                    <div class="signal-direction ' + (_0x455840 ? 'green' : 'red') + '">\n                        ' + (_0x455840 ? translations[_0x7e10f7].buy : translations[_0x7e10f7].sell) + '\n                    </div>\n                    <div class="signal-time-info">\n                        <div class="signal-timeframe">' + translations[_0x7e10f7].timeframe + ': ' + _0x59fe9d + ' ' + translations[_0x7e10f7].minute + '</div>\n                        <div class="signal-probability">' + translations[_0x7e10f7].accuracy + ': ' + _0x52c63b + '%</div>\n                    </div>\n                </div>\n            ';
      _0x15d432.innerHTML = _0x4e0d18, _0x158a99.textContent = _0xb570b3, renderEnhancedChart(_0x14a80b, _0x455840, parseInt(_0x59fe9d) * 60 * 1000);
    }, 3000);
  }), document.getElementById('language').addEventListener('change', changeLanguage);
});
function initButtonEffects() {
  const _0x154a1a = document.getElementById('generate-btn');
  _0x154a1a.addEventListener('mousemove', _0x23ea72 => {
    const _0x3e85ba = _0x154a1a.getBoundingClientRect(),
      _0x1c5dd9 = _0x23ea72.clientX - _0x3e85ba.left,
      _0x50c7b1 = _0x23ea72.clientY - _0x3e85ba.top;
    _0x154a1a.style.setProperty('--x', _0x1c5dd9 + 'px'), _0x154a1a.style.setProperty('--y', _0x50c7b1 + 'px');
  });
}
const _0x35df9e = {};
_0x35df9e.logoText = 'TradeAi| Бот Аналитик', _0x35df9e.currencyLabel = 'Инструмент', _0x35df9e.timeframeLabel = 'Время', _0x35df9e.generateButton = 'Получить сигнал', _0x35df9e.signalTitle = 'Сигнал', _0x35df9e.signalPlaceholder = 'Нажмите \'Получить сигнал\'';
_0x35df9e.chartTitle = 'Проанализированный график на валютную пару', _0x35df9e.languageLabel = 'Язык', _0x35df9e.timeframes = ['1 минута', '2 минуты', '3 минуты', '4 минуты', '5 минут'], _0x35df9e.buy = 'Покупка', _0x35df9e.sell = 'Продажа', _0x35df9e.timeframe = 'Таймфрейм';
_0x35df9e.accuracy = 'Точность', _0x35df9e.languageName = 'Русский', _0x35df9e.minute = 'мин.', _0x35df9e.telegramBtn = 'Перейти в Telegram';
const _0x3b18ae = {};
_0x3b18ae.logoText = 'TradeAi| Analytics Bot', _0x3b18ae.currencyLabel = 'Instrument', _0x3b18ae.timeframeLabel = 'Time', _0x3b18ae.generateButton = 'Get Signal', _0x3b18ae.signalTitle = 'Signal', _0x3b18ae.signalPlaceholder = 'Click \'Get Signal\'', _0x3b18ae.chartTitle = 'Analyzed chart for a currency pair', _0x3b18ae.languageLabel = 'Language';
_0x3b18ae.timeframes = ['1 minute', '2 minutes', '3 minutes', '4 minutes', '5 minutes'], _0x3b18ae.buy = 'Buy', _0x3b18ae.sell = 'Sell';
_0x3b18ae.timeframe = 'Timeframe', _0x3b18ae.accuracy = 'Accuracy', _0x3b18ae.languageName = 'English', _0x3b18ae.minute = 'min.', _0x3b18ae.telegramBtn = 'Go to Telegram';
const _0x4f1abf = {};
_0x4f1abf.logoText = 'TradeAi| Tahlil Bot', _0x4f1abf.currencyLabel = 'Asbob', _0x4f1abf.timeframeLabel = 'Vaqt', _0x4f1abf.generateButton = 'Signal Olish', _0x4f1abf.signalTitle = 'Signal', _0x4f1abf.signalPlaceholder = 'Signal Olish uchun bosing', _0x4f1abf.chartTitle = 'Valyuta juftligi uchun tahlil qilingan diagramma', _0x4f1abf.languageLabel = 'Til', _0x4f1abf.timeframes = ['1 daqiqa', '2 daqiqa', '3 daqiqa', '4 daqiqa', '5 daqiqa'], _0x4f1abf.buy = 'Sotib olish', _0x4f1abf.sell = 'Sotish', _0x4f1abf.timeframe = 'Vaqt oralig\'i', _0x4f1abf.accuracy = 'Aniqlik', _0x4f1abf.languageName = 'O\'zbek', _0x4f1abf.minute = 'daq.', _0x4f1abf.telegramBtn = 'Telegramga o\'tish';
const _0x34cfaf = {};
_0x34cfaf.ru = _0x35df9e, _0x34cfaf.en = _0x3b18ae, _0x34cfaf.uz = _0x4f1abf;
const translations = _0x34cfaf;
function initCustomSelects() {
  document.removeEventListener('click', closeAllSelects);
  const _0x424e6c = document.querySelectorAll('.custom-select');
  _0x424e6c.forEach(_0x383237 => {
    const _0x3a3237 = _0x383237.querySelector('.select-selected'),
      _0x2dfd79 = _0x383237.querySelector('.select-items'),
      _0x533b02 = _0x383237.querySelector('select'),
      _0x38a6df = _0x3a3237.cloneNode(true);
    _0x3a3237.parentNode.replaceChild(_0x38a6df, _0x3a3237), _0x38a6df.addEventListener('click', _0x32933a => {
      _0x32933a.stopPropagation(), closeAllSelects(_0x383237), _0x2dfd79.classList.toggle('select-hide'), _0x38a6df.classList.toggle('select-arrow-active'), !_0x2dfd79.classList.contains('select-hide') && (_0x2dfd79.style.animation = 'pulse-select 0.5s ease', setTimeout(() => {
        _0x2dfd79.style.animation = '';
      }, 500));
    });
    const _0x45c22f = _0x2dfd79.querySelectorAll('.select-item');
    _0x45c22f.forEach(_0x28d95d => {
      const _0x5abd13 = _0x28d95d.cloneNode(true);
      _0x28d95d.parentNode.replaceChild(_0x5abd13, _0x28d95d), _0x5abd13.addEventListener('click', () => {
        const _0x1feee2 = _0x5abd13.getAttribute('data-value');
        if (_0x38a6df.getAttribute('data-select') === 'language') {
          const _0x59d800 = _0x1feee2,
            _0x2a241d = _0x5abd13.querySelector('img').src;
          _0x38a6df.innerHTML = '\n                        <img src="' + _0x2a241d + '" alt="' + _0x59d800.toUpperCase() + '" class="flag-icon">\n                        ' + _0x5abd13.textContent.trim() + '\n                    ', _0x533b02.value = _0x59d800, changeLanguage();
        } else {
          _0x38a6df.textContent = _0x5abd13.textContent.trim();
          const _0x319db3 = _0x533b02.options;
          for (let _0x145fe1 = 0; _0x145fe1 < _0x319db3.length; _0x145fe1++) {
            if (_0x319db3[_0x145fe1].text === _0x5abd13.textContent.trim()) {
              _0x533b02.selectedIndex = _0x145fe1;
              break;
            }
          }
        }
        _0x45c22f.forEach(_0x49495f => _0x49495f.classList.remove('selected')), _0x5abd13.classList.add('selected'), _0x2dfd79.classList.add('select-hide'), _0x38a6df.classList.remove('select-arrow-active'), _0x38a6df.classList.add('select-changed'), setTimeout(() => {
          _0x38a6df.classList.remove('select-changed');
        }, 500);
        const _0xb0895e = new Event('change');
        _0x533b02.dispatchEvent(_0xb0895e);
      });
    });
  }), document.addEventListener('click', () => {
    closeAllSelects();
  });
}
function closeAllSelects(_0x354048 = null) {
  const _0x40ed82 = document.querySelectorAll('.select-items');
  const _0x3384da = document.querySelectorAll('.select-selected');
  _0x40ed82.forEach((_0x282216, _0x13fd70) => {
    if (_0x354048 && _0x282216.parentElement === _0x354048) return;
    _0x282216.classList.add('select-hide');
    if (_0x3384da[_0x13fd70]) {
      _0x3384da[_0x13fd70].classList.remove('select-arrow-active');
    }
  });
}
function changeLanguage() {
  const _0x3b203d = document.getElementById('language').value,
    _0x30df76 = {};
  _0x30df76.ru = 'https://flagcdn.com/w20/ru.png', _0x30df76.en = 'https://flagcdn.com/w20/gb.png', _0x30df76.uz = 'https://flagcdn.com/w20/uz.png';
  const _0x3c1487 = _0x30df76;
  document.getElementById('logo-text').textContent = translations[_0x3b203d].logoText, document.getElementById('currency-label').textContent = translations[_0x3b203d].currencyLabel, document.getElementById('timeframe-label').textContent = translations[_0x3b203d].timeframeLabel;
  document.getElementById('generate-btn').textContent = translations[_0x3b203d].generateButton, document.getElementById('signal-title').textContent = translations[_0x3b203d].signalTitle, document.getElementById('chart-title').textContent = translations[_0x3b203d].chartTitle;
  const _0x1abc70 = document.querySelector('.language-selector label');
  _0x1abc70 && (_0x1abc70.textContent = translations[_0x3b203d].languageLabel);
  const _0x444088 = document.querySelector('.telegram-btn span');
  if (_0x444088) {
    _0x444088.textContent = translations[_0x3b203d].telegramBtn;
  }
  const _0x453fab = document.querySelector('.signal-placeholder');
  _0x453fab && (_0x453fab.textContent = translations[_0x3b203d].signalPlaceholder);
  const _0x500639 = document.getElementById('language-items'),
    _0x390a18 = document.querySelector('[data-select="language"]');
  _0x390a18.innerHTML = '\n        <img src="' + _0x3c1487[_0x3b203d] + '" alt="' + _0x3b203d.toUpperCase() + '" class="flag-icon">\n        ' + translations[_0x3b203d].languageName + '\n    ';
  const _0x3f9343 = document.getElementById('timeframe-items'),
    _0x184c0c = document.querySelector('[data-select="timeframe"]'),
    _0xdff227 = translations[_0x3b203d].timeframes;
  _0x3f9343.innerHTML = '', _0xdff227.forEach(_0x4a9a5e => {
    const _0x33ef16 = document.createElement('div');
    _0x33ef16.className = 'select-item', _0x33ef16.setAttribute('data-value', _0x4a9a5e), _0x33ef16.textContent = _0x4a9a5e, _0x3f9343.appendChild(_0x33ef16);
  }), _0x184c0c.textContent = _0xdff227[0];
  const _0x45678f = document.getElementById('timeframe');
  _0x45678f.innerHTML = '', _0xdff227.forEach(_0xc2c31b => {
    const _0x2d48e9 = document.createElement('option');
    _0x2d48e9.textContent = _0xc2c31b, _0x45678f.appendChild(_0x2d48e9);
  }), document.querySelector('.container').classList.add('language-change'), setTimeout(() => {
    document.querySelector('.container').classList.remove('language-change');
  }, 500), initCustomSelects();
}
function renderEnhancedChart(_0x4b2f36, _0x34ff97, _0x48d3c9) {
  _0x4b2f36.innerHTML = '';
  const _0x1fb5ba = _0x4b2f36.clientWidth,
    _0x1e6f55 = _0x4b2f36.clientHeight,
    _0x54930c = '#10b981',
    _0x97a4fa = '#ef4444',
    _0x1ffc1a = d3.select(_0x4b2f36).append('svg').attr('width', _0x1fb5ba).attr('height', _0x1e6f55).append('g').attr('transform', 'translate(40, 20)'),
    _0x2f1b6d = 30,
    _0x169f14 = [];
  let _0xdeee7a = 100 + Math.random() * 20;
  const _0x3f30e0 = _0x34ff97 ? 1 : -1,
    _0x15dc0d = (10 + Math.random() * 5) / _0x2f1b6d;
  for (let _0x4df061 = 0; _0x4df061 < _0x2f1b6d; _0x4df061++) {
    const _0x3b76f2 = _0xdeee7a,
      _0x427df8 = 0.5 + Math.random() * 0.5,
      _0x23231f = (Math.random() - 0.5) * _0x427df8;
    let _0x58c71f = _0x3b76f2 + _0x3f30e0 * _0x15dc0d + _0x23231f;
    Math.random() > 0.9 && (_0x58c71f += (Math.random() - 0.5) * 2);
    const _0x21170f = 0.5 + Math.random(),
      _0x2d6688 = Math.max(_0x3b76f2, _0x58c71f) + _0x21170f * Math.random(),
      _0x4adb52 = Math.min(_0x3b76f2, _0x58c71f) - _0x21170f * Math.random();
    _0x169f14.push({
      'time': _0x4df061 + 1,
      'open': _0x3b76f2,
      'close': _0x58c71f,
      'high': _0x2d6688,
      'low': _0x4adb52
    }), _0xdeee7a = _0x58c71f;
  }
  const _0x58cd9d = d3.scaleBand().domain(_0x169f14.map(_0x5ed7e6 => _0x5ed7e6.time)).range([0, _0x1fb5ba - 80]).padding(0.4),
    _0x3d6749 = d3.scaleLinear().domain([d3.min(_0x169f14, _0x3e9e1d => _0x3e9e1d.low) - 2, d3.max(_0x169f14, _0x3f2635 => _0x3f2635.high) + 2]).range([_0x1e6f55 - 40, 20]),
    _0x2fb0b0 = d3.axisBottom(_0x58cd9d).tickValues(_0x169f14.map(_0x21f49b => _0x21f49b.time).filter((_0x16e973, _0x3b5640) => _0x3b5640 % 5 === 0)),
    _0x39ca40 = d3.axisLeft(_0x3d6749).ticks(6);
  _0x1ffc1a.append('g').attr('transform', 'translate(0, ' + (_0x1e6f55 - 40) + ')').call(_0x2fb0b0).attr('color', 'var(--text-primary)').attr('opacity', 0.5), _0x1ffc1a.append('g').call(_0x39ca40).attr('color', 'var(--text-primary)').attr('opacity', 0.5), _0x1ffc1a.append('g').attr('class', 'grid').call(d3.axisLeft(_0x3d6749).tickSize(-(_0x1fb5ba - 80)).tickFormat('').ticks(6)).call(_0x17be1f => _0x17be1f.select('.domain').remove()).call(_0x36c63a => _0x36c63a.selectAll('.tick line').attr('stroke', 'var(--border-color)').attr('stroke-opacity', 0.3).attr('stroke-dasharray', '3,3')), _0x1ffc1a.append('g').attr('class', 'grid').attr('transform', 'translate(0, ' + (_0x1e6f55 - 40) + ')').call(d3.axisBottom(_0x58cd9d).tickSize(-(_0x1e6f55 - 60)).tickFormat('').tickValues(_0x169f14.map(_0xac6572 => _0xac6572.time).filter((_0x500b16, _0x1908a5) => _0x1908a5 % 5 === 0))).call(_0x19d3cd => _0x19d3cd.select('.domain').remove()).call(_0x2fd13d => _0x2fd13d.selectAll('.tick line').attr('stroke', 'var(--border-color)').attr('stroke-opacity', 0.3).attr('stroke-dasharray', '3,3'));
  const _0x3c6a11 = _0x1ffc1a.append('defs'),
    _0x5ac3eb = _0x3c6a11.append('linearGradient').attr('id', 'green-gradient-' + Math.random().toString(36).substr(2, 9)).attr('x1', '0%').attr('y1', '0%').attr('x2', '0%').attr('y2', '100%');
  _0x5ac3eb.append('stop').attr('offset', '0%').attr('stop-color', _0x54930c), _0x5ac3eb.append('stop').attr('offset', '100%').attr('stop-color', '#059669');
  const _0x51b822 = _0x3c6a11.append('linearGradient').attr('id', 'red-gradient-' + Math.random().toString(36).substr(2, 9)).attr('x1', '0%').attr('y1', '0%').attr('x2', '0%').attr('y2', '100%');
  _0x51b822.append('stop').attr('offset', '0%').attr('stop-color', _0x97a4fa), _0x51b822.append('stop').attr('offset', '100%').attr('stop-color', '#dc2626');
  const _0x50f3e6 = _0x1ffc1a.append('g').attr('class', 'candles');
  function _0x5e9bed(_0x3b8fcc) {
    if (_0x3b8fcc >= _0x169f14.length) {
      _0x37c84d();
      return;
    }
    const _0x2acbff = _0x169f14[_0x3b8fcc];
    const _0x4e2791 = _0x2acbff.close >= _0x2acbff.open,
      _0x336adf = _0x4e2791 ? _0x54930c : _0x97a4fa,
      _0x50b87d = _0x4e2791 ? 'url(#' + _0x5ac3eb.attr('id') + ')' : 'url(#' + _0x51b822.attr('id') + ')';
    const _0x17dcf5 = _0x50f3e6.append('g').attr('class', 'candle').attr('transform', 'translate(' + (_0x58cd9d(_0x2acbff.time) + _0x58cd9d.bandwidth() / 2) + ', 0)').style('opacity', 0);
    _0x17dcf5.append('line').attr('class', 'wick').attr('x1', 0).attr('x2', 0).attr('y1', _0x3d6749(_0x2acbff.high)).attr('y2', _0x3d6749(_0x2acbff.low)).attr('stroke', _0x336adf).attr('stroke-width', 1.5);
    const _0x3200fa = _0x17dcf5.append('rect').attr('class', _0x4e2791 ? 'up-body' : 'down-body').attr('x', -_0x58cd9d.bandwidth() / 2).attr('width', _0x58cd9d.bandwidth()).attr('rx', 2).attr('fill', _0x50b87d).attr('stroke', _0x336adf).attr('stroke-width', 1);
    _0x4e2791 ? _0x3200fa.attr('y', _0x3d6749(_0x2acbff.open)).attr('height', 0) : _0x3200fa.attr('y', _0x3d6749(_0x2acbff.open)).attr('height', 0), _0x17dcf5.transition().duration(300).style('opacity', 1), _0x3200fa.transition().duration(500).attr('y', _0x4e2791 ? _0x3d6749(_0x2acbff.close) : _0x3d6749(_0x2acbff.open)).attr('height', Math.abs(_0x3d6749(_0x2acbff.open) - _0x3d6749(_0x2acbff.close))), setTimeout(() => _0x5e9bed(_0x3b8fcc + 1), _0x48d3c9 / _0x2f1b6d - 300);
  }
  function _0x37c84d() {
    const _0x580d90 = d3.line().x(_0x46372b => _0x58cd9d(_0x46372b.time) + _0x58cd9d.bandwidth() / 2).y(_0x152993 => _0x3d6749((_0x152993.high + _0x152993.low) / 2)).curve(d3.curveCardinal);
    const _0x2395a2 = _0x1ffc1a.append('path').datum(_0x169f14).attr('class', 'trend-line').attr('fill', 'none').attr('stroke', _0x34ff97 ? _0x54930c : _0x97a4fa).attr('stroke-width', 2).attr('stroke-dasharray', '5,5').attr('d', _0x580d90).attr('opacity', 0),
      _0x2671c2 = _0x2395a2.node().getTotalLength();
    _0x2395a2.attr('stroke-dasharray', _0x2671c2 + ' ' + _0x2671c2).attr('stroke-dashoffset', _0x2671c2).attr('opacity', 1).transition().duration(1000).ease(d3.easeLinear).attr('stroke-dashoffset', 0);
  }
  _0x5e9bed(0);
  const _0x1e4551 = {};
  return _0x1e4551.destroy = function () {
    _0x4b2f36.innerHTML = '';
  }, _0x1e4551;
}
function initTheme() {
  const _0x3b1eeb = document.querySelectorAll('.theme-btn');
  const _0x6f1d7 = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', _0x6f1d7), updateActiveThemeButton(_0x6f1d7), _0x3b1eeb.forEach(_0x2cd668 => {
    _0x2cd668.addEventListener('click', () => {
      const _0xb86169 = _0x2cd668.getAttribute('data-theme');
      document.body.classList.add('theme-transition');
      setTimeout(() => {
        document.documentElement.setAttribute('data-theme', _0xb86169), localStorage.setItem('theme', _0xb86169), updateActiveThemeButton(_0xb86169);
        setTimeout(() => {
          document.body.classList.remove('theme-transition');
        }, 500);
      }, 50);
    });
  });
}
function updateActiveThemeButton(_0x594314) {
  document.querySelectorAll('.theme-btn').forEach(_0x4ef3e1 => {
    _0x4ef3e1.classList.toggle('active', _0x4ef3e1.getAttribute('data-theme') === _0x594314);
  });
}
document.getElementById('colorInput').addEventListener('input', function() {
    let colorValue = this.value.replace(/\s/g, '');
    const colorDisplay = document.getElementById('colorDisplay');
    const rgbValue = document.getElementById('rgbValue');
    const hexValue = document.getElementById('hexValue');

    if (!colorValue.includes('#') && colorValue.length === 6) {
        colorValue = '#' + colorValue; // Add # if missing for hex color
    }

    colorDisplay.style.backgroundColor = colorValue;

    if (/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(colorValue)) {
        // 如果是16进制颜色值
        const hexColor = colorValue.replace('#', '');
        const r = parseInt(hexColor.substring(0, 2), 16);
        const g = parseInt(hexColor.substring(2, 4), 16);
        const b = parseInt(hexColor.substring(4, 6), 16);

        rgbValue.textContent = `rgb(${r}, ${g}, ${b})`;
        hexValue.textContent = colorValue.toUpperCase();
    } else if (/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/.test(colorValue)) {
        // 如果是RGB颜色值
        const [r, g, b] = colorValue.match(/\d+/g);

        rgbValue.textContent = `rgb(${r}, ${g}, ${b})`;
        hexValue.textContent = `#${parseInt(r).toString(16).padStart(2, '0')}${parseInt(g).toString(16).padStart(2, '0')}${parseInt(b).toString(16).padStart(2, '0')}`.toUpperCase();
    } else {
        rgbValue.textContent = '无效的颜色值';
        hexValue.textContent = '无效的颜色值';
    }
});

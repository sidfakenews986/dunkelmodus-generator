document.getElementById('background-color').addEventListener('input', function() {
    document.getElementById('preview').style.backgroundColor = this.value;
});

document.getElementById('text-color').addEventListener('input', function() {
    document.getElementById('preview').style.color = this.value;
});

document.getElementById('download-css').addEventListener('click', function() {
    const backgroundColor = document.getElementById('background-color').value;
    const textColor = document.getElementById('text-color').value;
    const cssContent = `body {\n    background-color: ${backgroundColor};\n    color: ${textColor};\n}`;

    const blob = new Blob([cssContent], { type: 'text/css' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dunkelmodus.css';
    link.click();
});
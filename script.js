document.getElementById('background-color').addEventListener('input', function() {
    document.getElementById('preview').style.backgroundColor = this.value;
});



document.getElementById('text-color').addEventListener('input', function() {
    document.getElementById('preview').style.color = this.value;
});


document.getElementById('download-css').addEventListener('click', function() {
    const backgroundColor = document.getElementById('background-color').value;
    const textColor = document.getElementById('text-color').value;
    const cssContent = `body {
    background-color: ${backgroundColor};
    color: ${textColor};
}`;

    const blob = new Blob([cssContent], { type: 'text/css' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    const timestamp = new Date().toISOString().replace(/[:.-]/g, '_').slice(0, 19);
    link.download = `custom-styles_${timestamp}.css`;
    link.click();
});
function randomBgColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256,
    )}, ${Math.floor(Math.random() * 256)})`;
}

export default randomBgColor;

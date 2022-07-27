const textComponent = () => {
    const element = document.createElement('div');
    element.innerText = 'Hey there how are you!'
    return element;
}

document.appendChild(textComponent());
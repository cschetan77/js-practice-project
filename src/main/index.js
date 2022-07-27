const textComponent = () => {
    const element = document.createElement('div');
    sum(2,3);
    element.innerText = 'Hey there how are you!'
    return element;
}

export default sum = (a,b) => {
    return a+b;
};

document.appendChild(textComponent());
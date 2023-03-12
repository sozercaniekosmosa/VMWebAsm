function createConsole() {
    const consoleElement = document.createElement('div');
    consoleElement.style.backgroundColor = '#d7d7d7';
    consoleElement.style.color = 'rgb(36 36 36)';
    consoleElement.style.padding = '10px';
    consoleElement.style.position = 'fixed';
    consoleElement.style.top = '0';
    consoleElement.style.left = '0';
    consoleElement.style.right = '0';
    consoleElement.style.fontFamily = 'monospace';
    consoleElement.style.fontSize = '14px';

    document.body.appendChild(consoleElement);

    function log(...args) {
        const message = args.join(' ');
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        consoleElement.appendChild(messageElement);
    }

    return { log };
}
export default createConsole;

// пример использования
// const console = createConsole();
// console.log('Hello world!');
// console.log('The answer is', 42);

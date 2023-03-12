# WebAssembly Stack Machine
Простой интерпретатор стековой виртуальной машины 
для WebAssembly на JavaScript.

## Использование

```javascript
const bytes = [0x41, 0x0a, 0x00, 0x00, 0x00, 0x41, 0x0b, 0x00, 0x00, 0x00, 0x6a, 0x0b];
const machine = new StackMachine(bytes);
const result = machine.run();
console.log(result); // 21
```
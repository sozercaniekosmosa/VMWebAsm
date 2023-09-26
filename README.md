# WebAssembly Stack Machine
Простой интерпретатор стековой виртуальной машины 
для WebAssembly на JavaScript.

## Использование
```
0x41,                   // i32.const
0x0a, 0x00, 0x00, 0x00, // 10
0x41,                   // i32.const
0x0b, 0x00, 0x00, 0x00, // 11
0x6a,                   // i32.add
0x0b                    // end
```

```javascript
const bytes = [0x41, 0x0a, 0x00, 0x00, 0x00, 0x41, 0x0b, 0x00, 0x00, 0x00, 0x6a, 0x0b];
const machine = new StackMachine(bytes);
const result = machine.run();
console.log(result); // 21
```

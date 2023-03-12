import createConsole from "./сonsole.js";

class StackMachine {
    constructor(bytes) {
        this.mem = new ArrayBuffer(1024);
        this.stack = new Uint32Array(this.mem, 0, 256);
        this.sp = -1;
        this.pc = 0;
        new Uint8Array(this.mem).set(bytes);
    }

    run() {
        while (true) {
            const opcode = new Uint8Array(this.mem)[this.pc++];
            switch (opcode) {
                case 0x41: // i32.const
                    const value = new Uint32Array(this.mem.slice(this.pc, this.pc + 4))[0];
                    this.pc += 4;
                    this.stack[++this.sp] = value;
                    break;
                case 0x6a: // i32.add
                    const b = this.stack[this.sp--];
                    const a = this.stack[this.sp--];
                    this.stack[++this.sp] = a + b;
                    break;
                case 0x0b: // end
                    return this.stack[this.sp--];
                default:
                    throw new Error(`Unknown opcode ${opcode}`);
            }
        }
    }
}

// Create a new instance of StackMachine with a simple program that adds two constants.
const bytes = [0x41, 0x0a, 0x00, 0x00, 0x00, 0x41, 0x0b, 0x00, 0x00, 0x00, 0x6a, 0x0b];
const machine = new StackMachine(bytes);
const result = machine.run();
const console = createConsole();
console.log(result); // 21
console.log('Hello world!');
console.log('The answer is', 42);
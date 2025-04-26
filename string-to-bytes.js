const encoder = new TextEncoder();
const string = "Hello World!";
const bytes = encoder.encode(string);
const byteLength = bytes.length;

console.log(`Byte length: ${byteLength}`);

let firstName: string = "Andy";
let age: number = 48;

function uppercaseString(str: string): string {
return str.toUpperCase();
}

let uppercaseName: string = uppercaseString(firstName);
console.log(uppercaseName);

export{ };
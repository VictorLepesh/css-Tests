const str = 'beeee';
const itt = str[Symbol.iterator]();
for (e of itt) {
    console.log(e);
};
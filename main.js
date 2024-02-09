const {Blockchain, Transaction} = require('./blockchain');

let bitcoin = new Blockchain()

bitcoin.createTransaction(new Transaction('address1', 'address2', 100));
bitcoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log("\n Starting the miner... ");
bitcoin.minePendingTransactions('john');

console.log("\n Balance of john is", bitcoin.getBalanceOfAddress('john'));

console.log("\n Starting the miner again... ");
bitcoin.minePendingTransactions('john');

console.log("\n Balance of john is", bitcoin.getBalanceOfAddress('john'));
import PKG from './package.json';
import Block from './src/blockchain/block';

const {name, version} = PKG;

console.log(`${name} ${version}`);

const block = new Block(Date.now(), 'pr3vi0s.h4Sh', 'h4sh', 'data');
console.log(block.toString());
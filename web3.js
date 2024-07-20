
import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser and MetaMask is installed
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* MetaMask is not running
  // Creating our own provider
  const provider = new Web3.providers.HttpProvider(
    "http://127.0.0.1:7545" // Ganache default address
  );

  web3 = new Web3(provider);
}

export default web3;



// import Web3 from "web3";

// let web3;

// if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
//   // we are in the browser and meta mask is installed
//   web3 = new Web3(window.web3.currentProvider);
// } else {
//   // we are on the server *OR* meta mask is not running
//   // creating our own provider
//   const provider = new Web3.providers.HttpProvider(
//     "https://mainnet.infura.io/v3/ff96e71c3b5445cd831c7d082509a739"
//   );

//   web3 = new Web3(provider);
// }

// export default web3;

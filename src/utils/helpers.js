export const getImage = (image) => {
    if (!image) {
        return;
    }
    const link = image.split("//")[1];
    return `https://ipfs.moralis.io:2053/ipfs/${link}`;
};


// export const getUserAccount = async () => {
//     try {
//         const chainId = await ethereum.request({ method: "eth_chainId" });
//         console.log(chainId);
//         if (chainId !== "0x5") {
//             return console.log("Please connect to the goerli network!");
//         }

//         const accounts = await ethereum.request({
//             method: "eth_requestAccounts",
//         });
//         const account = accounts[0];
//         console.log(accounts, account);
//         const result = await fetch("https://big3-backend.onrender.com/message", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 address: account,
//             }),
//         });
//         const json = await result.json();
//         state.message = json.message;
//         state.signature = await web3.eth.personal.sign(state.message, account);
//     } catch (error) {
//         console.log(error);
//     }
// };

import React from "react";
import "./Create.scss";
// import { ethereum } from window;
import { ethers, parseEther, Contract, formatUnits } from "ethers";
import contractAbi from "../../artifacts/contracts/Big3MarketPlace.sol/Big3Marketplace.json"
// const provider = new ethers.BrowserProvider(ethereum);

const Create = props => {
    let provider;
    let signer;
    const getProvider = async() => {
        provider = new ethers.JsonRpcProvider();
        signer = await provider.getSigner();
    }
    getProvider();
    const create = async () => {
        // // const balance = await provider.getBalance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
        // const tx = await signer.sendTransaction({
        //     to: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
        //     value: parseEther("10"),
        // })
        // const receipt = await tx.wait();
        // console.log(receipt)
        // const balance = await provider.getBalance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
        // console.log(balance);
        const contract = new Contract("0x5FbDB2315678afecb367f032d93F642f64180aa3", contractAbi.abi, signer);
        // const tx = await contract.mint();
        // const tx1 = await tx.wait();
        // console.log(tx1);
        // const tx2 = await contract._getTokenId();
        // // const decimals = await contract.decimals();

        const tx = await contract.balanceOf("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
        console.log(tx);
        // console.log(tx1);
    }

    return (
        <div className="create">
            <h1 className="create_header">Create New Item</h1>
            <div className="create_body" >
                <label for="fileInput" className="create_label" >
                    Select image
                    <input type="file" accept="image/png, image/jpg, image/jpeg" className="create_file" id="fileInput" />
                </label>
                <button onClick={create}>create</button>
            </div>
        </div>
    )
};


export default Create;
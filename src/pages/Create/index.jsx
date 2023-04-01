import React, {useState} from "react";
import "./Create.scss";
import CreateInput from "../../components/Input/Create";
// import { ethereum } from window;
import { ethers, parseEther, Contract, formatUnits,  } from "ethers";
import contractAbi from "../../artifacts/contracts/Big3MarketPlace.sol/Big3Marketplace.json";
import { Web3Storage } from "web3.storage";
// const provider = new ethers.BrowserProvider(ethereum);

const client = new Web3Storage({ token: process.env.REACT_APP_API_TOKEN });
// const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdiYkQyMTYxZmY0MjlkZUM5QjY2MEMxREJlOWE3ZDQ2ODEwNmNBODIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODAzMTE4MDc5NjIsIm5hbWUiOiJiaWczIn0.HR9r8OJLaIl_5-2FIoPTAseKgCNOW5LrujL7eMFpkJQ" });


const Create = props => {
    // const [file, setFile] = useState();
    let file;
    let provider;
    let signer;
    const getProvider = async() => {
        provider = new ethers.JsonRpcProvider();
        signer = await provider.getSigner();
    }
    getProvider();
    const test = async () => {
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

    const getFile = (e) => {
        file = e.target.files;
        // setFile(file);
        console.log(file);
    }

    const create = async () => {
        // const contract = new Contract("0x5FbDB2315678afecb367f032d93F642f64180aa3", contractAbi.abi, signer);
        // const tx = await contract.mint();
        // const tx1 = await tx.wait();
        // console.log(tx1);
        console.log(file)
        const rootCID = await client.put(file);
        console.log(rootCID);
    }

    return (
        <div className="create">
            <h1 className="create_header">Create New NFT</h1>
            <div className="create_body" >
                <label htmlFor="fileInput" className="create_label" >
                    Select image
                    <input type="file" accept="image/png, image/jpg, image/jpeg" className="create_file" id="fileInput" onChange={getFile} />
                </label>

                <CreateInput label="Name" placeholder="Item Name" />
                <CreateInput label="Description" placeholder="A detailed description of your NFT" type="textarea" />
                <CreateInput label="Collection" type="select" />
                <CreateInput label="properties" type="property"/>
                <hr style={{ marginTop: "2rem"}} />
                <button className="create_btn" onClick={create}>create</button>
            </div>
        </div>
    )
};


export default Create;
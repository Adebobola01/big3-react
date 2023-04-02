import React, {useState} from "react";
import "./Create.scss";
import CreateInput from "../../components/Input/Create";
// import { ethereum } from window;
import { ethers, parseEther, Contract, formatUnits,  } from "ethers";
import contractAbi from "../../artifacts/contracts/Big3MarketPlace.sol/Big3Marketplace.json";
import { Web3Storage } from "web3.storage";
// const provider = new ethers.BrowserProvider(ethereum);

const client = new Web3Storage({ token: process.env.REACT_APP_API_TOKEN });


const Create = props => {
    let file;
    let provider;
    let signer;
    const options = [
        { value: "New Collection" }, { value: "Naruto" }, { value: "Azuki" }, { value: "One Piece" }, { value: "Bleach" }
    ];
    
    // const [file, setFile] = useState();
    const getTraits = (e, it) => {
        const val = e.target.value;
        const key = e.target.dataset.key;
        setTraits(p => {
            const traits = [...p];
            let trait = traits[key];
            // if (!trait) {
            //     setTraits(n => (
            //         [...n, {trait: "", value: ""}]
            //     ))
            //     trait = traits[key];
            // }
            trait[it] = val;
            return [...traits];
        })
    }
    const [properties, setProperties] = useState([<CreateInput label="properties" type="property" key={0} dataKey={0} traitChanged={ (e)=>getTraits(e, "trait") } traitValueChanged={ (e)=>getTraits(e, "value") } />]);
    const [inputs, setInputs] = useState({
        name: "",
        description: "",
        collection: "new collection",
    });
    const [traits, setTraits] = useState([
        {
            trait: "",
            value: "",
        }
    ]);
    

    const getProvider = async () => {
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
        console.log(file);
    }

    const create = async () => {
        // const contract = new Contract("0x5FbDB2315678afecb367f032d93F642f64180aa3", contractAbi.abi, signer);
        // const tx = await contract.mint();
        // const tx1 = await tx.wait();
        // console.log(tx1);
        // console.log(file)
        // const rootCID = await client.put(file);
        // console.log(rootCID);

        const data = {}
        data.properties = inputs;
        data.traits = traits;
        console.log(data);
    }


    const addProp = () => {
        setProperties(prev => (
            [...prev, <CreateInput label="properties" type="property" key={properties.length} dataKey={properties.length} traitChanged={ (e)=>getTraits(e, "trait") } traitValueChanged={ (e)=>getTraits(e, "value") } />]
        ))
        setTraits(i => (
            [...i, {trait: "", value: ""}]
        ))
    }

    const getInput = (e, type) => {
        const val = e.target.value;
        setInputs(prev => (
            { ...prev, [type]: val }
        ))
    }


    return (
        <div className="create">
            <h1 className="create_header">Create New NFT</h1>
            <div className="create_body" >
                <label htmlFor="fileInput" className="create_label" >
                    Select image
                    <input type="file" accept="image/png, image/jpg, image/jpeg" className="create_file" id="fileInput" onChange={getFile} />
                </label>
                <CreateInput label="Name" placeholder="Item Name" type="input" param="name" inputChanged={getInput} />
                <CreateInput label="Description" placeholder="A detailed description of your NFT" param="description" type="textarea" textareaChanged={getInput} />
                <CreateInput label="Collection" type="select" name="Collection" options={options} param="collection" selectChanged={getInput} />
                <p className="create_properties-header" >Properties</p>
                {properties}
                <button onClick={()=>{addProp()}} style={{padding: "1.6rem", width: "8rem", backgroundColor: "grey", border: "none", color: "white", borderRadius: "1rem", fontSize: "2rem", cursor: "pointer", marginTop: "4rem"}} > add</button>
                <hr style={{ marginTop: "2rem"}} />
                <button className="create_btn" onClick={create} >create</button>
            </div>
        </div>
    )
};


export default Create;
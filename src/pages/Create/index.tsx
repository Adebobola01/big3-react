import React, { useState } from "react";
import "./Create.scss";
import CreateInput from "../../components/Input/Create";
// import { ethereum } from window;
import { ethers, parseEther, Contract, formatUnits,  } from "ethers";
import contractAbi from "../../artifacts/contracts/Big3MarketPlace.sol/Big3Marketplace.json";
import { Web3Storage } from "web3.storage";
import camera from "./OOjs_UI_icon_camera.svg"
import { fetchData } from "../../utils/helpers";
import axios from "axios"
// const provider = new ethers.BrowserProvider(ethereum);

// const web3Token: string | undefined = process.env.REACT_APP_API_TOKEN;
// const client = new Web3Storage({ token: web3Token });
const token = process.env.REACT_APP_PINATA_JWT;
const key = process.env.REACT_APP_PINATA_API_Key;
const secret = process.env.REACT_APP_PINATA_API_Secret;


const Create = (props: any) => {
    let provider;
    let signer: any = "";
    const options = [
        { value: "New Collection" }, { value: "Naruto" }, { value: "Azuki" }, { value: "One Piece" }, { value: "Bleach" }
    ];
    
    document.title = "Create";
    interface TraitType {
        "trait_type": string;
        "value": string
    }

    const traitTemp: TraitType = {
        "trait_type": "",
        "value": ""
    }
    const [traits, setTraits]: [TraitType[], any] = useState([
        traitTemp
    ]);

    const getTraits = (e: any, _it: string) => {
        const val = e.target.value;
        const key = e.target.dataset.key;
        setTraits((p: TraitType[]) => {
            const traits = [...p];
            let trait: TraitType = traits[key];
            let key2 = _it === "trait_type" ? "trait_type" : "value"
            switch (_it) {
                case "trait_type":
                    trait.trait_type = val;
                    break;
                case "value":
                    trait.value = val;
                    break;
                default:
                    break;
            }
            return [...traits];
        })
    }

    interface InputType {
        name: string;
        description: string;
        collection: string;
    }
    
    //states
    const [file, setFile] = useState();
    const [properties, setProperties] = useState([<CreateInput label="properties" type="property" key={0} dataKey={0} traitChanged={ (e: any)=>getTraits(e, "trait_type") } traitValueChanged={ (e: any)=>getTraits(e, "value") } />]);
    const [inputs, setInputs]: [InputType, any] = useState({
        name: "",
        description: "",
        collection: "new collection",
    });


    const [image, setImage]: [null | string | ArrayBuffer, any] = useState("");
    

    // const getProvider = async () => {
    //     provider = new ethers.JsonRpcProvider();
    //     signer = await provider.getSigner();
    // }
    // getProvider();

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

    const getFile = (e: any) => {
        const f = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const i = reader.result;
            setImage(i);
        }
        reader.readAsDataURL(f);
        setFile(f);
    }

    const create = async () => {
        // const formData = new FormData();
        // const data = {
        //     details: inputs,
        //     attributes: traits
        // }
        // formData.append("file", file);
        // formData.append("data", data);
        // for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }
        // const config = {     
        //     headers: { 'content-type': 'multipart/form-data' }
        // }
        // axios.post("http://localhost:5000/createNft", formData, config).then(response => {
        //     console.log(response);
        // })
        // .catch(error => {
        //     console.log(error);
        // });
        // const contract = new Contract("0x5FbDB2315678afecb367f032d93F642f64180aa3", contractAbi.abi, signer);
        // const tx = await contract.mint();
        // const tx1 = await tx.wait();
        // console.log(tx1);
        // console.log(file)
        // const rootCID = await client.put(file);
        // console.log(rootCID);

        // const data = {}
        // data.properties = inputs;
        // data.traits = traits;
        // data.file = file[0];
        // console.log(data);

        // const file2 = file;
        // let f2;
        // let fileReader = new FileReader();
        // fileReader.readAsArrayBuffer(file2);
        // fileReader.onload = function(ev) {
        //     const result = ev.target.result;
        //     f2 = result;
        // }
        // const formData = new FormData();
        // formData.append("file", f2);
        // const options = JSON.stringify({
        //     cidVersion: 0,
        //   })
        // formData.append('pinataOptions', options);
    

        // const res = await fetch(`https://api.pinata.cloud/pinning/pinFileToIPFS`, {
        //     method: "POST",
        //     headers: {
        //         Authorization: "Bearer " + token,
        //         "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        //         pinata_api_key: key,
        //         pinata_secret_api_key: secret,
        //     },
        //     body: formData,
        // // console.log(token)
        // })
        // console.log(res)
        // try {
        //     const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        //     maxBodyLength: "Infinity",
        //     headers: {
        //       'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        //         Authorization: token,
        //         pinata_api_key: key,
        //         pinata_secret_api_key: secret,
        //     }
        //   });
        //     console.log(res.data);
        // } catch (error) {
        //     console.log(error)
        // }

        
        // const result = await res.json();

        // const resFile = await axios({
        //     method: "post",
        //     url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        //     data: formData,
        //     headers: {
        //         pinata_api_key: key,
        //         pinata_secret_api_key: secret,
        //         'Content-Type': `multipart/form-data`,
        //     }
        // })
        // console.log(resFile);
    }


    const addProp = () => {
        setProperties(prev => (
            [...prev, <CreateInput label="properties" type="property" key={properties.length} dataKey={properties.length} traitChanged={ (e: any)=>getTraits(e, "trait_type") } traitValueChanged={ (e: any)=>getTraits(e, "value") } />]
        ))
        setTraits((i: TraitType[]) => (
            [...i, {trait: "", value: ""}]
        ))
    }

    const getInput = (e: any, type: string) => {
        const val = e.target.value;
        setInputs((prev: InputType) => (
            { ...prev, [type]: val }
        ))
    }

    const v = image ? <img src={image} alt="img" style={{width: "inherit", height: "inherit"}} /> : null;

    return (
        <div className="create">
            <head>
                <title>Create</title>
            </head>
            <h1 className="create_header">Create New NFT</h1>
            <div className="create_body" >
                <label htmlFor="fileInput" className="create_label" style={{position: "relative"}} >
                    {v} 
                    <img className="create_svg" src={camera} alt="camera" style={{ height: "10rem", width: "10rem", opacity: "0.8", zIndex: v ? "-1" : "50", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",  }} />
                    <input type="file" accept="image/png, image/jpg, image/jpeg" className="create_file" id="fileInput" onChange={getFile} />
                </label>

                <CreateInput label="Name" placeholder="Item Name" type="input" param="name" inputChanged={getInput} />
                <CreateInput label="Description" placeholder="A detailed description of your NFT" param="description" type="textarea" textareaChanged={getInput} />
                <CreateInput label="Collection" type="select" name="Collection" options={options} param="collection" selectChanged={getInput} />
                <p className="create_properties-header" >Attributes</p>
                {properties}
                <button onClick={()=>{addProp()}} style={{padding: "1.6rem", width: "8rem", backgroundColor: "grey", border: "none", color: "white", borderRadius: "1rem", fontSize: "2rem", cursor: "pointer", marginTop: "4rem"}} > add</button>
                <hr style={{ marginTop: "2rem"}} />
                <button className="create_btn" onClick={create} >create</button>
            </div>
        </div>
    )
};


export default Create;
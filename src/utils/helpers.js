// const { ethereum } = window;


const baseUrl = process.env.REACT_APP_BASEURL;

const remainingMilliseconds = 180 * 60 * 1000;

const token = localStorage.getItem("token")

export const fetchData = async (method, endpoint, body) => {
    console.log(body)
    const result = await fetch(`${baseUrl}/${endpoint}`, {
        method: method,
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",

        },
        
        body: body ? JSON.stringify({...body}) : null,
    });
    return result.json();
}

export const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
    localStorage.removeItem("address");
};


const setToStorage = (token, userId, address) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("address", address);

    const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
    localStorage.setItem("expiryDate", expiryDate.toISOString());
};

export const setAutoLogout = (milliseconds) => {
    setTimeout(() => {
        logoutHandler();
    }, milliseconds);
};

export const getImage = (image) => {
    if (!image) {
        return;
    }
    const link = image.split("//")[1];
    return `https://ipfs.moralis.io:2053/ipfs/${link}`;
};


export const getUserAccount = async (account) => {
    try {
        const result = await fetch(`${baseUrl}/message`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                address: account,
            }),
        });
        const json = await result.json();
        return json.message;
        // state.signature = await web3.eth.personal.sign(state.message, account);
    } catch (error) {
        console.log(error);
    }
};


export const verifyMessage = async (address) => {
    try {
        if (address) {
            // const result = await fetch("https://big3-backend.onrender.com/verify", {
            const result = await fetch(`${baseUrl}/verify`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    address: address
                }),
            });
            if (result.status === 200) {
                const verified = await result.json();
                const address = verified.address;
                setToStorage(verified.token, verified.userId, verified.address);
                setAutoLogout(remainingMilliseconds);
                return address;
            }
        } else {
            return console.log("could not connect to wallet");
        }
    } catch (error) {
        console.log(error);
    }
};
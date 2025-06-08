document.querySelector(".icon-btn").addEventListener("click", async (e) => {
    const select = document.querySelectorAll("select");
    const data = await getConvRate(select[0].value, select[1].value);
    const amount = document.querySelector("input").value;
    const displayRes = document.querySelector(".result-box");
    displayRes.innerText = Number(amount) * Number(data.conversion_rate);
});

document.querySelector(".swap-btn").addEventListener("click", async () => {
    const selects = document.querySelectorAll("select");
    const fromSelect = selects[0];
    const toSelect = selects[1];

    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;

    const data = await getConvRate(fromSelect.value, toSelect.value);
    const amount = document.querySelector("input").value;
    const displayRes = document.querySelector(".result-box");

    if (!isNaN(amount) && amount.trim() !== "") {
        displayRes.innerText = (Number(amount) * Number(data.conversion_rate)).toFixed(2);
    } else {
        displayRes.innerText = "Invalid amount";
    }
});

async function getConvRate(from, to) {
    try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/d80ec7cc23a3d97fa19685e7/pair/${from}/${to}`);
        if (!res.ok) {
            throw new Error("something went wrong !");
        }
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

async function getCurrencies() {
    try {
        const res = await fetch("https://v6.exchangerate-api.com/v6/d80ec7cc23a3d97fa19685e7/codes");
        if (!res.ok) {
            throw new Error('something went wrong !');
        }
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

async function setOptions() {
    let data = await getCurrencies();
    data = data?.supported_codes;
    const select = document.querySelectorAll("select");
    data.forEach(code => {
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");

        option1.value = code[0];
        option1.innerText = `${code[0]} - ${code[1]}`;

        option2.value = code[0];
        option2.innerText = `${code[0]} - ${code[1]}`;

        select[0].appendChild(option1);
        select[1].appendChild(option2);
    });
}
setOptions();

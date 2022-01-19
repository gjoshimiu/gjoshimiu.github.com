const accountInfoList = [];

const account = (function () {
    let name, balance;

    return {
        createAccount: function () {
            name= document.getElementById("name").value;
            balance = document.getElementById("deposit").value;
            accountInfoList.push({name: name,balance: balance});
            document.getElementById("accountListInfo").value += "Account name:   "+ name+"  Balance:   "+ balance +"\n";
        }
    }
})();
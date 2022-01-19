const accountInfoList = [];

const account = (function () {
    let name, balance;

    return {
        createAccount: function () {
            name= document.getElementById("name").value;
            balance = document.getElementById("deposit").value;
            accountInfoList.push({name: name,balance: balance});
            let value="";
            accountInfoList.forEach(val=>{
                value = value+ "Account name:   "+ val.name+"  Balance:   "+ val.balance +"\n";
                }
            )
            document.getElementById("accountListInfo").value=value;
        }
    }
})();
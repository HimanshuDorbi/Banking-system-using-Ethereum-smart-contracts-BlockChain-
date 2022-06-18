 src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"
    src="https://unpkg.com/web3@latest/dist/web3.min.js"

    
        var contract;
        $(document).ready(function()
        {
            web3 = new web3(web3.currentProvider);

            var address = "0x56Ca94E7DE9E490E5A1BE6dD52a11f0869A94cC8";
            var abi =[
                // if abi gets removed from here no need to worry b'cauz you can generate your new abi by paying ether using metamask and remix.ethereum.org i.e. solidity compiler.
            ]

            contract = new web3.eth.contract(abi, adress);
            contract.methods.getbalance().call().then(function(bal)
            {
                $('balance').html(bal);

            })

        })
    

        $('#deposit').click(function()
        {
            var amt = 0;
            amt = parseInt($('#amount').val());

            web3.eth.getAccounts().then(function(accounts)
            {
                var acc = accounts[0];
                return contract.methods.deposit(amt).send({from: acc});
            }).then(function(tx)
            {
                console.log(tx);

            }).catch(function(tx)
            {
                console.log(tx);
            })

        })

        $('#withdraw').click(function()
        {
            var amt = 0;
            amt = parseInt($('#amount').val());

            web3.eth.getAccounts().then(function(accounts)
            {
                var acc = accounts[0];
                return contract.methods.withdraw(amt).send({from: acc});
            }).then(function(tx)
            {
                console.log(tx);

            }).catch(function(tx)
            {
                console.log(tx);
            })

        })
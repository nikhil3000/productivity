var contractinstance;
var web3;
window.addEventListener('load', function() {

  // Check if Web3 has been injected by the browser:

  if (typeof web3 !== 'undefined') 
  {

  } 
  else 
  {
     
    //var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    window.alert('install metamask');  
  }

var casinoContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_hr","type":"uint8"}],"name":"store","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}]);
contractinstance = casinoContract.at("0xbe12a9b60863f4996254d70c19b32ba0197ec452");
console.log(contractinstance);
//  contractinstance.methods.numberOfBets().call().then(console.log);0xb53a5fc857342afa69329e9f2b14204e3968135b
$("#date").text(Date);

document.getElementById('form').onsubmit = submit;

});


function deploy()
{

var productiveContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_hr","type":"uint8"}],"name":"store","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}]);
var productive = productiveContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160000160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507388cc6e0a188355ef4dec032660f123446a5ad813600260000160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160000160006101000a81548160ff021916908360ff1602179055506000600260000160006101000a81548160ff021916908360ff160217905550600060038190555060008060146101000a81548160ff021916908360ff1602179055506104278061017e6000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633bc862c71461004e57806341c0e1b514610071575b005b61006f600480360381019080803560ff169060200190929190505050610088565b005b34801561007d57600080fd5b5061008661024c565b005b600160000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610146576000601481819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff1602179055505080600160000160006101000a81548160ff021916908360ff1602179055503460036000828254019250508190555061020a565b600260000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610204576000601481819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff1602179055505080600260000160006101000a81548160ff021916908360ff16021790555034600360008282540192505081905550610209565b600080fd5b5b6002600060149054906101000a900460ff1660ff1614156102495760008060146101000a81548160ff021916908360ff1602179055506102486102dd565b5b50565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102db576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b565b600260000160009054906101000a900460ff1660ff16600160000160009054906101000a900460ff1660ff16111561038257600160000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6003549081150290604051600060405180830381858888f1935050505015801561037c573d6000803e3d6000fd5b506103f1565b600260000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6003549081150290604051600060405180830381858888f193505050501580156103ef573d6000803e3d6000fd5b505b60006003819055505600a165627a7a723058203aad68107ec005f5192caa47db6df57c58f707205807bf44995f04f9adbd22150029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
}


function submit()
{
  
  var hours = document.getElementById('hours').value;
  console.log(hours);
  if(hours == '')
    window.alert('please enter number of hours');
  else
  {
    console.log(parseInt(hours));
    contractinstance.store(parseInt(hours),{from:web3.eth.accounts[0],value:web3.toWei('0.25','ether')},function(err,result)
    {
      if(!err)
        {
          console.log('sucess'+result);
          window.alert('sucess');
        }
      else
      {
        console.log(err);
        // $("#result").text('FAIL');
        window.alert('failure');
      }
    });
  }
}

// function pay()
// {
//   contractinstance.pay(function(err,result)
//   {
//     if(!err)
//     {
//       console.log('sucess '+ result);
//     }
//     else
//     {
//       console.log('err ' + err );
//     }
//   });

// }

function kill()
{
  contractinstance.kill(function(err,result)
  {
    if(!err)
    {
      console.log('sucess '+ result);
    }
    else
    {
      console.log('err ' + err );
    }
  });

}

// function transfer()
// {
//   contractinstance.transfer(function(err,result)
//   {
//     if(!err)
//     {
//       console.log('sucess '+ result);
//     }
//     else
//     {
//       console.log('err ' + err );
//     }
//   });
// }

// function transact()
// {
// 	console.log('transact');
// 	//var amount = document.getElementById('sendName').value;
// 	//var address =document.getElementById('sendAdd').value;

// 	//document.getElementById('send').submit();
// 	web3.eth.sendTransaction({
// 		from: web3.eth.accounts[0],
// 		to: '0x5942763146abECF6ADC72619eD9b619df8b2412E',
// 		value: web3.toWei(1,'ether')
// 	},function(err,transactionHash){
// 		if(!err)
// 		{
// 			console.log('transaction sucessful ' + transactionHash);
			
// 		}
// 		else
// 		{
// 			console.log('fail'+err);
			
// 		}
// 	});
// 	//alert(amount + address);

// }





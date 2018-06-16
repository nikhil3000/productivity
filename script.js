var contractinstance;

window.addEventListener('load', function() {

  // Check if Web3 has been injected by the browser:

  if (typeof web3 !== 'undefined') {

  } else {
     window.alert('install metamask');
     
  }

var casinoContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_hr","type":"uint8"}],"name":"store","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_address1","type":"address"},{"name":"_address2","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}]);
contractinstance = casinoContract.at("0x0a741222e48f4eb58fafe8b84deb90f7115d1e68");
console.log(contractinstance);
  // contractinstance.methods.numberOfBets().call().then(console.log);
$("#date").text(Date);

document.getElementById('form').onsubmit = submit;

});
$("#form").on('submit',function(){
  console.log('submitted');
});



function submit()
{
  var hours = $("#hours").value;
  console.log(hours);
  contractinstance.store(parseInt(hours),{from:web3.eth.accounts[0],value:web3.toWei('0.25','ether')},function(err,result)
  {
    if(!err)
      console.log('sucess');
    else
      console.log(err);
  });



}



function transact()
{
	console.log('transact');
	var amount = document.getElementById('sendName').value;
	var address =document.getElementById('sendAdd').value;

	//document.getElementById('send').submit();
	web3.eth.sendTransaction({
		from: web3.eth.accounts[0],
		to: '0xaac4a5213c3e6220ad2ad71ea8ffa6b372b97148',
		value: 100000
	},function(err,transactionHash){
		if(!err)
		{
			console.log('transaction sucessful ' + transactionHash);
			res.send('sucessful');
		}
		else
		{
			console.log('fail'+err);
			res.send('fail');
		}
	});
	//alert(amount + address);

}




// Contract mined! address: 0x255f0a60a54b427075f41dbe62266f14e62dc415 transactionHash: 0x7ae7bbd880a9608272dddb15a2baecda40b3f7f4e38f6b535085db68c04e0709

// contractinstance.bet(4,function(err)
  // {
  //    if(!err)
  //    {
  //      console.log('sucessful');
  //    }
  // });
  // contractinstance.numberOfBets(function(err,result)
  //  {
  //    console.log('hello');
  //    console.log(web3.toDecimal(result));
//    });

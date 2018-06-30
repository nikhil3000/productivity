pragma solidity ^0.4.24;
contract productive
{
    struct student {
        uint8 hr;
	    address account;
    }
    
    address owner;
    
    uint8 c;
    student private student1;
    student private student2;
    uint earn;
    
	function() public payable {}


     
    constructor() public
    {
        owner = msg.sender;
        student1.account = owner;
        student2.account = 0x88Cc6E0A188355Ef4DEc032660f123446a5Ad813;
        student1.hr =0;
        student2.hr =0;
        earn = 0;
        c = 0;
    }
    
    
    function store(uint8 _hr) public payable {
        if(msg.sender == student1.account)
            {
                c++;
                student1.hr = _hr;
                earn += msg.value;
            }
        else if(msg.sender == student2.account)
            {
                c++;
                student2.hr = _hr;
                earn += msg.value; 
            }
        else 
            revert();
            
        if(c==2)
        {
           c =0 ;
            pay();
        }
        
            
    }
    

    function pay() private {
        if(student1.hr > student2.hr )
        {
            student1.account.transfer(earn);
        }
        else
        {
            student2.account.transfer(earn);
        }
        earn = 0;
    }
    
    
	function kill() public
	{
		if(msg.sender == owner)
		selfdestruct(owner);
	}

}

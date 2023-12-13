let choice  = Number(prompt("Enter your choice: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15"));
let balance = 50000;
switch(choice){
    case 1:
        alert("Send money");
        if(choice==1){
            let send = Number(prompt("Enter new choices: 1,2,3,4,5,6"));   
            switch(send){
                case 1: 
                alert("Uri Muri Momo");
                if(send==1){
                    let number =  Number(prompt("Numero ya mobile (Format 07XXXXXXXX)"));
                    let name = "Agnes RUKUNDO";
                    alert("Emeza umubare w'amafaranga ajya kuri 250"+number+", "+name);
                    let amount =  Number(prompt("Enter amount"));
                    if (amount>balance){
                        alert("Insufficient balance!");
                    }
                        else{
                    
                    let fee = (5/100)*amount;
                    alert("washyizeho: "+name+","+"250"+number+","+amount+" RWF."+" ikiguzi cya RWF "+fee+" kirakurikizwa. Kwemeza shyiramo Pin"); 
                    let pin =  Number(prompt("Enter your pin")); 
                    balance= balance-(amount+fee);
                    alert("*165*S*"+amount+"RWF"+ "transferred to "+name+" (250"+number+"). Fee was: "+fee+"RWF. New balance: "+balance);
                }
                    break;
                     }
                case 2: 
                alert("Ohereza eCash");
                break;
                case 3: 
                alert("Ohereza mu mahanga");
                break;
                case 4: 
                alert("Tesha agaciro");
                break;
                case 5: 
                alert("Erekana umubare gihamya");
                break;
                default:
                    alert("Wahisemo nabi");
            }
        
        }
        break;
        case 2:
        alert("Buy");
        break;
        
        case 3:
        alert("PayBill");
        break;
        
        case 4:
        alert("Bank Service");
        break;
        
        case 5:
        alert("Loan and Saving");
        break;
        
        case 6:
        alert("My Momo Account");
        break;
        
        case 7:
        alert("Pending Approvals");
        break;
        
        case 8:
        alert("MomoPay");
        break;
        
        case 9:
        alert("My Momo Security");
        break;
        
        case 10:
        alert("Insurance");
        break;
        
        case 11:
        alert("Momo Terms and Conditions");
        break;
        
        case 12:
        alert("Macye Macye");
        break;
        
        case 13:
        alert("Babyl health");
        break;
        
        case 14:
        alert("help");
        break;
        
        case 15:
        alert("Exit");
        break;
        default:
            alert("Invalid input");
    
}
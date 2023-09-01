/*
Network Talk
HTTP/HTTPS
Async all ,Promise
a)then b)catch
*/
//makeNetworkCall('https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json');

 export async function makeNetworkCall(URL){  //AWAIT  = async wait
    try{
    const response =  await fetch(URL);
    const data = await response.json();
    console.log('Data is',data);
    return data;
    } catch(err){
        console.log('Error is ',err);
        throw err;
    }
    //sync ke aath try catch & asynch k saath then &catch
    /*const promise = fetch('URL'); // ESe 2015//await 
    promise.then((response)=>{   //then is the function calling the one function with pass the another function as arguemnt is nown function call back
        const promise2 = response.json();
        promise2.then(data=> {

        }).catch(err=>{});
    }).catch((err)=>{});  */

}
// export default to return
export default makeNetworkCall;
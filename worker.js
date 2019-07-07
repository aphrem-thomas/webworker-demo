this.onmessage = function(e){
    if(e.data.p !== undefined){
        var p = e.data.p;
        var n = e.data.n;
        var r = e.data.r;
        console.log("received ", e.data);
        this.postMessage({amount:p*(1+(r/100))^n})
    }
}
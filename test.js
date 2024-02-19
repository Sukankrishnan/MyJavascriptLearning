describe("Authentication", function(){
    before(()=>{
        console.log("before hook");
    });
    this.beforeEach(()=>{
        console.log("Beforeeach hook");
    });
    afterEach(()=>{
        console.log("Aftereach hook");
    });
    after(()=>{
        console.log("After hook");
    });


    it("Login attempt success", ()=>{
        console.log("Logged in");
    });
    it("Log out attempt success", ()=>{
        console.log("Logged out");
    });
});
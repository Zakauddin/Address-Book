import { expect } from 'chai';
import contact from "../Contact.js"; 

describe('Testing contact class',function() {
    it('Test1. constructor', function(done) {
        let con = new contact("first", "last", "01234", "abc@gmail.com");
        expect(con.get_first_name()).to.equal("first");
        done();
    });

    it('Test2. setter function', function(done) {
        let con = new contact("first", "last", "01234", "abc@gmail.com");
        con.set_first_name("second");
        expect(con.get_first_name()).to.equal("second");
        done();
    });

    it('Test3. get JSON function', function(done) {
        let con = new contact("first", "last", "01234", "abc@gmail.com");
        expect(con.get_json()).to.deep.equal({
            "first_name" : 'first',
            "last_name" : 'last',
			"phone" : '01234',
			"email" : 'abc@gmail.com'
        });
        done();
    });

    it('Test4. search function (true case)', function(done) {
        let con = new contact("first", "last", "01234", "abc@gmail.com");
        expect(con.search("first")).to.equal(true);
        done();
    });

    it('Test5. search function (false case)', function(done) {
        let con = new contact("first", "last", "01234", "abc@gmail.com");
        expect(con.search("second")).to.equal(false);
        done();
    });
    
    it('Test6. update function', function(done) {
        let con = new contact("first", "last", "01234", "abc@gmail.com");
        con.update(
            {
                "first_name" : 'second',
                "last_name" : 'previous',
                "phone" : '15',
                "email" : 'abc@yahoo.com'
            }
        );
        expect(con.get_json()).to.deep.equal({
            "first_name" : 'second',
            "last_name" : 'previous',
            "phone" : '15',
            "email" : 'abc@yahoo.com'
        });
        done();
    });
});
import { expect } from 'chai';
import contact from "../Contact.js"; 
import AddressBook from '../AddressBook.js';

describe('Testing Address Book class',function() {
    it('Test1. constructor without value', function(done) {
        let book = new AddressBook();
        expect(book.get_size()).to.equal(0);
        done();
    });
    it('Test2. constructor with value', function(done) {
        let con = new contact("first", "last", "01234", "abc@gmail.com");
        let book = new AddressBook([con]);
        expect(book.get_size()).to.equal(1);
        done();
    });

    it('Test3. view all function', function(done) {
        let con = new contact("first", "last", "01234", "abc@gmail.com");
        let book = new AddressBook([con]);
        expect(book.view_all()).to.deep.equal([{
            "index" : 0,
            "first_name" : 'first',
            "last_name" : 'last',
			"phone" : '01234',
			"email" : 'abc@gmail.com'
        }]);
        done();
    });

    it('Test4. add contact function', function(done) {
        let con = new contact("first", "last", "01234", "abc@gmail.com");
        let book = new AddressBook([con]);
        let con1 = new contact("David", "Platt", "01913478234", "david.platt@corrie.co.uk");
        book.add_contact(con1);
        expect(book.get_size()).to.equal(2);
        done();
    });

    it('Test5. delete contact function', function(done) {
        let con = new contact("first", "last", "01234", "abc@gmail.com");
        let con1 = new contact("David", "Platt", "01913478234", "david.platt@corrie.co.uk");
        let book = new AddressBook([con, con1]);
        book.delete_contact(0);
        expect(book.get_size()).to.equal(1);
        done();
    });


    it('Test6. search function (true case)', function(done) {
        let con = new contact("first", "last", "01234", "abc@gmail.com");
        let con1 = new contact("David", "Platt", "01913478234", "david.platt@corrie.co.uk");
        let book = new AddressBook([con, con1]);
        const query = {"query" : "Platt"};
        expect(book.search_contacts(query)).to.deep.equal( [{
                "index" : 1,
                "first_name": "David",
                "last_name": "Platt",
                "phone": "01913478234",
                "email": "david.platt@corrie.co.uk"
        }] );
        done();
    });

    it('Test7. search function (false case)', function(done) {
        let con = new contact("first", "last", "01234", "abc@gmail.com");
        let con1 = new contact("David", "Platt", "01913478234", "david.platt@corrie.co.uk");
        let book = new AddressBook([con, con1]);
        const query = {"query" : "Ben"};
        expect(book.search_contacts(query)).to.deep.equal([]);
        done();
    });

    it('Test8. update contact', function(done) {
        let con = new contact("first", "last", "01234", "abc@gmail.com");
        let con1 = new contact("David", "Platt", "01913478234", "david.platt@corrie.co.uk");
        let book = new AddressBook([con, con1]);
        const data = {
            "index" : 1,
            "first_name": "David",
            "last_name": "Stevenson",
            "phone": "01913478234",
            "email": "david.stevenson@corrie.co.uk"
        };
        book.update_contact(data)
        const query = {"query" : "Stevenson"};
        expect(book.search_contacts(query)).to.deep.equal([
            {
                "index" : 1,
                "first_name": "David",
                "last_name": "Stevenson",
                "phone": "01913478234",
                "email": "david.stevenson@corrie.co.uk"
            }
        ]);
        done();
    });
    
});
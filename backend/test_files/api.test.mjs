import supertest from 'supertest';
import { expect } from 'chai';
import app from'../index.js';

const api = supertest(app);

describe('API Testing', () => {

    it('Test1, /get_all_contacts', async () => {
        const response = await api.get('/get_all_contacts');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
    });

    it('Test2, /search_contacts', async () => {
        const query = "David";
        const response = await api.get('/search_contacts/' + query);
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body[0].first_name).to.equal("David");
    });
    
    it('Test3, /add_contact valid', async () => {
        const contact = {
            "first_name" : 'second',
            "last_name" : 'previous',
            "phone" : '15',
            "email" : 'abc@yahoo.com'
        };
        const response = await api.post('/add_contact')
            .set('Content-Type', 'application/json')
            .send(contact);
        expect(response.status).to.equal(201);
        expect(response.body.first_name).to.equal(contact.first_name);
    });

    it('Test4, /add_contact invalid', async () => {
        const contact = {
            "first_name" : 'second',
            "phone" : '15',
            "email" : 'abc@yahoo.com'
        };
        const response = await api.post('/add_contact')
            .set('Content-Type', 'application/json')
            .send(contact);
        expect(response.status).to.equal(206);
        expect(response.body.error).to.equal("Incomplete details");
    });

    it('Test5, /delete_contact valid', async () => {
        const index = "0";
        const response = await api.delete('/delete_contact/'+index);
        expect(response.status).to.equal(204);
        expect(response.body.message).to.equal("Contact Deleted!");
    });

    it('Test6, /delete_contact invalid', async () => {
        const index = "100";
        const response = await api.delete('/delete_contact/'+index);
        expect(response.status).to.equal(406);
        expect(response.body.error).to.equal("Invalid Index!");
    });

    it('Test7, /update_contact valid', async () => {
        const contact = {
            "index" : '0',
            "first_name" : 'third',
            "last_name" : 'previous',
            "phone" : '15',
            "email" : 'abc@yahoo.com'
        };
        const response = await api.put('/update_contact').send(contact);
        expect(response.status).to.equal(200);
        expect(response.body.first_name).to.equal(contact.first_name);
        expect(response.body.message).to.equal("Contact Updated!");
    });

    it('Test8, /update_contact invalid', async () => {
        const contact = {
            "index" : '100',
            "first_name" : 'third',
            "last_name" : 'previous',
            "phone" : '15',
            "email" : 'abc@yahoo.com'
        };
        const response = await api.put('/update_contact').send(contact);
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal("Invalid Index!");
    });
});



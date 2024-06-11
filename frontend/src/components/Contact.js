class Contact{
	constructor(first_name, last_name, phone, email){
		this.first_name = first_name;
		this.last_name = last_name;
		this.phone = phone;
		this.email = email;
	}
	get_first_name() {
		return this.first_name;
	}
	get_last_name() {
		return this.last_name;
	}
	get_phone() {
		return this.phone;
	}
	get_email() {
		return this.email;
	}

	set_first_name(first_name) {
		this.first_name = first_name;
	}
	set_last_name(last_name) {
		this.last_name = last_name;
	}
	set_phone(phone) {
		this.phone = phone;
	}
	set_email(email) {
		this.email = email;
	}
}

module.exports = Contact;
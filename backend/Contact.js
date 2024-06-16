class Contact{

	#first_name;
	#last_name;
	#phone;
	#email;

	constructor(first_name, last_name, phone, email){
		this.#first_name = first_name;
		this.#last_name = last_name;
		this.#phone = phone;
		this.#email = email;
	}
	
	get_first_name() {
		return this.#first_name;
	}
	get_last_name() {
		return this.#last_name;
	}
	get_phone() {
		return this.#phone;
	}
	get_email() {
		return this.#email;
	}

	set_first_name(first_name) {
		this.#first_name = first_name;
	}
	set_last_name(last_name) {
		this.#last_name = last_name;
	}
	set_phone(phone) {
		this.#phone = phone;
	}
	set_email(email) {
		this.#email = email;
	}

	get_json() {
		return {
			"first_name" : this.#first_name,
			"last_name" : this.#last_name,
			"phone" : this.#phone,
			"email" : this.#email 
		}
	}

	search(query) {
		const l_first_name = this.#first_name.toLowerCase();
		const l_last_name = this.#last_name.toLowerCase();
		const phone = this.#phone;
		const l_email = this.#email.toLowerCase();

		if(
			l_first_name.includes(query) || l_last_name.includes(query) || phone.includes(query) || l_email.includes(query)
		) {
			return true;
		}
		return false;
	}

	update(data) {
		this.#first_name = data.first_name;
		this.#last_name = data.last_name;
		this.#phone = data.phone;
		this.#email = data.email;
	}
}

module.exports = Contact;

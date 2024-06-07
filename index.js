const {UsersApiService} = require('neurelo-sdk');

const getAddress = async( ) => {

	try{

		const users = await UsersApiService.findUsers();
		console.log(users.data);

	} catch(err) {
		console.log(err)
	}

}

getAddress();
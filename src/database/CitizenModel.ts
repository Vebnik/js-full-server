import {Sequelize, Model, DataTypes, ModelCtor} from 'sequelize';
import * as path from "path";


class CitizenModel {

	private readonly sequelize: Sequelize = new Sequelize({
		storage: path.join('src', 'database', 'dataBaseAll.sqlite'),
		dialect: 'sqlite',
		logging: false
	})

	private readonly User: ModelCtor<Model>

	constructor() {
		this.User = this.sequelize.define('Citizen', {
			name: DataTypes.STRING,
			city_id: DataTypes.NUMBER,
			groups: DataTypes.JSON
		})
	}

	public async getModel () {
		await this.User.sync({alter: true})
		return this.User
	}

}

export default new CitizenModel()
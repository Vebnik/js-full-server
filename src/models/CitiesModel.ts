import {Sequelize, Model, DataTypes, ModelCtor} from 'sequelize';
import * as path from "path";


class CitiesModel {

	private readonly sequelize: Sequelize = new Sequelize({
		storage: path.join('src', 'database', 'dataBaseAll.sqlite'),
		dialect: 'sqlite',
		logging: false
	})

	private readonly City: ModelCtor<Model>

	constructor() {
		this.City = this.sequelize.define('City', {
			id: {
				type: DataTypes.NUMBER,
				primaryKey: true
			},
			name: DataTypes.STRING,
			data: DataTypes.STRING
		})
	}

	public async getModel () {
		await this.City.sync({alter: true})
		return this.City
	}

}

export default new CitiesModel()
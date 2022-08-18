import CitizenModel from "../models/CitizenModel";
import {CitizenCreate, CityCreate} from "../interface/Citizen";
import CitiesModel from "../models/CitiesModel";

class DataControllers {

	public async getCitizens(req, res, next) {

		try {
			const Citizen = await CitizenModel.getModel()
			const allData = await Citizen.findAll()

			res.json({ok: true, data: allData})

		} catch (err) {
			res.json({ok: false, data: err.message})
		}

	}

	public async setCitizen(req, res, nex) {

		try {
			const { name, city_id, groups }: CitizenCreate = req.body

			const Citizen = await CitizenModel.getModel()
			await Citizen.create({name, city_id, groups})

			res.json({ok: true, data: 'Citizen created'})
		} catch (err) {
			res.json({ok: false, data: err.message})
		}
	}

	public async setCitizens(req, res, nex) {

		try {
			const citizens: CitizenCreate[] = req.body

			const Citizen = await CitizenModel.getModel()

			citizens.map(async (el) => {
				const {name, city_id, groups} = el
				await Citizen.create({name, city_id, groups})
			})

			res.json({ok: true, data: `Citizens created`})
		} catch (err) {
			res.json({ok: false, data: err.message})
		}
	}

	public async getCity(req, res, next) {

		try {
			const City = await CitiesModel.getModel()
			const allData = await City.findAll()

			res.json({ok: true, data: allData})

		} catch (err) {
			res.json({ok: false, data: err.message})
		}

	}

	public async setCity(req, res, nex) {

		try {
			const { id, name, data }: CityCreate = req.body

			const City = await CitiesModel.getModel()
			await City.create({id, name, data})

			res.json({ok: true, data: 'City created'})
		} catch (err) {
			res.json({ok: false, data: err.message})
		}
	}
}

export default new DataControllers()
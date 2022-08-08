import CitizenModel from "../database/CitizenModel";
import {CitizenCreate} from "../interface/Citizen";

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
}

export default new DataControllers()
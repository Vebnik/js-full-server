interface Group {
	type: string
	name: string
}

export interface CitizenCreate {
	name: string
	city_id: number
	groups: Array<Group>
}

export interface CityCreate {
	id: number
	name: string
	data: string
}


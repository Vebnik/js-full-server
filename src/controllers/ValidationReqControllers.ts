import {IncomingMessage} from "http";

class ValidationReqControllers {

	public requestLogger(req: IncomingMessage, res, next) {
		console.log('Detected request', '\n', req.headers["user-agent"])
		next()
	}

}

export default new ValidationReqControllers()
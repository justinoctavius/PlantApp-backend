"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
class JWTMiddleware {
    static verifyToken(req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (bearerHeader) {
            const token = bearerHeader.split(' ')[1];
            const isValid = utils_1.JWTUtil.verify(token);
            if (!isValid) {
                res
                    .json({
                    msg: 'token is not valid!',
                    payload: null,
                    status: 500,
                })
                    .status(500);
            }
            next();
        }
        else {
            res
                .json({
                msg: 'You have to sing in first!',
                payload: null,
                status: 500,
            })
                .status(500);
        }
    }
}
exports.default = JWTMiddleware;
//# sourceMappingURL=JWT.middleware.js.map
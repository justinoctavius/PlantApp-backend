"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const _1 = require(".");
//database
const dbConfig = {
    host: _1.default.env.DB.POSTGRES_HOST,
    dialect: 'postgres',
    username: _1.default.env.DB.POSTGRES_USER,
    password: _1.default.env.DB.POSTGRES_PASSWORD,
    database: _1.default.env.POSTGRES_DATABASE,
    models: [__dirname + './../src/dal/models'],
};
exports.sequelize = new sequelize_typescript_1.Sequelize(dbConfig);
const testConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.sequelize.authenticate();
        console.log('Database is connected');
    }
    catch (error) {
        console.log('Unable to connect to the database');
    }
});
testConnection();
// sequelize.sync({ force: true }).catch((err) => console.log(err));
//# sourceMappingURL=database.js.map
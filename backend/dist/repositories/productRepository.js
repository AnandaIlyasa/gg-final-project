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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productSchema_1 = __importDefault(require("../schemas/productSchema"));
class ProductRepository {
    static readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const productList = yield productSchema_1.default.find();
            if (productList === null) {
                throw new Error(`error loading all products`);
            }
            return productList;
        });
    }
    static create(product) {
        return __awaiter(this, void 0, void 0, function* () {
            yield productSchema_1.default.create(product);
            return product;
        });
    }
    static readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundproduct = yield productSchema_1.default.findById({ _id: id });
            if (foundproduct === null) {
                throw new Error(`product with id ${id} is not found`);
            }
            return foundproduct;
        });
    }
    static updateById(id, newproduct) {
        return __awaiter(this, void 0, void 0, function* () {
            productSchema_1.default.updateOne({ _id: id }, { newproduct });
        });
    }
    static deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            productSchema_1.default.findByIdAndDelete(id);
        });
    }
}
exports.default = ProductRepository;
//# sourceMappingURL=productRepository.js.map
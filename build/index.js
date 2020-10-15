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
const node_model_1 = require("./node.model");
const sync_model_1 = require("./sync.model");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield node_model_1.Node.sync({ force: false });
        yield sync_model_1.Sync.sync({ force: false });
        yield node_model_1.Node.upsert({ id: 1, name: 'eyal1' });
        yield node_model_1.Node.upsert({ id: 2, name: 'eyal2' });
        yield node_model_1.Node.upsert({ id: 3, name: 'eyal3' });
        yield node_model_1.Node.upsert({ id: 4, name: 'eyal4' });
        yield sync_model_1.Sync.upsert({ entityName: 'structures1', dataVersion: 'dv1' });
        yield sync_model_1.Sync.upsert({ entityName: 'structures2', dataVersion: 'dv2' });
        yield sync_model_1.Sync.upsert({ entityName: 'structures3', dataVersion: 'dv3' });
        yield sync_model_1.Sync.upsert({ entityName: 'structures4', dataVersion: 'dv4' });
        console.log('done');
    }
    catch (error) {
        console.error(error);
    }
}))();

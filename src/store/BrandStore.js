import {makeAutoObservable} from "mobx";


export default class BrandStore{
    constructor() {
        this._id = 0
        this._name = ''
        this._brands = []
        makeAutoObservable(this)
    }
    get id(){
        return this.id
    }
    get brands(){
        return this._brands
    }

    setBrands(brands){
        this._brands = brands
    }
    get name(){
        return this._name
    }

    setName(name){
        this._name =name
    }

    setId(id){
        this._id = id
    }
}
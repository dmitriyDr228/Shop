
import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types = []
        this._brands =[]
        this._devices=[]
        this._rating = [0,1,2,3,4,5]
        this._selectedRating = 0
        this._selectedType = {}
        this._selctedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }


    setRating(rating){
        this._rating = rating
    }
    setSelectedRating(rating){
        this._selectedRating = rating
    }
    setPage(page){
        this._page = page
    }
    setLimit(limit){
        this._limit = limit
    }
    setTotalCount(totalCount){
        this._totalCount= totalCount
    }

    setTypes(types){
        this._types = types
    }
    setDevices(devices){
        this._devices = devices
    }
    setBrands(brands){
        this._brands = brands
    }
    setSelectedType(type){
        this._selectedType = type
    }

    setSelectedBrand(brand){
        this.setPage(1)
        this._selctedBrand = brand
    }

    get selectedRating(){
        return this._selectedRating
    }

    get rating(){
       return  this._rating
    }
    get selectedBrand(){
        this.setPage(1)
        return this._selctedBrand
    }

    get types(){
        return this._types
    }
    get devices(){
        return this._devices
    }

    get limit(){
        return this._limit
    }
    get totalCount(){
        return this._totalCount
    }

    get page(){
        return this._page
    }

    get selectedType(){
        return this._selectedType
    }

    get brands(){
        return this._brands
    }
}
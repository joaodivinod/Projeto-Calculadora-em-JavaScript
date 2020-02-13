class CalcController{
    constructor(){
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize(){
        let displayCalCel = document.querySelector("#display");
        let dataEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        dis

    }

    get _displayCalc(){
        return this._displayCalc;
    }
    
    set _displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        this.currentDate = valor;
    }


}
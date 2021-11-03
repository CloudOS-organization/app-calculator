import {html , Type} from '../../asset/js/deps.js';
import {Window} from '../../asset/js/component/mod.js';

const INITIAL_WIDTH = 400;
const INITIAL_HEIGHT = 600;

export default class Calculator extends Window {
    static name = 'calculator-app';

    static properties = {
        ...super.properties,
        calValue: Type.string("")
    };

    static ref = {
        ...super.ref
    };

    constructor() {
        super();
        this.width = INITIAL_WIDTH;
        this.height = INITIAL_HEIGHT;
        this.onAppLoading();
    }

    renderBody() {
        return html`
            <div class="calculator__container">
                <div class="calculator__view">
                    ${this.calValue}
                </div>

                <div class="calculator__buttons">
                    <button @click=${e => this.allClear()} class="actions">AC</button>
                    <button @click=${e => this.addNumber("")}></button>
                    <button @click=${e => this.addNumber("%")}>%</button>
                    <button @click=${e => this.addNumber("/")} class="actions">÷</button>
                    <button @click=${e => this.addNumber("7")}>7</button>
                    <button @click=${e => this.addNumber("8")}>8</button>
                    <button @click=${e => this.addNumber("9")}>9</button>
                    <button @click=${e => this.addNumber("*")} class="actions">×</button>
                    <button @click=${e => this.addNumber("4")}>4</button>
                    <button @click=${e => this.addNumber("5")}>5</button>
                    <button @click=${e => this.addNumber("6")}>6</button>
                    <button @click=${e => this.addNumber("-")} class="actions">-</button>
                    <button @click=${e => this.addNumber("1")}>1</button>
                    <button @click=${e => this.addNumber("2")}>2</button>
                    <button @click=${e => this.addNumber("3")}>3</button>
                    <button @click=${e => this.addNumber("+")} class="actions">+</button>
                    <button @click=${e => this.clearEntry()} class="actions">CE</button>
                    <button @click=${e => this.addNumber("0")}>0</button>
                    <button @click=${e => this.addNumber(".")}>.</button>
                    <button @click=${e => this.getResult()} class="actions">=</button>
                </div>
            </div>
        `;
    }

    onAppLoading() { 
        this.calValue = "";
    }

    addNumber(number) {
        this.calValue += number;
    }

    getResult() {
        this.calValue = eval(this.calValue)
    }

    clearEntry() {
        this.calValue = this.calValue.substring(0, this.calValue.length-1) 
    }

    allClear() {
        this.calValue = "";
    }

    

}
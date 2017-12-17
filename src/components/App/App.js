import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import XLSX from 'xlsx';

// import { Nav } from '../Nav/Nav';
// import Users from '../Users/Users';
// import { UserView } from '../UserView/UserView';
// import { Contact } from '../Contact/Contact';

import 'normalize.css';
import './App.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);

///////////////////najpierw var desired_cell wpisać do state
//////////////////porównać stringToCheck z cellToCheck
//////////////////zrobić pętle, aby porównać stringToCheck ze wszystkimi komórkami
/////////////////.......
////////////////// sprawić, że wszystkie pliki z danego folderu ładują się automatycznie na początku
//////////////////sprawić, że stringToCheck jest porównywany z każdą komórką w każdym pliku i w każdym arkuszu
//////////////////WRZUCIĆ NA GITHUB

        this.state = {
          stringToCheck: '',
          cellToCheck: ''
        }
    }

    handleClick = () => {
        this.setState({
          stringToCheck: this.input.value
        })
        //console.log(this.state.stringToCheck)
    }
//całe handleFile ubrać w componentDidMount

  //  componentDidMount() {
  //      console.log('componentDidMount');
        //this.
    handleFile = (e) => {
      var files = e.target.files, f = files[0];
      var reader = new FileReader();
      reader.onload = (e) => {
        var data = e.target.result;
        var workbook = XLSX.read(data, {type:'binary'});

        var first_sheet_name = workbook.SheetNames[0];
        var address_of_cell = 'A2';

// znaleźć przeszukiwanie zakresu w internecie
// lub dodać pętlę porównującą, a wynik (TAK lub NIE) zapisywać w state
// (czyli nie zapisywać w state adresu komórki oraz oraz nie porównywać w render)
// powyżej pętla zmieniająca adres komórki?
//{s:{c:0, r:2}, e:{c:1, r:6}}


        /* Get worksheet */
        var worksheet = workbook.Sheets[first_sheet_name];

        /* Find desired cell */
        var desired_cell = worksheet[address_of_cell];

        /* Get the value */
        var desired_value = (desired_cell ? desired_cell.v : undefined);

        this.setState({
          cellToCheck: desired_value
        })


      //  console.log(sheet['!cols']);

///////////////////

// for(var R = range.s.r; R <= range.e.r; ++R) {
// for(var C = range.s.c; C <= range.e.c; ++C) {
// var cell_address = {1:1, 1:1};
// /* if an A1-style address is needed, encode the address */
// var cell_ref = XLSX.utils.encode_cell(cell_address);
// }
// }
console.log({s:{c:0, r:2}, e:{c:1, r:6}})

///////////////////




        /* DO SOMETHING WITH workbook HERE */
      };
      reader.readAsBinaryString(f);
    }
//}



    render() {
        return (
          <div className='mainBox'>
            <div className='image'></div>
            <input type="file" id="xlsxInput" onChange={this.handleFile}></input>
            <input className='inputToCheck' type='text' ref={input=>this.input=input} />
            <button className='button' onClick={this.handleClick}>Sprawdź, czy klient jest w bazie</button>
            <div className='client'>Klient, którego szukasz: {this.state.stringToCheck}</div>
            <div className='result'>Czy jest w bazie?&nbsp;
              {this.state.stringToCheck == this.state.cellToCheck && this.state.stringToCheck != '' ? 'TAK, znajdziesz go w pliku baza_klientow.xls'
                                                                  : this.state.cellToCheck == '' ? ''
                                                                  : this.state.stringToCheck == '' ? '' : 'NIE'}
            </div>
          </div>
        )
    }
};

// ukryty input
// fileloader na początku apki

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  gameOn: boolean=false;
  count:number=0;
  numberToGuess:number = ~~(Math.random()*(900)+100);
  
  constructor() { }
  
  ngOnInit(): void {
  }

  numberValidation(guessToValidate:string):number|void{
    try{
      let numGuessNum : number= Number(guessToValidate.trim())
      if(isNaN(numGuessNum) || String(numGuessNum).length != 3){
        throw new Error
      }else{
        return numGuessNum
      }
    }catch(e) {
      window.alert(`
      "${guessToValidate}" is not a three digit number.
      Please enter a three digit number!
      `)
    }
  }
  
 

  guessTracker(){
      if(this.count===9){
        window.alert("Last guess! Make it a good one!")
      }
    return this.count += 1
  }

  pico(num: number): String[]{
    let results: String[] = [];
    for(let i=0;i<3;i++){
      if(String(num)[i] === String(this.numberToGuess)[i]){
        results.push('Pico');
      }
    }

    return results
  }

  fermi(num: number): String[]{
    let results: String[] =[]
    for(let digit of String(num)){
        if(String(this.numberToGuess).indexOf(digit)>-1){
          results.push('Fermi')
        }
    }
    return results

  }

  gamePlay(guessToEvaluate:number):String[]{
    const fermiReturn: String[]=this.fermi(guessToEvaluate);
    const picoReturn: String[]=this.pico(guessToEvaluate);

    if(guessToEvaluate === this.numberToGuess){
      return ["You Win"]
    }else if(picoReturn.length>0){
      return picoReturn
    }else if(fermiReturn.length>0){
      return fermiReturn
    }else{
      return ["Bagels"]
    }

  }


  guessProcessed(numGuess:string){

    const validatedNumberGuess:number|void = this.numberValidation(numGuess);
    if(typeof validatedNumberGuess === 'number'){
      console.log(this.gamePlay(validatedNumberGuess), this.numberToGuess)
    };

    
  
  
  }

}

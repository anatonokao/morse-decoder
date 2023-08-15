const MORSE_TABLE = {
   '.-': 'a',
   '-...': 'b',
   '-.-.': 'c',
   '-..': 'd',
   '.': 'e',
   '..-.': 'f',
   '--.': 'g',
   '....': 'h',
   '..': 'i',
   '.---': 'j',
   '-.-': 'k',
   '.-..': 'l',
   '--': 'm',
   '-.': 'n',
   '---': 'o',
   '.--.': 'p',
   '--.-': 'q',
   '.-.': 'r',
   '...': 's',
   '-': 't',
   '..-': 'u',
   '...-': 'v',
   '.--': 'w',
   '-..-': 'x',
   '-.--': 'y',
   '--..': 'z',
   '.----': '1',
   '..---': '2',
   '...--': '3',
   '....-': '4',
   '.....': '5',
   '-....': '6',
   '--...': '7',
   '---..': '8',
   '----.': '9',
   '-----': '0',
};

function decode(expr) {
   const arrWordsDigital = expr.split('**********')

   const arrWord = arrWordsDigital.map(w => {
      let wordMorze = []

      for (let i = 0; i < w.length; (i += 10)) {
         let letterMorze = []
         let letterDigital = w.slice(i, i + 10)

         for (let i = 0; i < letterDigital.length; (i += 2)) {
            let morzeSymbol = letterDigital.slice(i, i + 2)
            morzeSymbol !== '00' && (morzeSymbol === '10' ? letterMorze.push('.') : letterMorze.push('-'))
         }

         letterMorze = letterMorze.join('')
         wordMorze.push(letterMorze)
      }

      const word = wordMorze.map(s => MORSE_TABLE[s] ).join('')
      return word
   })
   
   return arrWord.join(' ')
}



module.exports = {
   decode
}
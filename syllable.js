/// https://github.com/ye-kyaw-thu/sylbreak/blob/master/Javascript/resegment.js
const myConsonant = "\u1000-\u1021"; // "က-အ"

const enChar = "a-zA-Z0-9";

// "ဣဤဥဦဧဩဪဿ၌၍၏၀-၉၊။!-/:-@[-`{-~\s"
const otherChar = "\u1023\u1024\u1025\u1026\u1027\u1029\u102a\u103f\u104c\u104d\u104f\u1040-\u1049\u104a\u104b!-/:-@\\[-`\\{-~\\s";

const ssSymbol = "\u1039"; // တက္ကသိုလ် လိုမျိုး ပတ်ဆင့်တွေအတွက်

const ngaThat = "\u1004\u103a"; // _င်

const aThat = "\u103a"; // ်

// Regular expression pattern for Myanmar syllable breaking
// *** a consonant not after a subscript symbol AND a consonant is not
// followed by a-That character or a subscript symbol
const BREAK_PATTERN = new RegExp("((?!" + ssSymbol + ")[" + myConsonant + "](?![" + aThat + ssSymbol + "])" + "|[" + enChar + otherChar + "])", "mg");

function segment(text) {
	console.log("segment "+text);

	var outArray = text.replace(BREAK_PATTERN, "𝕊$1").split('𝕊')
	console.log("outArray");
	console.log(JSON.parse(JSON.stringify(outArray)));

	if (outArray.length > 0) {
		console.log("let's shift");
		/* The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array. */
		outArray.shift();
		//out.splice(0, 1);
	}
	console.log("retirm outArray");
	console.log(JSON.parse(JSON.stringify(outArray)));
	return outArray;
}

function segmentWithSeparator(text, separator) {
	console.log("segmentWithSeparator "+text+ " AND " + separator);
	if (separator === undefined) {
		separator = "|";
	}

	// ဒီ​ pattern အတိုင်း ကိုက်တာ တွေ့ရင် space / sperator နဲ့ ပေါင်းပြီး string ပဲ ပေးတာ ပြန်ပေးခိုင်းတာ
	// string ထဲမှာပဲ​ရှာပြီး ပြင်ပေးတာ
	console.log(BREAK_PATTERN);


	
	let text = "အောင်ကိုမန်း";
	let separator = "|";
	let pattern = /((?!္)[က-အ](?![်္])|[a-zA-Z0-9ဣဤဥဦဧဩဪဿ၌၍၏၀-၉၊။!-/:-@\[-`\{-~\s])/gm;
	let result = text.replace(pattern, separator + "$1");
	console.log(result);

	var result = text.replace(BREAK_PATTERN, separator + "$1");
	// replace using break pattern
	console.log("using breakpattern");
	console.log(JSON.parse(JSON.stringify(result)));

    result = result.replace("\u{1039}","\u{103A}");
	console.log("using အသတ်");
	console.log(JSON.parse(JSON.stringify(result)));
	// return word array
	console.log("word array");
    return result;
}

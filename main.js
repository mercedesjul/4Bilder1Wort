char_count_input = document.querySelector('#char_count');
possible_letters_input = document.querySelector('#possible_letters');
calc_input = document.querySelector('#calc');

calc_input.addEventListener('click', getPossibleWords);

function getPossibleWords(){
    count = char_count_input.value;
    possible_letters = possible_letters_input.value;
    possible_words = [];
    words.forEach(word => {
        if (word.match(`^[${possible_letters}]{${count}}$`)){
            possible_words.push(word);
        }
    });
    lettercounts = {}
    possible_letters.split("").forEach(l => {
        !lettercounts[l] ? lettercounts[l] = 1 : lettercounts[l]++;
    });
    console.log(possible_words)
    console.log(lettercounts)
    possible_words = possible_words.filter(word => {
        letter_count_ok = true;
        Object.keys(lettercounts).forEach(l => {
            if (lettercounts[l] < word.split("").filter(el => el == l).length) {
                console.log(`Del ${word}: ${lettercounts[l]} ${l}`)
                letter_count_ok = false;
            }
        });
        return letter_count_ok;
        
    });
    console.log(possible_words);
}


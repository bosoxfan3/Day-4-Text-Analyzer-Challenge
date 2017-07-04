function watchFormSubmission() {
    $('.js-text-form').submit(function(event) { 
        event.preventDefault();
        var words = $(this).find('#user-text').val();
        
      //find word count
        var totalWords = words.split(' ').length;
        
        //find unique word count
        var uniqueWordArray = [];
        var resultArray = words.split(' ');
        for (var i=0; i<resultArray.length; i++) {
        if (uniqueWordArray.includes(resultArray[i])) {
            continue;
        } else {
            uniqueWordArray.push(resultArray[i]);
        }
    }
        var uniqueWordCount = uniqueWordArray.length;

        //average word length
        var charCountNoStrings = words.replace(/\s/g, '').length;
        var avgWordLength = charCountNoStrings/totalWords;

        //put the new variables in the html
        $('dl').removeClass('hidden');
        var textReport = $('.text-report');
        $('.js-word-count').text(`${totalWords}`);
        $('.js-unique-word-count').text(`${uniqueWordCount}`);
        $('.js-avg-word-length').text(`${avgWordLength} characters`);
        console.log(words);
    })
};


watchFormSubmission();

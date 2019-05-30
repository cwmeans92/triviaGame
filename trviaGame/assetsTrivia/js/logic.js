$('#startButton').on('click',function(){
    game.start();
})
    var questions=[{
        question:"Adele performed the theme song to which James Bond film?",
        answers:["Casino Royale", "Quantum Of Solace", "Skyfall", "From Russia With Love"],
        correctAnswer:"Skyfall",
                },
    {
        question:"Who appears leftmost on the monument Mount Rushmore?",
        answers:["Theodore Rooselvelt", "Benjamin Franklin", "George Washington", "Thomas Jefferson"],
        correctAnswer:"Geroge Washington",
    },
    {
        question:"How many colors are there in a rainbow?",
        answers:["5","6","7","8"],
        correctAnswer:"7",
    },
    {
        question:"How many squares are on a chessboard?",
        answers:["64","48","60","56"],
        correctAnswer:"64",
    },
    {
        question:"What is the most expensive liquid by volume?",
        answers:["LSD","Gasoline","Printer Ink","Dom Perignon 2009"],
        correctAnswer:"Printer Ink",
    },
    {
        question:"What is Rum distilled from?",
        answers:["Grapes","Pears","Molasess","Sugar Cane"],
        correctAnswer:"Sugar Cane",
    },
    {
        question:"Which of these NBA franchies has never signed LeBron James?",
        answers:["Cleavland Cavaliers","Los Angeles Lakers","Miami Heat","Boston Celtics"],
        correctAnswer:"Boston Celtics",
    },
    {
        question:"Which animal first reached Earth's orbit alive?",
        answers:["Monkey","Human","Dog","Cat"],
        correctAnswer:"Dog",
    },
    {
        question:"Which country hosted the 2016 Summer Olympics?",
        answers:["Greece","Brazil","Spain","China"],
        correctAnswer:"Brazil",
    },
    {
        question:"Which of these cities is closest to London, UK?",
        answers:["Boston, MA","Atlanta, GA","New York, NY","Miami, FL"],
        correctAnswer:"Boston, MA",
    },
    
    ]
    
    
var game= {
    correct: 0,
    incorrect: 0,   
    counter: 10,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter==0) {
            console.log('Time Up NERD')
            game.done();
        }
    },
    start:function(){
        timer= setInterval(game.countdown,1000);
        $('#subWrapper').prepend('<h2>Time Remaining: <span id= "counter">100</span> Seconds <h2>');
        $('#startButton').remove()
        for (var i= 0; i< questions.length; i++){
            $('#subWrapper').append("<h2>"+questions[i].question+"</h2>")
            for (var j= 0; j<questions[i].answers.length;j++){
                $("#subWrapper").append("<input type='radio' name='question-"+i+"' value= '"+questions[i].answers[j]+"'>"+questions[i].answers[j])
            }   
        }},
        done = function() {
            $.each($('input[name= "question-0]":checked'),function(){
                if($(this).val()==questions[0].correctAnswer){
                    game.correct++;
                }else {
                    game.incorrect++;
                } 
                }
            )
            $.each($('input[name= "question-1]":checked'),function(){
                if($(this).val()==questions[1].correctAnswer){
                    game.correct++;
                }else {
                    game.incorrect++;
                } 
                }
            )
            $.each($('input[name= "question-2]":checked'),function(){
                if($(this).val()==questions[1].correctAnswer){
                    game.correct++;
                }else {
                    game.incorrect++;
                } 
                }
            )
            $.each($('input[name= "question-3]":checked'),function(){
                if($(this).val()==questions[1].correctAnswer){
                    game.correct++;
                }else {
                    game.incorrect++;
                } 
                }
            )
            $.each($('input[name= "question-4]":checked'),function(){
                if($(this).val()==questions[1].correctAnswer){
                    game.correct++;
                }else {
                    game.incorrect++;
                } 
                }
            )
            $.each($('input[name= "question-5]":checked'),function(){
                if($(this).val()==questions[1].correctAnswer){
                    game.correct++;
                }else {
                    game.incorrect++;
                } 
                }
            )
            $.each($('input[name= "question-6]":checked'),function(){
                if($(this).val()==questions[1].correctAnswer){
                    game.correct++;
                }else {
                    game.incorrect++;
                } 
                }
            )
            $.each($('input[name= "question-7]":checked'),function(){
                if($(this).val()==questions[1].correctAnswer){
                    game.correct++;
                }else {
                    game.incorrect++;
                } 
                }
            )
            $.each($('input[name= "question-8]":checked'),function(){
                if($(this).val()==questions[1].correctAnswer){
                    game.correct++;
                }else {
                    game.incorrect++;
                } 
                }
            )
            $.each($('input[name= "question-9]":checked'),function(){
                if($(this).val()==questions[1].correctAnswer){
                    game.correct++;
                }else {
                    game.incorrect++;
                } 
                }
            )
        this.result();
    },
            result: function(){
            clearInterval(timer);
            $("#subWrapper h2").remove()
    
            $('#subWrapper').html("<h2> All Done NERD </h2>")
            $('#subWrapper').append("<h3>Correct Answers:  "+this.correct+"</h3>")
            $('#subWrapper').append("<h3>IncorrectAnswers: "+this.incorrect+"</h3>")
            $('#subWrapper').append("<h3>Unanswered Questions: "+(questions.length-(this.incorrect+this.correct))+"</h3>")
    
    
        }
        
    }

    


     
    